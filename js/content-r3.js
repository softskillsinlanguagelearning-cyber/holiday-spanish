// =====================================================================
// ROUND 3: Something goes wrong (units 21 to 30)
// =====================================================================

U(21, {
  sit: "Someone gets your name wrong, or you forget a name", gram: "accidental se (se me olvidó); two surnames; spelling with ese and zeta",
  tip: "Spanish speakers have two surnames: the father's first, then the mother's (María González Pérez). The accidental se blames the thing, not you: se me olvidó tu nombre = your name slipped my mind. In Venezuela, ¡Qué pena! means \"How embarrassing!\".",
  phrases: [
    "Disculpa, se me olvidó tu nombre.|Sorry, I've forgotten your name.",
    "No soy la señora Pérez, soy la señora González. Pérez es el apellido de mi mamá.|I'm not Mrs Pérez, I'm Mrs González. Pérez is my mum's surname.",
    "¿Cómo se escribe? Con zeta, no con ese.|How do you spell it? With a z, not an s.",
    "Me llamo María González Pérez.|My name is María González Pérez.",
    "¿Cuál es su apellido?|What's your surname?",
    "¿Me lo puede deletrear?|Can you spell it for me?",
    "Perdón, me equivoqué.|Sorry, I made a mistake.",
    "No es Smit, es Smith, con hache al final.|It's not Smit, it's Smith, with an h at the end.",
    "Se me olvidó.|I forgot.",
    "¡Qué pena!|How embarrassing!|¡Qué vergüenza!"
  ],
  words: ["🪪|el apellido|surname", "🏷️|el nombre|first name", "🔤|deletrear|to spell", "🇿|la zeta|the letter z", "🇸|la ese|the letter s",
    "🇭|la hache|the letter h", "👩|la señora|Mrs, lady", "👨|el señor|Mr, gentleman", "🤦|se me olvidó|I forgot", "❌|equivocarse|to make a mistake"],
  chat: { npc: "María", av: "👩🏽", scene: "Round 3: things go wrong! At a party at the posada, a woman waves at you. You've met before... but what's her name?", sceneEs: "Round 3: things go wrong! At a party at the hostal, a woman waves at you. You've met before... but what's her name?",
    lines: [
      C("¡Hola! ¡Qué bueno verte otra vez! ¿Te acuerdas de mí?", "Hi! Great to see you again! Do you remember me?", "¡Hola! Sí, claro... Disculpa, se me olvidó tu nombre.", "Hi! Yes, of course... Sorry, I've forgotten your name.",
        "¡Hola! Sí... Disculpa, me olvidó tu nombre.", "Use the accidental se: SE me olvidó 🤦", "No, no me acuerdo de ti. Chao.", "Ouch! A bit rude 😬"),
      C("¡No importa! Soy María. Nos conocimos en la playa.", "Doesn't matter! I'm María. We met on the beach.", "¡Claro, María! ¡Qué pena! ¿Y cuál es tu apellido?", "Of course, María! How embarrassing! And what's your surname?",
        "¡Claro! Mario.", "Her name is María 😅", "¿Nos conocimos en la montaña?", "She said the beach 🏖️",
        { a: "¡Claro, María! ¡Qué vergüenza! ¿Y cuál es tu apellido?" }),
      C("Me llamo María González Pérez. González es de mi papá y Pérez de mi mamá.", "My name is María González Pérez. González is from my dad and Pérez from my mum.", "¡Qué interesante! En Inglaterra tenemos solo un apellido.", "How interesting! In England we only have one surname.",
        "Entonces, ¿tú eres la señora Pérez?", "Careful! Her main surname is the first one: González 👩", "¿Tu papá se llama Pérez?", "Pérez is from her mum 👩‍👧",
        { n: "Me llamo María González Pérez. González es de mi padre y Pérez de mi madre." }),
      C("Sí, ¡y mucha gente me llama señora Pérez! Pero no soy la señora Pérez, soy la señora González.", "Yes, and lots of people call me Mrs Pérez! But I'm not Mrs Pérez, I'm Mrs González.", "Entendido: la señora González. ¿Cómo se escribe González?", "Got it: Mrs González. How do you spell González?",
        "Entendido, señora Pérez.", "😂 Weren't you listening?", "¿Cómo se escriba?", "It's escribe: ¿Cómo se escribe? ✏️"),
      C("Con zeta al final, no con ese. Ge, o, ene, zeta, a, ele, e, zeta.", "With a z at the end, not an s. G, O, N, Z, A, L, E, Z.", "¡Ah, con zeta! Y yo soy {N} Smith, con hache al final.", "Ah, with a z! And I'm {N} Smith, with an h at the end.",
        "¡Ah, con ese!", "She said zeta, not ese 🔤", "¿Con zeta? Se me olvidó.", "You just heard it! 😄"),
      C("¡Perfecto, {N}! Ahora no se nos olvida. ¿Un cafecito?", "Perfect, {N}! Now we won't forget. A little coffee?", "¡Sí, con mucho gusto!", "Yes, I'd love to!",
        "¡Sí, con mucha gusta!", "Fixed phrase: con mucho gusto ☕", "Se me olvidó el café.", "Hmm 😄 She's offering you one!")
    ] },
  gq: { name: "Accidental se and spelling", items: [
    G("Se ___ olvidó tu nombre.", "me", "te|se", "I've forgotten your name."),
    G("Se me ___ las llaves.", "olvidaron", "olvidó|olvidé", "I forgot the keys."),
    G("Se me ___ el pasaporte.", "olvidó", "olvidaron|olvido", "I forgot my passport."),
    G("¿Cómo se ___ su apellido?", "escribe", "escribo|escribes", "How do you spell your surname?"),
    G("González se escribe con ___ al final.", "zeta", "ese|ce", "González is spelt with a z at the end."),
    G("No ___ la señora Pérez.", "soy", "estoy|es", "I'm not Mrs Pérez."),
    G("Pérez es el apellido de ___ mamá.", "mi", "me|mí", "Pérez is my mum's surname."),
    G("¿Cuál es ___ apellido? (usted)", "su", "tu|sus", "What's your surname?")
  ] }
});

U(22, {
  sit: "Missed bus or delayed flight", gram: "accidental se (se me fue); estar + participle; ir a for predictions; ahorita",
  tip: "Venezuelans say ¡Se me fue el autobús! (the bus got away from me). In Spain: ¡He perdido el autobús! Ahorita can mean right now, soon or in a while... Venezuelan time is flexible!",
  phrases: [
    "¡Se me fue el autobús!|I've missed the bus!|¡He perdido el autobús!",
    "Tranquil{a/o}, ahorita sale otro.|Don't worry, another one's leaving soon.|Tranquil{a/o}, ahora sale otro.",
    "El vuelo está retrasado dos horas.|The flight is two hours late.",
    "¿Voy a llegar a tiempo para la conexión?|Will I make my connection?",
    "El vuelo está cancelado.|The flight is cancelled.",
    "¿Cuándo sale el próximo?|When does the next one leave?",
    "Perdí el vuelo.|I missed the flight.|He perdido el vuelo.",
    "¿Qué puerta es?|Which gate is it?",
    "Ahorita vengo.|I'll be right back.|Ahora vuelvo.",
    "¿Me puede cambiar el pasaje?|Can you change my ticket?|¿Me puede cambiar el billete?"
  ],
  words: ["✈️|el vuelo|flight", "⏳|retrasado|delayed", "❌|cancelado|cancelled", "🔗|la conexión|connection", "🚪|la puerta|gate",
    "🕐|a tiempo|on time", "⚡|ahorita|right now, soon|ahora", "😌|tranquilo, tranquila|calm, don't worry", "🏃|perder|to miss (a bus, a flight)", "🛎️|el mostrador|desk, counter"],
  chat: { npc: "Gabriela", av: "👩🏾‍✈️", scene: "You missed the bus to the airport and arrive in a panic at the airline desk. Your flight to Los Roques...!", sceneEs: "You missed the bus to the airport and arrive in a panic at the airline desk. Your flight to Mallorca...!",
    lines: [
      C("Buenos días. ¿En qué l{a/o} puedo ayudar?", "Good morning. How can I help you?", "¡Ay, se me fue el autobús y llegué tarde! ¿Ya salió el vuelo a Los Roques?", "Oh, I missed the bus and arrived late! Has the flight to Los Roques left yet?",
        "¡Ay, me fue el autobús!", "Accidental se: SE me fue el autobús 🚌", "Buenos días. Me llamo vuelo.", "😂 Take a breath!",
        { a: "¡Ay, he perdido el autobús y he llegado tarde! ¿Ya ha salido el vuelo a Mallorca?", w: ["¡Ay, me he perdido el autobús!", "Just: he perdido el autobús 🚌"] }),
      C("Tranquil{a/o}. El vuelo está retrasado dos horas. Sale a las doce.", "Don't worry. The flight is two hours late. It leaves at twelve.", "¡Qué suerte! Pero... ¿voy a llegar a tiempo para la conexión?", "Lucky! But... will I make my connection?",
        "¡Qué suerte! El vuelo es retrasado.", "Delayed is a state: está retrasado ⏳", "¿Sale a las dos?", "Two HOURS late; it leaves at twelve 🕛"),
      C("¿A qué hora es su conexión?", "What time is your connection?", "A las dos y media.", "At half past two.",
        "Dos horas.", "She asked what time 🕝", "Ahorita.", "Ahorita = now or soon — not a time 😄",
        { w: ["Ahora.", "Ahora = now — not a time 😄"] }),
      C("Mmm... va a ser difícil. Pero no se preocupe: si pierde la conexión, le cambiamos el pasaje.", "Hmm... it's going to be tight. But don't worry: if you miss the connection, we'll change your ticket.", "Perfecto. ¿Y dónde espero?", "Perfect. And where do I wait?",
        "¿Voy a perder el pasaje?", "She said they'll CHANGE it 🎫", "¿Va a ser fácil?", "She said difícil 😅",
        { n: "Mmm... va a ser difícil. Pero no se preocupe: si pierde la conexión, le cambiamos el billete.", w: ["¿Voy a perder el billete?", "She said they'll CHANGE it 🎫"] }),
      C("En la puerta cinco. Ahorita abren la cafetería.", "At gate five. They're opening the café any minute now.", "¡Chévere! Voy a tomar un café.", "Great! I'm going to have a coffee.",
        "¿Ahorita? ¿Ayer?", "Ahorita = soon, not yesterday 😄", "¿La puerta quince?", "Cinco = five 5️⃣",
        { n: "En la puerta cinco. Ahora abren la cafetería.", a: "¡Genial! Voy a tomar un café.", w: ["¿Ahora? ¿Ayer?", "Ahora = now, not yesterday 😄"] }),
      C("¡Buen viaje! Y esta vez, no se le va a ir el avión, ¿eh?", "Have a good trip! And this time the plane won't get away, right?", "¡Jaja! No se me va a ir. ¡Gracias!", "Haha! It won't get away. Thanks!",
        "¡Jaja! No me voy a ir.", "That means \"I won't leave\" 😄", "¡Se me fue el avión!", "Not yet! 😱",
        { n: "¡Buen viaje! Y esta vez no va a perder el avión, ¿eh?", a: "¡Jaja! No lo voy a perder. ¡Gracias!", w: ["¡He perdido el avión!", "Not yet! 😱"] })
    ] },
  gq: { name: "se me fue, estar + participle", items: [
    G("¡Se ___ fue el autobús!", "me", "mi|yo", "I've missed the bus!", "ve"),
    G("¡He ___ el autobús!", "perdido", "perdí|perder", "I've missed the bus!", "es"),
    G("El vuelo ___ retrasado.", "está", "es|hay", "The flight is delayed."),
    G("Los vuelos están ___.", "cancelados", "cancelado|canceladas", "The flights are cancelled."),
    G("¿Voy a ___ a tiempo?", "llegar", "llego|llegando", "Will I arrive on time?"),
    G("___ sale otro autobús.", "Ahorita", "Ayer|Anoche", "Another bus is leaving soon.", "ve"),
    G("La puerta ___ cerrada.", "está", "es|hay", "The gate is closed."),
    G("No vas a ___ la conexión.", "perder", "pierdes|perdido", "You're not going to miss the connection.")
  ] }
});

U(23, {
  sit: "The room is dirty or something doesn't work", gram: "present progressive; estar for condition; me puede + infinitive",
  tip: "estar + -ando / -iendo describes what is happening right now: la ducha está goteando. Ask for help politely with ¿Me puede + infinitive?: ¿Me puede cambiar de habitación?",
  phrases: [
    "El aire acondicionado no funciona y la ducha está goteando.|The air conditioning doesn't work and the shower is dripping.",
    "Las toallas están sucias.|The towels are dirty.",
    "¿Me puede cambiar de habitación?|Can you move me to another room?",
    "No hay agua caliente.|There's no hot water.",
    "La luz no funciona.|The light doesn't work.",
    "Hay mucho ruido.|It's very noisy.",
    "El baño está sucio.|The bathroom is dirty.",
    "La puerta no cierra.|The door doesn't close.",
    "Está entrando agua por la ventana.|Water is coming in through the window.",
    "¿Puede mandar a alguien, por favor?|Can you send someone, please?"
  ],
  words: ["🔧|no funciona|doesn't work", "🚿|la ducha|shower", "💧|goteando|dripping", "🤢|sucio, sucia|dirty", "💡|la luz|light",
    "🔊|el ruido|noise", "🪟|la ventana|window", "🧹|limpiar|to clean", "🛠️|arreglar|to fix", "🔁|cambiar de habitación|to change rooms"],
  chat: { npc: "Carlos", av: "🧑🏻‍💼", scene: "Late evening at a beach hotel in Puerto La Cruz. Nothing in your room works. You call reception.", sceneEs: "Late evening at a beach hotel in Benidorm. Nothing in your room works. You call reception.",
    lines: [
      C("Recepción, buenas noches.", "Reception, good evening.", "Buenas noches. Hay un problema: el aire acondicionado no funciona.", "Good evening. There's a problem: the air conditioning doesn't work.",
        "Buenas noches. El aire acondicionado no funcionan.", "One air conditioner: funciona 🔧", "Buenas noches. Quisiera una arepa.", "Room service later — tell him the problem! 😄",
        { w: ["Buenas noches. Quisiera una tortilla.", "Room service later — tell him the problem! 😄"] }),
      C("¡Ay, disculpe! ¿Algo más?", "Oh, I'm sorry! Anything else?", "Sí, y la ducha está goteando.", "Yes, and the shower is dripping.",
        "Sí, y la ducha es goteando.", "Happening now: ESTÁ goteando 💧", "Sí, la ducha está muy rica.", "😂 rica is for food"),
      C("Lo siento mucho. ¿Y la habitación está bien?", "I'm very sorry. And is the room OK?", "No, las toallas están sucias y hay mucho ruido.", "No, the towels are dirty and it's very noisy.",
        "No, las toallas son sucias.", "Dirty is a state: están sucias 🧺", "Sí, todo está perfecto.", "Really? Then why are you calling? 🤔"),
      C("¡Qué pena con usted! Ahorita mando a alguien para arreglar la ducha.", "I'm so sorry! I'll send someone right now to fix the shower.", "Gracias, pero... ¿me puede cambiar de habitación?", "Thanks, but... can you move me to another room?",
        "Gracias, pero... ¿me puedo cambiar de habitación?", "Ask HIM: ¿me PUEDE cambiar? 🔁", "Gracias. ¿Me puede traer una pizza?", "Focus! 😄",
        { n: "¡Lo siento mucho! Ahora mando a alguien para arreglar la ducha." }),
      C("Sí, claro. Tenemos una habitación libre en el cuarto piso, con vista al mar.", "Yes, of course. We have a free room on the fourth floor, with a sea view.", "¡Perfecto! ¿Y me puede traer toallas limpias?", "Perfect! And can you bring me clean towels?",
        "¡Perfecto! ¿En el piso catorce?", "Cuarto = fourth 4️⃣", "No, gracias, me gusta el ruido.", "Really? 😂",
        { n: "Sí, claro. Tenemos una habitación libre en la cuarta planta, con vistas al mar.", w: ["¡Perfecto! ¿En la planta catorce?", "Cuarta = fourth 4️⃣"] }),
      C("Por supuesto. En cinco minutos le llevan la llave y las toallas.", "Of course. In five minutes they'll bring you the key and the towels.", "Muchas gracias. Muy amable.", "Thank you very much. Very kind.",
        "¿En cinco horas?", "Minutes, not hours ⏱️", "Las toallas están limpiando.", "The towels aren't cleaning anything 😂")
    ] },
  gq: { name: "estar + -ando / -iendo, estar for condition", items: [
    G("La ducha está ___.", "goteando", "gotea|goteado", "The shower is dripping."),
    G("Las toallas están ___.", "sucias", "sucios|sucia", "The towels are dirty."),
    G("El aire acondicionado no ___.", "funciona", "funcionan|funciono", "The air conditioning doesn't work."),
    G("¿Me ___ cambiar de habitación?", "puede", "puedo|poder", "Can you move me to another room?"),
    G("Están ___ la habitación ahora.", "limpiando", "limpian|limpiado", "They're cleaning the room now."),
    G("El baño ___ sucio.", "está", "es|hay", "The bathroom is dirty."),
    G("¿Me puede ___ toallas limpias?", "traer", "trae|traigo", "Can you bring me clean towels?"),
    G("Las luces no ___.", "funcionan", "funciona|funcionar", "The lights don't work.")
  ] }
});

U(24, {
  sit: "Wrong order, wrong bill", gram: "preterite of pedir and tomar; nos; negative past; hay",
  tip: "Complaints are about what happened, so use the preterite: no pedí esto, nos cobró tres jugos. In Spain, for something that happened today, people use the perfect: no he pedido esto, nos ha cobrado.",
  phrases: [
    "Disculpe, yo no pedí esto. Pedí el pescado frito.|Excuse me, I didn't order this. I ordered the fried fish.|Disculpe, yo no he pedido esto. He pedido el pescado frito.",
    "Creo que hay un error en la cuenta.|I think there's a mistake on the bill.",
    "Nos cobró tres jugos, pero tomamos dos.|You charged us for three juices, but we had two.|Nos ha cobrado tres zumos, pero hemos tomado dos.",
    "La sopa está fría.|The soup is cold.",
    "Esto no es lo que pedí.|This isn't what I ordered.|Esto no es lo que he pedido.",
    "Llevamos media hora esperando.|We've been waiting for half an hour.",
    "Falta una cerveza.|One beer is missing.",
    "¿Puede revisar la cuenta, por favor?|Can you check the bill, please?",
    "No pedimos postre.|We didn't order dessert.|No hemos pedido postre.",
    "Está demasiado salado.|It's too salty."
  ],
  words: ["📝|pedir|to order", "💸|cobrar|to charge", "❗|el error|mistake", "🥣|la sopa|soup", "🍰|el postre|dessert",
    "🧂|salado|salty", "❄️|frío, fría|cold", "🔍|revisar|to check", "⏳|esperar|to wait", "🍟|frito, frita|fried"],
  chat: { npc: "Manuel", av: "🤵🏽", scene: "A busy seafood restaurant on Margarita. Manuel brings your food... but is it yours?", sceneEs: "A busy seafood restaurant in Cádiz. Manuel brings your food... but is it yours?",
    lines: [
      C("Aquí tiene: el pollo con papas.", "Here you are: chicken and chips.", "Disculpe, yo no pedí esto. Pedí el pescado frito.", "Excuse me, I didn't order this. I ordered the fried fish.",
        "Disculpe, yo no pido esto.", "It happened already: no pedí ⏪", "¡Gracias, se ve muy rico!", "But you didn't order it! 😅",
        { n: "Aquí tiene: el pollo con patatas.", a: "Disculpe, yo no he pedido esto. He pedido el pescado frito.", w: ["Disculpe, yo no pido esto.", "It happened already: no he pedido ⏪"] }),
      C("¡Ay, perdón! Ahorita se lo cambio.", "Oh, sorry! I'll change it for you right away.", "Gracias. Y la sopa de mi amiga está fría.", "Thanks. And my friend's soup is cold.",
        "Gracias. Y la sopa de mi amiga es fría.", "A temporary state: está fría 🥣", "Gracias. Y la sopa está muy salado.", "sopa is feminine: salada 🧂",
        { n: "¡Ay, perdón! Ahora se lo cambio." }),
      C("Aquí está el pescado. ¿Todo bien ahora?", "Here's the fish. Everything OK now?", "Sí, perfecto, gracias. Está muy rico.", "Yes, perfect, thanks. It's delicious.",
        "Sí, perfecto. Está muy rica.", "pescado is masculine: rico 🐟", "No, yo pedí el pollo.", "😂 Make up your mind!",
        { w: ["No, yo he pedido el pollo.", "😂 Make up your mind!"] }),
      C("Aquí tiene la cuenta.", "Here's the bill.", "Disculpe, creo que hay un error en la cuenta.", "Excuse me, I think there's a mistake on the bill.",
        "Disculpe, creo que está un error en la cuenta.", "There is = hay ❗", "¡Gracias por todo!", "Check it first! 🔍"),
      C("¿Un error? A ver...", "A mistake? Let's see...", "Nos cobró tres jugos, pero tomamos dos.", "You charged us for three juices, but we had two.",
        "Nos cobra tres jugos, pero tomamos dos.", "Past: nos cobró 💸", "Tomamos tres jugos, pero nos cobró dos.", "Then you'd owe MORE 😂",
        { a: "Nos ha cobrado tres zumos, pero hemos tomado dos.", w: ["Nos cobra tres zumos, pero hemos tomado dos.", "Past: nos ha cobrado 💸"] }),
      C("Tiene razón, disculpe. Y el postre es cortesía de la casa.", "You're right, sorry. And dessert is on the house.", "¡Qué amable! Muchas gracias.", "How kind! Thank you very much.",
        "No pedimos postre.", "It's free! Just say thanks 😄", "¡Es un error!", "No, this time it's a gift 🍰",
        { w: ["No hemos pedido postre.", "It's free! Just say thanks 😄"] })
    ] },
  gq: { name: "pedir, tomar and cobrar in the past", items: [
    G("Yo no ___ esto.", "pedí", "pido|pidió", "I didn't order this.", "ve"),
    G("Yo no he ___ esto.", "pedido", "pedí|pidiendo", "I haven't ordered this.", "es"),
    G("___ el pescado frito.", "Pedí", "Pido|Pidió", "I ordered the fried fish.", "ve"),
    G("Nos ___ tres jugos.", "cobró", "cobra|cobré", "You charged us for three juices.", "ve"),
    G("Nos ha ___ tres zumos.", "cobrado", "cobró|cobrando", "You've charged us for three juices.", "es"),
    G("Pero ___ dos.", "tomamos", "tomé|toman", "But we had two.", "ve"),
    G("Pero hemos ___ dos.", "tomado", "tomamos|tomando", "But we've had two.", "es"),
    G("Creo que ___ un error en la cuenta.", "hay", "está|es", "I think there's a mistake on the bill."),
    G("La sopa ___ fría.", "está", "es|hay", "The soup is cold."),
    G("¿___ puede traer otra cerveza?", "Nos", "Nosotros|Les", "Can you bring us another beer?")
  ] }
});

U(25, {
  sit: "Wrong size, asking for a refund", gram: "direct object pronouns (los); comparatives; quedar; pagué",
  tip: "Object pronouns go before the verb: ¿Los tiene en una talla más grande? (los = the shoes). Quedar works like gustar: me quedan pequeños = they're too small for me. Ayer takes the preterite everywhere, in Spain too.",
  phrases: [
    "Ayer compré estos zapatos, pero me quedan pequeños.|I bought these shoes yesterday, but they're too small for me.",
    "¿Los tiene en una talla más grande?|Do you have them a size bigger?",
    "¿Me puede devolver el dinero? Pagué con tarjeta.|Can you give me a refund? I paid by card.",
    "Aquí tiene el recibo.|Here's the receipt.|Aquí tiene el tique.",
    "Me queda grande.|It's too big for me.",
    "¿Lo puedo cambiar?|Can I exchange it?",
    "Están rotos.|They're broken.",
    "Quisiera devolver esta franela.|I'd like to return this T-shirt.|Quisiera devolver esta camiseta.",
    "¿La tiene en otro color?|Do you have it in another colour?",
    "Estos son más cómodos.|These are more comfortable."
  ],
  words: ["🧾|el recibo|receipt|el tique", "💵|devolver el dinero|to give a refund", "🔄|cambiar|to exchange", "👞|los zapatos|shoes", "🤏|pequeño|small",
    "🐘|grande|big", "👗|quedar|to fit", "💔|roto, rota|broken", "💳|pagar con tarjeta|to pay by card", "🛋️|cómodo|comfortable"],
  chat: { npc: "Lucía", av: "👩🏼‍💼", scene: "A shoe shop in Caracas. The shoes you bought yesterday are killing your feet.", sceneEs: "A shoe shop in Madrid. The shoes you bought yesterday are killing your feet.",
    lines: [
      C("¡A la orden! ¿Qué necesita?", "Hello, how can I help? What do you need?", "Buenas. Ayer compré estos zapatos, pero me quedan pequeños.", "Hello. I bought these shoes yesterday, but they're too small for me.",
        "Buenas. Ayer compro estos zapatos.", "Yesterday → compré ⏪", "Buenas. Me quedan pequeño.", "zapatos is plural: pequeños 👟",
        { n: "¡Hola! ¿Qué necesita?" }),
      C("¡Ay, qué pena! ¿Tiene el recibo?", "Oh, what a shame! Do you have the receipt?", "Sí, aquí tiene el recibo.", "Yes, here's the receipt.",
        "Sí, aquí tiene el zapato.", "Receipt = recibo 🧾", "No, pagué con zapatos.", "😂",
        { n: "¡Vaya, qué pena! ¿Tiene el tique?", a: "Sí, aquí tiene el tique.", w: ["Sí, aquí tiene el zapato.", "Receipt = tique 🧾"] }),
      C("Gracias. ¿Los quiere cambiar?", "Thanks. Do you want to exchange them?", "Sí. ¿Los tiene en una talla más grande?", "Yes. Do you have them a size bigger?",
        "Sí. ¿Las tiene en una talla más grande?", "zapatos is masculine: los 👟", "Sí. ¿Los tiene en una talla más pequeña?", "They're already too small! 😄"),
      C("Lo siento, no quedan en su talla. Pero tenemos estos: son más cómodos.", "Sorry, there are none left in your size. But we have these: they're more comfortable.", "Mmm, no me gustan mucho. ¿Me puede devolver el dinero?", "Hmm, I don't really like them. Can you give me a refund?",
        "Mmm, no me gusta mucho estos.", "Plural: no me gustan 🙂", "¿Más cómodos que una cama?", "😂 Nice try"),
      C("Sí, claro. ¿Cómo pagó?", "Yes, of course. How did you pay?", "Pagué con tarjeta.", "I paid by card.",
        "Pago con tarjeta.", "It happened yesterday: pagué 💳", "Pagué con zapatos.", "😂"),
      C("Listo. El dinero llega a su tarjeta en tres días. ¡Disculpe las molestias!", "Done. The money will be back on your card in three days. Sorry for the trouble!", "No hay problema. ¡Gracias!", "No problem. Thanks!",
        "¿Tres años?", "Days, not years 📅", "¡Disculpe las molestias!", "That's her line 😉")
    ] },
  gq: { name: "lo, la, los, las and quedar", items: [
    G("¿___ tiene en una talla más grande? (los zapatos)", "Los", "Las|Les", "Do you have them a size bigger?"),
    G("¿___ tiene en azul? (la franela)", "La", "Lo|Le", "Do you have it in blue?", "ve"),
    G("¿___ tiene en azul? (la camiseta)", "La", "Lo|Le", "Do you have it in blue?", "es"),
    G("Los zapatos me ___ pequeños.", "quedan", "queda|quedo", "The shoes are too small for me."),
    G("La falda me ___ grande.", "queda", "quedan|quedo", "The skirt is too big for me."),
    G("Ayer ___ estos zapatos.", "compré", "compro|compra", "Yesterday I bought these shoes."),
    G("___ con tarjeta.", "Pagué", "Pago|Pagaste", "I paid by card."),
    G("Estos zapatos son ___ cómodos.", "más", "mucho|tan", "These shoes are more comfortable."),
    G("¿Me puede ___ el dinero?", "devolver", "devuelve|devolví", "Can you give me a refund?")
  ] }
});

U(26, {
  sit: "You're lost or on the wrong bus", gram: "reflexive preterite (me monté); estar perdida; por (through)",
  tip: "Venezuelans montarse en and bajarse de the bus (Spain: subirse a / bajarse de). Pasar por = to go past or through. Older Venezuelans may call you mija / mijo (my daughter / my son) — it's friendly!",
  phrases: [
    "Creo que estoy perdid{a/o}. ¿Dónde estamos?|I think I'm lost. Where are we?",
    "Me monté en el autobús equivocado.|I got on the wrong bus.|Me he subido al autobús equivocado.",
    "¿Este autobús pasa por la plaza Altamira?|Does this bus go past Plaza Altamira?|¿Este autobús pasa por la Puerta del Sol?",
    "¿Dónde me bajo?|Where do I get off?",
    "Tiene que bajarse en la próxima parada.|You have to get off at the next stop.",
    "Tomé la dirección equivocada.|I went the wrong way.|He tomado la dirección equivocada.",
    "¿Me puede mostrar en el mapa?|Can you show me on the map?",
    "Se me acabó la batería del teléfono.|My phone battery has died.|Se me ha acabado la batería del teléfono.",
    "¿Por dónde se va al hotel?|Which way is it to the hotel?",
    "Estamos lejos del centro.|We're far from the centre."
  ],
  words: ["😟|perdido, perdida|lost", "❌|equivocado|wrong", "🗺️|el mapa|map", "🧭|la dirección|direction; address", "🚏|la próxima parada|the next stop",
    "🔋|la batería|battery", "⬆️|montarse en|to get on|subirse a", "⬇️|bajarse de|to get off", "↔️|pasar por|to go past, through", "📍|¿dónde estamos?|where are we?"],
  chat: { npc: "Don Felipe", av: "👴🏾", scene: "You're on a bus in Caracas, but nothing outside looks familiar. The older man next to you notices.", sceneEs: "You're on a bus in Madrid, but nothing outside looks familiar. The older man next to you notices.",
    lines: [
      C("¿Está bien, mi{ja/jo}? Parece preocupad{a/o}.", "Are you OK, dear? You look worried.", "Creo que estoy perdid{a/o}. ¿Dónde estamos?", "I think I'm lost. Where are we?",
        "Creo que soy perdid{a/o}.", "Being lost is a state: estoy 😟", "Estoy bien, gracias. Chao.", "But you ARE lost! 😅",
        { n: "¿Está bien, hij{a/o}? Parece preocupad{a/o}.", w: ["Estoy bien, gracias. Adiós.", "But you ARE lost! 😅"] }),
      C("Estamos en Petare. ¿Para dónde va?", "We're in Petare. Where are you going?", "Voy a la plaza Altamira. ¿Este autobús pasa por la plaza Altamira?", "I'm going to Plaza Altamira. Does this bus go past Plaza Altamira?",
        "Voy a la plaza Altamira. ¿Este autobús pasa para Altamira?", "Go past = pasar POR ↔️", "Voy a la playa.", "In the city? 😄 Where are you really going?",
        { n: "Estamos en Vallecas. ¿Adónde va?", a: "Voy a la Puerta del Sol. ¿Este autobús pasa por la Puerta del Sol?", w: ["Voy a la Puerta del Sol. ¿Este autobús pasa para Sol?", "Go past = pasar POR ↔️"] }),
      C("¡No, mi{ja/jo}! Este va en la otra dirección.", "No, dear! This one goes the other way.", "¡Ay, no! Me monté en el autobús equivocado.", "Oh no! I got on the wrong bus.",
        "¡Ay, no! Me monto en el autobús equivocado.", "It already happened: me monté ⏪", "¡Qué bueno!", "Good?! You're going the wrong way 😂",
        { n: "¡No, hij{a/o}! Este va en la otra dirección.", a: "¡Ay, no! Me he subido al autobús equivocado.", w: ["¡Ay, no! Me subo al autobús equivocado.", "It already happened: me he subido ⏪"] }),
      C("No se preocupe. Bájese en la próxima parada y agarre el metro.", "Don't worry. Get off at the next stop and take the metro.", "¿En la próxima parada? ¿Y el metro me lleva a Altamira?", "At the next stop? And the metro takes me to Altamira?",
        "¿Me monto en la próxima parada?", "Get OFF: bajarse ⬇️", "¿Agarro el autobús otra vez?", "He said the metro 🚇",
        { n: "No se preocupe. Bájese en la próxima parada y coja el metro.", a: "¿En la próxima parada? ¿Y el metro me lleva a Sol?", w: ["¿Me subo en la próxima parada?", "Get OFF: bajarse ⬇️"] }),
      C("Sí, la línea uno. Altamira está a cinco estaciones.", "Yes, line one. Altamira is five stops away.", "Perfecto. Se me acabó la batería del teléfono... ¡Menos mal que usted está aquí!", "Perfect. My phone battery died... Good thing you're here!",
        "Se me acabé la batería.", "The battery ran out: se me acabó 🔋", "¿Cinco horas?", "Stations, not hours 🚇",
        { n: "Sí, la línea uno. Sol está a cinco estaciones.", a: "Perfecto. Se me ha acabado la batería del teléfono... ¡Menos mal que usted está aquí!", w: ["Se me he acabado la batería.", "The battery ran out: se me ha acabado 🔋"] }),
      C("¡Para eso estamos! Aquí es. ¡Cuídese!", "That's what we're here for! This is it. Take care!", "¡Muchísimas gracias, señor! ¡Cuídese también!", "Thank you so much, sir! You take care too!",
        "¡Para eso estamos!", "That's his line 😄", "Me monto aquí.", "Now you get OFF 😉",
        { w: ["Me subo aquí.", "Now you get OFF 😉"] })
    ] },
  gq: { name: "Reflexive preterite and por", items: [
    G("Me ___ en el autobús equivocado.", "monté", "monto|montó", "I got on the wrong bus.", "ve"),
    G("Me he ___ al autobús equivocado.", "subido", "subí|subiendo", "I've got on the wrong bus.", "es"),
    G("Creo que ___ perdid{a/o}.", "estoy", "soy|tengo", "I think I'm lost."),
    G("¿Este autobús pasa ___ la plaza?", "por", "para|de", "Does this bus go past the square?"),
    G("Tiene que ___ en la próxima parada.", "bajarse", "baja|bajó", "You have to get off at the next stop."),
    G("Ayer me ___ del autobús en el centro.", "bajé", "bajo|bajó", "Yesterday I got off the bus in the centre."),
    G("Se me ___ la batería.", "acabó", "acabé|acabaron", "My battery died.", "ve"),
    G("Caminamos ___ el parque.", "por", "para|en", "We walked through the park.")
  ] }
});

U(27, {
  sit: "Rain cancels the trip", gram: "por for cause; impersonal they (cancelaron); si + present; future simple",
  tip: "Por gives the reason: por la lluvia = because of the rain. Cancelaron = \"they\" cancelled (no person named). Si + present, then the future: si llueve, vamos al museo. Venezuelans call a downpour un palo de agua!",
  phrases: [
    "Cancelaron el paseo por la lluvia.|They cancelled the trip because of the rain.|Han cancelado la excursión por la lluvia.",
    "Si llueve mañana, vamos a ir al museo.|If it rains tomorrow, we'll go to the museum.",
    "Tal vez mañana hará mejor tiempo.|Maybe the weather will be better tomorrow.",
    "¡Qué mala suerte!|What bad luck!",
    "¿Me devuelven el dinero?|Will I get my money back?",
    "Está cayendo un palo de agua.|It's pouring with rain.|Está lloviendo a cántaros.",
    "Mañana saldrá el sol.|The sun will come out tomorrow.",
    "Si hace buen tiempo, vamos a la playa.|If the weather's good, we'll go to the beach.",
    "¿Qué podemos hacer cuando llueve?|What can we do when it rains?",
    "Lo cambiaron para el jueves.|They moved it to Thursday.|Lo han cambiado al jueves."
  ],
  words: ["☔|la lluvia|rain", "🚫|cancelar|to cancel", "🚤|el paseo|trip, outing|la excursión", "🍀|la suerte|luck", "🔮|tal vez|maybe",
    "🌈|mejor tiempo|better weather", "🌊|un palo de agua|a downpour|un chaparrón", "📆|el jueves|Thursday", "🏛️|el museo|museum", "🌞|saldrá el sol|the sun will come out"],
  chat: { npc: "Óscar", av: "🧑🏾‍🦲", scene: "Los Roques: today was the big boat trip to the islands. But the sky is grey and Óscar, the guide, looks serious.", sceneEs: "Mallorca: today was the big boat trip along the coast. But the sky is grey and Óscar, the guide, looks serious.",
    lines: [
      C("Buenos días. Lo siento mucho: cancelaron el paseo en lancha por la lluvia.", "Good morning. I'm very sorry: they've cancelled the boat trip because of the rain.", "¡Qué mala suerte! ¿Por la lluvia?", "What bad luck! Because of the rain?",
        "¡Qué buena suerte!", "Good luck?! 😅", "¿Cancelaron la lluvia?", "😂 If only!",
        { n: "Buenos días. Lo siento mucho: han cancelado la excursión en barco por la lluvia." }),
      C("Sí, está cayendo un palo de agua y hay mucho viento en el mar.", "Yes, it's pouring and it's very windy at sea.", "Entiendo. ¿Me devuelven el dinero?", "I see. Will I get my money back?",
        "Entiendo. ¿Me devuelvo el dinero?", "Ask THEM: ¿me devuelven? 💵", "¿Un palo? ¿De madera?", "😂 un palo de agua = a downpour",
        { n: "Sí, está lloviendo a cántaros y hay mucho viento en el mar.", w: ["¿Cántaros? ¿Qué cántaros?", "😂 llover a cántaros = to pour"] }),
      C("Sí, o lo cambiamos para mañana. Tal vez mañana hará mejor tiempo.", "Yes, or we move it to tomorrow. Maybe the weather will be better tomorrow.", "Prefiero mañana. ¿Y si llueve mañana también?", "I'd rather do tomorrow. And if it rains tomorrow too?",
        "Prefiero ayer.", "😂 Too late!", "¿Y si llover mañana?", "After si, use the present: si llueve 🌧️",
        { n: "Sí, o lo cambiamos a mañana. Tal vez mañana hará mejor tiempo." }),
      C("Si llueve mañana, les devolvemos todo el dinero.", "If it rains tomorrow, we'll give you all your money back.", "Perfecto. ¿Y qué podemos hacer hoy?", "Perfect. And what can we do today?",
        "¿Y si no llueve, me devuelven el dinero?", "Then you go on the trip! 🚤", "Perfecto. Si llueve, cancelé.", "Hmm, not quite 😄",
        { n: "Si llueve mañana, os devolvemos todo el dinero." }),
      C("Si quieren, pueden ir al museo del pueblo, o a la heladería.", "If you like, you can go to the village museum, or the ice cream shop.", "¡Buena idea! Si llueve, vamos a comer helado.", "Good idea! If it rains, we'll eat ice cream.",
        "¡Buena idea! Si llueve, fuimos al museo.", "Si + present, then the future: vamos 🏛️", "¿Hay helado de lluvia?", "😂",
        { n: "Si queréis, podéis ir al museo del pueblo, o a la heladería." }),
      C("¡Así me gusta! Nos vemos mañana a las ocho, en el muelle.", "That's the spirit! See you tomorrow at eight, at the pier.", "¡Hasta mañana! Seguro que mañana saldrá el sol.", "See you tomorrow! I'm sure the sun will come out tomorrow.",
        "¡Nos vemos ayer!", "😂", "¿A las ocho de la noche?", "In the morning! 🌅")
    ] },
  gq: { name: "por, si + present, the future", items: [
    G("Cancelaron el paseo ___ la lluvia.", "por", "para|de", "They cancelled the trip because of the rain.", "ve"),
    G("Han cancelado la excursión ___ la lluvia.", "por", "para|de", "They've cancelled the trip because of the rain.", "es"),
    G("Si ___ mañana, vamos al museo.", "llueve", "llover|lloverá", "If it rains tomorrow, we'll go to the museum."),
    G("Tal vez mañana ___ mejor tiempo.", "hará", "hizo|hacía", "Maybe the weather will be better tomorrow."),
    G("Mañana ___ el sol.", "saldrá", "salió|salía", "The sun will come out tomorrow."),
    G("Si hace sol, ___ a la playa.", "vamos", "fuimos|íbamos", "If it's sunny, we'll go to the beach."),
    G("___ el paseo para el jueves. (they)", "Cambiaron", "Cambié|Cambiamos", "They moved the trip to Thursday.", "ve"),
    G("Mañana ___ calor.", "hará", "hizo|hacía", "It'll be hot tomorrow.")
  ] }
});

U(28, {
  sit: "The museum is closed or sold out", gram: "estar + participle (cerrado); los lunes; de ... a; ya no quedan",
  tip: "estar + participle describes a state: está cerrado, están agotadas. Ya no quedan = there are none left. Days with los mean every week: los lunes = on Mondays. Opening hours: de nueve a cinco, de martes a domingo.",
  phrases: [
    "El museo está cerrado los lunes.|The museum is closed on Mondays.",
    "Lo siento, ya no quedan entradas para hoy.|Sorry, there are no tickets left for today.",
    "Abrimos de nueve a cinco, de martes a domingo.|We're open from nine to five, Tuesday to Sunday.",
    "¿Quedan entradas para mañana?|Are there any tickets left for tomorrow?",
    "¿Se pueden reservar por internet?|Can you book them online?",
    "¡Qué lástima!|What a pity!",
    "La sala tres está cerrada por obras.|Room three is closed for building work.",
    "Ya no hay visitas guiadas hoy.|There are no more guided tours today.",
    "Nunca abren los lunes.|They never open on Mondays.",
    "Tampoco abren los días festivos.|They don't open on public holidays either."
  ],
  words: ["🔒|cerrado|closed", "🔓|abierto|open", "🎫|las entradas|tickets", "🈵|agotado|sold out", "🗓️|los lunes|on Mondays",
    "🏗️|las obras|building work", "🎨|la exposición|exhibition", "💻|por internet|online", "🎉|el día festivo|public holiday", "😞|¡qué lástima!|what a pity!"],
  chat: { npc: "Isabel", av: "👩🏻‍🦰", scene: "The art museum in Caracas has a famous exhibition this week. You arrive at the ticket desk.", sceneEs: "The Prado Museum in Madrid has a famous exhibition this week. You arrive at the ticket desk.",
    lines: [
      C("Buenas tardes. ¿Qué desea?", "Good afternoon. What would you like?", "Buenas tardes. Dos entradas para la exposición, por favor.", "Good afternoon. Two tickets for the exhibition, please.",
        "Buenas tardes. Dos entrada.", "Plural: dos entradas 🎫", "Buenas tardes. ¿El museo está cerrado?", "You're inside — it's open! 😄"),
      C("Lo siento, ya no quedan entradas para hoy. Están agotadas.", "Sorry, there are no tickets left for today. They're sold out.", "¡Qué lástima! ¿Quedan entradas para mañana?", "What a pity! Are there any tickets left for tomorrow?",
        "¡Qué lástima! ¿Queda entradas para mañana?", "Plural: ¿quedan entradas? 🎫", "¡Qué bueno!", "Good? 😅"),
      C("Mañana es lunes, y el museo está cerrado los lunes.", "Tomorrow is Monday, and the museum is closed on Mondays.", "¿Cerrado los lunes? ¿Y el martes?", "Closed on Mondays? And on Tuesday?",
        "¿Cerrada los lunes?", "museo is masculine: cerrado 🔒", "¿Abierto el lunes?", "She said closed! 🔒"),
      C("El martes sí. Abrimos de nueve a cinco, de martes a domingo.", "Tuesday, yes. We're open from nine to five, Tuesday to Sunday.", "Perfecto. ¿Se pueden reservar las entradas por internet?", "Perfect. Can you book the tickets online?",
        "Perfecto. ¿Abren de cinco a nueve?", "Nine to five 🕘", "¿Abren de lunes a lunes?", "😂"),
      C("Sí, en nuestra página web. Pero la sala tres está cerrada por obras.", "Yes, on our website. But room three is closed for building work.", "No importa. ¿Hay visitas guiadas en inglés?", "Never mind. Are there guided tours in English?",
        "¿La sala tres está cerrado?", "sala is feminine: cerrada 🏗️", "¿Por obras de arte?", "Obras = building work here 😄"),
      C("Ya no, lo siento. Pero tenemos audioguías en inglés.", "Not any more, sorry. But we have audio guides in English.", "¡Chévere! Entonces nos vemos el martes. ¡Gracias!", "Great! Then see you on Tuesday. Thanks!",
        "Entonces nos vemos el lunes.", "Closed on Mondays! 🔒", "Tampoco, gracias.", "Hmm 🤔",
        { a: "¡Genial! Entonces nos vemos el martes. ¡Gracias!" })
    ] },
  gq: { name: "cerrado, agotado, ya no, nunca", items: [
    G("El museo está ___ los lunes.", "cerrado", "cerrada|cierra", "The museum is closed on Mondays."),
    G("La tienda está ___.", "abierta", "abierto|abre", "The shop is open."),
    G("El museo está cerrado ___ lunes.", "los", "el|en", "The museum is closed on Mondays."),
    G("Abrimos ___ nueve a cinco.", "de", "a|en", "We're open from nine to five."),
    G("Ya no ___ entradas para hoy.", "quedan", "queda|quedamos", "There are no tickets left for today."),
    G("Las entradas están ___.", "agotadas", "agotado|agotada", "The tickets are sold out."),
    G("___ abren los lunes.", "Nunca", "Nada|Nadie", "They never open on Mondays."),
    G("Yo ___ tengo entradas.", "tampoco", "también|nunca no", "I don't have tickets either.")
  ] }
});

U(29, {
  sit: "Someone is ill: sunburn, a fall, food poisoning", gram: "irregular and reflexive preterite (me caí, se quemó); le cayó mal; possessives",
  tip: "Many key verbs are irregular in the preterite: me caí, se quemó, le cayó mal (it disagreed with him). In Spain, for things that happened today: me he caído, se ha quemado, and food le sienta mal.",
  phrases: [
    "Me caí en la playa y me duele el tobillo.|I fell on the beach and my ankle hurts.|Me he caído en la playa y me duele el tobillo.",
    "{Mi esposo/Mi esposa} comió algo que le cayó mal y vomitó toda la noche.|My husband / wife ate something that disagreed with them and was sick all night.|{Mi marido/Mi mujer} comió algo que le sentó mal y vomitó toda la noche.",
    "Mi hija se quemó con el sol.|My daughter got sunburnt.|Mi hija se ha quemado con el sol.",
    "Creo que me torcí el tobillo.|I think I've twisted my ankle.",
    "¿Tiene crema para las quemaduras?|Do you have cream for burns?",
    "Le picó un mosquito.|A mosquito bit him / her.",
    "Mi hijo se cortó con una concha.|My son cut himself on a shell.",
    "¿Necesita ir al médico?|Does he / she need to see a doctor?",
    "¿Es grave?|Is it serious?",
    "Está un poco hinchado.|It's a bit swollen."
  ],
  words: ["🦶|el tobillo|ankle", "🔥|la quemadura|burn", "☀️|quemarse con el sol|to get sunburnt", "🤮|vomitar|to be sick", "🦟|la picadura|bite, sting",
    "🧴|la crema|cream", "🐚|la concha|shell", "😣|caerse|to fall", "❗|grave|serious", "🕶️|el protector solar|sun cream|la crema solar"],
  chat: { npc: "Señora Luisa", av: "👩🏽‍⚕️", scene: "A family holiday in Margarita goes wrong: a fall, a bad prawn and too much sun. Back to the pharmacy!", sceneEs: "A family holiday in Málaga goes wrong: a fall, a bad prawn and too much sun. Back to the pharmacy!",
    lines: [
      C("¡Hola otra vez! ¿Qué pasó?", "Hello again! What happened?", "Me caí en la playa y me duele el tobillo.", "I fell on the beach and my ankle hurts.",
        "Me caigo en la playa ayer.", "It happened: me caí ⏪", "Me duele la playa.", "😂 The beach doesn't hurt",
        { n: "¡Hola otra vez! ¿Qué ha pasado?", a: "Me he caído en la playa y me duele el tobillo.", w: ["Me caigo en la playa hoy.", "It happened today: me he caído ⏪"] }),
      C("A ver... está un poco hinchado. Póngase hielo y esta crema. ¿Algo más?", "Let's see... it's a bit swollen. Put ice and this cream on it. Anything else?", "Sí, {mi esposo/mi esposa} comió algo que le cayó mal.", "Yes, my husband / wife ate something that disagreed with them.",
        "Sí, {mi esposo/mi esposa} comió algo que me cayó mal.", "It disagreed with HIM / HER: le cayó mal 🤢", "Sí, me comí el tobillo.", "😂",
        { a: "Sí, {mi marido/mi mujer} comió algo que le sentó mal.", w: ["Sí, {mi marido/mi mujer} comió algo que me sentó mal.", "It disagreed with HIM / HER: le sentó mal 🤢"] }),
      C("¡Ay! ¿Tiene fiebre?", "Oh no! Does he / she have a fever?", "No, pero vomitó toda la noche.", "No, but was sick all night.",
        "No, pero vomito toda la noche.", "Past: vomitó ⏪", "Sí, tiene fiebre de playa.", "😂"),
      C("Tiene que tomar mucha agua y este suero oral. ¿Y el resto de la familia, todo bien?", "He / she has to drink lots of water and this rehydration drink. And the rest of the family, everything OK?", "No mucho... mi hija se quemó con el sol.", "Not really... my daughter got sunburnt.",
        "No mucho... mi hija se quemé con el sol.", "She got burnt: se quemó ☀️", "Mi hija comió el sol.", "😂",
        { n: "Tiene que beber mucha agua y este suero oral. ¿Y el resto de la familia, todo bien?", a: "No mucho... mi hija se ha quemado con el sol.", w: ["No mucho... mi hija se he quemado con el sol.", "She got burnt: se ha quemado ☀️"] }),
      C("¡Pobrecita! Para las quemaduras, esta crema de aloe. Y usen protector solar, ¿eh?", "Poor thing! For the burns, this aloe cream. And use sun cream, OK?", "Sí, ya aprendimos la lección. ¿Cuánto es todo?", "Yes, we've learnt our lesson. How much is everything?",
        "Sí, usamos protector solar ayer.", "Then why the burn? 😅", "¿Crema de arepa?", "Aloe, not arepa 😂",
        { n: "¡Pobrecita! Para las quemaduras, esta crema de aloe. Y usad crema solar, ¿eh?", a: "Sí, ya hemos aprendido la lección. ¿Cuánto es todo?", w: ["¿Crema de tortilla?", "Aloe, not tortilla 😂"] }),
      C("Son treinta dólares. ¡Que se mejoren todos!", "That's thirty dollars. Get well soon, all of you!", "Gracias, señora Luisa. ¡Usted es un ángel!", "Thank you, Señora Luisa. You're an angel!",
        "¡Que se mejoren!", "That's her line 😉", "¿Treinta días?", "Dollars 💵",
        { n: "Son treinta euros. ¡Que se mejoren todos!", w: ["¿Treinta días?", "Euros 💶"] })
    ] },
  gq: { name: "Irregular preterite: me caí, se quemó", items: [
    G("Me ___ en la playa.", "caí", "caigo|cayó", "I fell on the beach.", "ve"),
    G("Me he ___ en la playa.", "caído", "caí|cayendo", "I've fallen on the beach.", "es"),
    G("Mi hija se ___ con el sol.", "quemó", "quemé|quemaron", "My daughter got sunburnt.", "ve"),
    G("Mi hija se ha ___ con el sol.", "quemado", "quemó|quemando", "My daughter has got sunburnt.", "es"),
    G("La comida le ___ mal.", "cayó", "caí|caen", "The food disagreed with him.", "ve"),
    G("La comida le ___ mal.", "sentó", "sentí|sentaron", "The food disagreed with him.", "es"),
    G("___ esposo vomitó toda la noche.", "Mi", "Me|Mí", "My husband was sick all night."),
    G("¿Cómo se llama ___ hija? (usted)", "su", "sus|tu", "What's your daughter called?"),
    G("Mis hijos ___ quemaron con el sol.", "se", "le|me", "My children got sunburnt."),
    G("¿___ grave?", "Es", "Está|Hay", "Is it serious?")
  ] }
});

U(30, {
  sit: "Lost luggage at the airport", gram: "imperfect for description (era, tenía) and preterite for the event (no llegó); double pronouns",
  tip: "The imperfect describes things in the past (era negra, tenía una cinta roja); the preterite tells what happened (no llegó). Two pronouns together: me la, se la — never le la. A boarding pass is un pase de abordar in Venezuela.",
  phrases: [
    "Mi maleta no llegó.|My suitcase didn't arrive.|Mi maleta no ha llegado.",
    "Era una maleta negra grande y tenía una cinta roja.|It was a big black suitcase with a red ribbon.",
    "¿Cuándo me la van a mandar? Se la enviamos al hotel mañana.|When will you send it to me? We'll send it to your hotel tomorrow.",
    "¿Dónde está la oficina de equipaje perdido?|Where's the lost luggage office?",
    "Aquí tiene mi pase de abordar.|Here's my boarding pass.|Aquí tiene mi tarjeta de embarque.",
    "Tenía ropa y regalos.|It had clothes and presents in it.",
    "Mi vuelo venía de Margarita.|My flight was coming from Margarita.|Mi vuelo venía de Mallorca.",
    "¿Me la pueden mandar a mi casa?|Can you send it to my home?",
    "Este es mi número de teléfono.|This is my phone number.",
    "Era pequeña, azul y tenía ruedas.|It was small, blue and had wheels."
  ],
  words: ["🧳|el equipaje|luggage", "🎀|la cinta|ribbon", "🎫|el pase de abordar|boarding pass|la tarjeta de embarque", "🛞|las ruedas|wheels", "📦|mandar, enviar|to send",
    "🕵️|perdido|lost", "📝|el formulario|form", "👕|la ropa|clothes", "🎁|los regalos|presents", "🛄|la cinta de equipaje|baggage carousel"],
  chat: { npc: "Señor Rivas", av: "👨🏼‍💼", scene: "Your flight from Margarita lands in Caracas. The carousel stops... and your suitcase isn't there.", sceneEs: "Your flight from Mallorca lands in Madrid. The carousel stops... and your suitcase isn't there.",
    lines: [
      C("Buenas tardes. ¿En qué l{a/o} puedo ayudar?", "Good afternoon. How can I help you?", "Buenas tardes. Mi maleta no llegó.", "Good afternoon. My suitcase didn't arrive.",
        "Buenas tardes. Mi maleta no llega ayer.", "Past: no llegó 🧳", "Buenas tardes. Mi maleta es perdida.", "Better: no llegó (it didn't arrive) 🧳",
        { a: "Buenas tardes. Mi maleta no ha llegado.", w: ["Buenas tardes. Mi maleta no llega hoy.", "Past: no ha llegado 🧳"] }),
      C("Lo siento mucho. ¿De dónde venía su vuelo?", "I'm very sorry. Where was your flight coming from?", "Venía de Margarita. Aquí tiene mi pase de abordar.", "It was coming from Margarita. Here's my boarding pass.",
        "Venía de mi maleta.", "😂", "Vengo de Inglaterra.", "He asked about THIS flight ✈️",
        { a: "Venía de Mallorca. Aquí tiene mi tarjeta de embarque." }),
      C("Gracias. ¿Cómo era la maleta?", "Thanks. What was the suitcase like?", "Era una maleta negra grande y tenía una cinta roja.", "It was a big black suitcase with a red ribbon.",
        "Fue una maleta negra grande.", "Description: era 🖤", "Era una maleta negro grande.", "maleta is feminine: negra 🧳"),
      C("¿Y qué tenía adentro?", "And what did it have inside?", "Tenía ropa y unos regalos para mi familia.", "It had clothes and some presents for my family.",
        "Tuve ropa y regalos.", "The suitcase had: tenía 🎁", "Tenía una cinta roja.", "That's outside 😉",
        { n: "¿Y qué tenía dentro?" }),
      C("Muy bien. Creo que la maleta se quedó en Margarita.", "OK. I think the suitcase stayed behind in Margarita.", "¿Y cuándo me la van a mandar?", "And when are you going to send it to me?",
        "¿Y cuándo me lo van a mandar?", "maleta is feminine: me LA 🧳", "¿La va a llevar a Margarita?", "😂 It's already there!",
        { n: "Muy bien. Creo que la maleta se ha quedado en Mallorca.", w: ["¿La va a llevar a Mallorca?", "😂 It's already there!"] }),
      C("Se la enviamos al hotel mañana en la mañana. Llene este formulario, por favor.", "We'll send it to your hotel tomorrow morning. Please fill in this form.", "Perfecto. Aquí está mi número de teléfono. ¡Gracias!", "Perfect. Here's my phone number. Thanks!",
        "¿Me la enviamos mañana?", "THEY send it to you: se la envían 📦", "¿Mañana en la noche?", "He said in the morning 🌅",
        { n: "Se la enviamos al hotel mañana por la mañana. Rellene este formulario, por favor.", w: ["¿Mañana por la noche?", "He said in the morning 🌅"] })
    ] },
  gq: { name: "Imperfect or preterite? me la, se la", items: [
    G("Mi maleta no ___.", "llegó", "llegaba|llegué", "My suitcase didn't arrive.", "ve"),
    G("Mi maleta no ha ___.", "llegado", "llegó|llegando", "My suitcase hasn't arrived.", "es"),
    G("___ una maleta negra grande.", "Era", "Fue|Estuvo", "It was a big black suitcase."),
    G("___ una cinta roja.", "Tenía", "Tuvo|Tengo", "It had a red ribbon."),
    G("¿Cuándo me ___ van a mandar? (la maleta)", "la", "lo|le", "When are you going to send it to me?"),
    G("___ la enviamos al hotel. (to you, usted)", "Se", "Le|Lo", "We'll send it to your hotel."),
    G("¿Me ___ puede mandar a casa? (el equipaje)", "lo", "la|le", "Can you send it to my house?"),
    G("La maleta ___ ruedas.", "tenía", "tuvo|tuve", "The suitcase had wheels.")
  ] }
});
