// =====================================================================
// SKILLS · Holiday Spanish — app
// =====================================================================

// ---------- helpers ----------
function el(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    const v = attrs[k];
    if (v == null || v === false) continue;
    if (k === "class") e.className = v;
    else if (k === "html") e.innerHTML = v;
    else if (k === "style") e.setAttribute("style", v);
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? "" : v);
  }
  for (const c of kids.flat()) {
    if (c == null || c === false) continue;
    e.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(String(c)) : c);
  }
  return e;
}
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const uniq = a => [...new Set(a)];
const plain = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[¿¡.,!?;:«»"“”()]/g, " ").replace(/\s+/g, " ").trim();

// ---------- storage ----------
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let progress = store.get("skills_hs_progress", {});
let settings = Object.assign({ mode: "ve", gender: "f", address: "tu", name: "", theme: "auto", slow: false, sound: true, readMine: true, showEn: false,
  voice_ve: "", voice2_ve: "", voice_es: "", voice2_es: "" }, store.get("skills_hs_settings", {}));
const saveProgress = () => store.set("skills_hs_progress", progress);
const saveSettings = () => store.set("skills_hs_settings", settings);
const ES = () => settings.mode === "es";

// ---------- text: gender, name, Venezuela / Spain ----------
const learnerName = () => (settings.name || "").trim() || (settings.gender === "m" ? "Tom" : "Anna");
function T(s, gender) {
  if (!s) return s;
  const g = gender || settings.gender;
  return s.replace(/\{([^}/]*)\/([^}]*)\}/g, (m, f, mm) => g === "m" ? mm : f).replace(/\{N\}/g, learnerName());
}
const hasGender = s => /\{[^}]*\/[^}]*\}/.test(s || "");
function parseP(s) { const a = s.split("|"); return { ve: a[0], get en() { return T(a[1]); }, es: a[2] || null }; }
function parseW(s) { const a = s.split("|"); return { em: a[0], ve: a[1], en: a[2], es: a[3] || null }; }
const V = x => T(ES() && x.es ? x.es : x.ve);
const otherRaw = x => x.es ? (ES() ? x.ve : x.es) : null;
UNITS.forEach(u => { u.P = u.phrases.map(parseP); u.W = u.words.map(parseW); });
const START_P = START.phrases.map(parseP);
const LEVELS = [START].concat(UNITS);

// ---------- progress ----------
function best(lv, act) { return (progress[lv] && progress[lv][act]) || null; }
function record(lv, act, pts, stars) {
  progress[lv] = progress[lv] || {};
  const old = progress[lv][act];
  progress[lv][act] = { pts: Math.max(pts, old ? old.pts : 0), stars: Math.max(stars, old ? old.stars : 0) };
  saveProgress();
  return !!old && pts > old.pts;
}
function levelStars(L) { let s = 0; const acts = activitiesFor(L); acts.forEach(a => { const b = best(L.id, a.id); if (b) s += b.stars; }); return [s, acts.length * 3]; }
function levelDone(L) { return activitiesFor(L).every(a => best(L.id, a.id)); }
function totalStars() { return LEVELS.reduce((s, L) => s + levelStars(L)[0], 0); }

// ---------- theme ----------
const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
function applyTheme() { document.documentElement.setAttribute("data-theme", settings.theme === "auto" ? (mq && mq.matches ? "dark" : "light") : settings.theme); }
if (mq && mq.addEventListener) mq.addEventListener("change", applyTheme);
applyTheme();

let onVoices = null; // the settings screen redraws its voice lists when the browser's voices arrive

// =====================================================================
// SPEECH
// Everything goes through one queue. A sentence is only started when the previous one has
// completely finished (the browser's "end" event), so nothing is ever cut off.
// The queue is only cancelled when you leave a screen or press a 🔊 button outside a conversation.
// =====================================================================
const Speech = (() => {
  const ok = "speechSynthesis" in window;
  let voices = [], gen = 0, chain = Promise.resolve(), pending = 0;
  const live = new Set(); // keeps utterances alive (some browsers lose the "end" event otherwise)
  let wakeCtx = null, wakeAt = 0;

  function load() { if (ok) voices = speechSynthesis.getVoices().filter(v => /^es([-_]|$)/i.test(v.lang)); }
  if (ok) { load(); speechSynthesis.onvoiceschanged = () => { load(); if (typeof onVoices === "function") onVoices(); }; }

  const region = v => /es[-_]ES/i.test(v.lang) ? "es" : "ve";
  function score(v, want) {
    const L = v.lang.replace("_", "-"), n = v.name; let s = 0;
    if (want === "es") s += region(v) === "es" ? 60 : 10;
    else if (/es-VE/i.test(L)) s += 70;
    else if (/es-(CO|DO|PR|PA|CU)/i.test(L)) s += 55;
    else if (/es-(US|MX|419|XL|EC|PE|CL|AR|CR|GT|HN|NI|SV|UY|PY|BO)/i.test(L)) s += 45;
    else if (region(v) === "es") s += 5; else s += 30;
    if (/natural|neural|online|enhanced|premium|siri/i.test(n)) s += 30;
    if (/google/i.test(n)) s += 12;
    if (/Microsoft (Helena|Laura|Pablo|Sabina|Raul)\b/i.test(n) && !/natural|online/i.test(n)) s -= 10;
    if (/Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox/i.test(n)) s -= 100;
    return s;
  }
  const list = want => voices.filter(v => score(v, want) > -50).sort((a, b) => score(b, want) - score(a, want));
  function main() { const m = settings.mode, L = list(m); return L.find(v => v.name === settings["voice_" + m]) || L[0] || null; }
  function second() {
    const m = settings.mode, L = list(m), a = main();
    return L.find(v => v.name === settings["voice2_" + m]) || L.find(v => v !== a && a && region(v) === region(a)) || L.find(v => v !== a) || a;
  }
  function regionVoice(r) { const v = list(r)[0]; return v && region(v) === r ? v : null; }

  // split into sentences: each one gets its own utterance and must end before the next starts
  function split(t) { return (String(t).match(/[^.!?…]+[.!?…]+["”»)]*|[^.!?…]+$/g) || [t]).map(s => s.trim()).filter(Boolean); }

  function one(text, v, rate, pitch, my) {
    return new Promise(async res => {
      if (!ok || my !== gen) return res();
      // Windows: right after the sound wakes up, wait a moment so the first word isn't swallowed
      if (wakeCtx) { const w = 550 - (Date.now() - wakeAt); if (w > 0) await sleep(w); }
      if (my !== gen) return res();
      const u = new SpeechSynthesisUtterance(text);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = ES() ? "es-ES" : "es-VE";
      u.rate = rate; u.pitch = pitch;
      live.add(u);
      let fin = false; const t0 = Date.now();
      const est = 1500 + text.length * 85 / rate;
      const done = () => { if (fin) return; fin = true; live.delete(u); clearInterval(watch); clearInterval(keep); res(); };
      u.onend = done; u.onerror = done;
      // safety net only for devices that never report the end: it waits until the voice is really silent
      const watch = setInterval(() => {
        if (my !== gen) return done();
        const t = Date.now() - t0;
        if (t > est && !speechSynthesis.speaking && !speechSynthesis.pending) done();
        else if (t > est * 3 + 8000) done();
      }, 300);
      // desktop Chrome stops online voices after ~15 s: keep them going
      const keep = (v && !v.localService && !/Android|iPhone|iPad/i.test(navigator.userAgent))
        ? setInterval(() => { if (speechSynthesis.speaking && !speechSynthesis.paused) { speechSynthesis.pause(); speechSynthesis.resume(); } }, 9000) : 0;
      try { speechSynthesis.speak(u); } catch (e) { done(); }
    });
  }

  async function run(text, o, my) {
    const v = o.region ? (regionVoice(o.region) || main()) : o.role === "me" ? second() : main();
    const rate = (o.slow || settings.slow) ? 0.68 : 0.9;
    const pitch = (o.role === "me" && v === main()) ? 1.18 : 1;
    if (o.onstart) o.onstart();
    const parts = split(text);
    for (let i = 0; i < parts.length; i++) {
      if (my !== gen) break;
      await one(parts[i], v, rate, pitch, my);
      if (i < parts.length - 1) await sleep(140);
    }
    if (o.onend) o.onend();
  }

  // add to the end of the queue — never interrupts
  function say(text, o) {
    o = o || {};
    if (!text) return Promise.resolve();
    const my = gen; pending++;
    const p = chain.then(() => (my === gen ? run(text, o, my) : null)).catch(() => {}).then(() => { if (my === gen) pending = Math.max(0, pending - 1); });
    chain = p;
    return p;
  }
  // stop everything (used when leaving a screen)
  function stop() { gen++; pending = 0; chain = Promise.resolve(); if (ok) try { speechSynthesis.cancel(); } catch (e) {} }
  // a 🔊 button: start this now
  function play(text, o) { stop(); return say(text, o); }
  const idle = () => chain;
  const busy = () => pending > 0;

  function wake() {
    if (wakeCtx || !/Windows/i.test(navigator.userAgent)) return;
    try {
      const ac = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ac.createOscillator(), g = ac.createGain(); g.gain.value = 0.0001;
      osc.connect(g); g.connect(ac.destination); osc.start();
      wakeCtx = ac; wakeAt = Date.now();
    } catch (e) {}
  }
  document.addEventListener("pointerdown", wake, true);
  document.addEventListener("keydown", wake, true);
  document.addEventListener("visibilitychange", () => { if (wakeCtx && !document.hidden && wakeCtx.state === "suspended") wakeCtx.resume(); });

  return { ok, say, play, stop, idle, busy, list, main, second, regionVoice, region, all: () => voices };
})();

function sayBtns(text, region) {
  return el("div", { class: "smallbtns", style: "margin-top:10px" },
    el("button", { class: "say", onclick: e => { e.stopPropagation(); Speech.play(text, { region }); } }, "🔊 Listen"),
    el("button", { class: "say slow", onclick: e => { e.stopPropagation(); Speech.play(text, { region, slow: true }); } }, "🐢 Slowly"));
}

// ---------- sound effects ----------
let actx = null;
function sfx(kind) {
  if (!settings.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const notes = { good: [660, 990], bad: [220, 160], win: [523, 659, 784, 1047] }[kind] || [440];
    notes.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = kind === "bad" ? "sawtooth" : "triangle"; o.frequency.value = f;
      const t = actx.currentTime + i * (kind === "win" ? 0.12 : 0.09);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(kind === "bad" ? 0.06 : 0.15, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + 0.2);
    });
  } catch (e) {}
}

// ---------- toast, confetti, stars ----------
const GOOD = () => {
  const cool = ES() ? "¡Genial! 🎉" : "¡Chévere! 🎉";
  const crack = settings.address === "usted" ? "¡Usted es un crack! ⭐" : "¡Eres un crack! ⭐";
  return [cool, "¡Muy bien! ✅", crack, "¡Así es! 🙌", "¡Excelente! 🌴", ES() ? "¡Perfecto! 💥" : "¡Lo máximo! 💥"];
};
const BAD = () => ["¡Uy! 🙈", "¡Casi! 😅", settings.address === "usted" ? "Inténtelo otra vez 👀" : "Inténtalo otra vez 👀", "Hmm, no 🤨"];
let toastT = null;
function toast(msg, kind, ms) {
  let t = document.querySelector(".toast");
  if (!t) { t = el("div", { class: "toast", role: "status" }); document.body.appendChild(t); }
  t.textContent = msg; t.className = "toast show " + (kind || "");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), ms || 1800);
}
function hideToast() { const t = document.querySelector(".toast"); if (t) t.classList.remove("show"); }
function confetti() {
  const cols = ["#D7372B", "#F2B705", "#2C6FB7", "#4FAE76", "#fff"];
  for (let i = 0; i < 70; i++) {
    const c = el("div", { class: "conf", style: `left:${Math.random() * 100}vw;background:${pick(cols)};animation-duration:${1.6 + Math.random() * 1.6}s;animation-delay:${Math.random() * .4}s;border-radius:${Math.random() > .5 ? "50%" : "2px"}` });
    document.body.appendChild(c); setTimeout(() => c.remove(), 3800);
  }
}
function starsEl(n, max) { const s = el("span", { class: "stars" }); for (let i = 0; i < (max || 3); i++) s.appendChild(el("span", { class: i < n ? "" : "off" }, "★")); return s; }
const starsFromRatio = r => r >= 0.9 ? 3 : r >= 0.7 ? 2 : r >= 0.35 ? 1 : 0;

// ---------- router ----------
const app = () => document.getElementById("app");
let cleanup = null;
function go(fn) {
  if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
  Speech.stop(); hideToast(); onVoices = null;
  const root = app(); root.innerHTML = ""; fn(root); window.scrollTo(0, 0);
}
const scrollEnd = () => setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 60);

// =====================================================================
// ACTIVITIES PER UNIT
// =====================================================================
function activitiesFor(L) {
  if (L.id === "start") return [
    { id: "learn", type: "learn", name: "Sounds and basics", icon: "📖", intro: "Six short steps for the sounds of Spanish, then the basics: un / una, the alphabet, words you already know, numbers, days, months, colours and the body." },
    { id: "pairs", type: "quiz", name: "Hear it, find it", icon: "👂", intro: "pero or perro? caro or carro? Listen and tap the word you hear.", make: mkMinimal },
    { id: "stress", type: "quiz", name: "Where's the stress?", icon: "🎯", intro: "Tap the syllable that is stressed. Remember: a written accent always wins!", make: mkStress },
    { id: "articles", type: "quiz", name: "un or una? el or la?", icon: "🅰️", intro: "Every Spanish noun is masculine or feminine. Choose the right little word.", make: mkArticles },
    { id: "abc", type: "quiz", name: "El alfabeto", icon: "🔠", intro: "Listen to the name of the letter and tap it. Careful with be and ve, ese and zeta!", make: mkAlphabet },
    { id: "nums", type: "quiz", name: "Números 0 to 20", icon: "🔢", intro: "Listen to the number and tap the right one.", make: mkNumbers },
    { id: "order", type: "quiz", name: "Days and months", icon: "📅", intro: "Put the days of the week and the months of the year in order.", make: mkDaysMonths },
    { id: "memory", type: "memory", name: "Colours and the body", icon: "🃏", intro: "Find the pairs: the Spanish word and its picture.", make: mkMemStart },
    { id: "known", type: "quiz", name: "Words you already know", icon: "🌍", intro: "hotel, taxi, chocolate... Listen and tap the picture.", make: mkKnown },
    { id: "speed", type: "quiz", name: "Venezuelan speed", icon: "⚡", intro: "Venezuelans drop the final s and the d in -ado. Listen to the fast version and find the careful one. You only need to recognise it!", make: mkSpeed },
    { id: "cmp", type: "quiz", name: "¿De aquí o de allá?", icon: "🇻🇪", intro: "Venezuela or Spain? Listen to the s and the th, and learn which words change.", make: mkCmpStart }
  ];
  const c = L.chat;
  return [
    { id: "learn", type: "learn", name: "Words and phrases", icon: "📖", intro: "Listen to the phrases and words of this unit. Tap 🔊 to hear them, 🐢 to hear them slowly." },
    { id: "chat", type: "chat", name: "Conversation with " + c.npc, icon: "💬", intro: (ES() ? c.sceneEs : c.scene) + " Choose the right answer. Every sentence is read to the end before the next one starts." },
    { id: "listen", type: "quiz", name: "Listen and choose", icon: "🎧", intro: "Listen to the Spanish and tap what it means.", make: mkListen },
    { id: "meaning", type: "quiz", name: "What's the Spanish?", icon: "🔤", intro: "Read the English and find the Spanish.", make: mkMeaning },
    { id: "build", type: "quiz", name: "Build the sentence", icon: "🧩", intro: "The words are mixed up. Tap them in the right order.", make: mkBuild },
    { id: "box", type: "quiz", name: "Words in a box", icon: "📦", intro: "Choose a word from the box to complete each sentence. You use each word once.", make: mkBox },
    { id: "gram", type: "quiz", name: L.gq.name, icon: "✏️", intro: "Hidden grammar: " + L.gram + ". Choose the right word.", make: mkGram },
    { id: "memory", type: "memory", name: "Memory", icon: "🃏", intro: "Turn over two cards. Find the Spanish word and its English partner.", make: mkMemUnit },
    { id: "speak", type: "speak", name: "Say it!", icon: "🎤", intro: "Listen, then say the sentence yourself. If your browser can listen, it checks what you said." },
    { id: "cmp", type: "quiz", name: "¿De aquí o de allá?", icon: "🇪🇸", intro: "Venezuela or Spain? Six quick questions about how the two countries say things.", make: mkCmp }
  ];
}

// ---------- item makers ----------
const opt = (t, ok, extra) => Object.assign({ t, ok: !!ok }, extra || {});
function fillOpts(right, pool, n) { return shuffle([right].concat(shuffle(uniq(pool.filter(x => x !== right))).slice(0, n - 1))); }

function phrasePool(L) {
  // this unit's phrases, plus neighbours for extra wrong options
  const near = UNITS.filter(u => Math.abs(u.n - L.n) <= 2 && u !== L).flatMap(u => u.P);
  return { own: L.P, near };
}
function mkListen(L) {
  const { own, near } = phrasePool(L);
  return shuffle(own).slice(0, 8).map(p => {
    const ens = uniq(own.concat(near).map(x => x.en));
    return { label: "Listen", em: "🎧", q: "What does it mean?", say: V(p), list: true,
      opts: fillOpts(p.en, ens, 4).map(e => opt(e, e === p.en)) };
  });
}
function mkMeaning(L) {
  const { own, near } = phrasePool(L);
  return shuffle(own).slice(0, 8).map(p => {
    const right = V(p), pool = uniq(own.concat(near).map(V));
    return { label: "Find the Spanish", q: p.en, list: true, after: right,
      opts: fillOpts(right, pool, 4).map(s => opt(s, s === right)) };
  });
}
const tokens = s => s.replace(/[¿¡«»"“”]/g, "").replace(/[.,!?;:…]/g, "").split(/\s+/).filter(Boolean);
function mkBuild(L) {
  const ok = L.P.filter(p => { const n = tokens(V(p)).length; return n >= 3 && n <= 11; });
  return shuffle(ok).slice(0, 6).map(p => ({ kind: "build", label: "Build the sentence", q: p.en, target: V(p) }));
}
function mkBox(L) {
  const used = new Set(), box = [], items = [];
  for (const p of shuffle(L.P)) {
    if (items.length >= 6) break;
    const s = V(p), toks = s.split(" ");
    let bestI = -1, bestW = "";
    toks.forEach((tk, i) => {
      const core = tk.replace(/^[¿¡«"]+|[.,!?;:…»"]+$/g, "");
      if (core.length >= 3 && !/\d/.test(core) && core.length > bestW.length && !box.some(b => b.toLowerCase() === core.toLowerCase())) { bestI = i; bestW = core; }
    });
    if (bestI < 0 || toks.length < 3) continue;
    box.push(bestW);
    const gapped = toks.map((tk, i) => i === bestI ? tk.replace(bestW, "___") : tk).join(" ");
    items.push({ gapped, a: bestW, full: s, en: p.en });
  }
  const boxSorted = shuffle(box);
  return items.map(it => ({ label: "Words in a box", q: it.gapped, qs: it.en, after: it.full,
    optsFn: () => boxSorted.map(w => opt(w, w === it.a, { used: used.has(w) })), onCorrect: () => used.add(it.a) }));
}
function mkGram(L) {
  const items = L.gq.items.filter(g => !g.only || g.only === settings.mode);
  return shuffle(items).slice(0, 8).map(g => ({ label: L.gq.name, q: T(g.q), qs: T(g.en), after: T(g.q.replace("___", g.a)),
    opts: shuffle([g.a].concat(g.wrong)).map(w => opt(T(w), w === g.a)) }));
}
function mkMemUnit(L) {
  return shuffle(L.W).slice(0, 6).map(w => ({ a: { t: V(w), say: V(w) }, b: { t: w.em + " " + w.en, say: V(w) } }));
}

// ---------- Venezuela or Spain ----------
const FLAGS = [opt("🇻🇪 Venezuela", false, { val: "ve" }), opt("🇪🇸 Spain", false, { val: "es" })];
function whoItem(t, a) {
  return { label: "Who says it?", q: t, qs: "Venezuela or Spain?", after: t, afterRegion: a,
    opts: FLAGS.map(f => Object.assign({}, f, { ok: f.val === a })) };
}
function switchItem(t, to, a) {
  return { kind: "build", label: to === "es" ? "Switch it to Spain 🇪🇸" : "Switch it to Venezuela 🇻🇪", q: t, qs: "Build the " + (to === "es" ? "Spanish (Spain)" : "Venezuelan") + " version", target: a, region: to };
}
function pairItem(ve, es, en, wrongs, from) {
  const toEs = from !== "es";
  const right = toEs ? es : ve;
  const pool = wrongs || VEES.map(x => toEs ? x[1] : x[0]);
  return { label: "Match the pair", q: toEs ? "🇻🇪 " + ve : "🇪🇸 " + es, qs: (toEs ? "In Spain they say..." : "In Venezuela they say...") + (en ? "  (" + en + ")" : ""),
    after: right, afterRegion: toEs ? "es" : "ve", list: true, opts: fillOpts(right, pool, 3).map(s => opt(s, s === right)) };
}
function ffItem(f) { return { label: "False friend", em: "😳", q: f.q, list: true, explain: "💡 " + f.why, opts: shuffle([f.a].concat(f.wrong)).map(s => opt(s, s === f.a)) }; }
function vosoItem(v) { return { label: "van or vais?", q: v.q, qs: v.en, after: v.q.replace(/^\S+\s/, "").replace("___", v.a), afterRegion: v.q.startsWith("🇪🇸") ? "es" : "ve", opts: shuffle([v.a].concat(v.wrong)).map(s => opt(s, s === v.a)) }; }
function perfItem(p, country) {
  const r = country === "es" ? p.es : p.ve, w = country === "es" ? p.esWrong : p.veWrong;
  return { label: country === "es" ? "Hoy comí or hoy he comido? 🇪🇸" : "Hoy comí or hoy he comido? 🇻🇪", q: p.en, qs: country === "es" ? "Which is right in Spain?" : "Which is right in Venezuela?",
    list: true, after: r, afterRegion: country, explain: p.note ? "💡 " + p.note : null, opts: shuffle([r, w]).map(s => opt(s, s === r)) };
}
function diffsFor(L) {
  const d = [];
  L.P.forEach(p => { if (p.es && p.es !== p.ve) d.push({ ve: T(p.ve), es: T(p.es) }); });
  L.chat.lines.forEach(l => { if (l.sp && l.sp.n) d.push({ ve: T(l.s), es: T(l.sp.n) }); if (l.sp && l.sp.a) d.push({ ve: T(l.a), es: T(l.sp.a) }); });
  return d;
}
function sthItem() {
  const w = pick(["cerveza", "gracias", "zapato", "cinco", "plaza", "azul", "cielo", "cena", "dulce", "Zaragoza", "cocina", "piscina"]);
  const r = pick(["ve", "es"]);
  return { label: "Listen: s or th?", em: "👂", q: w, qs: "Is this Venezuela (s) or Spain (th)?", say: w, region: r,
    opts: [opt("🇻🇪 s — Venezuela", r === "ve"), opt("🇪🇸 th — Spain", r === "es")] };
}
const bothVoices = () => !!(Speech.regionVoice("ve") && Speech.regionVoice("es"));

function mkCmp(L) {
  if (L.cmp) return L.cmp.map(c => c.k === "who" ? whoItem(c.t, c.a) : c.k === "switch" ? switchItem(c.t, c.to, c.a)
    : c.k === "pair" ? pairItem(c.t, c.a, null, c.wrong.concat([c.a]), c.from) : ffItem(c));
  let diffs = diffsFor(L);
  for (let n = L.n - 1; diffs.length < 4 && n >= 1; n--) diffs = diffs.concat(diffsFor(UNITS[n - 1]));
  if (diffs.length < 2) diffs = diffs.concat(VEES.slice(0, 6).map(x => ({ ve: x[0], es: x[1] })));
  diffs = shuffle(diffs);
  let pairs = VEES.filter(x => x[3] === L.n); if (pairs.length < 2) pairs = pairs.concat(shuffle(VEES.filter(x => x[3] <= Math.max(L.n, 5))));
  pairs = shuffle(uniq(pairs));
  const ffs = shuffle(FALSE_FRIENDS.filter(f => f.u <= L.n));
  let di = 0, pi = 0, fi = 0;
  const who = () => { const d = diffs[di++ % diffs.length], a = pick(["ve", "es"]); return whoItem(a === "ve" ? d.ve : d.es, a); };
  const sw = to => { const d = diffs[di++ % diffs.length]; to = to || pick(["ve", "es"]); return switchItem(to === "es" ? d.ve : d.es, to, to === "es" ? d.es : d.ve); };
  const pair = () => { const p = pairs[pi++ % pairs.length]; return pairItem(p[0], p[1], p[2], null, pick(["ve", "es"])); };
  const ff = () => ffs.length ? ffItem(ffs[fi++ % ffs.length]) : pair();
  const voso = () => vosoItem(pick(VOSO));
  const perf = c => perfItem(pick(PERF), c || "es");
  const r = L.round;
  let items;
  if (r === 1) items = [who(), who(), pair(), who(), pair(), bothVoices() ? sthItem() : pair()];
  else if (r === 2) items = [who(), sw(), voso(), who(), sw(), pair()];
  else if (r === 3) items = [who(), perf("es"), sw("es"), perf("es"), ff(), pair()];
  else items = [who(), sw(), perf(pick(["ve", "es"])), ff(), ff(), pick([voso, pair])()];
  return items;
}

// ---------- Start makers ----------
function mkMinimal() {
  return shuffle(START.minimal).slice(0, 10).map(m => {
    const i = Math.random() < .5 ? 0 : 1;
    return { label: "Hear it, find it", em: "👂", q: "Which word do you hear?", say: m[i], opts: [opt(m[0], i === 0, { small: m[2] }), opt(m[1], i === 1, { small: m[3] })] };
  });
}
function mkStress() {
  return shuffle(START.stress).slice(0, 10).map(s => {
    const syl = s[0].split("|"), word = syl.join("");
    return { label: "Where's the stress?", q: syl.join(" · "), qs: "Tap the stressed syllable", say: word, after: word, cols: syl.length,
      opts: syl.map((x, i) => opt(x, i === s[1])) };
  });
}
function mkArticles() {
  return shuffle(START.articles.map(parseW)).slice(0, 10).map(w => {
    const s = V(w), art = s.split(" ")[0], noun = s.slice(art.length + 1);
    const set = ["un", "una"].includes(art) ? ["un", "una"] : ["el", "la"].includes(art) ? ["el", "la"] : ["los", "las"];
    return { label: "un or una? el or la?", em: w.em, q: "___ " + noun, qs: w.en, after: s, opts: set.map(a => opt(a, a === art)) };
  });
}
function mkAlphabet() {
  const groups = [["B", "V"], ["C", "S", "Z"], ["G", "J", "H"], ["E", "I"], ["Y", "I", "LL"], ["R", "RR"], ["Ñ", "N"], ["K", "Q", "C"]];
  return shuffle(START.alphabet).slice(0, 10).map(l => {
    const g = groups.find(x => x.includes(l[0])) || [];
    const pool = uniq(g.concat(shuffle(START.alphabet.map(x => x[0])))).filter(x => START.alphabet.some(a => a[0] === x));
    return { label: "El alfabeto", em: "🔠", q: "Which letter?", say: l[1], opts: fillOpts(l[0], pool.slice(0, 6), 4).map(x => opt(x, x === l[0])) };
  });
}
function mkNumbers() {
  return shuffle(START.numbers.map((w, i) => [i, w])).slice(0, 12).map(([n, w]) => {
    const pool = [n - 1, n + 1, n + 10, n - 10, (n + 7) % 21, (n + 3) % 21].filter(x => x >= 0 && x <= 20).map(String);
    return { label: "Números", em: "🔢", q: "Which number?", say: w, after: w, opts: fillOpts(String(n), pool, 4).map(x => opt(x, x === String(n))) };
  });
}
function mkDaysMonths() {
  return [{ kind: "build", label: "Los días de la semana", q: "Put the days in order, starting with Monday", target: START.days.map(d => d[0]).join(" ") },
    { kind: "build", label: "Los meses del año", q: "Put the months in order, starting with January", target: START.months.slice(0, 6).map(d => d[0]).join(" ") },
    { kind: "build", label: "Los meses del año", q: "And the rest: from July to December", target: START.months.slice(6).map(d => d[0]).join(" ") }];
}
function mkMemStart() {
  return shuffle(START.colours.concat(START.body).map(parseW)).slice(0, 6).map(w => ({ a: { t: V(w), say: V(w) }, b: { pic: w.em, say: V(w), t: w.en } }));
}
function mkKnown() {
  const ws = START.known.map(parseW);
  return shuffle(ws).slice(0, 8).map(w => ({ label: "Words you already know", q: "Which picture?", say: w.ve, after: w.ve,
    opts: fillOpts(w.em, ws.map(x => x.em), 4).map(e => opt("", e === w.em, { emo: e })) }));
}
function mkSpeed() {
  const S = START.speed;
  return shuffle(S).map(s => ({ label: "Venezuelan speed", em: "⚡", q: "You hear the fast version. What is it in careful Spanish?", say: s[2], after: s[0], list: true,
    explain: "Fast: " + s[1] + "  →  Careful: " + s[0], opts: fillOpts(s[0], S.map(x => x[0]), 3).map(x => opt(x, x === s[0])) }));
}
function mkCmpStart() {
  if (bothVoices()) return [sthItem(), sthItem(), sthItem(), pairItem("el carro", "el coche", "car"), sthItem(), pairItem("el jugo", "el zumo", "juice")];
  return [pairItem("el carro", "el coche", "car"), pairItem("el jugo", "el zumo", "juice"), whoItem("¿Qué más? ¿Cómo estás?", "ve"), whoItem("¿Qué tal? ¿Cómo estás?", "es"),
    pairItem("la franela", "la camiseta", "T-shirt"), pairItem("el celular", "el móvil", "mobile phone")];
}

// =====================================================================
// SCREENS
// =====================================================================
function topbar(root) {
  root.append(el("div", { class: "topbar" },
    el("button", { class: "logo-badge", "aria-label": "Home", onclick: () => go(homeScreen) }, el("img", { src: "logo.webp", alt: "Holiday Spanish" })),
    el("div", { class: "spacer" }),
    el("span", { class: "pill", title: "Stars" }, "⭐ " + totalStars()),
    el("button", { class: "iconbtn", "aria-label": "Back of the book", onclick: () => go(bookScreen) }, "📚"),
    el("button", { class: "iconbtn", "aria-label": "Settings", onclick: () => go(settingsScreen) }, "⚙️")));
}

function homeScreen(root) {
  topbar(root);
  root.append(el("div", { class: "hero" },
    el("h1", null, "Holiday Spanish"),
    el("p", null, ES() ? "Spanish for your holiday — Spain mode" : "Spanish for your holiday in Venezuela"),
    el("div", { class: "chips" },
      el("span", { class: "motto" }, "💛 Connection over perfection"),
      el("button", { class: "modechip", onclick: () => go(settingsScreen) }, ES() ? "🇪🇸 Spain mode" : "🇻🇪 Venezuela mode"))));

  // build map items: start, then 4 rounds of 10 units with a banner before each
  const items = [{ L: START }];
  ROUNDS.forEach((R, ri) => { items.push({ banner: R }); UNITS.slice(ri * 10, ri * 10 + 10).forEach(u => items.push({ L: u })); });
  const xs = [50, 74, 50, 26];
  let y = 20, k = 0; const nodes = [];
  const map = el("div", { class: "map" });
  const current = LEVELS.find(L => !levelDone(L)) || UNITS[UNITS.length - 1];
  items.forEach(it => {
    if (it.banner) {
      const R = it.banner;
      map.append(el("div", { class: "banner", style: `top:${y}px` }, el("div", { class: "rt" }, `Round ${R.n} · units ${R.n * 10 - 9} to ${R.n * 10}`),
        el("div", { class: "rn" }, R.name + " · " + R.es), el("div", { class: "rc" }, R.can)));
      y += 125; return;
    }
    const L = it.L, x = xs[k++ % 4], [s, m] = levelStars(L), done = levelDone(L);
    const title = L.id === "start" ? "Start" : CHAPTERS[L.ch][0];
    const icon = L.id === "start" ? "🔤" : CHAPTERS[L.ch][2];
    const node = el("div", { class: "node" + (done ? " done" : "") + (L === current ? " current" : ""), style: `left:${x}%;top:${y}px` },
      el("button", { class: "disc", "aria-label": (L.id === "start" ? "Start" : "Unit " + L.n) + ": " + title, onclick: () => go(r => levelScreen(r, L)) },
        el("span", { class: "num" }, L.id === "start" ? "S" : String(L.n)), icon),
      el("div", null, el("span", { class: "lbl" }, title)),
      el("span", { class: "sub" }, `★ ${s}/${m}`));
    nodes.push({ x, y: y + 40, L });
    map.append(node);
    y += 128;
  });
  map.style.height = (y + 20) + "px";
  // dotted path
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg"); svg.setAttribute("class", "path"); svg.setAttribute("viewBox", `0 0 100 ${y + 20}`); svg.setAttribute("preserveAspectRatio", "none");
  const path = document.createElementNS(ns, "polyline");
  path.setAttribute("points", nodes.map(n => n.x + "," + n.y).join(" "));
  path.setAttribute("fill", "none"); path.setAttribute("stroke", "var(--line)"); path.setAttribute("stroke-width", "5"); path.setAttribute("stroke-dasharray", "2 9");
  path.setAttribute("stroke-linecap", "round"); path.setAttribute("vector-effect", "non-scaling-stroke");
  svg.appendChild(path); map.prepend(svg);
  // the brain runs to the unit you're on
  const cur = nodes.find(n => n.L === current);
  if (cur) map.append(el("div", { class: "runner", style: `left:calc(${cur.x}% ${cur.x >= 50 ? "- 115px" : "+ 50px"});top:${cur.y - 60}px` }, el("img", { src: "logo.webp", alt: "" })));
  root.append(map);
  root.append(el("div", { class: "foot" }, "SKILLS · Holiday Spanish (Venezuela) · Start + 40 units"));
  if (cur && cur.L !== START) setTimeout(() => window.scrollTo({ top: Math.max(0, cur.y - 160), behavior: "smooth" }), 250);
}

function levelScreen(root, L) {
  topbar(root);
  const isStart = L.id === "start";
  const head = el("div", { class: "lvhead" },
    el("span", { class: "tag" }, isStart ? "Start" : `Round ${L.round} · Unit ${L.n}`),
    el("h2", null, isStart ? L.title : CHAPTERS[L.ch][2] + " " + CHAPTERS[L.ch][0]),
    el("p", { class: "es" }, isStart ? L.es : CHAPTERS[L.ch][1] + " — " + L.sit));
  if (isStart) head.append(el("p", { class: "intro" }, L.intro));
  else head.append(el("div", { class: "gramchip" }, el("b", null, "Hidden grammar: "), L.gram));
  root.append(head);
  const acts = el("div", { class: "acts" });
  activitiesFor(L).forEach(a => {
    const b = best(L.id, a.id);
    acts.append(el("button", { class: "act", onclick: () => go(r => activityScreen(r, L, a)) },
      el("div", { class: "ic" }, a.icon),
      el("div", null, el("div", { class: "nm" }, a.name), el("div", { class: "meta" }, b ? [starsEl(b.stars), " " + b.pts + " points"] : "Not played yet"))));
  });
  root.append(acts);
  const i = LEVELS.indexOf(L);
  root.append(el("div", { class: "navrow" },
    i > 0 ? el("button", { class: "bigbtn ghost", onclick: () => go(r => levelScreen(r, LEVELS[i - 1])) }, "← " + (i - 1 === 0 ? "Start" : "Unit " + (i - 1))) : null,
    el("button", { class: "bigbtn ghost", onclick: () => go(homeScreen) }, "🗺️ Map"),
    i < LEVELS.length - 1 ? el("button", { class: "bigbtn ghost", onclick: () => go(r => levelScreen(r, LEVELS[i + 1])) }, "Unit " + (i + 1) + " →") : null));
}

function activityScreen(root, L, a) {
  const bar = el("div", { class: "prog" }, el("div"));
  const hud = el("div", { class: "hud" });
  root.append(el("div", { class: "shell" },
    el("div", { class: "shellbar" }, el("button", { class: "iconbtn", "aria-label": "Close", onclick: () => go(r => levelScreen(r, L)) }, "✕"), bar, hud),
    el("div", { class: "body" })));
  const body = root.querySelector(".body");
  body.append(el("div", { class: "introcard" },
    el("div", { class: "big" }, a.icon), el("h3", null, a.name), el("p", null, a.intro),
    el("button", { class: "bigbtn red", style: "width:100%;margin:10px 0 0", onclick: start }, "¡Vamos! Start")));
  let alive = true; cleanup = () => { alive = false; };
  const api = {
    progress: r => { bar.firstChild.style.width = Math.round(r * 100) + "%"; },
    hud: t => { hud.textContent = t; },
    finish: (pts, stars) => { if (alive) go(r => resultScreen(r, L, a, pts, stars)); },
    alive: () => alive
  };
  function start() { body.innerHTML = ""; ENGINES[a.type](body, a, L, api); }
}

function resultScreen(root, L, a, pts, stars) {
  const better = record(L.id, a.id, pts, stars);
  if (stars >= 2) { confetti(); sfx("win"); }
  const acts = activitiesFor(L), i = acts.findIndex(x => x.id === a.id), next = acts[i + 1];
  const big = el("div", { class: "bigstars" }); for (let k = 0; k < 3; k++) big.append(el("span", { class: k < stars ? "" : "off" }, "★"));
  const msg = stars === 3 ? (ES() ? "¡Genial!" : "¡Chévere!") : stars === 2 ? "¡Muy bien!" : stars === 1 ? "¡Bien! Practice makes perfect." : "Try again — connection over perfection!";
  root.append(el("div", { class: "result" }, big, el("h2", null, msg), el("div", { class: "pts" }, pts + " points"), better ? el("p", null, "🎉 New best score!") : null),
    next ? el("button", { class: "bigbtn red", onclick: () => go(r => activityScreen(r, L, next)) }, "Next: " + next.name + " ➜")
      : (LEVELS[LEVELS.indexOf(L) + 1] ? el("button", { class: "bigbtn red", onclick: () => go(r => levelScreen(r, LEVELS[LEVELS.indexOf(L) + 1])) }, "Next unit ➜") : null),
    el("button", { class: "bigbtn ghost", onclick: () => go(r => activityScreen(r, L, a)) }, "🔁 Play again"),
    el("button", { class: "bigbtn ghost", onclick: () => go(r => levelScreen(r, L)) }, "Back to the unit"));
}

// =====================================================================
// ENGINES
// =====================================================================
const ENGINES = {};

/* ---------- LEARN ---------- */
function phraseRow(p, emoji, sayOverride) {
  const raw = ES() && p.es ? p.es : p.ve, text = T(raw), oth = otherRaw(p), sayText = sayOverride || text;
  const tx = el("div", { class: "tx" }, el("div", { class: "sp1" }, text), el("div", { class: "ent" }, p.en));
  if (oth && T(oth) !== text) tx.append(el("div", { class: "var" }, (ES() ? "🇻🇪 In Venezuela: " : "🇪🇸 In Spain: ") + T(oth)));
  if (hasGender(raw) && T(raw, "f") !== T(raw, "m")) tx.append(el("div", { class: "gn" }, (settings.gender === "f" ? "♂ A man says: " : "♀ A woman says: ") + T(raw, settings.gender === "f" ? "m" : "f")));
  const row = el("div", { class: "phr" }, emoji ? el("span", { class: "em" }, emoji) : null, tx,
    el("button", { class: "sp", "aria-label": "Listen", onclick: () => Speech.play(sayText) }, "🔊"),
    el("button", { class: "sp", "aria-label": "Listen slowly", onclick: () => Speech.play(sayText, { slow: true }) }, "🐢"));
  row.dataset.say = sayText;
  return row;
}
function playAllBtn(container) {
  const label = "▶ Play all, one after the other";
  const b = el("button", { class: "bigbtn blue", style: "width:100%;margin:4px 0 12px" }, label);
  let on = false;
  b.onclick = async () => {
    if (on) { on = false; Speech.stop(); b.textContent = label; return; }
    on = true; b.textContent = "■ Stop";
    for (const row of container.querySelectorAll(".phr")) {
      if (!on || !b.isConnected) break;
      row.style.outline = "3px solid var(--yellow)";
      row.scrollIntoView({ block: "center", behavior: "smooth" });
      await Speech.say(row.dataset.say);   // resolves only when the sentence has been spoken to the end
      row.style.outline = "";
      if (!on) break;
      await sleep(350);
    }
    on = false; if (b.isConnected) b.textContent = label;
  };
  return b;
}
function flashcards(cards) {
  let i = 0;
  const wrap = el("div");
  function draw() {
    wrap.innerHTML = "";
    const c = cards[i];
    const card = el("div", { class: "card" },
      el("div", { class: "face front" }, el("div", { class: "big" }, c.front), el("div", { class: "hint" }, "Tap the card to turn it over")),
      el("div", { class: "face back" }, el("div", { class: "big" }, c.back), el("div", { class: "hint" }, (i + 1) + " / " + cards.length)));
    card.onclick = () => { card.classList.toggle("flip"); if (card.classList.contains("flip")) Speech.play(c.say); };
    wrap.append(el("div", { class: "flash" }, card), el("div", { class: "row2" },
      el("button", { class: "bigbtn ghost", onclick: () => { i = (i - 1 + cards.length) % cards.length; draw(); } }, "← Back"),
      el("button", { class: "bigbtn red", onclick: () => { i = (i + 1) % cards.length; draw(); } }, "Next →")));
  }
  draw();
  return wrap;
}
ENGINES.learn = function (body, act, L, api) {
  const isStart = L.id === "start";
  const tabs = isStart ? ["Sounds", "Basics", "Phrases", "Cards"] : ["Phrases", "Words", "Cards", "Tip"];
  const seg = el("div", { class: "seg" }), pane = el("div");
  body.append(seg, pane, el("button", { class: "bigbtn green", style: "width:100%;margin:22px 0 0", onclick: () => api.finish(100, 3) }, "Done ✓"));
  let cur = tabs[0];
  function tab(name) {
    cur = name; Speech.stop();
    [...seg.children].forEach(b => b.classList.toggle("on", b.textContent === name));
    pane.innerHTML = "";
    if (isStart) startTab(name); else unitTab(name);
  }
  tabs.forEach(t => seg.append(el("button", { onclick: () => tab(t) }, t)));
  function unitTab(name) {
    if (name === "Phrases") { const list = el("div"); L.P.forEach(p => list.append(phraseRow(p))); pane.append(playAllBtn(list), list); }
    if (name === "Words") { const list = el("div"); L.W.forEach(w => list.append(phraseRow(w, w.em))); pane.append(playAllBtn(list), list); }
    if (name === "Cards") pane.append(flashcards(shuffle(L.P.concat(L.W)).map(x => ({ front: V(x), back: (x.em ? x.em + " " : "") + x.en, say: V(x) }))));
    if (name === "Tip") {
      pane.append(el("div", { class: "ttl" }, "Good to know"), el("div", { class: "tip" }, L.tip),
        el("div", { class: "ttl" }, "Hidden grammar"), el("div", { class: "tip" }, L.gram),
        el("div", { class: "ttl" }, "Model sentences"));
      L.P.slice(0, 3).forEach(p => pane.append(phraseRow(p)));
    }
  }
  function chips(title, list, tip) {
    pane.append(el("div", { class: "ttl" }, title));
    if (tip) pane.append(el("div", { class: "tip" }, tip));
    const g = el("div");
    list.forEach(x => g.append(phraseRow(x, x.em, x.say)));
    pane.append(g);
  }
  function startTab(name) {
    if (name === "Sounds") START.steps.forEach(s => chips(s.id + " · " + s.title, s.words.map(w => { const a = w.split("|"); return { ve: a[0], en: a[1], es: null, say: a[2] || null }; }), s.tip));
    if (name === "Basics") {
      chips("Un, una / el, la", START.articles.map(parseW), "Every noun is masculine or feminine. Most words ending in -o are masculine (un vaso), most ending in -a are feminine (una playa). Learn the word with its un or una!");
      pane.append(el("div", { class: "ttl" }, "El alfabeto"), el("div", { class: "tip" }, "Spell your name in Spanish. Careful: be and ve sound the same, and so do ese and zeta in Venezuela."));
      const g = el("div", { class: "opts", style: "grid-template-columns:repeat(4,1fr);gap:8px" });
      START.alphabet.forEach(l => g.append(el("button", { class: "opt", style: "min-height:54px;padding:6px", onclick: () => Speech.play(l[1]) }, el("span", null, l[0]), el("span", { class: "small" }, l[1]))));
      pane.append(g);
      chips("Palabras que ya conoces · Words you already know", START.known.map(parseW));
      chips("Números 0 to 20", START.numbers.map((w, i) => ({ ve: w, en: String(i), em: "" })));
      chips("Los días · Days", START.days.map(d => ({ ve: d[0], en: d[1] })), "Days are written with a small letter. On Monday = el lunes; on Mondays = los lunes.");
      chips("Los meses · Months", START.months.map(d => ({ ve: d[0], en: d[1] })));
      chips("Los colores · Colours", START.colours.map(parseW), "Colours go after the noun: una franela azul.");
      chips("El cuerpo · The body", START.body.map(parseW));
    }
    if (name === "Phrases") { const list = el("div"); START_P.forEach(p => list.append(phraseRow(p))); pane.append(playAllBtn(list), list); }
    if (name === "Cards") pane.append(flashcards(shuffle(START_P.concat(START.known.map(parseW), START.colours.map(parseW), START.body.map(parseW))).map(x => ({ front: V(x), back: (x.em ? x.em + " " : "") + x.en, say: V(x) }))));
  }
  tab(cur);
  api.progress(1);
};

/* ---------- CONVERSATION ---------- */
ENGINES.chat = function (body, act, L, api) {
  const c = L.chat, lines = c.lines;
  let alive = true, pts = 0, showEn = settings.showEn;
  const prevCleanup = cleanup; cleanup = () => { alive = false; if (prevCleanup) prevCleanup(); };
  const chat = el("div", { class: "chat" }), opts = el("div", { class: "opts list" }), note = el("div", { class: "waitnote" });
  const enBtn = el("button", { class: "mini", onclick: () => { showEn = !showEn; chat.querySelectorAll(".tr").forEach(t => t.style.display = showEn ? "" : "none"); enBtn.textContent = showEn ? "Hide English" : "Show English"; } }, showEn ? "Hide English" : "Show English");
  body.append(el("div", { style: "display:flex;justify-content:flex-end;margin-top:6px" }, enBtn), chat, note, opts);
  chat.append(el("div", { class: "scene" }, c.av + " " + (ES() ? c.sceneEs : c.scene)));

  const textOf = l => ({
    npc: T(ES() && l.sp && l.sp.n ? l.sp.n : l.s),
    ans: T(ES() && l.sp && l.sp.a ? l.sp.a : l.a),
    wrongs: spainWrongs(l)
  });
  function spainWrongs(l) {
    const w = l.w.map(x => x.slice());
    if (ES() && l.sp && l.sp.w) {
      // replace the Venezuelan wrong answer that is most like the Spain one
      const words = s => new Set(plain(s).split(" "));
      const target = words(l.sp.w[0] + " " + l.sp.w[1]);
      let bi = 0, bs = -1;
      w.forEach((x, i) => { const ws = words(x[0] + " " + x[1]); let s = 0; ws.forEach(k => { if (target.has(k)) s++; }); if (s > bs) { bs = s; bi = i; } });
      w[bi] = l.sp.w.slice();
    }
    return w.map(x => [T(x[0]), x[1]]);
  }
  function bubble(who, av, text, en, mine) {
    const tr = el("div", { class: "tr", style: showEn ? "" : "display:none" }, en);
    const b = el("div", { class: "bub " + (mine ? "me" : "npc") },
      el("div", { class: "row" }, mine ? null : el("div", { class: "av" }, av),
        el("div", null, el("div", { class: "who" }, who), text, tr,
          el("div", { class: "tools" },
            el("button", { class: "mini", "aria-label": "Listen again", onclick: () => Speech.say(text, { role: mine ? "me" : "npc", onstart: () => b.classList.add("speaking"), onend: () => b.classList.remove("speaking") }) }, "🔊"),
            el("button", { class: "mini", "aria-label": "Listen slowly", onclick: () => Speech.say(text, { role: mine ? "me" : "npc", slow: true, onstart: () => b.classList.add("speaking"), onend: () => b.classList.remove("speaking") }) }, "🐢")))));
    b.dataset.say = text;
    chat.append(b); scrollEnd();
    return b;
  }
  const hl = b => ({ onstart: () => b.classList.add("speaking"), onend: () => b.classList.remove("speaking") });

  (async () => {
    for (let i = 0; i < lines.length; i++) {
      if (!alive) return;
      api.progress(i / lines.length);
      const l = lines[i], t = textOf(l);
      const nb = bubble(c.npc, c.av, t.npc, T(l.e), false);
      // the other person's line is spoken right to the end — nothing interrupts it
      Speech.say(t.npc, Object.assign({ role: "npc" }, hl(nb)));
      opts.innerHTML = "";
      let tries = 0;
      await new Promise(res => {
        shuffle([[t.ans, null, true]].concat(t.wrongs.map(w => [w[0], w[1], false]))).forEach(([txt, fb, ok]) => {
          const b = el("button", { class: "opt" }, txt);
          b.onclick = () => {
            if (b.disabled || !alive) return;
            if (ok) { [...opts.children].forEach(x => x.disabled = true); b.classList.add("good"); sfx("good"); toast(pick(GOOD()), "good", 900); res(); }
            else { tries++; b.classList.add("bad"); b.disabled = true; sfx("bad"); toast(fb || pick(BAD()), "bad", 2600); }
          };
          opts.append(b);
        });
        scrollEnd();
      });
      if (!alive) return;
      pts += tries === 0 ? 100 : 40;
      opts.innerHTML = "";
      const mb = bubble(learnerName() + " (you)", "", t.ans, T(l.ae), true);
      if (settings.readMine) Speech.say(t.ans, Object.assign({ role: "me" }, hl(mb)));
      if (Speech.busy()) note.textContent = "🎧 …";
      await Speech.idle();           // wait until every sentence has been spoken completely
      note.textContent = "";
      if (!alive) return;
      await sleep(450);
    }
    if (!alive) return;
    api.progress(1);
    chat.append(el("div", { class: "scene" }, "🎉 ¡Muy bien! You finished the conversation."));
    const replay = el("button", { class: "bigbtn blue", style: "width:100%;margin:12px 0 0" }, "🎧 Listen to the whole conversation");
    replay.onclick = async () => {
      if (replay.disabled) return; replay.disabled = true;
      const bubs = [...chat.querySelectorAll(".bub")];
      for (let k = 0; k < bubs.length && alive; k++) {
        const b = bubs[k], txt = b.dataset.say;
        b.scrollIntoView({ block: "center", behavior: "smooth" });
        await Speech.say(txt, Object.assign({ role: b.classList.contains("me") ? "me" : "npc" }, hl(b)));
        await sleep(250);
      }
      replay.disabled = false;
    };
    opts.append(replay, el("button", { class: "bigbtn green", style: "width:100%;margin:12px 0 0", onclick: () => api.finish(pts, starsFromRatio(pts / (lines.length * 100))) }, "Finish ✓"));
    scrollEnd();
  })();
};

/* ---------- QUIZ (choice and build items) ---------- */
function choiceItem(body, it) {
  return new Promise(res => {
    const pr = el("div", { class: "prompt" },
      it.label ? el("div", { class: "kind" }, it.label) : null,
      it.em ? el("div", { class: "em" }, it.em) : null,
      it.q ? el("div", { class: "q" }, it.q) : null,
      it.qs ? el("div", { class: "qs" }, it.qs) : null,
      it.say ? sayBtns(it.say, it.region) : null);
    const grid = el("div", { class: "opts" + (it.list ? " list" : ""), style: it.cols ? `grid-template-columns:repeat(${it.cols},1fr)` : null });
    const ex = el("div");
    body.append(pr, grid, ex);
    if (it.say) Speech.say(it.say, { region: it.region });
    let tries = 0, done = false;
    (it.optsFn ? it.optsFn() : it.opts).forEach(o => {
      const b = el("button", { class: "opt" + (o.used ? " used" : ""), disabled: o.used ? true : null },
        o.emo ? el("span", { class: "emo" }, o.emo) : null, el("span", null, o.t), o.small ? el("span", { class: "small" }, o.small) : null);
      b.onclick = async () => {
        if (done || b.disabled) return;
        if (o.ok) {
          done = true; b.classList.add("good"); sfx("good"); [...grid.children].forEach(x => x.disabled = true); toast(pick(GOOD()), "good", 900);
          if (it.onCorrect) it.onCorrect();
          const p = tries === 0 ? 100 : 40;
          if (it.explain) ex.append(el("div", { class: "explain" }, it.explain));
          if (it.after) Speech.say(it.after, { region: it.afterRegion });
          await Speech.idle();
          if (it.explain) { const nb = el("button", { class: "bigbtn red", style: "width:100%;margin:14px 0 0", onclick: () => res(p) }, "Next ➜"); ex.append(nb); scrollEnd(); }
          else { await sleep(450); res(p); }
        } else { tries++; b.classList.add("bad"); b.disabled = true; sfx("bad"); toast(o.fb || pick(BAD()), "bad", 2000); }
      };
      grid.append(b);
    });
  });
}
function buildItem(body, it) {
  return new Promise(res => {
    const words = tokens(it.target);
    body.append(el("div", { class: "prompt" }, el("div", { class: "kind" }, it.label), el("div", { class: "q" }, it.q), it.qs ? el("div", { class: "qs" }, it.qs) : null));
    const ans = el("div", { class: "answer" }), bank = el("div", { class: "bank" }), ex = el("div");
    const check = el("button", { class: "bigbtn green", style: "width:100%;margin:16px 0 0", disabled: true }, "Check ✓");
    body.append(ans, bank, check, ex);
    let placed = [], tries = 0, over = false;
    let tiles = words.map((w, k) => ({ w, k }));
    for (let n = 0; n < 6; n++) { tiles = shuffle(tiles); if (tiles.length < 2 || tiles.some((t, i) => t.k !== i)) break; }
    const upd = () => { check.disabled = placed.length !== words.length; ans.classList.remove("bad"); };
    tiles.forEach(t => {
      t.b = el("button", { class: "tile" }, t.w);
      t.b.onclick = () => {
        if (over || t.b.classList.contains("used")) return;
        t.b.classList.add("used");
        t.a = el("button", { class: "tile", onclick: () => { if (over) return; t.a.remove(); placed = placed.filter(x => x !== t); t.b.classList.remove("used"); upd(); } }, t.w);
        ans.append(t.a); placed.push(t); upd();
      };
      bank.append(t.b);
    });
    check.onclick = async () => {
      if (over) return;
      if (placed.map(t => t.w).join(" ") === words.join(" ")) {
        over = true; check.disabled = true; ans.classList.add("good"); sfx("good"); toast(pick(GOOD()), "good", 900);
        Speech.say(it.target, { region: it.region });
        await Speech.idle(); await sleep(450); res(tries === 0 ? 100 : 50);
      } else {
        tries++; sfx("bad"); ans.classList.add("bad");
        if (tries >= 2) {
          over = true; check.disabled = true;
          ex.append(el("div", { class: "explain" }, "✅ " + it.target), el("button", { class: "bigbtn red", style: "width:100%;margin:14px 0 0", onclick: () => res(0) }, "Next ➜"));
          Speech.say(it.target, { region: it.region }); scrollEnd();
        } else {
          toast(pick(BAD()) + " Tap the words to try again.", "bad", 2000);
          placed.forEach(t => { t.a.remove(); t.b.classList.remove("used"); }); placed = []; upd();
        }
      }
    };
  });
}
ENGINES.quiz = function (body, act, L, api) {
  const items = act.make(L);
  let alive = true, pts = 0;
  const prev = cleanup; cleanup = () => { alive = false; if (prev) prev(); };
  (async () => {
    for (let i = 0; i < items.length; i++) {
      if (!alive) return;
      api.progress(i / items.length); api.hud((i + 1) + "/" + items.length);
      body.innerHTML = "";
      const it = items[i];
      pts += await (it.kind === "build" ? buildItem(body, it) : choiceItem(body, it));
    }
    if (alive) api.finish(pts, starsFromRatio(pts / (items.length * 100)));
  })();
};

/* ---------- MEMORY ---------- */
ENGINES.memory = function (body, act, L, api) {
  const pairs = act.make(L);
  const cards = shuffle(pairs.flatMap((p, i) => [Object.assign({ id: i }, p.a), Object.assign({ id: i }, p.b)]));
  let open = [], moves = 0, found = 0, secs = 0, lock = false;
  const t = setInterval(() => { secs++; api.hud("⏱ " + secs + " s"); }, 1000); api.hud("⏱ 0 s");
  const prev = cleanup; cleanup = () => { clearInterval(t); if (prev) prev(); };
  const grid = el("div", { class: "mem" });
  body.append(el("p", { style: "text-align:center;color:var(--muted);margin:4px 0" }, "Turn over two cards and find the pairs."), grid);
  const face = c => c.pic ? [el("span", { class: "mpic" }, c.pic)] : [el("span", null, c.t)];
  cards.forEach(c => {
    const b = el("button", { class: "mcard hidden", "aria-label": "Card" }, "?"); c.b = b;
    b.onclick = () => {
      if (lock || c.done || open.includes(c)) return;
      b.className = "mcard open"; b.innerHTML = ""; b.append(...face(c)); Speech.play(c.say); open.push(c);
      if (open.length === 2) {
        moves++; lock = true;
        const [x, y] = open;
        setTimeout(() => {
          if (x.id === y.id) {
            [x, y].forEach(k => { k.done = true; k.b.className = "mcard done"; });
            sfx("good"); found++; api.progress(found / pairs.length);
            if (found === pairs.length) { clearInterval(t); const extra = moves - pairs.length; setTimeout(() => api.finish(Math.max(150, 700 - extra * 35 - secs * 2), extra <= 4 ? 3 : extra <= 8 ? 2 : 1), 700); }
          } else { sfx("bad"); [x, y].forEach(k => { k.b.className = "mcard hidden"; k.b.textContent = "?"; }); }
          open = []; lock = false;
        }, 900);
      }
    };
    grid.append(b);
  });
};

/* ---------- SPEAK ---------- */
ENGINES.speak = function (body, act, L, api) {
  const items = shuffle(L.P.filter(p => tokens(V(p)).length <= 9)).slice(0, 5);
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let i = 0, pts = 0, alive = true, rec = null;
  const prev = cleanup; cleanup = () => { alive = false; try { rec && rec.abort(); } catch (e) {} if (prev) prev(); };
  function similar(heard, target) {
    const h = new Set(plain(heard).split(" ")), tw = plain(target).split(" ").filter(Boolean);
    return tw.filter(w => h.has(w)).length / Math.max(1, tw.length);
  }
  function show() {
    if (!alive) return;
    api.progress(i / items.length); api.hud((i + 1) + "/" + items.length);
    if (i >= items.length) { api.finish(pts, starsFromRatio(pts / (items.length * 100))); return; }
    const p = items[i], text = V(p);
    body.innerHTML = "";
    let tries = 0;
    const heard = el("div", { class: "heard" });
    const next = add => { pts += add; i++; setTimeout(show, 600); };
    body.append(el("div", { class: "prompt" }, el("div", { class: "kind" }, "Say it!"), el("div", { class: "q" }, text), el("div", { class: "qs" }, p.en), sayBtns(text)));
    Speech.say(text);
    if (SR) {
      const mic = el("button", { class: "mic", "aria-label": "Speak" }, "🎤");
      mic.onclick = async () => {
        if (rec) return;
        Speech.stop();
        rec = new SR(); rec.lang = ES() ? "es-ES" : "es-VE"; rec.interimResults = false; rec.maxAlternatives = 5;
        mic.classList.add("on"); heard.textContent = "Listening…";
        rec.onresult = e => {
          const alts = [...e.results[0]].map(a => a.transcript);
          const sc = Math.max(...alts.map(a => similar(a, text)));
          heard.textContent = "I heard: “" + alts[0] + "”";
          if (sc >= 0.6) { sfx("good"); toast(pick(GOOD()), "good", 1000); next(tries === 0 ? 100 : 60); }
          else { tries++; sfx("bad"); toast("¡Casi! Listen again and try once more.", "bad", 1800); }
        };
        rec.onerror = e => { heard.textContent = e.error === "not-allowed" || e.error === "service-not-allowed" ? "The microphone is blocked. Use “I said it” instead." : "I didn't catch that. Try again."; };
        rec.onend = () => { mic.classList.remove("on"); rec = null; };
        try { rec.start(); } catch (e) { rec = null; mic.classList.remove("on"); }
      };
      body.append(mic, heard);
    } else body.append(el("p", { class: "heard" }, "Your browser can't listen. Say it aloud, then tap “I said it”."));
    body.append(el("div", { class: "row2", style: "margin-top:10px" },
      el("button", { class: "bigbtn ghost", onclick: () => next(0) }, "Skip"),
      el("button", { class: "bigbtn green", onclick: () => next(60) }, "I said it ✓")));
  }
  show();
};

// =====================================================================
// SETTINGS
// =====================================================================
function settingsScreen(root) {
  topbar(root);
  const panel = el("div", { class: "panel" }, el("h2", null, "⚙️ Settings"));
  function choice(label, key, options, hint, after) {
    const row = el("div", { class: "choice" });
    options.forEach(([val, txt]) => row.append(el("button", { class: settings[key] === val ? "on" : "", onclick: () => { settings[key] = val; saveSettings(); if (after) after(); go(settingsScreen); } }, txt)));
    panel.append(el("div", { class: "setrow" }, el("div", { class: "lab" }, label), row, hint ? el("div", { class: "hint" }, hint) : null));
  }
  choice("Country", "mode", [["ve", "🇻🇪 Venezuela"], ["es", "🇪🇸 Spain mode"]], "Venezuela is the main mode. Spain mode moves the holiday to Spain and changes about one sentence in three: vosotros, the perfect tense for today, and words like coche and zumo.");
  choice("I am", "gender", [["f", "Soy mujer"], ["m", "Soy hombre"]], "Changes your forms everywhere: estoy cansada / estoy cansado.");
  choice("The app talks to me with", "address", [["tu", "tú"], ["usted", "usted"]], "Used in the app's praise and tips: ¡Eres un crack! / ¡Usted es un crack!");
  const nameIn = el("input", { value: settings.name, placeholder: settings.gender === "m" ? "Tom" : "Anna", "aria-label": "Your name" });
  nameIn.oninput = () => { settings.name = nameIn.value.slice(0, 24); saveSettings(); };
  panel.append(el("div", { class: "setrow" }, el("div", { class: "lab" }, "Your name in the conversations"), nameIn));

  // voices
  const vrow = el("div", { class: "setrow" });
  function drawVoices() {
    vrow.innerHTML = "";
    const m = settings.mode, list = Speech.list(m);
    vrow.append(el("div", { class: "lab" }, "Voices"));
    if (!Speech.ok) { vrow.append(el("div", { class: "hint" }, "This browser can't speak. Try Chrome, Edge or Safari.")); return; }
    if (!list.length) { vrow.append(el("div", { class: "hint" }, "No Spanish voice found on this device yet. On Windows, Microsoft Edge has Venezuelan voices (Paola, Sebastián). On a phone, add a Spanish voice in the system's text-to-speech settings.")); return; }
    const sel = (key, label, cur) => {
      const s = el("select", { "aria-label": label });
      list.forEach(v => s.append(el("option", { value: v.name, selected: v === cur ? true : null }, v.name + " (" + v.lang + ")")));
      s.onchange = () => { settings[key] = s.value; saveSettings(); };
      return el("div", { style: "margin:8px 0" }, el("div", { class: "hint", style: "margin:0 0 4px" }, label), s);
    };
    vrow.append(sel("voice_" + m, "The other person (main voice)", Speech.main()), sel("voice2_" + m, "Your answers", Speech.second()),
      el("div", { class: "smallbtns", style: "justify-content:flex-start" },
        el("button", { class: "say", onclick: () => { Speech.stop(); Speech.say("¡Hola! ¿Qué más? ¿Cómo estás?", { role: "npc" }); Speech.say("¡Muy bien, gracias! ¿Y tú?", { role: "me" }); } }, "▶ Test the two voices")),
      el("div", { class: "hint" }, m === "ve" ? "Best: a Venezuelan voice (es-VE). Microsoft Edge has Paola and Sebastián. Otherwise a Latin American voice (Colombia, Mexico, US Spanish) is closer than Spain." : "Best: a voice from Spain (es-ES)."));
  }
  drawVoices(); onVoices = drawVoices;
  panel.append(vrow);

  function toggle(label, key, hint) {
    const b = el("button", { class: settings[key] ? "on" : "", onclick: () => { settings[key] = !settings[key]; saveSettings(); go(settingsScreen); } }, settings[key] ? "On" : "Off");
    panel.append(el("div", { class: "setrow" }, el("div", { class: "lab" }, label), el("div", { class: "choice" }, b), hint ? el("div", { class: "hint" }, hint) : null));
  }
  toggle("Slow speech", "slow", "All Spanish is read more slowly.");
  toggle("Read my answers aloud", "readMine", "In conversations, your answer is read in a second voice after the other person has finished.");
  toggle("Show English in conversations", "showEn");
  toggle("Sound effects", "sound");
  choice("Theme", "theme", [["auto", "Auto"], ["light", "Light"], ["dark", "Dark"]], null, applyTheme);
  panel.append(el("button", { class: "bigbtn ghost", style: "width:100%;margin:10px 0", onclick: () => { if (confirm("Delete all your stars and points?")) { progress = {}; saveProgress(); go(homeScreen); } } }, "🗑️ Reset my progress"));
  root.append(panel);
}

// =====================================================================
// BACK OF THE BOOK
// =====================================================================
function bookScreen(root, tabName) {
  topbar(root);
  const panel = el("div", { class: "panel" }, el("h2", null, "📚 Back of the book"));
  const tabs = ["Ser or estar", "Key verbs", "Past tenses", "Venezuela or Spain", "Survival page"];
  const cur = tabName || tabs[0];
  const seg = el("div", { class: "seg", style: "flex-wrap:wrap" });
  tabs.forEach(t => seg.append(el("button", { class: t === cur ? "on" : "", onclick: () => go(r => bookScreen(r, t)) }, t)));
  panel.append(seg);
  const sayCell = (txt, region) => el("td", { class: "c", onclick: () => Speech.play(txt, { region }) }, "🔊 " + txt);
  if (cur === "Ser or estar") {
    panel.append(el("div", { class: "tip" }, BOOK.serEstar.intro));
    [["ser", BOOK.serEstar.ser], ["estar", BOOK.serEstar.estar]].forEach(([h, rows]) => {
      const t = el("table", { class: "tbl" }, el("tr", null, el("th", null, h), el("th", null, "English")));
      rows.forEach(r => t.append(el("tr", null, sayCell(T(r[0])), el("td", null, r[1]))));
      panel.append(t);
    });
  }
  if (cur === "Key verbs") {
    panel.append(el("div", { class: "tip" }, "The seven verbs you need most, in the present, the preterite (what happened) and the imperfect (what was going on, used to). Venezuela uses ustedes for every group; vosotros is only used in Spain."));
    BOOK.verbs.list.forEach(v => {
      const t = el("table", { class: "tbl" }, el("tr", null, el("th", null, v[0] + " · " + v[1]), el("th", null, "present"), el("th", null, "preterite"), el("th", null, "imperfect")));
      BOOK.verbs.persons.forEach((p, i) => { if (i === 4 && !ES()) return; t.append(el("tr", null, el("td", null, p), sayCell(v[2][i]), sayCell(v[3][i]), sayCell(v[4][i]))); });
      panel.append(t);
    });
    if (!ES()) panel.append(el("div", { class: "tip" }, "🇪🇸 Switch to Spain mode in the settings to see the vosotros forms."));
  }
  if (cur === "Past tenses") {
    panel.append(el("div", { class: "tip" }, BOOK.pastGuide.intro));
    const t = el("table", { class: "tbl" }, el("tr", null, el("th", null, "Sentence"), el("th", null, "Tense"), el("th", null, "Why")));
    BOOK.pastGuide.rows.forEach(r => t.append(el("tr", null, sayCell(T(r[0])), el("td", null, r[1]), el("td", null, r[2]))));
    panel.append(t, el("div", { class: "tip" }, "🇪🇸 In Spain, things done today, this week or ever use the perfect: hoy he comido, ¿has probado...? With ayer and el año pasado, both countries use the preterite."));
  }
  if (cur === "Venezuela or Spain") {
    const h = el("table", { class: "tbl" }, el("tr", null, el("th", null, "Feature"), el("th", null, "🇻🇪 Venezuela"), el("th", null, "🇪🇸 Spain")));
    BOOK.habits.forEach(r => h.append(el("tr", null, el("td", null, r[0]), el("td", null, r[1]), el("td", null, r[2]))));
    const t = el("table", { class: "tbl" }, el("tr", null, el("th", null, "🇻🇪 Venezuela"), el("th", null, "🇪🇸 Spain"), el("th", null, "English")));
    VEES.forEach(r => t.append(el("tr", null, sayCell(r[0], "ve"), sayCell(r[1], "es"), el("td", null, r[2]))));
    panel.append(el("div", { class: "ttl" }, "Four habits"), h, el("div", { class: "ttl" }, "Everyday words"), t, el("div", { class: "ttl" }, "False friends"));
    FALSE_FRIENDS.forEach(f => panel.append(el("div", { class: "tip" }, el("b", null, f.q), el("br"), "→ " + f.a + ". " + f.why)));
  }
  if (cur === "Survival page") {
    panel.append(el("div", { class: "tip" }, "20 phrases you can't travel without. Tap to listen."));
    const list = el("div"); BOOK.survival.map(parseP).forEach(p => list.append(phraseRow(p)));
    panel.append(playAllBtn(list), list);
  }
  root.append(panel);
}

// ---------- go! ----------
go(homeScreen);
if ("serviceWorker" in navigator && location.protocol === "https:") { /* no service worker needed */ }
