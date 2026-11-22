// =====================================================================
// Venezuela or Spain: word list, false friends, exercise pools, back of the book
// =====================================================================

// [Venezuela, Spain, English, unit where it comes up]
const VEES = [
  ["¿Qué más?", "¿Qué tal?", "How's it going?", 1],
  ["el pasaje", "el billete", "ticket (bus, train)", 2],
  ["el puesto", "el asiento", "seat", 2],
  ["la reservación", "la reserva", "booking", 3],
  ["el piso (de un edificio)", "la planta", "floor (of a building)", 3],
  ["la posada", "el hostal", "guesthouse", 3],
  ["la clave", "la contraseña", "password", 3],
  ["chévere", "guay", "great, cool", 3],
  ["el jugo", "el zumo", "juice", 4],
  ["la parchita", "el maracuyá", "passion fruit", 4],
  ["un momentico", "un momento", "just a moment", 4],
  ["¿Qué le provoca?", "¿Qué le pongo?", "What would you like?", 4],
  ["la franela", "la camiseta", "T-shirt", 5],
  ["¡A la orden!", "¡De nada!", "You're welcome!", 5],
  ["la cuadra", "la manzana", "block (of houses)", 6],
  ["derecho", "todo recto", "straight on", 6],
  ["tomar fotos", "hacer fotos", "to take photos", 8],
  ["la curita", "la tirita", "plaster", 9],
  ["extrañar", "echar de menos", "to miss (someone)", 10],
  ["el chofer", "el conductor", "driver", 12],
  ["como a las tres", "sobre las tres", "around three", 12],
  ["el estacionamiento", "el aparcamiento", "car park, parking", 13],
  ["un marrón", "un café con leche", "coffee with milk", 14],
  ["un negrito", "un café solo", "black coffee", 14],
  ["ustedes", "vosotros", "you (plural, friends)", 14],
  ["el cambur", "el plátano", "banana", 15],
  ["agarrar (un taxi)", "coger (un taxi)", "to take (a taxi)", 16],
  ["caminando", "andando", "on foot", 16],
  ["el boleto", "el billete", "ticket (metro)", 16],
  ["en la mañana", "por la mañana", "in the morning", 17],
  ["en la noche", "por la noche", "in the evening, at night", 17],
  ["la barriga", "la tripa", "tummy", 19],
  ["la pasamos bien", "lo pasamos bien", "we had a good time", 20],
  ["ahorita", "ahora", "now, soon", 22],
  ["montarse en", "subirse a", "to get on (a bus)", 26],
  ["un palo de agua", "un chaparrón", "a downpour", 27],
  ["el recibo", "el tique", "receipt", 25],
  ["el esposo", "el marido", "husband", 29],
  ["el pase de abordar", "la tarjeta de embarque", "boarding pass", 30],
  ["el carro", "el coche", "car", 32],
  ["la carpa", "la tienda de campaña", "tent", 33],
  ["¡Es lo máximo!", "¡Está buenísimo!", "It's the best!", 34],
  ["el celular", "el móvil", "mobile phone", 40],
  ["el pana", "el amigo, el colega", "friend, mate", 40],
  ["dar la cola", "llevar en coche", "to give someone a lift", 40],
  ["hacer la cola", "hacer cola", "to queue", 40],
  ["la bomba", "la gasolinera", "petrol station", 40]
];

// False friends: what does the other person think you said?
const FALSE_FRIENDS = [
  { u: 14, q: "In Madrid you ask for \"un marrón\". What does the waiter hear?", a: "a problem", wrong: ["a coffee with milk", "a brown sauce"], why: "In Spain, un marrón is a nasty problem. Ask for un café con leche!" },
  { u: 5, q: "In Spain you ask for \"una franela azul\". What do they think you want?", a: "a blue flannel cloth", wrong: ["a blue T-shirt", "a blue flag"], why: "In Spain, franela is a cloth for cleaning. A T-shirt is una camiseta." },
  { u: 16, q: "In Caracas you say \"Voy a coger un taxi\". How does it sound?", a: "rude — coger is a vulgar word there", wrong: ["perfectly normal", "very old-fashioned"], why: "In Spain coger is fine, but in Venezuela and most of Latin America it's rude. Say agarrar un taxi." },
  { u: 15, q: "In Spain you buy \"plátanos\". What do you get?", a: "bananas", wrong: ["plantains for cooking", "avocados"], why: "In Spain a plátano is a banana. In Venezuela it's a plantain, and a banana is un cambur." },
  { u: 22, q: "A Venezuelan says \"Ahorita vengo\". When will they come?", a: "maybe now, maybe in an hour", wrong: ["exactly this second", "tomorrow"], why: "In Venezuela ahorita can mean now, soon or later. In Spain, ahora is simply now." },
  { u: 26, q: "In Venezuela a friend offers you \"la cola\" to the airport. What are they offering?", a: "a lift in their car", wrong: ["a fizzy drink", "a place in the queue"], why: "Dar la cola = to give someone a lift. Hacer la cola = to queue." },
  { u: 31, q: "In Spain you call a new friend \"mi pana\". What do they hear?", a: "my corduroy", wrong: ["my mate", "my bread"], why: "In Venezuela pana = friend. In Spain pana is corduroy fabric!" },
  { u: 32, q: "In Venezuela your friend says \"Paramos en la bomba\". Where are you stopping?", a: "at the petrol station", wrong: ["at a bomb", "at a party"], why: "In Venezuela la bomba is the petrol station. In Spain: la gasolinera." },
  { u: 33, q: "A Spaniard says \"Tengo un piso en Madrid\". What do they have?", a: "a flat", wrong: ["a floor", "a carpet"], why: "In Spain un piso is also a flat. In Venezuela a flat is un apartamento." },
  { u: 37, q: "In Caracas someone says \"Ya llegó el invierno\". What has arrived?", a: "the rainy season", wrong: ["snow", "Christmas"], why: "In Venezuela invierno is the rainy season, and verano the dry season." }
];

// "Van or vais?" (Round 2 onwards)
const VOSO = [
  { q: "🇪🇸 ¿Qué ___ a tomar, chicos?", a: "vais", wrong: ["van"], en: "What are you having, guys?" },
  { q: "🇻🇪 ¿Qué ___ a tomar, muchachos?", a: "van", wrong: ["vais"], en: "What are you having, guys?" },
  { q: "🇪🇸 ¿___ de aquí, chicos?", a: "Sois", wrong: ["Son"], en: "Are you from here, guys?" },
  { q: "🇻🇪 ¿Ustedes ___ de aquí?", a: "son", wrong: ["sois"], en: "Are you from here?" },
  { q: "🇪🇸 ¿Dónde ___ vosotros?", a: "vivís", wrong: ["viven"], en: "Where do you live?" },
  { q: "🇻🇪 ¿Dónde ___ ustedes?", a: "viven", wrong: ["vivís"], en: "Where do you live?" },
  { q: "🇪🇸 ¿___ hambre, chicos?", a: "Tenéis", wrong: ["Tienen"], en: "Are you hungry, guys?" },
  { q: "🇻🇪 ¿___ hambre, muchachos?", a: "Tienen", wrong: ["Tenéis"], en: "Are you hungry, guys?" },
  { q: "🇪🇸 ¿Qué ___ a hacer el sábado?", a: "vais", wrong: ["van"], en: "What are you doing on Saturday?" },
  { q: "🇻🇪 ¿Qué ___ a hacer el sábado?", a: "van", wrong: ["vais"], en: "What are you doing on Saturday?" }
];

// Hoy comí or hoy he comido? (Round 3 onwards)
const PERF = [
  { en: "Today I ate tortilla.", es: "Hoy he comido tortilla.", esWrong: "Hoy comí tortilla.", ve: "Hoy comí arepa.", veWrong: "Hoy he comido arepa." },
  { en: "This morning we went to the beach.", es: "Esta mañana hemos ido a la playa.", esWrong: "Esta mañana fuimos a la playa.", ve: "Esta mañana fuimos a la playa.", veWrong: "Esta mañana hemos ido a la playa." },
  { en: "Have you tried it yet?", es: "¿Lo has probado ya?", esWrong: "¿Ya lo probaste?", ve: "¿Ya lo probaste?", veWrong: "¿Lo has probado ya?" },
  { en: "This week I've visited three museums.", es: "Esta semana he visitado tres museos.", esWrong: "Esta semana visité tres museos.", ve: "Esta semana visité tres museos.", veWrong: "Esta semana he visitado tres museos." },
  { en: "Yesterday I bought shoes.", es: "Ayer compré zapatos.", esWrong: "Ayer he comprado zapatos.", ve: "Ayer compré zapatos.", veWrong: "Ayer he comprado zapatos.", note: "With ayer, both countries use the preterite!" },
  { en: "Last year I went to Granada.", es: "El año pasado fui a Granada.", esWrong: "El año pasado he ido a Granada.", ve: "El año pasado fui a Mérida.", veWrong: "El año pasado he ido a Mérida.", note: "El año pasado takes the preterite everywhere." },
  { en: "I've had a great time.", es: "Lo he pasado muy bien.", esWrong: "Lo pasé muy bien hoy.", ve: "La pasé muy bien.", veWrong: "La he pasado muy bien." },
  { en: "Have you ever been to Spain?", es: "¿Alguna vez has estado en España?", esWrong: "¿Alguna vez estuviste en España?", ve: "¿Alguna vez estuviste en España?", veWrong: "¿Alguna vez has estado en España?" }
];

// ---------------------------------------------------------------------
// Back of the book
// ---------------------------------------------------------------------
const BOOK = {
  serEstar: {
    intro: "Both mean \"to be\". ser says what something IS (who, what, where from, what it's like, time). estar says where something is and how it is right now (state, feelings, condition). Holiday rule: if it could change tomorrow, it's probably estar.",
    ser: [
      ["Soy profesor{a/}.", "I'm a teacher. (job)"], ["Soy de Inglaterra.", "I'm from England. (origin)"], ["Carmen es muy simpática.", "Carmen is very nice. (character)"],
      ["La habitación es grande.", "The room is big. (what it's like)"], ["Es mi espos{o/a}.", "That's my husband / wife. (identity)"], ["Son las ocho.", "It's eight o'clock. (time)"],
      ["Hoy es lunes.", "Today is Monday. (day)"], ["Soy alérgic{a/o} a los mariscos.", "I'm allergic to seafood."], ["El concierto es en la plaza.", "The concert is in the square. (events)"],
      ["La arepa es de maíz.", "The arepa is made of corn. (material)"]
    ],
    estar: [
      ["Estoy cansad{a/o}.", "I'm tired. (feeling)"], ["La playa está cerca.", "The beach is close. (place)"], ["El vuelo está retrasado.", "The flight is delayed. (state)"],
      ["La habitación está muy limpia.", "The room is very clean. (condition)"], ["Estoy de vacaciones.", "I'm on holiday."], ["El museo está cerrado.", "The museum is closed."],
      ["La sopa está fría.", "The soup is cold. (right now)"], ["Estoy maread{a/o}.", "I'm dizzy."], ["Está lloviendo.", "It's raining. (estar + -ando)"],
      ["Estoy perdid{a/o}.", "I'm lost."]
    ]
  },
  verbs: {
    persons: ["yo", "tú", "él, ella, usted", "nosotros", "vosotros 🇪🇸", "ellos, ustedes"],
    list: [
      ["ser", "to be", ["soy", "eres", "es", "somos", "sois", "son"], ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"], ["era", "eras", "era", "éramos", "erais", "eran"]],
      ["estar", "to be", ["estoy", "estás", "está", "estamos", "estáis", "están"], ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"], ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"]],
      ["tener", "to have", ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"], ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"], ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"]],
      ["ir", "to go", ["voy", "vas", "va", "vamos", "vais", "van"], ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"], ["iba", "ibas", "iba", "íbamos", "ibais", "iban"]],
      ["hacer", "to do, to make", ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"], ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"], ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"]],
      ["poder", "can, to be able", ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"], ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"], ["podía", "podías", "podía", "podíamos", "podíais", "podían"]],
      ["querer", "to want", ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"], ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"], ["quería", "querías", "quería", "queríamos", "queríais", "querían"]]
    ]
  },
  pastGuide: {
    intro: "The preterite tells what HAPPENED: a finished event, one moment, the main line of the story. The imperfect DESCRIBES: what things were like, what was going on in the background, and what used to happen.",
    rows: [
      ["Mi maleta no llegó.", "preterite", "an event: it didn't arrive (unit 30)"],
      ["Era una maleta negra grande.", "imperfect", "a description (unit 30)"],
      ["Tenía una cinta roja.", "imperfect", "a description (unit 30)"],
      ["Esta mañana fuimos a la playa.", "preterite", "a finished event (unit 38)"],
      ["Mientras leía en la hamaca...", "imperfect", "the background: what was going on (unit 38)"],
      ["...empezó a llover.", "preterite", "the event that interrupts (unit 38)"],
      ["Me sentía tan mal...", "imperfect", "how things were (unit 39)"],
      ["...que tuve que ir al médico.", "preterite", "what happened (unit 39)"],
      ["Me llevaron al hospital.", "preterite", "an event (unit 39)"],
      ["Antes trabajaba en un banco.", "imperfect", "used to (unit 31)"],
      ["Cuando era niñ{a/o}, nevaba todos los inviernos.", "imperfect", "childhood habits (unit 37)"]
    ]
  },
  habits: [
    ["You, plural", "ustedes for everyone", "vosotros with friends, ustedes formally"],
    ["You, singular", "tú with friends, usted with strangers, older people and in shops (Maracaibo: vos)", "tú with almost everyone"],
    ["Past for things done today", "Preterite: Hoy comí arepa. ¿Ya probaste...?", "Perfect: Hoy he comido. ¿Has probado...?"],
    ["c and z", "sound like s", "sound like th"],
    ["Diminutives", "-ico after t: un momentico, chiquitico, ahorita", "-ito: un momentito"],
    ["Time of day", "en la mañana, en la tarde, en la noche", "por la mañana, por la tarde, por la noche"]
  ],
  survival: [
    "Hola, buenos días.|Hello, good morning.", "Por favor. Gracias.|Please. Thank you.", "Disculpe.|Excuse me.", "No entiendo.|I don't understand.",
    "Más despacio, por favor.|More slowly, please.", "¿Habla inglés?|Do you speak English?", "¿Cuánto cuesta?|How much is it?", "¿Dónde está el baño?|Where's the toilet?",
    "Quisiera un café, por favor.|I'd like a coffee, please.", "La cuenta, por favor.|The bill, please.", "¿Dónde queda la plaza?|Where's the square?|¿Dónde está la plaza?",
    "Un pasaje para Mérida, por favor.|A ticket to Mérida, please.|Un billete para Sevilla, por favor.", "¿A qué hora sale?|What time does it leave?",
    "Tengo una reservación.|I have a booking.|Tengo una reserva.", "Me duele aquí.|It hurts here.", "¡Ayuda!|Help!", "Llame a un médico, por favor.|Call a doctor, please.",
    "Soy alérgic{a/o} a la penicilina.|I'm allergic to penicillin.", "¿Puedo pagar con tarjeta?|Can I pay by card?", "¡Chévere! ¡Muchas gracias!|Great! Thanks a lot!|¡Genial! ¡Muchas gracias!"
  ]
};
