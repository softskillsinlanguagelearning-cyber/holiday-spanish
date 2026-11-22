// =====================================================================
// Holiday Spanish (Venezuela): course content
// Phrase strings:  "Spanish (Venezuela) | English | Spanish (Spain, only when different)"
// Word strings:    "emoji | Spanish (Venezuela) | English | Spanish (Spain, only when different)"
// In Spanish text: {a/o} = the learner's form, feminine / masculine (cansad{a/o}), {N} = the learner's name
// =====================================================================

const CHAPTERS = [
  ["Nice to meet you", "Mucho gusto", "👋"],
  ["Travelling there", "El viaje", "🚌"],
  ["Checking in", "En la posada", "🏨"],
  ["Eating out", "En el restaurante", "🍽️"],
  ["Shopping", "De compras", "🛍️"],
  ["Finding your way", "¿Por dónde?", "🧭"],
  ["Weather and plans", "El tiempo y los planes", "🌦️"],
  ["Activities and sightseeing", "Paseos y visitas", "🎟️"],
  ["At the pharmacy", "En la farmacia", "💊"],
  ["Going home", "La vuelta a casa", "🧳"]
];

const ROUNDS = [
  { n: 1, name: "Words and phrases", es: "Palabras y frases", can: "Survive with short, fixed phrases", gram: "ser, tener, hay, un / una, quisiera, me duele" },
  { n: 2, name: "Conversation", es: "Conversación", can: "Ask questions and understand the answers", gram: "Present tense, ser or estar, gustar, ir a + infinitive, first past tense" },
  { n: 3, name: "Something goes wrong", es: "Algo sale mal", can: "Solve problems politely and firmly", gram: "Preterite, object pronouns, accidental se, imperfect" },
  { n: 4, name: "Small talk", es: "Charlar", can: "Chat, compare, recommend, tell stories", gram: "Preterite or imperfect, comparatives, conditional, future" }
];

const UNITS = [];
function U(n, d) { d.n = n; d.id = "u" + n; d.round = Math.ceil(n / 10); d.ch = (n - 1) % 10; UNITS.push(d); }
// one conversation line: what the other person says, the right answer, two wrong answers with feedback, Spain versions
function C(s, e, a, ae, w1, f1, w2, f2, sp) { return { s, e, a, ae, w: [[w1, f1], [w2, f2]], sp: sp || null }; }
// grammar item: sentence with ___, right answer, wrong answers "x|y", English, only in one mode ("ve" or "es")
function G(q, a, wrong, en, only) { return { q, a, wrong: wrong.split("|"), en, only: only || null }; }

// ---------------------------------------------------------------------
// START: pronunciation and basics
// ---------------------------------------------------------------------
const START = {
  id: "start", n: 0, title: "Start: pronunciation and basics", es: "Primeros pasos", icon: "🔤",
  intro: "Spanish spelling is regular, so five short steps are enough. The sixth step is for listening only: it prepares you for how Venezuelans actually talk. Then come the basics: un / una, the alphabet, words you already know, numbers, days, months, colours and the body.",
  steps: [
    { id: "S1", title: "Five pure vowels: a, e, i, o, u", tip: "Every vowel is pronounced fully, even at the end of a word. There is no lazy \"uh\" sound.",
      words: ["casa|house", "mesa|table", "piso|floor", "todo|everything", "luna|moon"] },
    { id: "S2", title: "Letters that differ from English: h, j, g, ll, y, ñ, qu", tip: "h is silent. j, and g before e or i, sound like a soft English h in Venezuela. ll and y both sound like the y in \"yes\".",
      words: ["hola|hello", "jugo|juice", "gente|people", "llave|key", "playa|beach", "mañana|tomorrow, morning", "queso|cheese"] },
    { id: "S3", title: "Latin American s, plus b and v", tip: "c before e or i, z and s all sound like s (cerveza = ser-VE-sa). b and v sound the same.",
      words: ["cerveza|beer", "gracias|thank you", "zapato|shoe", "vaso|glass", "barco|boat"] },
    { id: "S4", title: "r and rr", tip: "A single r is one quick tap, like the tt in American \"butter\". rr, or an r at the start of a word, is rolled.",
      words: ["pero|but", "perro|dog", "caro|expensive", "carro|car", "Rosa|Rosa (a name)"] },
    { id: "S5", title: "Stress and the written accent", tip: "Words ending in a vowel, n or s are stressed on the second-to-last syllable; others on the last. An accent mark breaks the rule. It also tells si (if) from sí (yes) and esta (this) from está (is).",
      words: ["casa|house", "hablan|they speak", "hotel|hotel", "comer|to eat", "café|coffee", "teléfono|phone", "si|if", "sí|yes"] },
    { id: "S6", title: "Listening: Venezuelan speed", tip: "Final s often becomes a breath or disappears, and the d in -ado is dropped. You don't have to copy this, only recognise it.",
      words: ["¿cómo estás?|how are you? (careful)", "¿cómo ehtá?|how are you? (fast Venezuelan)|cómo etá", "cansado|tired (careful)", "cansao|tired (fast Venezuelan)", "para|for, to (careful)", "pa'|for, to (fast Venezuelan)|pa"] }
  ],
  articles: [
    "🏨|un hotel|a hotel", "🏖️|una playa|a beach", "🔑|una llave|a key", "🚕|un taxi|a taxi", "🧳|una maleta|a suitcase", "🎫|un pasaje|a ticket|un billete",
    "🍺|una cerveza|a beer", "☕|un café|a coffee", "🏠|una casa|a house", "🍦|un helado|an ice cream", "🛏️|una cama|a bed", "🚌|un autobús|a bus",
    "🏨|los hoteles|the hotels", "🏖️|las playas|the beaches", "🔑|la llave|the key", "🚕|el taxi|the taxi"
  ],
  alphabet: [["A","a"],["B","be"],["C","ce"],["D","de"],["E","e"],["F","efe"],["G","ge"],["H","hache"],["I","i"],["J","jota"],["K","ka"],["L","ele"],["M","eme"],["N","ene"],["Ñ","eñe"],["O","o"],["P","pe"],["Q","cu"],["R","erre"],["S","ese"],["T","te"],["U","u"],["V","ve"],["W","doble ve"],["X","equis"],["Y","ye"],["Z","zeta"]],
  known: ["🏨|hotel|hotel", "🚕|taxi|taxi", "🍫|chocolate|chocolate", "🍅|tomate|tomato", "🏡|patio|patio, courtyard", "⛲|plaza|square", "🦟|mosquito|mosquito", "🛌|hamaca|hammock",
    "🍕|pizza|pizza", "🏛️|museo|museum", "🍌|banana|banana (in Venezuela: cambur)", "🎸|guitarra|guitar", "📱|teléfono|telephone", "🚌|autobús|bus"],
  numbers: ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte"],
  days: [["lunes","Monday"],["martes","Tuesday"],["miércoles","Wednesday"],["jueves","Thursday"],["viernes","Friday"],["sábado","Saturday"],["domingo","Sunday"]],
  months: [["enero","January"],["febrero","February"],["marzo","March"],["abril","April"],["mayo","May"],["junio","June"],["julio","July"],["agosto","August"],["septiembre","September"],["octubre","October"],["noviembre","November"],["diciembre","December"]],
  colours: ["🔴|rojo|red", "🔵|azul|blue", "🟡|amarillo|yellow", "🟢|verde|green", "⚫|negro|black", "⚪|blanco|white", "🟠|anaranjado|orange|naranja", "🟣|morado|purple", "🟤|marrón|brown", "🩷|rosado|pink|rosa"],
  body: ["🗣️|la cabeza|the head", "👁️|el ojo|the eye", "👂|la oreja|the ear", "👃|la nariz|the nose", "👄|la boca|the mouth", "🦷|el diente|the tooth", "💪|el brazo|the arm", "✋|la mano|the hand", "🦵|la pierna|the leg", "🦶|el pie|the foot", "🫃|la barriga|the stomach, tummy|la tripa", "🔙|la espalda|the back"],
  phrases: [
    "¡Hola!|Hello! Hi!", "Buenos días.|Good morning.", "Buenas tardes.|Good afternoon.", "Buenas noches.|Good evening. Good night.",
    "Por favor.|Please.", "Gracias.|Thank you.", "¡A la orden!|You're welcome! How can I help?|¡De nada!", "Disculpe.|Excuse me. Sorry.",
    "No entiendo.|I don't understand.", "Más despacio, por favor.|More slowly, please.", "¿Cómo se dice... en español?|How do you say... in Spanish?",
    "Sí. No.|Yes. No.", "¿Qué más? ¿Cómo estás?|How's it going? How are you?|¿Qué tal? ¿Cómo estás?", "Chao.|Bye."
  ],
  minimal: [["pero","perro","but","dog"],["caro","carro","expensive","car"],["casa","cosa","house","thing"],["mesa","misa","table","Mass (church)"],["piso","peso","floor","weight"],["todo","toda","everything","all (feminine)"],["llave","lave","key","(that I) wash"],["queso","beso","cheese","kiss"],["jugo","yugo","juice","yoke"],["vaso","paso","glass","step"]],
  stress: [["ca|sa",0],["ha|blan",0],["ho|tel",1],["co|mer",1],["ca|fé",1],["te|lé|fo|no",1],["pla|ya",0],["Mé|ri|da",0],["ma|ña|na",1],["re|loj",1],["a|zú|car",1],["a|re|pa",1],["Ve|ne|zue|la",2],["pa|pá",1],["ár|bol",0],["ciu|dad",1]],
  speed: [
    ["¿Cómo estás?", "¿Cómo ehtá?", "cómo etá"], ["Estoy cansada.", "Toy cansá.", "toi cansá"], ["Para la playa.", "Pa' la playa.", "pa la playa"],
    ["¿Qué más?", "¿Qué má?", "qué má"], ["Está pelado.", "Ta pelao.", "ta pelao"], ["Los dos.", "Lo' do'.", "lo do"], ["¿Para dónde vas?", "¿Pa' ónde vah?", "pa ónde va"], ["Nada, todo bien.", "Na', to' bien.", "na, to bien"]
  ]
};
