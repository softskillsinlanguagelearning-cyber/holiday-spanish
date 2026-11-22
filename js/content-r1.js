// =====================================================================
// ROUND 1: Words and phrases (units 1 to 10)
// =====================================================================

U(1, {
  sit: "Meeting your host, saying who you are", gram: "ser; me llamo as a fixed phrase; tú or usted; de dónde",
  tip: "Venezuelans say ¿Qué más? for \"How's it going?\" (Spain: ¿Qué tal?). Use tú with friends and your host, usted with strangers, older people and in shops. In Maracaibo people say vos, but you don't need it.",
  phrases: [
    "¡Hola! Me llamo {N}. Mucho gusto.|Hi! I'm {N}. Nice to meet you.",
    "Soy de Inglaterra. ¿Y tú, de dónde eres?|I'm from England. And you, where are you from?",
    "¿Qué más? ¿Cómo estás?|How's it going? How are you?|¿Qué tal? ¿Cómo estás?",
    "¿Cómo te llamas?|What's your name? (tú)",
    "¿Cómo se llama usted?|What's your name? (usted)",
    "Muy bien, gracias. ¿Y tú?|Very well, thanks. And you?",
    "Estoy un poco cansad{a/o}.|I'm a bit tired.",
    "Soy profesor{a/}.|I'm a teacher.",
    "Encantad{a/o}.|Pleased to meet you.",
    "Chao, nos vemos.|Bye, see you."
  ],
  words: ["🙋|el nombre|name", "🌍|el país|country", "🏴|Inglaterra|England", "📱|el teléfono|phone", "👩‍🏫|el profesor, la profesora|teacher",
    "👨‍👩‍👧|la familia|family", "🙂|bien|well, fine", "🥱|cansado, cansada|tired", "🏠|la casa|house, home", "🤝|mucho gusto|nice to meet you"],
  chat: { npc: "Carmen", av: "👩🏽", scene: "You arrive at Carmen's posada in Caracas. She opens the door with a big smile.", sceneEs: "You arrive at Carmen's flat in Madrid. She opens the door with a big smile.",
    lines: [
      C("¡Hola! Bienvenid{a/o}. Yo soy Carmen. ¿Cómo te llamas?", "Hi! Welcome. I'm Carmen. What's your name?", "¡Hola! Me llamo {N}. Mucho gusto.", "Hi! I'm {N}. Nice to meet you.",
        "Tengo treinta años.", "Carmen asked your name, not your age 😄", "Sí, por favor.", "Yes, please? Carmen looks confused 🤨"),
      C("Mucho gusto, {N}. ¿De dónde eres?", "Nice to meet you, {N}. Where are you from?", "Soy de Inglaterra. ¿Y tú, de dónde eres?", "I'm from England. And you, where are you from?",
        "Soy profesor{a/}.", "Nice! But she asked where you're from 🌍", "Me llamo Carmen.", "That's HER name 😂"),
      C("Yo soy de aquí, de Caracas. ¿Qué más? ¿Cómo estás?", "I'm from here, from Caracas. How's it going? How are you?", "Muy bien, gracias. Un poco cansad{a/o}.", "Very well, thanks. A bit tired.",
        "Chao, nos vemos.", "Leaving already? You just arrived! 😅", "Soy de Caracas.", "No, Carmen is from Caracas — she asked how you are 🙂",
        { n: "Yo soy de aquí, de Madrid. ¿Qué tal? ¿Cómo estás?" }),
      C("¡Claro, el viaje es largo! ¿Eres turista?", "Of course, it's a long trip! Are you a tourist?", "Sí, soy turista. ¡Y profesor{a/}!", "Yes, I'm a tourist. And a teacher!",
        "No, gracias.", "That's a strange answer to a yes/no question 🤔", "Sí, soy Carmen.", "No, no — SHE is Carmen 😂"),
      C("¡Qué chévere! ¿Y cuál es tu número de teléfono?", "How cool! And what's your phone number?", "Es el cero, siete, siete, uno, cinco, nueve, dos.", "It's zero, seven, seven, one, five, nine, two.",
        "Es azul.", "The colour of your phone? 📱 She wants the number!", "Muy bien, gracias.", "She asked for your number 🔢",
        { n: "¡Qué guay! ¿Y cuál es tu número de teléfono?" }),
      C("¡Perfecto! Bueno, {N}, aquí estás en tu casa.", "Perfect! Well, {N}, make yourself at home.", "¡Muchas gracias, Carmen!", "Thank you very much, Carmen!",
        "¡A la orden!", "That's what Carmen says when YOU thank HER 😉", "Mucho gusto.", "You already said that — now say thank you!")
    ] },
  gq: { name: "ser, me llamo, tú or usted", items: [
    G("Yo ___ de Inglaterra.", "soy", "eres|es", "I'm from England."),
    G("¿Tú ___ de Caracas?", "eres", "soy|es", "Are you from Caracas?"),
    G("Carmen ___ de aquí.", "es", "soy|eres", "Carmen is from here."),
    G("¿Cómo ___ llamas? (tú)", "te", "se|me", "What's your name?"),
    G("¿Cómo ___ llama usted?", "se", "te|me", "What's your name? (formal)"),
    G("___ llamo {N}.", "Me", "Te|Se", "My name is {N}."),
    G("¿De ___ eres?", "dónde", "qué|cuánto", "Where are you from?"),
    G("Mucho ___.", "gusto", "gracias|bien", "Nice to meet you.")
  ] }
});

U(2, {
  sit: "Buying a bus ticket at the terminal", gram: "un / una, el / la; numbers to 100; a qué hora; salir",
  tip: "A bus ticket is un pasaje in Venezuela and un billete in Spain. The long-distance buses leave from el terminal. A window seat is un puesto en la ventana (Spain: un asiento de ventanilla).",
  phrases: [
    "Un pasaje para Mérida, por favor.|A ticket to Mérida, please.|Un billete para Sevilla, por favor.",
    "¿A qué hora sale el autobús? A las ocho.|What time does the bus leave? At eight.",
    "¿Cuánto cuesta el pasaje?|How much is the ticket?|¿Cuánto cuesta el billete?",
    "Ida y vuelta, por favor.|Return, please.",
    "Solo ida.|One way.",
    "¿A qué hora llega a Mérida?|What time does it arrive in Mérida?|¿A qué hora llega a Sevilla?",
    "Un puesto en la ventana, por favor.|A window seat, please.|Un asiento de ventanilla, por favor.",
    "Cuesta treinta dólares.|It costs thirty dollars.|Cuesta treinta euros.",
    "¿Es directo?|Is it direct?",
    "¿Puedo pagar con tarjeta?|Can I pay by card?"
  ],
  words: ["🎫|el pasaje|ticket|el billete", "🚌|el autobús|bus", "🚏|el terminal|bus station|la estación de autobuses", "⏰|la hora|time, hour",
    "💵|el dólar|dollar|el euro", "🪟|el puesto en la ventana|window seat|el asiento de ventanilla", "🧳|la maleta|suitcase", "🗺️|el viaje|trip, journey", "💳|la tarjeta|card", "🔁|ida y vuelta|return"],
  chat: { npc: "Luis", av: "🧔🏽", scene: "You're at the bus terminal in Caracas. Luis sells tickets at the window.", sceneEs: "You're at the bus station in Madrid. Luis sells tickets at the window.",
    lines: [
      C("Buenos días. ¿Para dónde va?", "Good morning. Where are you going?", "Buenos días. Un pasaje para Mérida, por favor.", "Good morning. A ticket to Mérida, please.",
        "Me llamo {N}.", "Luis doesn't need your name — he asked where you're going 🚌", "Una cerveza, por favor.", "This is a ticket office, not a bar 🍺",
        { n: "Buenos días. ¿Adónde va?", a: "Buenos días. Un billete para Sevilla, por favor." }),
      C("¿Solo ida o ida y vuelta?", "One way or return?", "Ida y vuelta, por favor.", "Return, please.",
        "A las ocho.", "That's a time — he asked one way or return.", "Sí.", "Yes... which one? 🤷"),
      C("Muy bien. ¿Para hoy?", "Very good. For today?", "Sí, para hoy. ¿A qué hora sale el autobús?", "Yes, for today. What time does the bus leave?",
        "No, gracias.", "So... no ticket then? 😅", "Soy de Inglaterra.", "Nice, but he asked about the day."),
      C("Sale a las ocho de la noche y llega a Mérida a las siete de la mañana.", "It leaves at eight in the evening and arrives in Mérida at seven in the morning.", "Perfecto. ¿Cuánto cuesta el pasaje?", "Perfect. How much is the ticket?",
        "¿Qué hora es?", "He just told you the times 😉", "Buenas noches.", "It's still morning! 🌞",
        { n: "Sale a las ocho de la mañana y llega a Sevilla a la una de la tarde.", a: "Perfecto. ¿Cuánto cuesta el billete?" }),
      C("Ida y vuelta son sesenta dólares.", "Return is sixty dollars.", "Aquí tiene. ¿Puedo pagar con tarjeta?", "Here you are. Can I pay by card?",
        "Sesenta años.", "Sixty years? That's an age, not a price 😂", "¿Dónde está el baño?", "Good question, but pay first! 🚻",
        { n: "Ida y vuelta son sesenta euros." }),
      C("Sí, claro. Su puesto es el doce, en la ventana. ¡Buen viaje!", "Yes, of course. Your seat is number twelve, by the window. Have a good trip!", "¡Gracias! Hasta luego.", "Thanks! See you later.",
        "¿Cómo te llamas?", "Too late for introductions — your bus is waiting 😄", "Un momentico.", "Luis has other customers! Just say thanks 😉",
        { n: "Sí, claro. Su asiento es el doce, de ventanilla. ¡Buen viaje!" })
    ] },
  gq: { name: "un / una, numbers and times", items: [
    G("___ pasaje para Mérida, por favor.", "Un", "Una|Unos", "A ticket to Mérida, please.", "ve"),
    G("___ billete para Sevilla, por favor.", "Un", "Una|Unos", "A ticket to Seville, please.", "es"),
    G("¿A qué hora ___ el autobús?", "sale", "salgo|salir", "What time does the bus leave?"),
    G("El autobús sale ___ las ocho.", "a", "en|de", "The bus leaves at eight."),
    G("¿___ cuesta el pasaje?", "Cuánto", "Cuánta|Qué", "How much is the ticket?", "ve"),
    G("¿___ cuesta el billete?", "Cuánto", "Cuánta|Qué", "How much is the ticket?", "es"),
    G("Tengo ___ maleta grande.", "una", "un|uno", "I have a big suitcase."),
    G("Cuesta treinta ___ cinco.", "y", "con|más", "It costs thirty-five."),
    G("20 + 30 = ___", "cincuenta", "cuarenta|sesenta", "twenty plus thirty"),
    G("Son las ocho ___ la mañana.", "de", "en|por", "It's eight in the morning.")
  ] }
});

U(3, {
  sit: "Arriving at the posada", gram: "tener; hay; estar for place; ordinals for floors; su",
  tip: "Venezuelans say reservación (Spain: reserva) and count floors with piso (Spain: planta). A posada is a small family guesthouse — the Spanish equivalent is a hostal. The wifi password is la clave (Spain: la contraseña).",
  phrases: [
    "Buenas noches, tengo una reservación a nombre de Smith.|Good evening, I have a booking in the name of Smith.|Buenas noches, tengo una reserva a nombre de Smith.",
    "Aquí tiene la llave.|Here's the key.",
    "Su habitación está en el segundo piso.|Your room is on the second floor.|Su habitación está en la segunda planta.",
    "¿Hay agua caliente?|Is there hot water?",
    "¿A qué hora es el desayuno?|What time is breakfast?",
    "¿Cuál es la clave del wifi?|What's the wifi password?|¿Cuál es la contraseña del wifi?",
    "¿Hay toallas?|Are there towels?",
    "Una habitación doble, por tres noches.|A double room, for three nights.",
    "¿Dónde está el ascensor?|Where's the lift?",
    "Tengo dos maletas.|I have two suitcases."
  ],
  words: ["🔑|la llave|key", "🛏️|la habitación|room", "📋|la reservación|booking|la reserva", "🍳|el desayuno|breakfast", "🚿|el agua caliente|hot water",
    "🧺|la toalla|towel", "🛗|el ascensor|lift", "2️⃣|el segundo piso|the second floor|la segunda planta", "📶|la clave del wifi|wifi password|la contraseña del wifi", "🏡|la posada|guesthouse|el hostal"],
  chat: { npc: "Yolanda", av: "👩🏻", scene: "After a night on the bus, you arrive at a posada in Mérida, in the Andes. Yolanda is at the desk.", sceneEs: "You arrive at a small hostal in Seville. Yolanda is at the desk.",
    lines: [
      C("Buenas noches, bienvenid{a/o} a la posada. ¿En qué l{a/o} puedo ayudar?", "Good evening, welcome to the guesthouse. How can I help you?", "Buenas noches, tengo una reservación a nombre de Smith.", "Good evening, I have a booking in the name of Smith.",
        "Tengo fiebre.", "A fever? Wrong place — the pharmacy is in unit 9 💊", "Un pasaje, por favor.", "You've already arrived! 😄",
        { n: "Buenas noches, bienvenid{a/o} al hostal. ¿En qué l{a/o} puedo ayudar?", a: "Buenas noches, tengo una reserva a nombre de Smith." }),
      C("Sí, aquí está. Una habitación doble por tres noches. ¿Me da su pasaporte, por favor?", "Yes, here it is. A double room for three nights. Can I have your passport, please?", "Sí, claro. Aquí tiene.", "Yes, of course. Here you are.",
        "No, gracias.", "You need to show it, sorry 🛂", "Tres cervezas.", "Three nights, not three beers 🍺"),
      C("Gracias. Aquí tiene la llave. Su habitación está en el segundo piso.", "Thanks. Here's the key. Your room is on the second floor.", "Gracias. ¿Hay agua caliente?", "Thanks. Is there hot water?",
        "¿Dónde está la playa?", "Ask later — first, the room! 🛏️", "¿Está en el segundo piso?", "She just told you that 😉",
        { n: "Gracias. Aquí tiene la llave. Su habitación está en la segunda planta.", w: ["¿Está en la segunda planta?", "She just told you that 😉"] }),
      C("Sí, hay agua caliente, y toallas en el baño.", "Yes, there's hot water, and towels in the bathroom.", "¡Chévere! ¿A qué hora es el desayuno?", "Great! What time is breakfast?",
        "Me duele la cabeza.", "Maybe after the bus... but she was talking about water 🚿", "¿Hay agua caliente?", "You just asked that! 😄",
        { a: "¡Genial! ¿A qué hora es el desayuno?" }),
      C("El desayuno es de siete a diez, aquí abajo. Hay arepas y café.", "Breakfast is from seven to ten, down here. There are arepas and coffee.", "Perfecto. ¿Y cuál es la clave del wifi?", "Perfect. And what's the wifi password?",
        "Quisiera una pizza.", "Breakfast is breakfast 😄", "Soy de Inglaterra.", "She knows — she has your passport 🛂",
        { n: "El desayuno es de siete a diez, aquí abajo. Hay tostadas y café.", a: "Perfecto. ¿Y cuál es la contraseña del wifi?" }),
      C("Es «posada123». ¡Que descanse!", "It's \"posada123\". Rest well!", "Muchas gracias. ¡Buenas noches!", "Thanks a lot. Good night!",
        "¡Buenos días!", "It's night-time 🌙", "¿Qué más?", "A bit too casual — and she just said good night 😉",
        { n: "Es «hostal123». ¡Que descanse!", w: ["¿Qué tal?", "A bit too casual — and she just said good night 😉"] })
    ] },
  gq: { name: "tener, hay, estar", items: [
    G("___ una reservación a nombre de Smith.", "Tengo", "Tiene|Hay", "I have a booking in the name of Smith.", "ve"),
    G("___ una reserva a nombre de Smith.", "Tengo", "Tiene|Hay", "I have a booking in the name of Smith.", "es"),
    G("¿___ agua caliente?", "Hay", "Tengo|Está", "Is there hot water?"),
    G("Su habitación ___ en el segundo piso.", "está", "es|hay", "Your room is on the second floor.", "ve"),
    G("Su habitación ___ en la segunda planta.", "está", "es|hay", "Your room is on the second floor.", "es"),
    G("¿Dónde ___ el ascensor?", "está", "hay|es", "Where is the lift?"),
    G("Aquí ___ la llave.", "tiene", "tengo|hay", "Here's the key."),
    G("___ habitación es la número diez. (usted)", "Su", "Sus|Tú", "Your room is number ten."),
    G("La habitación está en el ___ piso. (3)", "tercer", "tres|tercera", "The room is on the third floor.", "ve"),
    G("Usted ___ dos maletas.", "tiene", "tengo|tienes", "You have two suitcases.")
  ] }
});

U(4, {
  sit: "Ordering food and drinks", gram: "quisiera as a fixed phrase; plurals and agreement; the -ico diminutive",
  tip: "¿Qué le provoca? means \"What do you fancy?\". Venezuelans make words small and friendly with -ico after a t: un momentico, un poquitico. Juice is jugo (Spain: zumo); passion fruit is parchita. An arepa is a round corn bread, filled with almost anything.",
  phrases: [
    "Quisiera una arepa de queso y un jugo de parchita.|I'd like a cheese arepa and a passion fruit juice.|Quisiera una tortilla de patatas y un zumo de naranja.",
    "Dos cervezas bien frías, por favor.|Two really cold beers, please.|Dos cañas, por favor.",
    "¿Me trae la cuenta, por favor?|Could you bring me the bill, please?",
    "Un momentico.|Just a moment.|Un momento.",
    "Una mesa para dos, por favor.|A table for two, please.",
    "¿Tiene el menú?|Do you have the menu?|¿Tiene la carta?",
    "Para mí, el pescado.|The fish for me.",
    "Un vaso de agua, por favor.|A glass of water, please.",
    "¡Está muy rico!|It's delicious!",
    "¿Qué le provoca?|What do you fancy?|¿Qué le pongo?"
  ],
  words: ["🫓|la arepa|arepa (corn bread)", "🧃|el jugo|juice|el zumo", "🍺|la cerveza|beer", "🧀|el queso|cheese", "🐟|el pescado|fish",
    "🍗|el pollo|chicken", "🧾|la cuenta|bill", "🍽️|la mesa|table", "🥛|el vaso|glass", "💛|la parchita|passion fruit|el maracuyá"],
  chat: { npc: "José", av: "🧑🏾‍🍳", scene: "Lunchtime in Mérida. You sit down at a little arepera. José, the waiter, comes over.", sceneEs: "Lunchtime in Seville. You sit down at a little bar. José, the waiter, comes over.",
    lines: [
      C("¡Buenas! ¿Qué le provoca?", "Hi! What do you fancy?", "Quisiera una arepa de queso y un jugo de parchita.", "I'd like a cheese arepa and a passion fruit juice.",
        "Quisiera una habitación doble.", "This is a restaurant, not a posada 🏨", "Me duele la cabeza.", "José is a waiter, not a doctor 🩺",
        { n: "¡Buenas! ¿Qué le pongo?", a: "Quisiera una tortilla de patatas y un zumo de naranja." }),
      C("¿Algo más para tomar?", "Anything else to drink?", "Sí, dos cervezas bien frías, por favor.", "Yes, two really cold beers, please.",
        "Dos cervezas bien frío.", "Almost! cervezas is feminine and plural: frías 🍺", "Una llave, por favor.", "A key? To drink? 🔑",
        { a: "Sí, dos cañas, por favor." }),
      C("Muy bien. ¿Y para su amigo?", "Very good. And for your friend?", "Para él, el pescado frito.", "The fried fish for him.",
        "Él es de Inglaterra.", "Nice, but what does he want to eat? 🐟", "Para él, la cuenta.", "The bill already? He hasn't eaten! 😄"),
      C("¿Les traigo agua también?", "Shall I bring you water too?", "Sí, dos vasos de agua, por favor.", "Yes, two glasses of water, please.",
        "Sí, dos vaso de agua.", "Two glasses: dos vasos 🥛", "No, tengo una reservación.", "That's for the posada 😄"),
      C("¿Todo bien? ¿Está rica la arepa?", "Everything OK? Is the arepa good?", "¡Sí, está muy rica! ¿Me trae la cuenta, por favor?", "Yes, it's delicious! Could you bring me the bill, please?",
        "Sí, está muy rico.", "arepa is feminine: rica 🫓", "¿A qué hora sale el autobús?", "Wrong place 🚌 — José is asking about the food.",
        { n: "¿Todo bien? ¿Está rica la tortilla?", w: ["Sí, está muy rico.", "tortilla is feminine: rica 😉"] }),
      C("Claro, un momentico. Son veinte dólares.", "Of course, just a moment. That's twenty dollars.", "Aquí tiene. ¡Muchas gracias!", "Here you are. Thank you very much!",
        "¿Veinte años?", "Dollars, not years 💵", "¡A la orden!", "That's José's line! You say thanks 😉",
        { n: "Claro, un momento. Son veinte euros.", w: ["¡De nada!", "That's José's line! You say thanks 😉"] })
    ] },
  gq: { name: "Plurals and agreement", items: [
    G("Dos cervezas bien ___, por favor.", "frías", "fría|fríos", "Two really cold beers, please."),
    G("Quisiera ___ arepa de queso.", "una", "un|unos", "I'd like a cheese arepa.", "ve"),
    G("Quisiera ___ tortilla de patatas.", "una", "un|unos", "I'd like a Spanish omelette.", "es"),
    G("Quisiera ___ jugo de parchita.", "un", "una|unas", "I'd like a passion fruit juice.", "ve"),
    G("Quisiera ___ zumo de naranja.", "un", "una|unas", "I'd like an orange juice.", "es"),
    G("Tres ___, por favor.", "cafés", "café|cafeses", "Three coffees, please."),
    G("Las arepas están muy ___.", "ricas", "rico|ricos", "The arepas are delicious.", "ve"),
    G("¿Me ___ la cuenta, por favor?", "trae", "traigo|traer", "Could you bring me the bill, please?"),
    G("Un ___, ya vengo.", "momentico", "momentica|momenticos", "Just a moment, I'm coming.", "ve"),
    G("Dos ___ de agua, por favor.", "vasos", "vaso|vasa", "Two glasses of water, please.")
  ] }
});

U(5, {
  sit: "Buying things at the market or in a shop", gram: "este / esta; adjective after the noun; prices in dollars",
  tip: "A T-shirt is una franela in Venezuela (in Spain, franela is flannel cloth!). Shop assistants say ¡A la orden! for \"How can I help?\" and \"You're welcome!\". The colour comes after the noun: una franela azul.",
  phrases: [
    "¿Cuánto cuesta esta franela azul?|How much is this blue T-shirt?|¿Cuánto cuesta esta camiseta azul?",
    "Cuesta quince dólares.|It's fifteen dollars.|Cuesta quince euros.",
    "Me llevo la roja. Gracias.|I'll take the red one. Thanks.",
    "¡A la orden!|You're welcome! / Can I help you?|¡De nada!",
    "Solo estoy mirando, gracias.|I'm just looking, thanks.",
    "Es un poco caro.|It's a bit expensive.",
    "¿Me hace un descuento?|Can you give me a discount?",
    "¿La tiene en rojo?|Do you have it in red?",
    "Este sombrero es muy bonito.|This hat is very pretty.",
    "Talla mediana, por favor.|Medium size, please."
  ],
  words: ["👕|la franela|T-shirt|la camiseta", "👒|el sombrero|hat", "👟|los zapatos|shoes", "👜|la bolsa|bag", "💰|caro|expensive",
    "🏷️|barato|cheap", "🔴|rojo, roja|red", "🔵|azul|blue", "📏|la talla|size", "🛍️|el mercado|market"],
  chat: { npc: "Señora Rosa", av: "👵🏽", scene: "You're at the market in Mérida. Señora Rosa sells T-shirts and hats.", sceneEs: "You're at a market in Seville. Señora Rosa sells T-shirts and hats.",
    lines: [
      C("¡A la orden, mi amor! ¿Qué está buscando?", "Can I help you, love? What are you looking for?", "Buenas. ¿Cuánto cuesta esta franela azul?", "Hello. How much is this blue T-shirt?",
        "Buenas. ¿Cuánto cuesta este franela azul?", "franela is feminine: esta franela 👕", "Un pasaje para Mérida.", "You're at the market, not the bus station 🛍️",
        { n: "¡Hola, cariño! ¿Qué está buscando?", a: "Buenas. ¿Cuánto cuesta esta camiseta azul?", w: ["Buenas. ¿Cuánto cuesta este camiseta azul?", "camiseta is feminine: esta camiseta 👕"] }),
      C("Cuesta quince dólares. Es de algodón, muy fresquita.", "It's fifteen dollars. It's cotton, nice and cool.", "Mmm... ¿La tiene en rojo?", "Hmm... Do you have it in red?",
        "¿Quince años?", "Dollars, not years 😄", "Me llevo la llave.", "Which key? 🔑",
        { n: "Cuesta quince euros. Es de algodón, muy fresquita.", w: ["¿Quince años?", "Euros, not years 😄"] }),
      C("Sí, aquí está la roja. ¿Qué talla usa?", "Yes, here's the red one. What size do you wear?", "Talla mediana, por favor.", "Medium size, please.",
        "Roja, por favor.", "She knows it's red — she's asking your size 📏", "Quince dólares.", "That's the price, not the size 😉"),
      C("Aquí tiene. ¿Algo más?", "Here you are. Anything else?", "Sí. ¿Cuánto cuesta este sombrero?", "Yes. How much is this hat?",
        "Sí. ¿Cuánto cuesta esta sombrero?", "sombrero is masculine: este sombrero 👒", "Sí, gracias, chao.", "Yes... and bye? She's confused 🤨"),
      C("El sombrero cuesta diez. Los dos son veinticinco dólares.", "The hat is ten. Both together are twenty-five dollars.", "Es un poco caro. ¿Me hace un descuento?", "That's a bit expensive. Can you give me a discount?",
        "Es muy barato. ¿Me hace un descuento?", "If it's cheap, why a discount? 😂", "Veinticinco, por favor.", "She already said twenty-five 😄",
        { n: "El sombrero cuesta diez. Los dos son veinticinco euros." }),
      C("Bueno, para usted, veinte dólares.", "OK, for you, twenty dollars.", "¡Perfecto! Me los llevo. Gracias.", "Perfect! I'll take them. Thanks.",
        "¡A la orden!", "That's Rosa's line 😄", "Es un poco caro.", "She already gave you a discount! 😅",
        { n: "Bueno, para usted, veinte euros.", w: ["¡De nada!", "That's Rosa's line 😄"] })
    ] },
  gq: { name: "este / esta, colours after the noun", items: [
    G("¿Cuánto cuesta ___ franela?", "esta", "este|estos", "How much is this T-shirt?", "ve"),
    G("¿Cuánto cuesta ___ camiseta?", "esta", "este|estos", "How much is this T-shirt?", "es"),
    G("¿Cuánto cuesta ___ sombrero?", "este", "esta|estas", "How much is this hat?"),
    G("¿Cuánto cuestan ___ zapatos?", "estos", "este|estas", "How much are these shoes?"),
    G("Quisiera una franela ___.", "roja", "rojo|rojos", "I'd like a red T-shirt.", "ve"),
    G("Quisiera una camiseta ___.", "roja", "rojo|rojos", "I'd like a red T-shirt.", "es"),
    G("Me gusta el sombrero ___.", "blanco", "blanca|blancos", "I like the white hat."),
    G("Unas sandalias ___.", "negras", "negro|negra", "Some black sandals."),
    G("Me llevo ___ roja.", "la", "el|los", "I'll take the red one."),
    G("Cuesta quince ___.", "dólares", "dólar|dólars", "It costs fifteen dollars.", "ve"),
    G("Cuesta quince ___.", "euros", "euro|euroes", "It costs fifteen euros.", "es")
  ] }
});

U(6, {
  sit: "Asking for and following directions", gram: "estar and quedar for place; usted imperative; al = a + el",
  tip: "Venezuelans ask ¿Dónde queda...? and count distances in cuadras (blocks). Every Venezuelan town has a plaza Bolívar. Careful: derecho = straight on, a la derecha = right! Spain says todo recto and gire a la izquierda.",
  phrases: [
    "Disculpe, ¿dónde queda la plaza Bolívar?|Excuse me, where is Plaza Bolívar?|Disculpe, ¿dónde está la plaza Mayor?",
    "Siga derecho y cruce a la izquierda.|Go straight on and turn left.|Siga todo recto y gire a la izquierda.",
    "Está a dos cuadras, al lado de la iglesia.|It's two blocks away, next to the church.|Está a doscientos metros, al lado de la iglesia.",
    "Cruce a la derecha.|Turn right.|Gire a la derecha.",
    "¿Está lejos?|Is it far?",
    "No, está cerca.|No, it's near.",
    "Está en la esquina.|It's on the corner.",
    "Está enfrente del banco.|It's opposite the bank.",
    "¿Hay un cajero automático por aquí?|Is there a cash machine around here?",
    "Estoy buscando el museo.|I'm looking for the museum."
  ],
  words: ["⛪|la iglesia|church", "🏦|el banco|bank", "🏧|el cajero automático|cash machine", "⬅️|a la izquierda|left", "➡️|a la derecha|right",
    "⬆️|derecho|straight on|todo recto", "🏘️|la cuadra|block|la manzana", "📍|la esquina|corner", "🏛️|el museo|museum", "⛲|la plaza|square"],
  chat: { npc: "Señor Pedro", av: "👴🏽", scene: "You're lost in the centre of Mérida. A friendly older man stops next to you.", sceneEs: "You're lost in the centre of Madrid. A friendly older man stops next to you.",
    lines: [
      C("¡Buenas tardes! ¿L{a/o} puedo ayudar?", "Good afternoon! Can I help you?", "Sí, por favor. Disculpe, ¿dónde queda la plaza Bolívar?", "Yes, please. Excuse me, where is Plaza Bolívar?",
        "Sí, por favor. Una cerveza bien fría.", "He's offering directions, not drinks 🍺", "No, gracias. Me llamo {N}.", "If you don't want help, why tell him your name? 😅",
        { a: "Sí, por favor. Disculpe, ¿dónde está la plaza Mayor?" }),
      C("Es fácil. Siga derecho por esta calle.", "It's easy. Go straight on along this street.", "¿Derecho por esta calle? ¿Y después?", "Straight on along this street? And then?",
        "¿A la derecha?", "derecho = straight on; a la derecha = right. Easy to mix up! ↔️", "¿Cuánto cuesta?", "Directions are free 😄",
        { n: "Es fácil. Siga todo recto por esta calle.", a: "¿Todo recto por esta calle? ¿Y después?" }),
      C("En la segunda esquina, cruce a la izquierda.", "At the second corner, turn left.", "En la segunda esquina, a la izquierda. ¿Está lejos?", "At the second corner, left. Is it far?",
        "En la segunda esquina, a la derecha.", "Listen again: izquierda = left ⬅️", "En la segunda iglesia.", "Corner (esquina), not church 😄",
        { n: "En la segunda esquina, gire a la izquierda." }),
      C("No, está a dos cuadras, al lado de la iglesia.", "No, it's two blocks away, next to the church.", "¡Perfecto! ¿Y hay un cajero automático por ahí?", "Perfect! And is there a cash machine around there?",
        "¿Al lado del hotel?", "He said next to the church ⛪", "¿Dos horas?", "Not hours! It's close 😅",
        { n: "No, está a doscientos metros, al lado de la iglesia." }),
      C("Sí, hay uno en el banco, enfrente de la plaza.", "Yes, there's one at the bank, opposite the square.", "Muchas gracias, señor. Muy amable.", "Thank you very much, sir. Very kind.",
        "Enfrente de la iglesia, gracias.", "He said opposite the square ⛲", "¿Cómo te llamas?", "He doesn't need to know — just say thanks 😉"),
      C("¡A la orden! Que le vaya bien.", "You're welcome! All the best.", "¡Gracias, igualmente!", "Thanks, same to you!",
        "¡A la orden!", "That's his line! You say thanks 😉", "Siga derecho.", "You're the one who has to go straight on 😂",
        { n: "¡De nada! Que le vaya bien.", w: ["¡De nada!", "That's his line! You say thanks 😉"] })
    ] },
  gq: { name: "estar, quedar, al and del", items: [
    G("¿Dónde ___ la plaza Bolívar?", "queda", "quedo|es", "Where is Plaza Bolívar?", "ve"),
    G("¿Dónde ___ la plaza Mayor?", "está", "es|hay", "Where is Plaza Mayor?", "es"),
    G("La iglesia ___ al lado del banco.", "está", "es|hay", "The church is next to the bank."),
    G("___ derecho dos cuadras.", "Siga", "Sigue|Seguir", "Go straight on for two blocks.", "ve"),
    G("___ todo recto.", "Siga", "Sigue|Seguir", "Go straight on.", "es"),
    G("El museo está al lado ___ banco.", "del", "de el|de la", "The museum is next to the bank."),
    G("Cruce a la izquierda y vaya ___ centro.", "al", "a el|a la", "Turn left and go to the centre.", "ve"),
    G("El banco está enfrente ___ la iglesia.", "de", "del|a", "The bank is opposite the church."),
    G("___ a la derecha en la esquina.", "Cruce", "Cruzo|Cruzar", "Turn right at the corner.", "ve"),
    G("___ a la derecha en la esquina.", "Gire", "Giro|Girar", "Turn right at the corner.", "es")
  ] }
});

U(7, {
  sit: "Checking the weather, talking about dates", gram: "hace + weather; days with el; dates; ir a + place",
  tip: "Use hace for weather: hace calor, hace frío, hace sol. Days take el: el sábado = on Saturday. Dates use el + number: el veinte de julio. Venezuela has no four seasons — more about that in unit 37.",
  phrases: [
    "Hoy hace mucho calor.|It's very hot today.",
    "El sábado vamos a la playa.|On Saturday we're going to the beach.",
    "¿Qué fecha es hoy? Es el veinte de julio.|What's the date today? It's the twentieth of July.",
    "Hace frío.|It's cold.",
    "Hace sol.|It's sunny.",
    "Está lloviendo.|It's raining.",
    "Está nublado.|It's cloudy.",
    "Mañana voy al museo.|Tomorrow I'm going to the museum.",
    "¿Qué día es hoy? Hoy es lunes.|What day is it today? Today is Monday.",
    "Mi cumpleaños es el tres de mayo.|My birthday is the third of May."
  ],
  words: ["☀️|el sol|sun", "🌧️|la lluvia|rain", "🥵|hace calor|it's hot", "🥶|hace frío|it's cold", "☁️|nublado|cloudy",
    "📅|la fecha|date", "🗓️|el fin de semana|weekend", "🌅|mañana|tomorrow", "🎂|el cumpleaños|birthday", "🌬️|hace viento|it's windy"],
  chat: { npc: "Yolanda", av: "👩🏻", scene: "A sunny morning at the posada. Yolanda is watering the plants in the patio.", sceneEs: "A sunny morning at the hostal. Yolanda is watering the plants in the patio.",
    lines: [
      C("¡Buenos días! ¡Qué calor hace hoy!", "Good morning! It's so hot today!", "Sí, hace mucho calor. ¿Qué fecha es hoy?", "Yes, it's very hot. What's the date today?",
        "Sí, hace mucho frío.", "Frío = cold. Look at the sun! ☀️", "Sí, está lloviendo.", "There's not a cloud in the sky ☀️"),
      C("Hoy es el veinte de julio. ¿Por qué?", "Today is the twentieth of July. Why?", "¡Porque es mi cumpleaños!", "Because it's my birthday!",
        "Es el veinte de julio.", "She just said that 😉", "Hoy es lunes.", "Hmm, she asked why 🤔"),
      C("¡Feliz cumpleaños! ¿Y qué vas a hacer hoy?", "Happy birthday! And what are you doing today?", "Hoy voy al museo.", "Today I'm going to the museum.",
        "Hoy voy a la museo.", "museo is masculine: al museo 🏛️", "Ayer.", "Yesterday? She asked about today 😄"),
      C("¡Qué bueno! ¿Y el fin de semana?", "Great! And at the weekend?", "El sábado voy a la playa.", "On Saturday I'm going to the beach.",
        "En sábado voy a la playa.", "With days, use el: el sábado 📅", "Hace sol.", "That's the weather, not a plan ☀️"),
      C("Pero el sábado va a llover...", "But it's going to rain on Saturday...", "¡Ay, no! Entonces voy el domingo.", "Oh no! Then I'll go on Sunday.",
        "¡Qué bueno! Me gusta la lluvia en la playa.", "Really? 😂 Rain at the beach?", "Hace calor el sábado.", "She said it's going to rain 🌧️"),
      C("El domingo hace sol. ¡Que la pases bien!", "On Sunday it'll be sunny. Have a good time!", "¡Gracias! Hasta luego.", "Thanks! See you later.",
        "¡Feliz cumpleaños!", "It's YOUR birthday, not hers 🎂", "Hace frío.", "It's sunny on Sunday! ☀️",
        { n: "El domingo hace sol. ¡Que lo pases bien!" })
    ] },
  gq: { name: "Weather, days and dates", items: [
    G("Hoy ___ mucho calor.", "hace", "está|es", "It's very hot today."),
    G("___ sábado vamos a la playa.", "El", "En|Al", "On Saturday we're going to the beach."),
    G("Es ___ veinte de julio.", "el", "la|en", "It's the twentieth of July."),
    G("Mañana voy ___ museo.", "al", "a el|en el", "Tomorrow I'm going to the museum."),
    G("El domingo vamos ___ la playa.", "a", "al|en", "On Sunday we're going to the beach."),
    G("Hoy ___ nublado.", "está", "hace|es", "It's cloudy today."),
    G("Mi cumpleaños es el tres ___ mayo.", "de", "en|del", "My birthday is the third of May."),
    G("Yo ___ a la playa el viernes.", "voy", "va|vamos", "I'm going to the beach on Friday.")
  ] }
});

U(8, {
  sit: "Buying tickets for sights", gram: "se puede; numbers and plurals; abrir and cerrar",
  tip: "¿Se puede...? = Can you / Is it allowed...? In Venezuela you tomar fotos (Spain: hacer fotos). The Mérida cable car climbs to almost 4,800 metres, so take a jacket!",
  phrases: [
    "Dos entradas de adulto y una de niño, por favor.|Two adult tickets and one child's, please.",
    "¿Se puede tomar fotos?|Can you take photos?|¿Se pueden hacer fotos?",
    "¿A qué hora abre el teleférico?|What time does the cable car open?",
    "¿A qué hora cierra?|What time does it close?",
    "¿Cuánto cuesta la entrada?|How much is the ticket?",
    "¿Hay descuento para estudiantes?|Is there a student discount?",
    "¿Hay visitas guiadas en inglés?|Are there guided tours in English?",
    "¿Dónde está la entrada?|Where's the entrance?",
    "¿Se puede entrar con comida?|Can you go in with food?",
    "La vista es espectacular.|The view is amazing."
  ],
  words: ["🎟️|la entrada|ticket, entrance", "🚡|el teleférico|cable car", "📸|tomar fotos|take photos|hacer fotos", "🧒|el niño, la niña|child", "🧑|el adulto|adult",
    "🎓|el estudiante|student", "🕘|abre|it opens", "🕔|cierra|it closes", "🗺️|la visita guiada|guided tour", "🏔️|la montaña|mountain"],
  chat: { npc: "Andrés", av: "👨🏽", scene: "You're at the Mérida cable car with a friend and her little boy. Andrés sells the tickets.", sceneEs: "You're at the Madrid cable car with a friend and her little boy. Andrés sells the tickets.",
    lines: [
      C("¡Buenos días! Bienvenidos al teleférico. ¿Cuántas entradas?", "Good morning! Welcome to the cable car. How many tickets?", "Dos entradas de adulto y una de niño, por favor.", "Two adult tickets and one child's, please.",
        "Tres años.", "That's an age 😄 How many tickets?", "Dos adulto y uno niño.", "Close! Say: dos entradas de adulto y una de niño 🎟️"),
      C("Son cuarenta y cinco dólares en total.", "That's forty-five dollars in total.", "¿Hay descuento para estudiantes?", "Is there a student discount?",
        "¿Cuarenta y cinco entradas?", "No — that's the price! 💵", "Es muy barato. ¿Me hace un descuento?", "If it's cheap... why ask? 😂",
        { n: "Son cuarenta y cinco euros en total." }),
      C("No, lo siento. Solo para niños y mayores.", "No, sorry. Only for children and older people.", "Bueno, no importa. Aquí tiene.", "OK, never mind. Here you are.",
        "¡Pero yo soy niñ{a/o}!", "Nice try 😂", "Tengo fiebre.", "Wrong place 💊"),
      C("Gracias. ¿Tiene alguna pregunta?", "Thanks. Do you have any questions?", "Sí. ¿Se puede tomar fotos arriba?", "Yes. Can you take photos up there?",
        "Sí. ¿Se puedo tomar fotos?", "With se, it's se puede 📸", "No, gracias. Dos cervezas.", "No beer at the ticket desk 🍺",
        { a: "Sí. ¿Se pueden hacer fotos arriba?", w: ["Sí. ¿Se puedo hacer fotos?", "With se, it's se pueden / se puede 📸"] }),
      C("¡Claro que sí! La vista es espectacular. Pero hace mucho frío arriba.", "Of course! The view is amazing. But it's very cold up there.", "Gracias. ¿A qué hora cierra el teleférico?", "Thanks. What time does the cable car close?",
        "¿Hace calor arriba?", "He just said it's cold 🥶", "¿A qué hora cierras?", "Not HIM — the cable car! cierra 🚡"),
      C("Cierra a las tres de la tarde. ¡Disfruten!", "It closes at three in the afternoon. Enjoy!", "¡Muchas gracias! Hasta luego.", "Thanks very much! See you later.",
        "¿A las tres de la mañana?", "In the afternoon (de la tarde) 🕒", "¡A la orden!", "That's his line 😉",
        { w: ["¡De nada!", "That's his line 😉"] })
    ] },
  gq: { name: "se puede, abrir and cerrar", items: [
    G("¿Se ___ tomar fotos?", "puede", "puedo|pueden", "Can you take photos?", "ve"),
    G("¿Se ___ hacer fotos?", "pueden", "puedo|podéis", "Can you take photos?", "es"),
    G("Dos ___ de adulto, por favor.", "entradas", "entrada|entradaes", "Two adult tickets, please."),
    G("¿A qué hora ___ el teleférico?", "abre", "abro|abren", "What time does the cable car open?"),
    G("Los museos ___ a las cinco.", "cierran", "cierra|cerran", "The museums close at five."),
    G("El museo ___ a las nueve.", "abre", "abren|abro", "The museum opens at nine."),
    G("¿Cuánto ___ la entrada?", "cuesta", "cuestan|costa", "How much is the ticket?"),
    G("¿Cuánto ___ las entradas?", "cuestan", "cuesta|costan", "How much are the tickets?"),
    G("¿Se puede entrar ___ comida?", "con", "sin|de", "Can you go in with food?")
  ] }
});

U(9, {
  sit: "Saying what hurts", gram: "me duele; tener + symptom; para; usted imperative",
  tip: "Me duele works like \"it hurts me\": me duele la cabeza, me duelen los pies. Symptoms take tener: tengo fiebre, tengo tos. Pharmacists give advice with usted commands: tome, beba, descanse. ¡Que se mejore! = Get well soon!",
  phrases: [
    "Me duele la cabeza y tengo fiebre.|I have a headache and a fever.",
    "¿Tiene algo para la tos?|Do you have something for a cough?",
    "Tome una pastilla tres veces al día.|Take one tablet three times a day.",
    "Me duele la garganta.|I have a sore throat.",
    "Me duele el estómago.|I have a stomach ache.",
    "Tengo gripe.|I have the flu.",
    "Necesito algo para el dolor.|I need something for the pain.",
    "¿Necesito receta?|Do I need a prescription?",
    "¿Cuántas veces al día?|How many times a day?",
    "¡Que se mejore!|Get well soon!"
  ],
  words: ["🤕|la cabeza|head", "🤒|la fiebre|fever, temperature", "😷|la tos|cough", "💊|la pastilla|tablet, pill", "🧴|el jarabe|syrup",
    "📝|la receta|prescription", "🗣️|la garganta|throat", "🤢|el estómago|stomach", "🩹|la curita|plaster|la tirita", "🌡️|el termómetro|thermometer"],
  chat: { npc: "Señora Luisa", av: "👩🏽‍⚕️", scene: "You woke up feeling awful. You go to the pharmacy on the corner. Señora Luisa is the pharmacist.", sceneEs: "You woke up feeling awful. You go to the pharmacy on the corner. Señora Luisa is the pharmacist.",
    lines: [
      C("Buenos días. ¿En qué l{a/o} puedo ayudar?", "Good morning. How can I help you?", "Buenos días. Me duele la cabeza y tengo fiebre.", "Good morning. I have a headache and a fever.",
        "Buenos días. Me duelo la cabeza.", "Say me duele la cabeza: it's the head that hurts 🤕", "Quisiera una arepa.", "Wrong shop 😄 This is a pharmacy!"),
      C("¡Ay, pobrecit{a/o}! ¿Tiene tos también?", "Oh, you poor thing! Do you have a cough too?", "Sí, un poco. Y me duele la garganta.", "Yes, a bit. And I have a sore throat.",
        "Sí, tengo dos toses.", "😂 Just: sí, tengo tos.", "No, tengo tres maletas.", "She asked about a cough, not suitcases 🧳"),
      C("Tome estas pastillas para la fiebre, y este jarabe para la tos.", "Take these tablets for the fever, and this syrup for the cough.", "¿Cuántas veces al día?", "How many times a day?",
        "¿A qué hora abre?", "She's open — you're IN the pharmacy 😄", "¿Cuánto cuesta el pasaje?", "Wrong place 🚌"),
      C("Una pastilla tres veces al día, y una cucharada de jarabe en la noche.", "One tablet three times a day, and a spoonful of syrup at night.", "Perfecto. ¿Necesito receta?", "Perfect. Do I need a prescription?",
        "¿Tres pastillas una vez al día?", "Listen again: one tablet three times a day 💊", "¿Con cerveza?", "Definitely not with beer 🍺🚫",
        { n: "Una pastilla tres veces al día, y una cucharada de jarabe por la noche." }),
      C("No, no necesita receta. Beba mucha agua y descanse.", "No, you don't need a prescription. Drink lots of water and rest.", "Gracias. ¿Cuánto es?", "Thanks. How much is it?",
        "¿Bebo mucha cerveza?", "Agua, not cerveza! 💧", "Sí, necesito receta.", "She said you DON'T need one 😉"),
      C("Son doce dólares. ¡Que se mejore!", "That's twelve dollars. Get well soon!", "Aquí tiene. ¡Muchas gracias!", "Here you are. Thank you very much!",
        "¡Igualmente!", "Same to you? She's not ill 😂", "¡Que se mejore!", "That's her line — you're the one who's ill 🤒",
        { n: "Son doce euros. ¡Que se mejore!" })
    ] },
  gq: { name: "me duele, tener, usted commands", items: [
    G("Me ___ la cabeza.", "duele", "duelen|dolor", "My head hurts."),
    G("Me ___ los pies.", "duelen", "duele|dolor", "My feet hurt."),
    G("___ fiebre.", "Tengo", "Estoy|Soy", "I have a fever."),
    G("¿Tiene algo ___ la tos?", "para", "por|de", "Do you have something for a cough?"),
    G("___ una pastilla tres veces al día.", "Tome", "Toma|Tomo", "Take one tablet three times a day."),
    G("___ mucha agua.", "Beba", "Bebe|Bebo", "Drink lots of water."),
    G("Tengo ___ y me duele la garganta.", "tos", "toso|duele", "I have a cough and a sore throat."),
    G("Me duele ___ estómago.", "el", "la|los", "My stomach hurts.")
  ] }
});

U(10, {
  sit: "Checking out and saying goodbye", gram: "por (gracias por); first preterite as a fixed phrase; nos vemos",
  tip: "La pasé muy bien = I had a great time (Spain: lo he pasado muy bien). Venezuelans say extrañar for \"to miss someone\" (Spain: echar de menos). And it's always gracias POR: gracias por todo.",
  phrases: [
    "¡Gracias por todo!|Thanks for everything!",
    "La pasé muy bien.|I had a great time.|Lo he pasado muy bien.",
    "Nos vemos el próximo año.|See you next year.",
    "Quisiera pagar la cuenta.|I'd like to pay the bill.",
    "¿Me puede llamar un taxi?|Can you call me a taxi?",
    "¿A qué hora es la salida?|What time is check-out?",
    "Aquí tiene la llave.|Here's the key.",
    "¡Buen viaje!|Have a good trip!",
    "Venezuela es muy bonita.|Venezuela is very beautiful.|España es muy bonita.",
    "Te voy a extrañar.|I'm going to miss you.|Te voy a echar de menos."
  ],
  words: ["✈️|el aeropuerto|airport", "🚕|el taxi|taxi", "🧾|la cuenta|bill", "🗝️|la llave|key", "🧳|la maleta|suitcase",
    "👋|adiós|goodbye", "🙏|gracias por todo|thanks for everything", "📅|el próximo año|next year", "🛫|el vuelo|flight", "🎁|el recuerdo|souvenir"],
  chat: { npc: "Carmen", av: "👩🏽", scene: "Your last morning in Caracas. Your suitcase is packed. Carmen is in the kitchen.", sceneEs: "Your last morning in Madrid. Your suitcase is packed. Carmen is in the kitchen.",
    lines: [
      C("¡Buenos días, {N}! ¿Ya te vas?", "Good morning, {N}! Are you leaving already?", "Sí, mi vuelo sale a las once. Quisiera pagar la cuenta.", "Yes, my flight leaves at eleven. I'd like to pay the bill.",
        "No, me llamo {N}.", "She knows your name 😂", "Sí, mi vuelo sale ayer.", "Ayer = yesterday. Too late! 😅"),
      C("Claro. Son tres noches, ciento veinte dólares.", "Sure. That's three nights, a hundred and twenty dollars.", "Aquí tienes. ¿Me puedes llamar un taxi?", "Here you are. Can you call me a taxi?",
        "¿Ciento veinte noches?", "Three nights! 🌙", "¿Me puedes llamar un autobús?", "You can't call a bus 🚌😂",
        { n: "Claro. Son tres noches, ciento veinte euros." }),
      C("Sí, claro. El taxi llega en diez minutos. ¿Qué tal las vacaciones?", "Yes, of course. The taxi arrives in ten minutes. How was the holiday?", "¡La pasé muy bien! Venezuela es muy bonita.", "I had a great time! Venezuela is very beautiful.",
        "¡Muy mal! Venezuela es muy bonita.", "Muy mal = very bad 😬", "Diez minutos.", "She asked about the holiday 🌴",
        { a: "¡Lo he pasado muy bien! España es muy bonita.", w: ["¡Muy mal! España es muy bonita.", "Muy mal = very bad 😬"] }),
      C("¡Qué bueno! Gracias por venir. ¿Vas a volver?", "Great! Thanks for coming. Will you come back?", "¡Claro! Nos vemos el próximo año.", "Of course! See you next year.",
        "¡Claro! Nos vemos ayer.", "Ayer = yesterday 😂", "No, gracias.", "Ouch! Carmen is sad 😢"),
      C("Aquí está el taxi. ¡Te voy a extrañar!", "Here's the taxi. I'm going to miss you!", "¡Yo también! ¡Gracias por todo, Carmen!", "Me too! Thanks for everything, Carmen!",
        "¡Gracias para todo!", "Thanks for = gracias POR 🙏", "¡A la orden!", "That's what Carmen says 😉",
        { n: "Aquí está el taxi. ¡Te voy a echar de menos!", w: ["¡De nada!", "That's what Carmen says 😉"] }),
      C("¡Buen viaje, {N}! Escríbeme.", "Have a good trip, {N}! Write to me.", "¡Chao, Carmen! Nos vemos.", "Bye, Carmen! See you.",
        "¡Buenos días!", "You're leaving — say bye! 👋", "¡Mucho gusto!", "That's for when you meet someone 🤝",
        { a: "¡Adiós, Carmen! Nos vemos." })
    ] },
  gq: { name: "gracias por, nos vemos", items: [
    G("Gracias ___ todo.", "por", "para|de", "Thanks for everything."),
    G("Gracias ___ la ayuda.", "por", "para|a", "Thanks for the help."),
    G("La ___ muy bien.", "pasé", "paso|pasó", "I had a great time.", "ve"),
    G("Lo he ___ muy bien.", "pasado", "pasé|pasando", "I've had a great time.", "es"),
    G("Nos ___ el próximo año.", "vemos", "vamos|ver", "See you next year."),
    G("¿Me ___ llamar un taxi? (usted)", "puede", "puedo|poder", "Can you call me a taxi?"),
    G("Quisiera pagar ___ cuenta.", "la", "el|una", "I'd like to pay the bill."),
    G("¡___ viaje!", "Buen", "Bueno|Buena", "Have a good trip!")
  ] }
});
