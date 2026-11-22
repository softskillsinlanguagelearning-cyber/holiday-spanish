// =====================================================================
// ROUND 2: Conversation (units 11 to 20)
// =====================================================================

U(11, {
  sit: "Getting to know your neighbours", gram: "present tense (-ar, -er, -ir); ser for jobs, without un / una; estar de vacaciones; mi",
  tip: "Jobs take no un / una after ser: soy profesora, es médico. Estar de vacaciones = to be on holiday. ¿A qué se dedica? is the polite way to ask someone what they do.",
  phrases: [
    "Vivo en Londres y trabajo en una escuela.|I live in London and work in a school.",
    "Soy profesor{a/}. ¿Y usted, a qué se dedica?|I'm a teacher. And you, what do you do?",
    "Estoy de vacaciones con mi familia.|I'm on holiday with my family.",
    "¿Dónde vive usted?|Where do you live?",
    "Mi espos{o/a} es médic{o/a}.|My husband is a doctor. / My wife is a doctor.",
    "Hablo un poco de español.|I speak a little Spanish.",
    "Trabajo en una oficina.|I work in an office.",
    "¿Usted habla inglés?|Do you speak English?",
    "Estamos aquí por una semana.|We're here for a week.",
    "Es mi primera vez en Venezuela.|It's my first time in Venezuela.|Es mi primera vez en España."
  ],
  words: ["👩‍⚕️|el médico, la médica|doctor", "👩‍🏫|el profesor, la profesora|teacher", "🧑‍⚕️|el enfermero, la enfermera|nurse", "👩‍🍳|el cocinero, la cocinera|cook",
    "💼|la oficina|office", "🏫|la escuela|school", "🏥|el hospital|hospital", "🏠|vivir|to live", "🔧|trabajar|to work", "💍|el esposo, la esposa|husband, wife"],
  chat: { npc: "Marisol", av: "👩🏽‍🦱", scene: "Round 2 begins on the Caribbean coast, at a posada in Choroní. Your neighbour on the terrace says hello.", sceneEs: "Round 2 begins on the coast, at a hostal near Málaga. Your neighbour on the terrace says hello.",
    lines: [
      C("¡Buenas tardes! Ustedes son los nuevos vecinos, ¿no? Yo soy Marisol.", "Good afternoon! You're the new neighbours, aren't you? I'm Marisol.", "¡Mucho gusto, Marisol! Yo soy {N}. Estoy de vacaciones con mi familia.", "Nice to meet you, Marisol! I'm {N}. I'm on holiday with my family.",
        "¡Mucho gusto! Soy de vacaciones.", "On holiday = ESTAR de vacaciones 🌴", "Una mesa para dos.", "She's a neighbour, not a waitress 😄"),
      C("¡Qué bueno! ¿Y de dónde son?", "Great! And where are you from?", "Somos de Inglaterra. Vivo en Londres.", "We're from England. I live in London.",
        "Somos de Inglaterra. Vivo a Londres.", "Live IN = vivir EN 🏙️", "Somos de vacaciones.", "Estamos de vacaciones — and she asked where you're from 🌍"),
      C("¡Londres! ¿Y a qué se dedica?", "London! And what do you do?", "Soy profesor{a/}. Trabajo en una escuela. ¿Y usted, a qué se dedica?", "I'm a teacher. I work in a school. And you, what do you do?",
        "Soy un{a/} profesor{a/}.", "With jobs, Spanish uses no un / una 👩‍🏫", "Me dedico a Londres.", "😂 London is where you live"),
      C("Yo soy enfermera. Trabajo en un hospital en Valencia. Mi esposo, Rafael, es cocinero.", "I'm a nurse. I work in a hospital in Valencia. My husband, Rafael, is a cook.", "¡Qué interesante! ¿Ustedes viven en Valencia?", "How interesting! Do you live in Valencia?",
        "¡Qué interesante! ¿Usted vive en un hospital?", "She works there — she doesn't live there 🏥", "¿Rafael es enfermera?", "Rafael is the cook 👨‍🍳"),
      C("Sí, vivimos en Valencia, pero venimos a Choroní todos los años. ¡Usted habla muy bien español!", "Yes, we live in Valencia, but we come to Choroní every year. You speak Spanish very well!", "¡Gracias! Hablo un poco. Estoy aprendiendo.", "Thanks! I speak a little. I'm learning.",
        "¡Sí, hablo perfecto!", "Modest is better 😄", "Gracias, vivo en Londres.", "You told her already 😉",
        { n: "Sí, vivimos en Valencia, pero venimos a Málaga todos los años. ¡Usted habla muy bien español!" }),
      C("¡Bueno, bienvenidos! Si necesitan algo, aquí estamos.", "Well, welcome! If you need anything, we're here.", "¡Muchas gracias, Marisol! Muy amable.", "Thank you very much, Marisol! Very kind.",
        "¡A la orden, Marisol!", "That's what SHE would say to your thanks 😉", "Soy profesor{a/}.", "You already told her 😉",
        { w: ["¡De nada, Marisol!", "That's what SHE would say to your thanks 😉"] })
    ] },
  gq: { name: "Present tense and ser for jobs", items: [
    G("Yo ___ en Londres.", "vivo", "vive|vivimos", "I live in London."),
    G("Yo ___ en una escuela.", "trabajo", "trabaja|trabajar", "I work in a school."),
    G("¿Usted ___ inglés?", "habla", "hablo|hablas", "Do you speak English?"),
    G("Mi esposo ___ en un hospital.", "trabaja", "trabajo|trabajas", "My husband works in a hospital."),
    G("Mi hermana es ___.", "médica", "una médica|la médica", "My sister is a doctor."),
    G("___ de vacaciones con mi familia.", "Estoy", "Soy|Tengo", "I'm on holiday with my family."),
    G("Nosotros ___ en Valencia.", "vivimos", "vivo|viven", "We live in Valencia."),
    G("¿A qué se ___ usted?", "dedica", "dedico|dedicas", "What do you do?"),
    G("___ familia es muy grande.", "Mi", "Mis|Me", "My family is very big.")
  ] }
});

U(12, {
  sit: "Asking about times and connections", gram: "ir (va); tener que + infinitive; como a las... for approximate times",
  tip: "tener que + infinitive = to have to: tiene que cambiar. Venezuelans give approximate times with como: como a las tres (Spain: sobre las tres). The bus driver is el chofer (Spain: el conductor).",
  phrases: [
    "¿Este autobús va a Choroní?|Does this bus go to Choroní?|¿Este autobús va a Ronda?",
    "No, tiene que cambiar en Maracay.|No, you have to change in Maracay.|No, tiene que cambiar en Málaga.",
    "¿A qué hora llegamos? Como a las tres.|What time do we arrive? Around three.|¿A qué hora llegamos? Sobre las tres.",
    "¿Cuánto tarda el viaje?|How long does the journey take?",
    "Tarda unas dos horas.|It takes about two hours.",
    "¿De dónde sale el próximo autobús?|Where does the next bus leave from?",
    "Tengo que comprar el pasaje.|I have to buy the ticket.|Tengo que comprar el billete.",
    "¿Me avisa en Maracay, por favor?|Can you tell me when we get to Maracay?|¿Me avisa en Málaga, por favor?",
    "¿Dónde está la parada?|Where's the stop?",
    "Hay mucho tráfico.|There's a lot of traffic."
  ],
  words: ["🚏|la parada|stop", "🔄|cambiar|to change", "⏱️|tardar|to take (time)", "🧑‍✈️|el chofer|driver|el conductor", "⏭️|el próximo|the next",
    "🕒|como a las tres|around three|sobre las tres", "🛣️|la carretera|road", "🏖️|la costa|coast", "🚗|el tráfico|traffic", "📍|llegar|to arrive"],
  chat: { npc: "Señor Ramón", av: "👨🏾‍✈️", scene: "You want to go from Caracas to the beach at Choroní. A bus driver is standing by his bus.", sceneEs: "You want to go from the coast to the mountain town of Ronda. A bus driver is standing by his bus.",
    lines: [
      C("¡Buenas! ¿Para dónde va?", "Hi! Where are you going?", "Buenas. ¿Este autobús va a Choroní?", "Hi. Does this bus go to Choroní?",
        "Buenas. ¿Este autobús vas a Choroní?", "The bus goes: va, not vas 🚌", "Voy a Inglaterra.", "By bus? That's a long trip 😂",
        { n: "¡Buenas! ¿Adónde va?", a: "Buenas. ¿Este autobús va a Ronda?", w: ["Buenas. ¿Este autobús vas a Ronda?", "The bus goes: va, not vas 🚌"] }),
      C("No, no va directo. Tiene que cambiar en Maracay.", "No, it doesn't go direct. You have to change in Maracay.", "¿Tengo que cambiar en Maracay? ¿Dónde?", "I have to change in Maracay? Where?",
        "¿Tiene que cambiar en Maracay?", "You're the one changing: tengo que 😉", "¿Tengo que cambiar dinero?", "Change BUSES, not money 💵",
        { n: "No, no va directo. Tiene que cambiar en Málaga.", a: "¿Tengo que cambiar en Málaga? ¿Dónde?", w: ["¿Tiene que cambiar en Málaga?", "You're the one changing: tengo que 😉"] }),
      C("En el terminal de Maracay. De ahí sale el autobús para Choroní.", "At the Maracay bus station. The bus for Choroní leaves from there.", "Entendido. ¿Cuánto tarda el viaje?", "Got it. How long does the journey take?",
        "¿Cuánto cuesta el terminal?", "The station isn't for sale 😄", "Entendido. ¿Cuánto tardo yo?", "Ask about the journey: ¿Cuánto tarda el viaje? ⏱️",
        { n: "En la estación de Málaga. De ahí sale el autobús para Ronda." }),
      C("A Maracay, una hora. Y de Maracay a Choroní, dos horas más, por la montaña.", "To Maracay, one hour. And from Maracay to Choroní, two more hours, over the mountain.", "¿Entonces a qué hora llegamos?", "So what time do we arrive?",
        "¿Entonces a qué hora llegamos ayer?", "Ayer = yesterday 😂", "Entonces, ¿una hora en total?", "Listen again: one hour plus two hours 🧮",
        { n: "A Málaga, una hora. Y de Málaga a Ronda, dos horas más, por la montaña." }),
      C("Como a las tres, si no hay mucho tráfico.", "Around three, if there's not much traffic.", "Perfecto. ¿Me avisa en Maracay, por favor?", "Perfect. Can you tell me when we get to Maracay, please?",
        "¿Como a las tres de la mañana?", "In the afternoon! 🕒", "¿Hay mucho tráfico en la playa?", "Hmm, that's not the question 🤔",
        { n: "Sobre las tres, si no hay mucho tráfico.", a: "Perfecto. ¿Me avisa en Málaga, por favor?", w: ["¿Sobre las tres de la mañana?", "In the afternoon! 🕒"] }),
      C("¡Claro! Siéntese ahí adelante. ¡Buen viaje!", "Sure! Sit there at the front. Have a good trip!", "¡Gracias, muy amable!", "Thanks, very kind!",
        "¡Siéntese!", "You're telling HIM to sit? He's the driver 😂", "¡Buen viaje!", "You're the traveller! Say thanks 😉")
    ] },
  gq: { name: "ir and tener que", items: [
    G("¿Este autobús ___ a Choroní?", "va", "voy|vas", "Does this bus go to Choroní?", "ve"),
    G("¿Este autobús ___ a Ronda?", "va", "voy|vas", "Does this bus go to Ronda?", "es"),
    G("Usted ___ que cambiar en Maracay.", "tiene", "tengo|tienes", "You have to change in Maracay.", "ve"),
    G("Usted ___ que cambiar en Málaga.", "tiene", "tengo|tienes", "You have to change in Málaga.", "es"),
    G("Yo tengo ___ comprar el pasaje.", "que", "de|a", "I have to buy the ticket.", "ve"),
    G("Yo tengo ___ comprar el billete.", "que", "de|a", "I have to buy the ticket.", "es"),
    G("¿A qué hora ___ nosotros?", "llegamos", "llego|llegar", "What time do we arrive?"),
    G("Llegamos ___ a las tres.", "como", "sobre|más", "We arrive around three.", "ve"),
    G("Llegamos ___ las tres.", "sobre", "como|en", "We arrive around three.", "es"),
    G("El viaje ___ dos horas.", "tarda", "tardo|tardan", "The journey takes two hours."),
    G("Nosotros ___ a la playa.", "vamos", "va|voy", "We're going to the beach."),
    G("Ellos ___ que esperar.", "tienen", "tiene|tenemos", "They have to wait.")
  ] }
});

U(13, {
  sit: "Asking what the room or house has", gram: "hay or está; ser or estar for description; prepositions of place",
  tip: "ser describes what something is like (es grande), estar describes its state or where it is (está limpia, está abajo). hay = there is / there are, for things you don't know about yet.",
  phrases: [
    "¿Hay aire acondicionado en la habitación?|Is there air conditioning in the room?",
    "La cocina está abajo y la piscina está detrás de la posada.|The kitchen is downstairs and the pool is behind the guesthouse.|La cocina está abajo y la piscina está detrás del hostal.",
    "La habitación es grande y está muy limpia.|The room is big and very clean.",
    "¿Hay mosquitero?|Is there a mosquito net?",
    "La playa está cerca, a cinco minutos.|The beach is close, five minutes away.",
    "¿Dónde está la nevera?|Where's the fridge?",
    "El baño está al lado de la cocina.|The bathroom is next to the kitchen.",
    "Hay dos hamacas en el patio.|There are two hammocks in the courtyard.",
    "La cama es muy cómoda.|The bed is very comfortable.",
    "¿Hay estacionamiento?|Is there parking?|¿Hay aparcamiento?"
  ],
  words: ["❄️|el aire acondicionado|air conditioning", "🏊|la piscina|pool", "🍳|la cocina|kitchen", "🧊|la nevera|fridge", "🦟|el mosquitero|mosquito net",
    "🅿️|el estacionamiento|parking|el aparcamiento", "⬇️|abajo|downstairs", "⬆️|arriba|upstairs", "🔙|detrás de|behind", "🧼|limpio, limpia|clean"],
  chat: { npc: "Doña Elena", av: "👵🏾", scene: "You arrive at your posada in Choroní. Doña Elena, the owner, shows you around.", sceneEs: "You arrive at your hostal in Ronda. Doña Elena, the owner, shows you around.",
    lines: [
      C("¡Bienvenidos a la posada! Pasen, pasen. ¿Qué tal el viaje?", "Welcome to the posada! Come in, come in. How was the trip?", "Largo, pero bonito. La montaña es espectacular.", "Long, but beautiful. The mountain is amazing.",
        "Larga, pero bonita.", "viaje is masculine: largo, bonito 🚌", "¿Hay aire acondicionado?", "Answer her question first 😉",
        { n: "¡Bienvenidos al hostal! Pasen, pasen. ¿Qué tal el viaje?" }),
      C("Aquí está su habitación. Es grande, ¿verdad?", "Here's your room. It's big, isn't it?", "Sí, es grande y está muy limpia. ¿Hay aire acondicionado?", "Yes, it's big and very clean. Is there air conditioning?",
        "Sí, está grande y es muy limpia.", "Swap them: ES grande (what it's like), ESTÁ limpia (its state) 🧹", "Sí, hay grande.", "hay = there is 🤔"),
      C("No, pero hay un ventilador, y la brisa del mar es fresquita.", "No, but there's a fan, and the sea breeze is nice and cool.", "Está bien. ¿Y dónde está la cocina?", "That's fine. And where's the kitchen?",
        "Está bien. ¿Y dónde hay la cocina?", "For a specific place: ¿dónde ESTÁ...? 📍", "¿Hay un mar en la habitación?", "😂 The sea is outside!",
        { n: "No, pero hay un ventilador, y la brisa de la montaña es fresquita." }),
      C("La cocina está abajo, al lado del comedor. Pueden usar la nevera.", "The kitchen is downstairs, next to the dining room. You can use the fridge.", "Perfecto. ¿Hay piscina?", "Perfect. Is there a pool?",
        "¿La nevera está arriba?", "She said downstairs ⬇️", "¿Pueden usar la nevera?", "She said YOU can use it 😉"),
      C("Sí, la piscina está detrás de la posada, y hay hamacas en el patio.", "Yes, the pool is behind the guesthouse, and there are hammocks in the courtyard.", "¡Qué chévere! ¿Y la playa está lejos?", "How great! And is the beach far?",
        "¡Qué chévere! ¿Y la playa es lejos?", "For location, use estar: está lejos 📍", "¿Las hamacas están detrás de la cocina?", "They're in the courtyard 🛌",
        { n: "Sí, la piscina está detrás del hostal, y hay hamacas en el patio.", a: "¡Qué guay! ¿Y el centro está lejos?", w: ["¡Qué guay! ¿Y el centro es lejos?", "For location, use estar: está lejos 📍"] }),
      C("No, está a cinco minutos caminando. ¡Disfruten!", "No, it's five minutes on foot. Enjoy!", "¡Muchas gracias! La posada es muy bonita.", "Thank you very much! The posada is very pretty.",
        "¡Muchas gracias! Está a cinco horas.", "Minutes, not hours ⏱️", "¡Disfruten!", "That's her line 😉",
        { n: "No, está a cinco minutos andando. ¡Disfruten!", a: "¡Muchas gracias! El hostal es muy bonito." })
    ] },
  gq: { name: "ser, estar or hay?", items: [
    G("¿___ aire acondicionado en la habitación?", "Hay", "Está|Es", "Is there air conditioning in the room?"),
    G("La habitación ___ grande.", "es", "está|hay", "The room is big."),
    G("La habitación ___ muy limpia.", "está", "es|hay", "The room is very clean."),
    G("La cocina ___ abajo.", "está", "es|hay", "The kitchen is downstairs."),
    G("La piscina está detrás ___ la posada.", "de", "del|a", "The pool is behind the guesthouse.", "ve"),
    G("La piscina está detrás ___ hostal.", "del", "de|de el", "The pool is behind the guesthouse.", "es"),
    G("El baño está al lado ___ la cocina.", "de", "del|en", "The bathroom is next to the kitchen."),
    G("Las toallas ___ en el baño.", "están", "son|hay", "The towels are in the bathroom."),
    G("En el patio ___ dos hamacas.", "hay", "están|son", "In the courtyard there are two hammocks."),
    G("La playa ___ cerca.", "está", "es|hay", "The beach is close.")
  ] }
});

U(14, {
  sit: "Answering the waiter's questions", gram: "ustedes forms; con and sin; ser for identity",
  tip: "Venezuela uses ustedes for every group, friends included. Spain uses vosotros with friends: ¿Qué vais a tomar? Coffee words are fun: un marrón = coffee with milk, un negrito = black coffee. Careful — in Spain, un marrón means \"a problem\"!",
  phrases: [
    "¿Qué van a tomar?|What would you like to drink?|¿Qué vais a tomar?",
    "Un marrón sin azúcar, por favor.|A coffee with milk, no sugar, please.|Un café con leche sin azúcar, por favor.",
    "¿Tiene algo sin carne? Soy vegetarian{a/o}.|Do you have anything without meat? I'm vegetarian.",
    "Un negrito, por favor.|A black coffee, please.|Un café solo, por favor.",
    "Con hielo, por favor.|With ice, please.",
    "¿Ya saben qué van a pedir?|Do you know what you're going to order?|¿Ya sabéis qué vais a pedir?",
    "Sin cebolla, por favor.|No onion, please.",
    "Soy alérgic{a/o} a los mariscos.|I'm allergic to seafood.",
    "¿El jugo tiene azúcar?|Does the juice have sugar in it?|¿El zumo tiene azúcar?",
    "Para nosotros, dos pabellones.|Two pabellones for us.|Para nosotros, dos paellas."
  ],
  words: ["☕|un marrón|coffee with milk|un café con leche", "⚫|un negrito|black coffee|un café solo", "🍬|el azúcar|sugar", "🧊|el hielo|ice", "🥩|la carne|meat",
    "🥗|vegetariano, vegetariana|vegetarian", "🦐|los mariscos|seafood|el marisco", "🧅|la cebolla|onion", "🍛|el pabellón criollo|pabellón (beef, black beans, rice, plantain)", "🥟|la empanada|empanada (fried pastry)"],
  chat: { npc: "Daniela", av: "💁🏽‍♀️", scene: "Dinner in Choroní with two friends from the posada. Daniela, the waitress, comes to your table.", sceneEs: "Dinner in Ronda with two friends from the hostal. Daniela, the waitress, comes to your table.",
    lines: [
      C("¡Buenas noches! ¿Qué van a tomar?", "Good evening! What would you like to drink?", "Un marrón sin azúcar, por favor.", "A coffee with milk, no sugar, please.",
        "Un marrón con sin azúcar.", "Just sin: un marrón sin azúcar ☕", "Vamos a tomar el autobús.", "😂 tomar = drink here!",
        { n: "¡Buenas noches! ¿Qué vais a tomar?", a: "Un café con leche sin azúcar, por favor.", w: ["Un café con leche con sin azúcar.", "Just sin: sin azúcar ☕"] }),
      C("¿Y sus amigos?", "And your friends?", "Ellos van a tomar dos jugos de mango con hielo.", "They're going to have two mango juices with ice.",
        "Ellos vamos a tomar dos jugos.", "They = ellos VAN 🥤", "Ellos son de Inglaterra.", "She asked what they're drinking 🥤",
        { n: "¿Y vuestros amigos?", a: "Ellos van a tomar dos zumos de naranja con hielo.", w: ["Ellos vamos a tomar dos zumos.", "They = ellos VAN 🥤"] }),
      C("Perfecto. ¿Ya saben qué van a comer?", "Perfect. Do you know what you're going to eat?", "Sí. ¿Tiene algo sin carne? Soy vegetarian{a/o}.", "Yes. Do you have anything without meat? I'm vegetarian.",
        "Sí. ¿Tiene algo sin carne? Estoy vegetarian{a/o}.", "Being vegetarian is who you are: soy 🥗", "Sí, soy mucha hambre.", "Hungry = tengo hambre 😄",
        { n: "Perfecto. ¿Ya sabéis qué vais a comer?" }),
      C("Sí, tenemos arepas de queso, empanadas de queso y pasta con vegetales.", "Yes, we have cheese arepas, cheese empanadas and pasta with vegetables.", "Una empanada de queso, por favor.", "A cheese empanada, please.",
        "Una empanada de carne, por favor.", "But you're vegetarian! 🥩", "Una pasta con carne.", "Vegetarian, remember? 😉",
        { n: "Sí, tenemos tortilla de patatas, croquetas de queso y pasta con verduras.", a: "Una tortilla de patatas, por favor.", w: ["Unas croquetas de jamón, por favor.", "But you're vegetarian! 🥩"] }),
      C("¿Y para los demás?", "And for the others?", "Para ellos, dos pabellones, por favor.", "Two pabellones for them, please.",
        "Para ellos, dos pabellón.", "Plural: dos pabellones 🍛", "Para ellos, sin.", "Without... what? 😄",
        { a: "Para ellos, dos paellas, por favor.", w: ["Para ellos, dos paella.", "Plural: dos paellas 🥘"] }),
      C("Muy bien. Ya les traigo todo.", "Very good. I'll bring you everything right away.", "¡Gracias! Muy amable.", "Thanks! Very kind.",
        "¡Ya les traigo todo!", "That's the waitress's line 😉", "Un momentico.", "She's the busy one 😄",
        { n: "Muy bien. Ahora os traigo todo.", w: ["¡Ahora os traigo todo!", "That's the waitress's line 😉"] })
    ] },
  gq: { name: "ustedes / vosotros, con and sin", items: [
    G("¿Qué ___ a tomar, muchachos?", "van", "vais|vamos", "What are you having, guys?", "ve"),
    G("¿Qué ___ a tomar, chicos?", "vais", "van|vamos", "What are you having, guys?", "es"),
    G("Un café ___ azúcar, por favor.", "sin", "con|para", "A coffee without sugar, please."),
    G("¿Tiene algo ___ carne?", "sin", "por|de", "Do you have anything without meat?"),
    G("Quiero el jugo ___ hielo.", "con", "sin|de", "I want the juice with ice.", "ve"),
    G("Quiero el zumo ___ hielo.", "con", "sin|de", "I want the juice with ice.", "es"),
    G("___ vegetariana.", "Soy", "Estoy|Tengo", "I'm vegetarian."),
    G("Ellos ___ ingleses.", "son", "están|es", "They're English."),
    G("¿Ustedes ___ de aquí?", "son", "están|sois", "Are you from here?", "ve"),
    G("¿Vosotros ___ de aquí?", "sois", "son|estáis", "Are you (guys) from here?", "es"),
    G("Nosotros ___ a pedir pescado.", "vamos", "van|vais", "We're going to order fish.")
  ] },
  cmp: [
    { k: "who", t: "¿Qué vais a tomar?", a: "es" },
    { k: "who", t: "Un marrón sin azúcar, por favor.", a: "ve" },
    { k: "pair", t: "jugo", a: "zumo", wrong: ["leche", "jarabe"], from: "ve" },
    { k: "switch", to: "es", t: "¿Qué van a tomar, chicos?", a: "¿Qué vais a tomar, chicos?" },
    { k: "switch", to: "ve", t: "Un café con leche, por favor.", a: "Un marrón, por favor." },
    { k: "ff", q: "In Madrid you ask for \"un marrón\". What does the waiter hear?", a: "a problem", wrong: ["a coffee with milk", "a brown sauce"], why: "In Spain, un marrón is a nasty problem. Ask for un café con leche!" }
  ]
});

U(15, {
  sit: "At the market", gram: "quantities with de; ¿a cuánto están?; plural agreement; eso",
  tip: "In Venezuela a banana is un cambur, and un plátano is a plantain for cooking. In Spain, un plátano is a banana! For prices that change every day, ask ¿A cuánto están...? Done shopping? No, eso es todo.",
  phrases: [
    "Un kilo de cambures y medio kilo de queso blanco.|A kilo of bananas and half a kilo of white cheese.|Un kilo de plátanos y medio kilo de queso manchego.",
    "¿A cuánto están los aguacates?|How much are the avocados?",
    "¿Algo más? No, eso es todo.|Anything else? No, that's all.",
    "Están a dos dólares el kilo.|They're two dollars a kilo.|Están a dos euros el kilo.",
    "Deme tres mangos, por favor.|Give me three mangoes, please.",
    "¿Están maduros?|Are they ripe?",
    "Una bolsa, por favor.|A bag, please.",
    "Un cuarto de kilo de jamón.|A quarter of a kilo of ham.",
    "Una docena de huevos.|A dozen eggs.",
    "¿Cuánto es todo?|How much is everything?"
  ],
  words: ["🍌|el cambur|banana|el plátano", "🥑|el aguacate|avocado", "🥭|el mango|mango", "🧀|el queso blanco|white cheese|el queso fresco", "🥚|la docena de huevos|a dozen eggs",
    "⚖️|el kilo|kilo", "🌗|medio kilo|half a kilo", "🍅|el tomate|tomato", "🟢|maduro, madura|ripe", "🍠|el plátano|plantain (for cooking)|el plátano macho"],
  chat: { npc: "Señor Julio", av: "👨🏾‍🌾", scene: "Saturday market in Choroní. Fruit, cheese and fish everywhere. Señor Julio calls you over to his stall.", sceneEs: "Saturday market in Ronda. Fruit, cheese and ham everywhere. Señor Julio calls you over to his stall.",
    lines: [
      C("¡Pase adelante! ¿Qué le doy?", "Come on over! What can I get you?", "Un kilo de cambures y medio kilo de queso blanco, por favor.", "A kilo of bananas and half a kilo of white cheese, please.",
        "Un kilo cambures.", "Add de: un kilo DE cambures ⚖️", "Un pasaje de cambures.", "😂 un pasaje = a bus ticket",
        { n: "¡Buenos días! ¿Qué le pongo?", a: "Un kilo de plátanos y medio kilo de queso manchego, por favor.", w: ["Un kilo plátanos.", "Add de: un kilo DE plátanos ⚖️"] }),
      C("Aquí tiene. Los cambures están bien maduros. ¿Algo más?", "Here you are. The bananas are nice and ripe. Anything else?", "Sí. ¿A cuánto están los aguacates?", "Yes. How much are the avocados?",
        "Sí. ¿A cuánto es los aguacates?", "For prices that change: ¿a cuánto ESTÁN? 🥑", "Sí, los cambures.", "You already have them 🍌",
        { n: "Aquí tiene. Los plátanos están muy maduros. ¿Algo más?", w: ["Sí, los plátanos.", "You already have them 🍌"] }),
      C("Hoy están a tres dólares el kilo. Están buenísimos.", "Today they're three dollars a kilo. They're excellent.", "Deme dos, por favor. ¿Y los mangos?", "Give me two, please. And the mangoes?",
        "Deme dos kilos de dólares.", "😂 Dollars aren't sold by the kilo", "Están a tres dólares.", "He just said that 😉",
        { n: "Hoy están a tres euros el kilo. Están buenísimos.", w: ["Deme dos kilos de euros.", "😂 Euros aren't sold by the kilo"] }),
      C("Los mangos son de regalo, mi amor. ¡Son del árbol de mi casa!", "The mangoes are free, love. They're from the tree at my house!", "¡Qué amable! Muchas gracias.", "How kind! Thank you very much.",
        "¿De regalo? ¿Cuánto cuestan?", "Free = de regalo 🎁", "Los mangos están muy caros.", "They're free! 😂",
        { n: "Los mangos son de regalo, cariño. ¡Son del árbol de mi casa!" }),
      C("¿Algo más?", "Anything else?", "No, eso es todo. ¿Cuánto es?", "No, that's all. How much is it?",
        "No, esa es toda.", "Fixed phrase: eso es todo ✅", "Sí, eso es todo.", "Sí and \"that's all\" don't match 😅"),
      C("Son diez dólares. ¿Quiere una bolsa?", "That's ten dollars. Would you like a bag?", "No, gracias. Tengo mi bolsa. ¡Chao!", "No, thanks. I have my bag. Bye!",
        "Sí, diez bolsas.", "One bag is enough 😄", "¿Diez kilos?", "Ten dollars, not kilos 💵",
        { n: "Son diez euros. ¿Quiere una bolsa?", a: "No, gracias. Tengo mi bolsa. ¡Adiós!", w: ["¿Diez kilos?", "Ten euros, not kilos 💶"] })
    ] },
  gq: { name: "Quantities and ¿a cuánto?", items: [
    G("Un kilo ___ cambures.", "de", "del|con", "A kilo of bananas.", "ve"),
    G("Un kilo ___ plátanos.", "de", "del|con", "A kilo of bananas.", "es"),
    G("Medio kilo ___ queso.", "de", "del|a", "Half a kilo of cheese."),
    G("¿A cuánto ___ los aguacates?", "están", "es|está", "How much are the avocados?"),
    G("¿A cuánto ___ el queso?", "está", "están|es", "How much is the cheese?"),
    G("Los mangos están muy ___.", "maduros", "maduro|maduras", "The mangoes are very ripe."),
    G("No, ___ es todo.", "eso", "esa|ese", "No, that's all."),
    G("___ tres mangos, por favor.", "Deme", "Doy|Damos", "Give me three mangoes, please."),
    G("Una docena ___ huevos.", "de", "con|en", "A dozen eggs.")
  ] }
});

U(16, {
  sit: "Asking how to get somewhere and how far", gram: "ir en + transport; al and del; poder (puede); lejos / cerca",
  tip: "Venezuelans agarran un taxi and go caminando (on foot). In Spain you coger un taxi and go andando — but never say coger in Venezuela, it's rude there! You montarse en and bajarse de the bus or metro.",
  phrases: [
    "¿Cómo llego al centro?|How do I get to the centre?",
    "Puede ir en metro o agarrar un taxi.|You can take the metro or grab a taxi.|Puede ir en metro o coger un taxi.",
    "¿Está lejos? No, está a diez minutos caminando.|Is it far? No, it's ten minutes on foot.|¿Está lejos? No, está a diez minutos andando.",
    "¿Qué línea tengo que tomar?|Which line do I have to take?|¿Qué línea tengo que coger?",
    "Bájese en la estación Bellas Artes.|Get off at Bellas Artes station.|Bájese en la estación de Sol.",
    "¿Dónde puedo comprar un boleto?|Where can I buy a ticket?|¿Dónde puedo comprar un billete?",
    "¿Se puede ir caminando?|Can you walk there?|¿Se puede ir andando?",
    "En la noche es mejor ir en taxi.|At night it's better to go by taxi.|Por la noche es mejor ir en taxi.",
    "Voy en autobús.|I'm going by bus.",
    "¿Cuánto tarda en metro?|How long does it take by metro?"
  ],
  words: ["🚇|el metro|metro, underground", "🎟️|el boleto|ticket (metro, bus)|el billete", "🚶|caminando|on foot|andando", "🚕|agarrar un taxi|to grab a taxi|coger un taxi", "🚉|la estación|station",
    "🔢|la línea|line", "⬇️|bajarse|to get off", "⬆️|montarse|to get on|subirse", "🏙️|el centro|the centre", "📏|lejos, cerca|far, near"],
  chat: { npc: "Valentina", av: "👩🏻‍🎓", scene: "You're back in Caracas for a day, outside your hotel. A student is waiting at the bus stop.", sceneEs: "You're in Madrid for a day, outside your hotel. A student is waiting at the bus stop.",
    lines: [
      C("¡Hola! ¿Te puedo ayudar? Pareces perdid{a/o}.", "Hi! Can I help you? You look lost.", "¡Hola! Sí, gracias. ¿Cómo llego al centro?", "Hi! Yes, thanks. How do I get to the centre?",
        "¡Hola! ¿Cómo llego a el centro?", "a + el = al 🙂", "Sí. Me llamo perdid{a/o}.", "😂 That's not your name!"),
      C("Puedes ir en metro o agarrar un taxi.", "You can take the metro or grab a taxi.", "¿Está lejos? ¿Se puede ir caminando?", "Is it far? Can you walk there?",
        "¿Puedo ir en pie?", "On foot = caminando 🚶", "¿Puedo ir en taxi o en metro?", "She just said that 😉",
        { n: "Puedes ir en metro o coger un taxi.", a: "¿Está lejos? ¿Se puede ir andando?", w: ["¿Puedo ir en pie?", "On foot = andando 🚶"] }),
      C("Caminando son como cuarenta minutos. En metro, diez.", "On foot it's about forty minutes. By metro, ten.", "Entonces voy en metro. ¿Qué línea tengo que tomar?", "Then I'll take the metro. Which line do I have to take?",
        "Entonces voy a metro.", "By metro = EN metro 🚇", "¿Cuarenta minutos en metro?", "Listen: forty minutes walking, ten by metro 🚶",
        { n: "Andando son unos cuarenta minutos. En metro, diez.", a: "Entonces voy en metro. ¿Qué línea tengo que coger?" }),
      C("La línea uno. Te bajas en la estación Bellas Artes.", "Line one. You get off at Bellas Artes station.", "Línea uno, Bellas Artes. ¿Dónde compro el boleto?", "Line one, Bellas Artes. Where do I buy the ticket?",
        "¿Me monto en Bellas Artes?", "You get OFF (bajarse) there ⬇️", "¿Línea once?", "Uno = one, once = eleven 1️⃣",
        { n: "La línea uno. Te bajas en la estación de Sol.", a: "Línea uno, Sol. ¿Dónde compro el billete?", w: ["¿Me subo en Sol?", "You get OFF (bajarse) there ⬇️"] }),
      C("En la taquilla, ahí en la esquina. Pero en la noche es mejor agarrar un taxi.", "At the ticket office, there on the corner. But at night it's better to grab a taxi.", "Entendido. En la noche, taxi. ¡Gracias!", "Got it. At night, a taxi. Thanks!",
        "Entendido. En la noche voy caminando.", "She said a taxi is better at night 🚕", "¿En la esquina hay un taxi?", "The ticket office is on the corner 🎟️",
        { n: "En la taquilla, ahí en la esquina. Pero por la noche es mejor coger un taxi.", a: "Entendido. Por la noche, taxi. ¡Gracias!", w: ["Entendido. Por la noche voy andando.", "She said a taxi is better at night 🚕"] }),
      C("¡A la orden! ¡Que disfrutes Caracas!", "You're welcome! Enjoy Caracas!", "¡Gracias! ¡Chao!", "Thanks! Bye!",
        "¡Que disfrutes!", "She's the local — you're the one enjoying 😉", "¡A la orden!", "That's her line 😄",
        { n: "¡De nada! ¡Que disfrutes Madrid!", a: "¡Gracias! ¡Adiós!", w: ["¡De nada!", "That's her line 😄"] })
    ] },
  gq: { name: "Transport, al and del, poder", items: [
    G("¿Cómo llego ___ centro?", "al", "a el|del", "How do I get to the centre?"),
    G("Puede ir ___ metro.", "en", "con|por", "You can go by metro."),
    G("Usted ___ ir en taxi.", "puede", "puedo|podemos", "You can go by taxi."),
    G("Puede ___ un taxi.", "agarrar", "coger|agarra", "You can grab a taxi.", "ve"),
    G("Puede ___ un taxi.", "coger", "agarrar|coge", "You can take a taxi.", "es"),
    G("La estación está lejos ___ hotel.", "del", "de el|al", "The station is far from the hotel."),
    G("Está a diez minutos ___.", "caminando", "caminar|camina", "It's ten minutes on foot.", "ve"),
    G("Está a diez minutos ___.", "andando", "andar|anda", "It's ten minutes on foot.", "es"),
    G("Yo no ___ ir caminando, está muy lejos.", "puedo", "puede|poder", "I can't walk, it's too far.", "ve"),
    G("Vengo ___ museo.", "del", "de el|al", "I'm coming from the museum.")
  ] }
});

U(17, {
  sit: "What's the weather like? Plans for the weekend", gram: "ir a + infinitive; en la mañana, en la tarde; ustedes",
  tip: "ir a + infinitive is the easy future: va a llover, vamos a bucear. Venezuelans say en la mañana, en la tarde, en la noche; Spain says por la mañana, por la tarde, por la noche.",
  phrases: [
    "¿Va a llover mañana?|Is it going to rain tomorrow?",
    "En la tarde va a llover, pero en la mañana va a hacer sol.|It'll rain in the afternoon, but the morning will be sunny.|Por la tarde va a llover, pero por la mañana va a hacer sol.",
    "¿Qué van a hacer el fin de semana? Vamos a ir a Los Roques.|What are you doing at the weekend? We're going to Los Roques.|¿Qué vais a hacer el fin de semana? Vamos a ir a Mallorca.",
    "Voy a descansar en la playa.|I'm going to relax on the beach.",
    "Vamos a bucear.|We're going to go diving.",
    "¿Qué tiempo va a hacer?|What's the weather going to be like?",
    "Va a hacer mucho calor.|It's going to be very hot.",
    "En la noche vamos a cenar en el pueblo.|In the evening we're going to have dinner in the village.|Por la noche vamos a cenar en el pueblo.",
    "Mañana vamos a tomar una lancha.|Tomorrow we're going to take a boat.|Mañana vamos a coger una lancha.",
    "¿Y ustedes qué van a hacer?|And what are you going to do?|¿Y vosotros qué vais a hacer?"
  ],
  words: ["📡|el pronóstico|weather forecast|la previsión", "⛈️|la tormenta|storm", "🌤️|en la mañana|in the morning|por la mañana", "🌇|en la tarde|in the afternoon|por la tarde",
    "🌙|en la noche|in the evening, at night|por la noche", "🤿|bucear|to dive", "🚤|la lancha|motorboat", "🏝️|la isla|island", "😴|descansar|to rest, relax", "🍽️|cenar|to have dinner"],
  chat: { npc: "Marisol", av: "👩🏽‍🦱", scene: "Breakfast on the terrace in Choroní. Marisol is reading the weather forecast on her phone.", sceneEs: "Breakfast on the terrace near Málaga. Marisol is reading the weather forecast on her phone.",
    lines: [
      C("¡Buenos días! ¿Qué van a hacer el fin de semana?", "Good morning! What are you doing at the weekend?", "Vamos a ir a Los Roques.", "We're going to Los Roques.",
        "Vamos ir a Los Roques.", "Don't forget a: vamos A ir 🙂", "Fuimos a Los Roques.", "That's the past! She asked about the weekend 📅",
        { n: "¡Buenos días! ¿Qué vais a hacer el fin de semana?", a: "Vamos a ir a Mallorca.", w: ["Vamos ir a Mallorca.", "Don't forget a: vamos A ir 🙂"] }),
      C("¡Qué chévere! ¿Y qué van a hacer allá?", "How great! And what are you going to do there?", "Yo voy a descansar en la playa y mi espos{o/a} va a bucear.", "I'm going to relax on the beach and my husband is going to dive.",
        "Yo voy a descanso en la playa.", "After ir a, use the infinitive: descansar 😴", "Va a llover.", "That's the weather, not a plan 🌧️",
        { n: "¡Qué guay! ¿Y qué vais a hacer allí?" }),
      C("Pero cuidado: el pronóstico dice que va a llover el sábado.", "But careful: the forecast says it's going to rain on Saturday.", "¿Va a llover todo el día?", "Is it going to rain all day?",
        "¿Vas a llover?", "Not you — IT is going to rain: va a llover 🌧️", "¡Qué bueno!", "Rain on holiday is good? 😅",
        { n: "Pero cuidado: la previsión dice que va a llover el sábado." }),
      C("No. En la tarde va a llover, pero en la mañana va a hacer sol.", "No. It'll rain in the afternoon, but the morning will be sunny.", "Entonces vamos a ir a la playa en la mañana.", "Then we're going to go to the beach in the morning.",
        "Entonces vamos a ir a la playa en la tarde.", "In the rain? 🌧️ Go in the morning!", "Entonces va a hacer sol en la noche.", "Sun at night? 🌞🌙",
        { n: "No. Por la tarde va a llover, pero por la mañana va a hacer sol.", a: "Entonces vamos a ir a la playa por la mañana.", w: ["Entonces vamos a ir a la playa por la tarde.", "In the rain? 🌧️ Go in the morning!"] }),
      C("¡Buena idea! ¿Y en la noche?", "Good idea! And in the evening?", "En la noche vamos a cenar pescado frito en el pueblo.", "In the evening we're going to have fried fish in the village.",
        "En la noche vamos a cenamos pescado.", "After vamos a: cenar 🍽️", "En la noche va a hacer sol.", "Sun at night? 🌞🌙",
        { n: "¡Buena idea! ¿Y por la noche?", a: "Por la noche vamos a cenar pescado frito en el pueblo.", w: ["Por la noche vamos a cenamos pescado.", "After vamos a: cenar 🍽️"] }),
      C("¡Perfecto! ¡Que la pasen muy bien!", "Perfect! Have a great time!", "¡Gracias, Marisol! ¿Y ustedes qué van a hacer?", "Thanks, Marisol! And what are you going to do?",
        "¡Gracias! ¿Y ustedes qué vamos a hacer?", "You = ustedes VAN 🙂", "¡Que la pasen bien!", "That's her line 😉",
        { n: "¡Perfecto! ¡Que lo paséis muy bien!", a: "¡Gracias, Marisol! ¿Y vosotros qué vais a hacer?", w: ["¡Gracias! ¿Y vosotros qué vamos a hacer?", "You = vosotros VAIS 🙂"] })
    ] },
  gq: { name: "ir a + infinitive", items: [
    G("Mañana ___ a llover.", "va", "van|vas", "It's going to rain tomorrow."),
    G("Nosotros vamos ___ ir a Los Roques.", "a", "de|en", "We're going to go to Los Roques.", "ve"),
    G("Nosotros vamos ___ ir a Mallorca.", "a", "de|en", "We're going to go to Mallorca.", "es"),
    G("¿Qué ___ a hacer ustedes?", "van", "vais|vamos", "What are you going to do?", "ve"),
    G("¿Qué ___ a hacer vosotros?", "vais", "van|vamos", "What are you going to do?", "es"),
    G("___ la tarde va a llover.", "En", "Por|A", "It's going to rain in the afternoon.", "ve"),
    G("___ la tarde va a llover.", "Por", "En|A", "It's going to rain in the afternoon.", "es"),
    G("Yo voy a ___ en la playa.", "descansar", "descanso|descansando", "I'm going to relax on the beach."),
    G("Mis amigos van a ___.", "bucear", "bucean|buceando", "My friends are going to dive."),
    G("Mañana va a ___ sol.", "hacer", "hace|estar", "Tomorrow it's going to be sunny.")
  ] }
});

U(18, {
  sit: "Talking about what you like doing", gram: "gustar and encantar (me gusta / me gustan); a ti; casi nunca",
  tip: "gustar works backwards: the thing you like does the \"pleasing\". Me gusta el mar, me gusta bucear, but me gustan las playas. Same with encantar (to love). ¿Y a ti? = And you?",
  phrases: [
    "Me gusta mucho bucear. ¿Y a ti?|I really like diving. And you?",
    "Me encantan las playas de Margarita.|I love the beaches on Margarita.|Me encantan las playas de Cádiz.",
    "Casi nunca voy al gimnasio.|I hardly ever go to the gym.",
    "No me gusta el frío.|I don't like the cold.",
    "A mí también.|Me too.",
    "A mí tampoco.|Me neither.",
    "Me gustan los deportes de agua.|I like water sports.",
    "¿Te gusta bailar salsa?|Do you like dancing salsa?|¿Te gusta bailar flamenco?",
    "Siempre voy a la playa en vacaciones.|I always go to the beach on holiday.",
    "Prefiero leer en la hamaca.|I prefer reading in the hammock."
  ],
  words: ["🤿|bucear|to dive", "🏊|nadar|to swim", "💃|bailar|to dance", "🏄|surfear|to surf", "🥾|caminar|to walk|andar",
    "📖|leer|to read", "🏋️|el gimnasio|gym", "🔁|siempre|always", "🔂|a veces|sometimes", "🚫|casi nunca|hardly ever"],
  chat: { npc: "Diego", av: "🧑🏽‍🦱", scene: "On the beach on Margarita Island. A diving instructor is checking his equipment and starts chatting.", sceneEs: "On the beach in Cádiz. A diving instructor is checking his equipment and starts chatting.",
    lines: [
      C("¡Hola! ¿Primera vez en Margarita? ¿Te gusta el mar?", "Hi! First time on Margarita? Do you like the sea?", "¡Sí! Me encanta el mar. Me gusta mucho bucear.", "Yes! I love the sea. I really like diving.",
        "¡Sí! Me encanto el mar.", "It's the sea that delights you: me encanta 🌊", "Sí, me gusto.", "😂 Me gusto = I like myself!",
        { n: "¡Hola! ¿Primera vez en Cádiz? ¿Te gusta el mar?" }),
      C("¡Qué bueno! Yo soy instructor de buceo. ¿Buceas mucho?", "Great! I'm a diving instructor. Do you dive a lot?", "No, casi nunca. En Inglaterra el agua es muy fría.", "No, hardly ever. In England the water is very cold.",
        "No, casi siempre.", "Casi siempre = almost always 🙃", "Sí, me gusta el frío.", "You like cold water? 🥶"),
      C("Aquí el agua es caliente y hay muchos peces. ¿Y a ti qué más te gusta hacer?", "Here the water is warm and there are lots of fish. And what else do you like doing?", "Me gusta caminar por la playa y leer en la hamaca.", "I like walking on the beach and reading in the hammock.",
        "Me gustan caminar y leer.", "With verbs, always gusta: me gusta caminar y leer 📖", "A ti te gusta.", "He asked about YOU 😉",
        { n: "Aquí el agua no es tan fría y hay muchos peces. ¿Y a ti qué más te gusta hacer?" }),
      C("¿Y te gusta bailar? En la noche hay salsa en el pueblo.", "And do you like dancing? In the evening there's salsa in the village.", "¡Me encanta bailar! Pero no bailo muy bien.", "I love dancing! But I don't dance very well.",
        "¡Me encantan bailar!", "With a verb: me encanta bailar 💃", "No, no me gusta el pueblo.", "Rude! 😅",
        { n: "¿Y te gusta bailar? Por la noche hay flamenco en el pueblo." }),
      C("Yo tampoco, pero me divierto. ¿Y los mosquitos? ¿Te gustan?", "Me neither, but I have fun. And the mosquitoes? Do you like them?", "¡No! No me gustan nada los mosquitos.", "No! I don't like mosquitoes at all.",
        "¡No! No me gusta nada los mosquitos.", "mosquitos is plural: me gustan 🦟", "¡Sí, me encantan los mosquitos!", "Really? 😂🦟"),
      C("Jaja, ¡a nadie le gustan! Mañana vamos a bucear a las nueve. ¿Vienes?", "Haha, nobody likes them! Tomorrow we're going diving at nine. Are you coming?", "¡Claro que sí! Nos vemos a las nueve.", "Of course! See you at nine.",
        "¡Claro! Nos vemos ayer.", "Ayer = yesterday 😂", "No me gusta el mar.", "But you said you love it! 🌊")
    ] },
  gq: { name: "gustar and encantar", items: [
    G("Me ___ bucear.", "gusta", "gustan|gusto", "I like diving."),
    G("Me ___ las playas.", "encantan", "encanta|encanto", "I love the beaches."),
    G("¿A ti te ___ el pescado?", "gusta", "gustas|gustan", "Do you like fish?"),
    G("A mí no me ___ los mosquitos.", "gustan", "gusta|gusto", "I don't like mosquitoes."),
    G("¿Y a ___?", "ti", "tú|te", "And you?"),
    G("___ nunca voy al gimnasio.", "Casi", "Muy|Tan", "I hardly ever go to the gym."),
    G("A mi hermana le ___ bailar.", "encanta", "encantan|encanto", "My sister loves dancing."),
    G("¿Te gusta ___ salsa?", "bailar", "bailas|bailando", "Do you like dancing salsa?", "ve"),
    G("¿Te gusta ___ flamenco?", "bailar", "bailas|bailando", "Do you like dancing flamenco?", "es")
  ] }
});

U(19, {
  sit: "Answering the pharmacist's questions", gram: "estar for how you feel, ser for what you are; le; deber and tener que",
  tip: "estar for how you feel (estoy mareada), ser for what you are (soy alérgica). The pharmacist talks to you with usted and le: ¿Qué le pasa? In Venezuela your tummy is la barriga; in Spain it's la tripa.",
  phrases: [
    "¿Qué le pasa? Estoy maread{a/o} y me duele la barriga.|What's the matter? I'm dizzy and my stomach hurts.|¿Qué le pasa? Estoy maread{a/o} y me duele la tripa.",
    "¿Es alérgic{a/o} a algún medicamento?|Are you allergic to any medicine?",
    "No debe tomar alcohol y tiene que tomar mucha agua.|You mustn't drink alcohol and you must drink lots of water.|No debe beber alcohol y tiene que beber mucha agua.",
    "Desde ayer.|Since yesterday.",
    "Estoy muy cansad{a/o}.|I'm very tired.",
    "No soy alérgic{a/o} a nada.|I'm not allergic to anything.",
    "¿Desde cuándo se siente así?|How long have you been feeling like this?",
    "Tengo náuseas.|I feel sick.",
    "Tengo que descansar.|I have to rest.",
    "¿Le duele mucho?|Does it hurt a lot?"
  ],
  words: ["😵‍💫|mareado, mareada|dizzy", "🤢|las náuseas|nausea", "🫃|la barriga|stomach, tummy|la tripa", "⚠️|alérgico, alérgica|allergic", "💊|el medicamento|medicine",
    "🍷|el alcohol|alcohol", "💧|mucha agua|lots of water", "🛌|descansar|to rest", "📅|desde ayer|since yesterday", "🦐|los mariscos|seafood|el marisco"],
  chat: { npc: "Señor Alberto", av: "👨🏻‍⚕️", scene: "After a big seafood lunch on Margarita you don't feel well. You go to the pharmacy.", sceneEs: "After a big seafood lunch in Cádiz you don't feel well. You go to the pharmacy.",
    lines: [
      C("Buenas tardes. ¿Qué le pasa?", "Good afternoon. What's the matter?", "Estoy maread{a/o} y me duele la barriga.", "I'm dizzy and my stomach hurts.",
        "Soy maread{a/o} y me duele la barriga.", "Feeling dizzy is a state: ESTOY 😵‍💫", "Me pasa la barriga.", "Me DUELE la barriga 🫃",
        { a: "Estoy maread{a/o} y me duele la tripa.", w: ["Soy maread{a/o} y me duele la tripa.", "Feeling dizzy is a state: ESTOY 😵‍💫"] }),
      C("¿Desde cuándo se siente así?", "How long have you been feeling like this?", "Desde ayer. Comí mariscos en la playa.", "Since yesterday. I ate seafood on the beach.",
        "Desde mañana.", "Mañana = tomorrow 🤔", "Desde Inglaterra.", "😂 Since when, not where from",
        { a: "Desde ayer. Comí marisco en la playa." }),
      C("Mmm... ¿Tiene fiebre?", "Hmm... Do you have a fever?", "No, no tengo fiebre, pero estoy muy cansad{a/o}.", "No, I don't have a fever, but I'm very tired.",
        "No, no estoy fiebre.", "Fever takes tener: no tengo fiebre 🌡️", "Sí, soy fiebre.", "😂 tengo fiebre"),
      C("¿Es alérgic{a/o} a algún medicamento?", "Are you allergic to any medicine?", "No, no soy alérgic{a/o} a nada.", "No, I'm not allergic to anything.",
        "No, no estoy alérgic{a/o} a nada.", "Allergies use ser: no soy alérgic... ⚠️", "Sí, soy alérgic{a/o} al agua.", "To water?! 💧😂"),
      C("Bien. Tome estas pastillas dos veces al día. No debe tomar alcohol y tiene que tomar mucha agua.", "OK. Take these tablets twice a day. You mustn't drink alcohol and you must drink lots of water.", "Entendido. Nada de alcohol y mucha agua.", "Understood. No alcohol and lots of water.",
        "Entendido. Mucho alcohol y nada de agua.", "Other way round! 🍷🚫💧", "¿Debo tomar cerveza?", "He said no alcohol 😅",
        { n: "Bien. Tome estas pastillas dos veces al día. No debe beber alcohol y tiene que beber mucha agua.", w: ["¿Debo beber cerveza?", "He said no alcohol 😅"] }),
      C("Y descanse. Si mañana se siente peor, tiene que ir al médico.", "And rest. If you feel worse tomorrow, you have to go to the doctor.", "Muchas gracias, señor. Muy amable.", "Thank you very much. Very kind.",
        "¿Si me siento mejor, voy al médico?", "Better → no doctor needed 😉", "¡Que se mejore!", "That's his line 🤒")
    ] },
  gq: { name: "ser or estar? deber, tener que", items: [
    G("___ maread{a/o}.", "Estoy", "Soy|Tengo", "I'm dizzy."),
    G("¿___ alérgic{a/o} a algún medicamento?", "Es", "Está|Tiene", "Are you allergic to any medicine?"),
    G("No ___ tomar alcohol.", "debe", "debo|deber", "You mustn't drink alcohol.", "ve"),
    G("No ___ beber alcohol.", "debe", "debo|deber", "You mustn't drink alcohol.", "es"),
    G("Tiene ___ tomar mucha agua.", "que", "de|a", "You must drink lots of water."),
    G("¿Qué ___ pasa?", "le", "la|lo", "What's the matter (with you)?"),
    G("Me ___ la barriga.", "duele", "duelen|dolor", "My stomach hurts.", "ve"),
    G("Me ___ la tripa.", "duele", "duelen|dolor", "My stomach hurts.", "es"),
    G("___ muy cansad{a/o} hoy.", "Estoy", "Soy|Hay", "I'm very tired today."),
    G("Mi hermano ___ médico.", "es", "está|tiene", "My brother is a doctor."),
    G("¿Desde ___ se siente así?", "cuándo", "cuánto|qué", "How long have you felt like this?")
  ] }
});

U(20, {
  sit: "Telling your neighbour about your holiday", gram: "preterite of regular verbs and of ir (fui); me encantó",
  tip: "The preterite tells what happened: fui, probé, comí, me encantó. Venezuela uses it even for things done today. La pasamos muy bien = We had a great time (Spain: lo pasamos muy bien).",
  phrases: [
    "Fui a Mérida y subí en el teleférico.|I went to Mérida and went up in the cable car.|Fui a Granada y visité la Alhambra.",
    "Probé el pabellón criollo y me encantó.|I tried pabellón criollo and loved it.|Probé el salmorejo y me encantó.",
    "La pasamos muy bien.|We had a great time.|Lo pasamos muy bien.",
    "Comí arepas todos los días.|I ate arepas every day.|Comí churros todos los días.",
    "Visité muchos lugares bonitos.|I visited lots of beautiful places.",
    "Conocí a mucha gente simpática.|I met lots of nice people.",
    "Hizo mucho calor.|It was very hot.",
    "Bailé salsa en la playa.|I danced salsa on the beach.|Bailé flamenco en Sevilla.",
    "¿Qué te gustó más?|What did you like most?",
    "Me encantó la comida.|I loved the food."
  ],
  words: ["🚶|fui|I went", "🍽️|comí|I ate", "😋|probé|I tried", "👀|vi|I saw", "📍|visité|I visited",
    "💃|bailé|I danced", "🛍️|compré|I bought", "❤️|me encantó|I loved it", "😎|la pasé bien|I had a good time|lo pasé bien", "🏞️|el lugar|place"],
  chat: { npc: "Marisol", av: "👩🏽‍🦱", scene: "Back at the posada in Choroní after a week travelling around Venezuela. Marisol wants to hear everything.", sceneEs: "Back at the hostal near Málaga after a week travelling around Spain. Marisol wants to hear everything.",
    lines: [
      C("¡{N}! ¿Cómo te fue en el viaje?", "{N}! How did the trip go?", "¡Muy bien! La pasamos muy bien.", "Very well! We had a great time.",
        "¡Muy bien! La pasamos muy mal.", "Mal = bad! Is that true? 😅", "¡Voy a ir mañana!", "The trip is over — use the past 🙂",
        { a: "¡Muy bien! Lo pasamos muy bien.", w: ["¡Muy bien! Lo pasamos muy mal.", "Mal = bad! Is that true? 😅"] }),
      C("¿Y adónde fueron?", "And where did you go?", "Fui a Mérida y subí en el teleférico.", "I went to Mérida and went up in the cable car.",
        "Voy a Mérida y subo en el teleférico.", "That's present tense — say what you did: fui, subí ⏪", "Fui al teleférico en Mérida subí.", "Word order is off 🤔",
        { n: "¿Y adónde fuisteis?", a: "Fui a Granada y visité la Alhambra.", w: ["Voy a Granada y visito la Alhambra.", "That's present tense — say what you did: fui, visité ⏪"] }),
      C("¡Qué bueno! ¿Y probaste la comida típica?", "Great! And did you try the local food?", "Sí, probé el pabellón criollo y me encantó.", "Yes, I tried pabellón criollo and loved it.",
        "Sí, pruebo el pabellón y me encanta.", "Past tense: probé, me encantó 🍛", "Sí, probé el teleférico.", "😂 You can't eat a cable car",
        { n: "¡Qué bien! ¿Y probaste la comida típica?", a: "Sí, probé el salmorejo y me encantó.", w: ["Sí, pruebo el salmorejo y me encanta.", "Past tense: probé, me encantó 🥣"] }),
      C("¿Y qué te gustó más?", "And what did you like most?", "Me encantaron las playas de Margarita.", "I loved the beaches on Margarita.",
        "Me encantó las playas de Margarita.", "playas is plural: me encantaron 🏖️", "Me gusta más.", "More than what? 🤔",
        { a: "Me encantaron las playas de Cádiz.", w: ["Me encantó las playas de Cádiz.", "playas is plural: me encantaron 🏖️"] }),
      C("¿Hizo buen tiempo?", "Was the weather good?", "Sí, hizo mucho calor, pero en Mérida hizo frío.", "Yes, it was very hot, but in Mérida it was cold.",
        "Sí, hace mucho calor ayer.", "Yesterday → hizo ☀️", "Sí, fui buen tiempo.", "😂 fui = I went / I was",
        { a: "Sí, hizo mucho calor, pero en Granada hizo frío." }),
      C("¡Qué envidia! Bueno, bienvenid{a/o} de vuelta.", "I'm so jealous! Well, welcome back.", "¡Gracias, Marisol! Te traje un regalo.", "Thanks, Marisol! I brought you a present.",
        "¡Gracias! Te traigo un regalo ayer.", "Ayer → traje 🎁", "¡Bienvenida de vuelta!", "She's welcoming YOU 😄")
    ] },
  gq: { name: "The preterite: what happened", items: [
    G("Ayer ___ a Mérida.", "fui", "voy|fue", "Yesterday I went to Mérida.", "ve"),
    G("Ayer ___ a Granada.", "fui", "voy|fue", "Yesterday I went to Granada.", "es"),
    G("___ el pabellón y me encantó.", "Probé", "Pruebo|Probó", "I tried the pabellón and loved it.", "ve"),
    G("___ el salmorejo y me encantó.", "Probé", "Pruebo|Probó", "I tried the salmorejo and loved it.", "es"),
    G("Me ___ la comida.", "encantó", "encanta|encantaron", "I loved the food."),
    G("Me ___ las playas.", "encantaron", "encantó|encanta", "I loved the beaches."),
    G("Nosotros ___ en la playa.", "bailamos", "bailé|bailáis", "We danced on the beach."),
    G("La ___ muy bien.", "pasamos", "pasáis|pasar", "We had a great time.", "ve"),
    G("Ayer ___ mucho calor.", "hizo", "hace|hago", "Yesterday it was very hot."),
    G("___ muchos lugares bonitos.", "Visité", "Visito|Visitó", "I visited lots of beautiful places."),
    G("¿Qué te ___ más?", "gustó", "gusta|gusté", "What did you like most?")
  ] }
});
