// =====================================================================
// ROUND 4: Small talk (units 31 to 40)
// =====================================================================

U(31, {
  sit: "Chatting about home, family and work", gram: "tener for age; possessives; imperfect for \"used to\"; big numbers",
  tip: "Age uses tener: tengo cuarenta y cinco (años). The imperfect tells what used to be: antes trabajaba en un banco, cuando era niña vivía en Escocia.",
  phrases: [
    "Tengo dos hijos y vivimos en una casa con jardín.|I have two children and we live in a house with a garden.",
    "¿Cuántos años tienes? Tengo cuarenta y cinco.|How old are you? I'm forty-five.",
    "Antes trabajaba en un banco, pero ahora soy profesor{a/}.|I used to work in a bank, but now I'm a teacher.",
    "¿Tienes hermanos?|Do you have brothers and sisters?",
    "Mi hija tiene doce años.|My daughter is twelve.",
    "Vivimos en las afueras de Londres.|We live on the outskirts of London.",
    "Londres tiene nueve millones de habitantes.|London has nine million inhabitants.",
    "Cuando era joven, vivía en Escocia.|When I was young, I lived in Scotland.",
    "Estoy casad{a/o}.|I'm married.",
    "Mis padres viven cerca.|My parents live nearby."
  ],
  words: ["👨‍👩‍👧‍👦|los hijos|children", "👧|la hija|daughter", "👦|el hijo|son", "👫|los hermanos|brothers and sisters", "👴|los padres|parents",
    "💍|casado, casada|married", "🌳|el jardín|garden", "🎂|tener ... años|to be ... years old", "🏦|el banco|bank", "🔢|un millón|a million"],
  chat: { npc: "Alejandro", av: "👨🏽‍🦱", scene: "Round 4: time to chat! Back in Mérida, another traveller sits next to you on the posada terrace.", sceneEs: "Round 4: time to chat! In Granada, another traveller sits next to you on the hostal terrace.",
    lines: [
      C("¡Hola! ¿También estás de viaje? Yo soy Alejandro, de Barquisimeto.", "Hi! Are you travelling too? I'm Alejandro, from Barquisimeto.", "¡Hola, Alejandro! Sí, soy {N}, de Londres. Estoy aquí con mi familia.", "Hi, Alejandro! Yes, I'm {N}, from London. I'm here with my family.",
        "¡Hola! Sí, soy de viaje.", "Travelling = ESTAR de viaje 🧳", "¡Hola! Tengo de Londres.", "From = ser de: soy de Londres 🙂",
        { n: "¡Hola! ¿También estás de viaje? Yo soy Alejandro, de Zaragoza." }),
      C("¡Qué bien! ¿Tienes hijos?", "How nice! Do you have children?", "Sí, tengo dos hijos y vivimos en una casa con jardín.", "Yes, I have two children and we live in a house with a garden.",
        "Sí, soy dos hijos.", "To have = tener 👨‍👩‍👧", "Sí, tengo dos años.", "😂 You're two years old?"),
      C("¿Y cuántos años tienen?", "And how old are they?", "Mi hija tiene doce años y mi hijo tiene nueve.", "My daughter is twelve and my son is nine.",
        "Mi hija es doce años.", "Age uses tener: tiene doce años 🎂", "Tienen cuarenta y cinco.", "Your children? 😄"),
      C("¡Qué bonito! ¿Y tú, a qué te dedicas?", "How lovely! And you, what do you do?", "Antes trabajaba en un banco, pero ahora soy profesor{a/}.", "I used to work in a bank, but now I'm a teacher.",
        "Antes trabajo en un banco.", "Used to = trabajaba ⏪", "Ahora trabajaba en un banco.", "ahora + present: ahora soy 🙂"),
      C("¡Yo también soy profesor! ¿Y cuántos años tienes, si no es indiscreción?", "I'm a teacher too! And how old are you, if you don't mind me asking?", "Tengo cuarenta y cinco. ¿Y tú?", "I'm forty-five. And you?",
        "Soy cuarenta y cinco.", "Age uses tener 🎂", "Tengo cuarenta y cinco hijos.", "😂 That's a lot of children!"),
      C("¡Treinta y ocho! Cuando era niño, mi familia vivía aquí en Mérida. ¿Un café?", "Thirty-eight! When I was a boy, my family lived here in Mérida. A coffee?", "¡Claro! Y me cuentas más de Mérida.", "Sure! And you can tell me more about Mérida.",
        "¡Claro! Cuando era niñ{a/o}, vivo en Londres.", "Childhood = imperfect: vivía 🧒", "No, tengo treinta y ocho.", "That's HIS age 😉",
        { n: "¡Treinta y ocho! Cuando era niño, mi familia vivía aquí, en Granada. ¿Un café?", a: "¡Claro! Y me cuentas más de Granada." })
    ] },
  gq: { name: "tener for age, the imperfect for \"used to\"", items: [
    G("___ cuarenta y cinco años.", "Tengo", "Soy|Estoy", "I'm forty-five."),
    G("¿Cuántos años ___ tu hija?", "tiene", "es|está", "How old is your daughter?"),
    G("Antes ___ en un banco.", "trabajaba", "trabajo|trabajaré", "I used to work in a bank."),
    G("Cuando era niñ{a/o}, ___ en Escocia.", "vivía", "viví|vivo", "When I was a child, I lived in Scotland."),
    G("___ hijos van a la escuela.", "Mis", "Mi|Me", "My children go to school."),
    G("¿Dónde viven ___ padres?", "tus", "tu|tú", "Where do your parents live?"),
    G("Londres tiene nueve ___ de habitantes.", "millones", "millón|miles", "London has nine million inhabitants."),
    G("45 = cuarenta ___ cinco", "y", "con|e", "forty-five"),
    G("Antes ___ mucho, pero ahora no.", "viajaba", "viajé|viajo", "I used to travel a lot, but not now.")
  ] }
});

U(32, {
  sit: "What's the best way to travel?", gram: "comparatives (más ... que, tan ... como); mejor; en + transport",
  tip: "más ... que = more ... than, tan ... como = as ... as, mejor / peor = better, worse (la mejor = the best). A car is un carro in Venezuela and un coche in Spain.",
  phrases: [
    "En avión es más rápido, pero en autobús es más barato.|By plane it's quicker, but by bus it's cheaper.",
    "El carro es la mejor opción para ir a los Andes.|The car is the best option for the Andes.|El coche es la mejor opción para ir a los Pirineos.",
    "El metro no es tan cómodo como el taxi.|The metro isn't as comfortable as a taxi.",
    "¿Cuál es la mejor manera de ir?|What's the best way to go?",
    "El tren es más cómodo que el autobús.|The train is more comfortable than the bus.",
    "Alquilar un carro es más caro.|Renting a car is more expensive.|Alquilar un coche es más caro.",
    "El autobús es el más barato.|The bus is the cheapest.",
    "El viaje en carro es más bonito.|The trip by car is more beautiful.|El viaje en coche es más bonito.",
    "Es peor viajar de noche.|It's worse to travel at night.",
    "Es tan rápido como el avión.|It's as fast as the plane."
  ],
  words: ["🚗|el carro|car|el coche", "✈️|el avión|plane", "🚆|el tren|train", "⚡|rápido|fast", "🐢|lento|slow",
    "💰|barato|cheap", "💸|caro|expensive", "🛋️|cómodo|comfortable", "👍|mejor|better, best", "👎|peor|worse, worst"],
  chat: { npc: "Patricia", av: "👩🏻‍💻", scene: "You're planning a trip from Caracas to the Andes. Patricia works at a travel agency.", sceneEs: "You're planning a trip from Madrid to the Pyrenees. Patricia works at a travel agency.",
    lines: [
      C("¡Buenos días! ¿Adónde quiere viajar?", "Good morning! Where would you like to travel?", "Quiero ir de Caracas a Mérida. ¿Cuál es la mejor manera?", "I want to go from Caracas to Mérida. What's the best way?",
        "Quiero ir a Mérida. ¿Cuál es la más buena manera?", "Use mejor: la mejor manera 👍", "Quiero ir a pie.", "That's almost 700 km! 😂",
        { a: "Quiero ir de Madrid a los Pirineos. ¿Cuál es la mejor manera?", w: ["Quiero ir a los Pirineos. ¿Cuál es la más buena manera?", "Use mejor: la mejor manera 👍"] }),
      C("En avión es más rápido, pero en autobús es más barato.", "By plane it's quicker, but by bus it's cheaper.", "¿Y el autobús es tan cómodo como el avión?", "And is the bus as comfortable as the plane?",
        "¿Y el autobús es tan cómodo que el avión?", "tan ... COMO 🙂", "¿Y el avión es más barato?", "She said the bus is cheaper 💰"),
      C("No, es mucho menos cómodo. Son doce horas de viaje.", "No, it's much less comfortable. It's a twelve-hour journey.", "¡Doce horas! Es demasiado largo.", "Twelve hours! That's too long.",
        "¡Doce horas! Es más corto.", "Shorter? 😅", "¡Doce horas es la mejor!", "Really? 🤔",
        { n: "No, es mucho menos cómodo. Son siete horas de viaje.", a: "¡Siete horas! Es demasiado largo.", w: ["¡Siete horas! Es más corto.", "Shorter? 😅"] }),
      C("Para los Andes, el carro es la mejor opción. El paisaje es espectacular.", "For the Andes, the car is the best option. The scenery is amazing.", "¿Alquilar un carro es más caro que el avión?", "Is renting a car more expensive than the plane?",
        "¿Alquilar un carro es más caro como el avión?", "más ... QUE 🙂", "¿El paisaje es caro?", "😂 The view is free",
        { n: "Para los Pirineos, el coche es la mejor opción. El paisaje es espectacular.", a: "¿Alquilar un coche es más caro que el avión?", w: ["¿Alquilar un coche es más caro como el avión?", "más ... QUE 🙂"] }),
      C("Un poco más caro, pero es más libre. Puede parar en los pueblos.", "A bit more expensive, but you're freer. You can stop in the villages.", "Entonces el carro es la mejor opción para nosotros.", "Then the car is the best option for us.",
        "Entonces el carro es el peor opción.", "You like it! la mejor opción 👍", "Entonces voy en avión a los pueblos.", "Planes don't stop in villages 😄",
        { a: "Entonces el coche es la mejor opción para nosotros.", w: ["Entonces el coche es el peor opción.", "You like it! la mejor opción 👍"] }),
      C("¡Perfecto! ¿Para cuándo lo quiere?", "Perfect! When do you want it for?", "Para el sábado, por favor. ¡Gracias!", "For Saturday, please. Thanks!",
        "Para ayer.", "😂 Too late!", "Para doce horas.", "She asked WHEN 📅")
    ] },
  gq: { name: "Comparing: más, tan, mejor", items: [
    G("En avión es ___ rápido.", "más", "tan|mucho", "By plane it's quicker."),
    G("El autobús es más barato ___ el avión.", "que", "como|de", "The bus is cheaper than the plane."),
    G("El metro no es tan cómodo ___ el taxi.", "como", "que|de", "The metro isn't as comfortable as a taxi."),
    G("El carro es la ___ opción.", "mejor", "más buena|bueno", "The car is the best option.", "ve"),
    G("El coche es la ___ opción.", "mejor", "más buena|bueno", "The car is the best option.", "es"),
    G("Viajar de noche es ___.", "peor", "más malo|mejor", "Travelling at night is worse."),
    G("El tren es el ___ cómodo de todos.", "más", "muy|tan", "The train is the most comfortable of all."),
    G("El avión es ___ caro que el autobús.", "más", "tan|como", "The plane is more expensive than the bus.")
  ] }
});

U(33, {
  sit: "Hotel, posada or camping?", gram: "conditional (preferiría, me gustaría); comparatives; cerca de",
  tip: "The conditional is for wishes and polite suggestions: me gustaría, preferiría, sería, yo que tú iría (if I were you, I'd go). Angel Falls (el Salto Ángel) in Canaima is the highest waterfall in the world.",
  phrases: [
    "Yo preferiría quedarme en una posada.|I'd rather stay in a posada.|Yo preferiría quedarme en una casa rural.",
    "Las posadas son más tranquilas que los hoteles grandes.|Posadas are quieter than big hotels.|Las casas rurales son más tranquilas que los hoteles grandes.",
    "Me gustaría acampar cerca del Salto Ángel.|I'd like to camp near Angel Falls.|Me gustaría acampar cerca de los Picos de Europa.",
    "¿Qué preferirías tú?|What would you prefer?",
    "Sería más barato acampar.|It would be cheaper to camp.",
    "No me gustaría dormir en una carpa.|I wouldn't like to sleep in a tent.|No me gustaría dormir en una tienda de campaña.",
    "Un hotel con piscina sería perfecto.|A hotel with a pool would be perfect.",
    "Yo que tú, iría a una posada.|If I were you, I'd go to a posada.|Yo que tú, iría a una casa rural.",
    "¿Podría recomendarme un lugar?|Could you recommend me a place?",
    "Me encantaría ver las estrellas.|I'd love to see the stars."
  ],
  words: ["⛺|la carpa|tent|la tienda de campaña", "🏕️|acampar|to camp", "🏨|el hotel|hotel", "🏡|la posada|guesthouse|la casa rural", "🌌|las estrellas|stars",
    "🤫|tranquilo|quiet, peaceful", "💤|el saco de dormir|sleeping bag", "💦|el salto|waterfall|la cascada", "🦟|el repelente|insect repellent", "🌿|la naturaleza|nature"],
  chat: { npc: "Valentina", av: "👩🏻‍🎓", scene: "Valentina, your friend from Caracas, is planning a trip to Canaima with you.", sceneEs: "Valentina, your friend from Madrid, is planning a trip to the Picos de Europa with you.",
    lines: [
      C("Entonces, ¿qué prefieres para Canaima: hotel, posada o camping?", "So, what would you prefer for Canaima: hotel, posada or camping?", "Yo preferiría quedarme en una posada.", "I'd rather stay in a posada.",
        "Yo prefería ayer una posada.", "😂 Use the conditional: preferiría", "Yo preferiría quedarme en un avión.", "😂",
        { n: "Entonces, ¿qué prefieres para los Picos de Europa: hotel, casa rural o camping?", a: "Yo preferiría quedarme en una casa rural." }),
      C("¿Por qué? Un hotel grande sería más cómodo.", "Why? A big hotel would be more comfortable.", "Sí, pero las posadas son más tranquilas que los hoteles grandes.", "Yes, but posadas are quieter than big hotels.",
        "Sí, pero las posadas son más tranquilas como los hoteles.", "más ... QUE 🙂", "Sí, los hoteles son más tranquilos.", "Then why the posada? 🤔",
        { a: "Sí, pero las casas rurales son más tranquilas que los hoteles grandes.", w: ["Sí, pero las casas rurales son más tranquilas como los hoteles.", "más ... QUE 🙂"] }),
      C("Tienes razón. ¿Y te gustaría acampar una noche?", "You're right. And would you like to camp for one night?", "¡Sí! Me gustaría acampar cerca del Salto Ángel.", "Yes! I'd like to camp near Angel Falls.",
        "¡Sí! Me gusto acampar.", "😂 Use me gustaría 🏕️", "¡Sí! Me gustaría acampar cerca de el Salto Ángel.", "de + el = del 🙂",
        { a: "¡Sí! Me gustaría acampar cerca de los Picos de Europa.", w: ["¡Sí! Me gustaría acampar cerca de las Picos.", "Picos is masculine: de los Picos 🙂"] }),
      C("¡Qué chévere! Pero en la selva hay muchos mosquitos.", "How great! But in the jungle there are lots of mosquitoes.", "No importa. Llevaría repelente. ¡Me encantaría ver las estrellas!", "Never mind. I'd take repellent. I'd love to see the stars!",
        "No importa. Llevé repelente ayer.", "Hypothetical: llevaría 🦟", "¿Los mosquitos ven las estrellas?", "😂",
        { n: "¡Qué guay! Pero en la montaña hace mucho frío por la noche.", a: "No importa. Llevaría un buen saco de dormir. ¡Me encantaría ver las estrellas!", w: ["No importa. Llevé un saco de dormir ayer.", "Hypothetical: llevaría 🛏️"] }),
      C("Yo que tú, llevaría también una hamaca. En Canaima se duerme en hamaca.", "If I were you, I'd take a hammock too. In Canaima people sleep in hammocks.", "¡Buena idea! Sería más cómodo que una carpa.", "Good idea! It would be more comfortable than a tent.",
        "¡Buena idea! Fue más cómodo.", "Use the conditional: sería 🛌", "Yo que tú, llevaría un tigre.", "😂 Please don't",
        { n: "Yo que tú, llevaría también una linterna. En el camping no hay mucha luz.", a: "¡Buena idea! Sería más fácil por la noche.", w: ["¡Buena idea! Fue más fácil.", "Use the conditional: sería 🔦"] }),
      C("Perfecto. ¿Podrías buscar los precios de las posadas?", "Perfect. Could you look up the prices of the posadas?", "¡Claro! Esta noche te mando los precios.", "Of course! I'll send you the prices tonight.",
        "¡Claro! Anoche te mando los precios.", "Anoche = last night 😅", "¿Podrías tú?", "She asked YOU 😉",
        { n: "Perfecto. ¿Podrías buscar los precios de las casas rurales?" })
    ] },
  gq: { name: "The conditional: me gustaría, sería", items: [
    G("Yo ___ quedarme en una posada.", "preferiría", "preferí|preferiré", "I'd rather stay in a posada.", "ve"),
    G("Yo ___ quedarme en una casa rural.", "preferiría", "preferí|preferiré", "I'd rather stay in a country cottage.", "es"),
    G("Me ___ acampar.", "gustaría", "gusto|gustaba", "I'd like to camp."),
    G("___ más barato acampar.", "Sería", "Fue|Era", "It would be cheaper to camp."),
    G("Las posadas son más tranquilas ___ los hoteles.", "que", "como|de", "Posadas are quieter than hotels.", "ve"),
    G("Yo que tú, ___ a una posada.", "iría", "voy|fui", "If I were you, I'd go to a posada.", "ve"),
    G("Yo que tú, ___ a una casa rural.", "iría", "voy|fui", "If I were you, I'd go to a country cottage.", "es"),
    G("¿___ recomendarme un lugar?", "Podría", "Puedo|Pude", "Could you recommend me a place?"),
    G("Me ___ ver las estrellas.", "encantaría", "encantó|encantaba", "I'd love to see the stars."),
    G("Me gustaría acampar cerca ___ Salto Ángel.", "del", "de el|al", "I'd like to camp near Angel Falls.", "ve")
  ] }
});

U(34, {
  sit: "Chatting at the next table about local food", gram: "recomendar (stem change); lo más + adjective; ya + preterite",
  tip: "recomendar changes its stem: recomiendo, recomienda. Lo más rico = the tastiest thing. Venezuelans ask ¿Ya probaste...? for \"Have you tried... yet?\"; Spain uses the perfect: ¿Has probado ya...? ¡Es lo máximo! = It's the best!",
  phrases: [
    "¿Qué me recomienda?|What do you recommend?",
    "Lo más rico de aquí son las cachapas con queso de mano.|The tastiest thing here is cachapas with queso de mano.|Lo más rico de aquí es el jamón ibérico.",
    "¿Ya probaste los tequeños? ¡Son lo máximo!|Have you tried tequeños yet? They're the best!|¿Has probado ya los churros? ¡Están buenísimos!",
    "Te recomiendo la sopa de pescado.|I recommend the fish soup.",
    "Todavía no los probé.|I haven't tried them yet.|Todavía no los he probado.",
    "¿Qué lleva la cachapa?|What's in a cachapa?|¿Qué lleva el salmorejo?",
    "Lo mejor es el postre.|The best thing is the dessert.",
    "Es un poco dulce.|It's a bit sweet.",
    "¿Es picante?|Is it spicy?",
    "¡Está buenísimo!|It's really good!"
  ],
  words: ["🥞|la cachapa|cachapa (sweet corn pancake)", "🧀|el queso de mano|queso de mano (soft fresh cheese)", "🥖|los tequeños|tequeños (cheese sticks)", "🍩|los churros|churros", "🍖|el jamón|ham",
    "🍯|dulce|sweet", "🌶️|picante|spicy", "😋|rico, rica|tasty, delicious", "⭐|lo máximo|the best|lo mejor", "🍽️|recomendar|to recommend"],
  chat: { npc: "Señor Héctor", av: "👨🏾‍🦳", scene: "A roadside restaurant on the way up into the mountains. The man at the next table smiles at you.", sceneEs: "A traditional bar in Madrid. The man at the next table smiles at you.",
    lines: [
      C("¡Buen provecho! ¿Es la primera vez que viene aquí?", "Enjoy your meal! Is this your first time here?", "Sí, es la primera vez. ¿Qué me recomienda?", "Yes, it's the first time. What do you recommend?",
        "Sí. ¿Qué me recomenda?", "Stem change: recomienda 🍽️", "Sí, es mi última vez.", "😂 Why?"),
      C("Lo más rico de aquí son las cachapas con queso de mano.", "The tastiest thing here is cachapas with queso de mano.", "¿Qué lleva la cachapa?", "What's in a cachapa?",
        "¿Qué lleva el cachapa?", "cachapa is feminine: la 🥞", "¿Lo más rico son los mosquitos?", "😂",
        { n: "Lo más rico de aquí es el jamón ibérico.", a: "¿Y con qué se come el jamón?", w: ["¿Y con qué se come la jamón?", "jamón is masculine: el 🍖"] }),
      C("Es de maíz dulce, con queso blanco blandito. ¡Es lo máximo!", "It's made of sweet corn, with soft white cheese. It's the best!", "Mmm, entonces quiero una cachapa con queso de mano.", "Mmm, then I'd like a cachapa with queso de mano.",
        "Mmm, no me gusta el maíz. Quiero una cachapa.", "Contradiction! 😄", "¿Es picante?", "He said sweet corn 🌽",
        { n: "Con pan con tomate y un poco de aceite. ¡Está buenísimo!", a: "Mmm, entonces quiero una ración de jamón con pan con tomate.", w: ["¿Es dulce?", "Ham isn't sweet 😄"] }),
      C("¡Buena elección! ¿Y ya probaste los tequeños?", "Good choice! And have you tried tequeños yet?", "No, todavía no los probé. ¿Qué son?", "No, I haven't tried them yet. What are they?",
        "No, todavía no las probé.", "tequeños is masculine: los 🥖", "Sí, ya los probaré.", "Mixing past and future 😅",
        { n: "¡Buena elección! ¿Y has probado ya los churros?", a: "No, todavía no los he probado. ¿Qué son?", w: ["No, todavía no las he probado.", "churros is masculine: los 🍩"] }),
      C("Son palitos de queso fritos. ¡Son lo máximo! Te recomiendo pedir unos.", "They're fried cheese sticks. They're the best! I recommend ordering some.", "¡Gracias! Pido unos tequeños también.", "Thanks! I'll order some tequeños too.",
        "¡Gracias! Recomiendo unos tequeños a mí.", "😂 He recommends — you order", "¿Palitos de pescado?", "Cheese sticks 🧀",
        { n: "Es masa frita con azúcar, con chocolate caliente. ¡Están buenísimos! Te los recomiendo para el desayuno.", a: "¡Gracias! Mañana pido churros con chocolate.", w: ["¿Masa de pescado?", "Fried dough 🍩"] }),
      C("¡Después me dices qué tal! ¡Buen provecho!", "Tell me what you think afterwards! Enjoy your meal!", "¡Gracias, igualmente!", "Thanks, you too!",
        "¡Igualmente de nada!", "Just: ¡Gracias, igualmente! 🙂", "¿Qué tal?", "He means after you've eaten 😉")
    ] },
  gq: { name: "recomendar, lo más, ya + past", items: [
    G("¿Qué me ___?", "recomienda", "recomenda|recomiendo", "What do you recommend?"),
    G("Te ___ la sopa.", "recomiendo", "recomendo|recomienda", "I recommend the soup."),
    G("___ más rico de aquí son las cachapas.", "Lo", "El|La", "The tastiest thing here is cachapas.", "ve"),
    G("___ más rico de aquí es el jamón.", "Lo", "El|La", "The tastiest thing here is the ham.", "es"),
    G("¿Ya ___ los tequeños?", "probaste", "pruebas|probé", "Have you tried tequeños yet?", "ve"),
    G("¿Has ___ ya los churros?", "probado", "probaste|probando", "Have you tried churros yet?", "es"),
    G("Todavía no los ___.", "probé", "pruebo|probaste", "I haven't tried them yet.", "ve"),
    G("Las cachapas están ___.", "buenísimas", "buenísimos|buenísima", "The cachapas are really good.", "ve"),
    G("Los churros están ___.", "buenísimos", "buenísimas|buenísimo", "The churros are really good.", "es"),
    G("Lo ___ es el postre.", "mejor", "más bueno|mejores", "The best thing is the dessert.")
  ] }
});

U(35, {
  sit: "Souvenirs and presents", gram: "indirect object pronouns with a + person (le, les); double pronouns (me lo); ir a",
  tip: "le / les = to him, to her, to them: A mi mamá le compré un collar. Spanish often says both: le... a mi mamá. With two pronouns, le turns into se: se lo envuelvo.",
  phrases: [
    "¿Qué le vas a regalar a tu mamá?|What are you going to give your mum?|¿Qué le vas a regalar a tu madre?",
    "A {mi esposo/mi esposa} le compré una hamaca y a mis hijos, chocolate.|I bought my husband / wife a hammock and the kids chocolate.|A {mi marido/mi mujer} le he comprado un abanico y a mis hijos, turrón.",
    "¿Me lo puede envolver para regalo?|Can you gift-wrap it for me?",
    "Les voy a llevar café a mis compañeros.|I'm going to take coffee to my colleagues.",
    "Es para mi hermana.|It's for my sister.",
    "¿Me la puede envolver?|Can you wrap it for me?",
    "Le compré un collar a mi mamá.|I bought my mum a necklace.|Le he comprado un collar a mi madre.",
    "¿Es hecho a mano?|Is it handmade?",
    "¿Cuál me recomienda para un niño?|Which one do you recommend for a child?",
    "Se lo voy a dar mañana.|I'm going to give it to him / her tomorrow."
  ],
  words: ["🎁|el regalo|present", "🛌|la hamaca|hammock", "🍫|el chocolate|chocolate", "☕|el café|coffee", "📿|el collar|necklace",
    "🪭|el abanico|fan", "✋|hecho a mano|handmade", "🎀|envolver para regalo|to gift-wrap", "🧑‍💼|los compañeros|colleagues", "🏺|la artesanía|crafts"],
  chat: { npc: "Señora Rosa", av: "👵🏽", scene: "Your last day. You go back to Señora Rosa's stall in the Mérida market to buy presents.", sceneEs: "Your last day. You go back to Señora Rosa's stall in the market to buy presents.",
    lines: [
      C("¡{N}, mi amor! ¿Otra vez por aquí? ¿Qué está buscando hoy?", "{N}, love! Back again? What are you looking for today?", "Busco regalos para mi familia.", "I'm looking for presents for my family.",
        "Busco regalos por mi familia.", "Presents FOR someone = para 🎁", "Busco a mi familia.", "Have you lost them? 😂",
        { n: "¡{N}, cariño! ¿Otra vez por aquí? ¿Qué está buscando hoy?" }),
      C("¡Qué bueno! ¿Y qué le va a regalar a su mamá?", "Great! And what are you going to give your mum?", "A mi mamá le voy a regalar este collar. ¿Es hecho a mano?", "I'm going to give my mum this necklace. Is it handmade?",
        "A mi mamá la voy a regalar este collar.", "To her = LE 📿", "A mi mamá le regalé ayer.", "She asked about the future 🤔",
        { n: "¡Qué bien! ¿Y qué le va a regalar a su madre?", a: "A mi madre le voy a regalar este collar. ¿Es hecho a mano?", w: ["A mi madre la voy a regalar este collar.", "To her = LE 📿"] }),
      C("Sí, lo hizo mi hija. ¿Y para su espos{o/a}?", "Yes, my daughter made it. And for your husband / wife?", "A {mi esposo/mi esposa} ya le compré una hamaca.", "I've already bought my husband / wife a hammock.",
        "A {mi esposo/mi esposa} ya lo compré una hamaca.", "To him / her = LE 🛌", "Ya le compraré una hamaca.", "ya + future doesn't work here 😅",
        { n: "Sí, lo hizo mi hija. ¿Y para su {marido/mujer}?", a: "A {mi marido/mi mujer} ya le he comprado un abanico.", w: ["A {mi marido/mi mujer} ya lo he comprado un abanico.", "To him / her = LE 🪭"] }),
      C("¿Y los niños?", "And the children?", "A mis hijos les voy a llevar chocolate.", "I'm going to take the children chocolate.",
        "A mis hijos le voy a llevar chocolate.", "Plural: LES 🍫", "Los niños son chocolate.", "😂",
        { a: "A mis hijos les voy a llevar turrón." }),
      C("¡Buenísimo! El chocolate venezolano es de los mejores del mundo. ¿Algo más?", "Great! Venezuelan chocolate is among the best in the world. Anything else?", "Sí, este collar. ¿Me lo puede envolver para regalo?", "Yes, this necklace. Can you gift-wrap it for me?",
        "Sí, este collar. ¿Me la puede envolver?", "collar is masculine: me LO 🎀", "¿Me lo puede comer?", "😂",
        { n: "¡Muy bien! El turrón de aquí es de los mejores. ¿Algo más?" }),
      C("¡Claro que sí! Ya se lo envuelvo. ¡A su mamá le va a encantar!", "Of course! I'll wrap it for you right now. Your mum is going to love it!", "¡Muchas gracias! ¡Usted es muy amable!", "Thank you very much! You're very kind!",
        "¡Ya se lo envuelvo!", "That's her line 😉", "¡Me va a encantar!", "It's for your mum 😄",
        { n: "¡Claro que sí! Ahora se lo envuelvo. ¡A su madre le va a encantar!", w: ["¡Ahora se lo envuelvo!", "That's her line 😉"] })
    ] },
  gq: { name: "le, les, me lo, se lo", items: [
    G("¿Qué ___ vas a regalar a tu mamá?", "le", "la|les", "What are you going to give your mum?", "ve"),
    G("¿Qué ___ vas a regalar a tu madre?", "le", "la|les", "What are you going to give your mother?", "es"),
    G("A mis hijos ___ compré chocolate.", "les", "le|los", "I bought my children chocolate.", "ve"),
    G("¿Me ___ puede envolver? (el regalo)", "lo", "le|la", "Can you wrap it for me?"),
    G("¿Me ___ puede envolver? (la hamaca)", "la", "lo|le", "Can you wrap it for me?"),
    G("___ lo voy a dar a mi hermana.", "Se", "Le|La", "I'm going to give it to my sister."),
    G("Es ___ mi hermana.", "para", "por|a", "It's for my sister."),
    G("___ voy a llevar café a mis compañeros.", "Les", "Le|Los", "I'm going to take coffee to my colleagues."),
    G("Ayer le ___ un collar.", "compré", "compro|compraré", "Yesterday I bought her a necklace.")
  ] }
});

U(36, {
  sit: "Recommending places in town", gram: "tú imperative, positive (ve, lleva) and negative (no vayas); tener que; demasiado",
  tip: "Tú commands: ve, lleva, toma, prueba, ten. Negative tú commands use a different form: no vayas, no olvides, no tomes. El Ávila is the green mountain that watches over Caracas.",
  phrases: [
    "Tienes que subir al Ávila, la vista es espectacular.|You have to go up the Ávila, the view is amazing.|Tienes que ver la Sagrada Familia, es espectacular.",
    "Ve temprano y lleva agua.|Go early and take water.",
    "No vayas el domingo, hay demasiada gente.|Don't go on Sunday, it's too crowded.",
    "Toma el teleférico.|Take the cable car.|Coge el metro.",
    "No olvides la cámara.|Don't forget your camera.",
    "Prueba el chocolate caliente arriba.|Try the hot chocolate at the top.|Prueba el chocolate con churros.",
    "Pregunta en la entrada.|Ask at the entrance.",
    "Sal temprano para evitar el tráfico.|Leave early to avoid the traffic.",
    "No camines por ahí de noche.|Don't walk around there at night.",
    "Ten cuidado con el sol.|Be careful with the sun."
  ],
  words: ["⛰️|el Ávila|El Ávila (Caracas's mountain)", "🌄|la vista|view", "⏰|temprano|early", "👥|demasiada gente|too many people", "💧|lleva agua|take water",
    "📷|la cámara|camera", "⚠️|ten cuidado|be careful", "🙅|no vayas|don't go", "🚶|ve|go!", "💡|el consejo|tip, advice"],
  chat: { npc: "Lukas", av: "🧑🏼‍🦰", scene: "Now YOU are the expert! A backpacker who's just arrived in Caracas asks you for tips.", sceneEs: "Now YOU are the expert! A backpacker who's just arrived in Barcelona asks you for tips.",
    lines: [
      C("¡Hola! Acabo de llegar a Caracas. ¿Qué me recomiendas?", "Hi! I've just arrived in Caracas. What do you recommend?", "Tienes que subir al Ávila, la vista es espectacular.", "You have to go up the Ávila, the view is amazing.",
        "Tienes subir al Ávila.", "tener QUE + infinitive 🙂", "Tienes que comer el Ávila.", "😂 It's a mountain!",
        { n: "¡Hola! Acabo de llegar a Barcelona. ¿Qué me recomiendas?", a: "Tienes que ver la Sagrada Familia, es espectacular.", w: ["Tienes ver la Sagrada Familia.", "tener QUE + infinitive 🙂"] }),
      C("¡Genial! ¿Y cómo subo?", "Great! And how do I get up there?", "Toma el teleférico. Es más fácil.", "Take the cable car. It's easier.",
        "Tomas el teleférico.", "Command: ¡toma! 🚡", "No tomes el teleférico, es más fácil.", "Contradiction 😅",
        { n: "¡Genial! ¿Y cómo llego?", a: "Coge el metro, línea dos. Es más fácil.", w: ["Coges el metro.", "Command: ¡coge! 🚇"] }),
      C("¿Y a qué hora es mejor ir?", "And what time is it best to go?", "Ve temprano y lleva agua.", "Go early and take water.",
        "Vas temprano y llevas agua.", "Commands: ve, lleva 🚶", "Ve de noche, sin agua.", "Bad advice! 😂"),
      C("¿Y puedo ir el domingo?", "And can I go on Sunday?", "No vayas el domingo, hay demasiada gente.", "Don't go on Sunday, it's too crowded.",
        "No ve el domingo.", "Negative command: no vayas 🙅", "No vayas el domingo, hay demasiado gente.", "gente is feminine: demasiada 👥"),
      C("Entendido. ¿Algo más?", "Got it. Anything else?", "Sí: prueba el chocolate caliente arriba. ¡Es buenísimo!", "Yes: try the hot chocolate at the top. It's really good!",
        "Sí: pruebas el chocolate caliente.", "Command: ¡prueba! ☕", "Sí: no pruebes nada.", "Why not? 😄",
        { a: "Sí: prueba el chocolate con churros. ¡Está buenísimo!", w: ["Sí: pruebas el chocolate con churros.", "Command: ¡prueba! ☕"] }),
      C("¡Muchas gracias por los consejos!", "Thanks a lot for the tips!", "¡A la orden! Y ten cuidado con el sol.", "You're welcome! And be careful with the sun.",
        "¡A la orden! Y tienes cuidado con el sol.", "Command: ¡ten cuidado! ⚠️", "¡Gracias por los consejos!", "That's HIS line 😉",
        { a: "¡De nada! Y ten cuidado con la cartera en el metro.", w: ["¡De nada! Y tienes cuidado con la cartera.", "Command: ¡ten cuidado! ⚠️"] })
    ] },
  gq: { name: "Tú commands: ve, lleva, no vayas", items: [
    G("___ temprano.", "Ve", "Va|Vas", "Go early."),
    G("___ agua.", "Lleva", "Llevas|Llevar", "Take water."),
    G("No ___ el domingo.", "vayas", "ve|vas", "Don't go on Sunday."),
    G("Hay ___ gente.", "demasiada", "demasiado|demasiados", "There are too many people."),
    G("Tienes ___ subir al Ávila.", "que", "de|a", "You have to go up the Ávila.", "ve"),
    G("Tienes ___ ver la Sagrada Familia.", "que", "de|a", "You have to see the Sagrada Familia.", "es"),
    G("___ cuidado con el sol.", "Ten", "Tienes|Tener", "Be careful with the sun."),
    G("No ___ la cámara.", "olvides", "olvida|olvidas", "Don't forget your camera."),
    G("___ el chocolate caliente.", "Prueba", "Pruebas|Probar", "Try the hot chocolate.")
  ] }
});

U(37, {
  sit: "Talking about the weather and the seasons", gram: "comparatives with weather; imperfect for childhood memories; Venezuela's two seasons",
  tip: "Venezuela has two seasons: \"invierno\" is the rainy season and \"verano\" the dry season. Childhood memories use the imperfect: cuando era niña, nevaba. With nouns, as ... as is tanto ... como: tanto frío como.",
  phrases: [
    "Aquí no hay cuatro estaciones: el invierno es la época de lluvia y el verano es la época seca.|There are no four seasons here: \"winter\" is the rainy season and \"summer\" the dry season.|En el sur el invierno es muy suave.",
    "En Mérida hace más frío que en Caracas.|It's colder in Mérida than in Caracas.|En Madrid hace más frío que en Sevilla.",
    "Cuando era niñ{a/o}, nevaba todos los inviernos.|When I was a child, it snowed every winter.",
    "En mi país llueve mucho.|In my country it rains a lot.",
    "El verano es más caluroso que la primavera.|Summer is hotter than spring.",
    "Hace tanto calor como en la costa.|It's as hot as on the coast.",
    "Cuando era pequeñ{a/o}, íbamos a la playa en agosto.|When I was little, we used to go to the beach in August.",
    "¿Cuál es la mejor época para visitar?|What's the best time of year to visit?",
    "En diciembre hace fresquito.|In December it's nice and cool.",
    "Me gusta más el otoño.|I like autumn best."
  ],
  words: ["❄️|el invierno|winter", "🌸|la primavera|spring", "☀️|el verano|summer", "🍂|el otoño|autumn", "🌧️|la época de lluvia|rainy season",
    "🏜️|la época seca|dry season", "🌨️|nevar|to snow", "🗓️|la estación|season", "🥵|caluroso|hot", "🌡️|el clima|climate"],
  chat: { npc: "Yolanda", av: "👩🏻", scene: "A chilly morning back at Yolanda's posada in Mérida. She brings you a blanket.", sceneEs: "A very hot afternoon at Yolanda's hostal in Seville. She brings you a cold drink.",
    lines: [
      C("¡Uy, qué frío hace hoy! ¿En Inglaterra hace más frío que aquí?", "Ooh, it's cold today! Is it colder in England than here?", "Sí, en invierno hace mucho más frío que aquí.", "Yes, in winter it's much colder than here.",
        "Sí, en invierno hace más frío como aquí.", "más ... QUE ❄️", "No, en Inglaterra siempre hace calor.", "Really? 😂",
        { n: "¡Uf, qué calor hace hoy! ¿En Inglaterra hace más frío que aquí?" }),
      C("Aquí en Mérida hace más frío que en Caracas, por la montaña. Pero no hay cuatro estaciones.", "Here in Mérida it's colder than in Caracas, because of the mountains. But there are no four seasons.", "¿No hay invierno ni verano?", "No winter or summer?",
        "¿No son cuatro estaciones?", "There are = hay 🙂", "¿Hay cinco estaciones?", "😂",
        { n: "Aquí en Sevilla el invierno es muy suave. En Madrid hace más frío que aquí.", a: "¿Y en verano hace mucho calor?", w: ["¿En Madrid hace más calor?", "She said Madrid is colder 😉"] }),
      C("Bueno, decimos que el invierno es la época de lluvia y el verano es la época seca.", "Well, we say \"winter\" is the rainy season and \"summer\" is the dry season.", "¡Qué interesante! ¿Y cuál es la mejor época para visitar?", "How interesting! And what's the best time of year to visit?",
        "¡Qué interesante! ¿Y cuál es la mejor época para llover?", "😂", "¿El verano es la época de lluvia?", "Other way round ☔",
        { n: "¡Muchísimo! En agosto hace más de cuarenta grados.", a: "¡Qué calor! ¿Y cuál es la mejor época para visitar?", w: ["¿Más de cuarenta grados de frío?", "Of heat! 🥵"] }),
      C("De diciembre a abril, en la época seca. ¿Y en tu país, cómo era el invierno cuando eras niñ{a/o}?", "From December to April, in the dry season. And in your country, what was winter like when you were a child?", "Cuando era niñ{a/o}, nevaba todos los inviernos.", "When I was a child, it snowed every winter.",
        "Cuando fui niñ{a/o}, nevó todos los inviernos.", "Childhood habits = imperfect: era, nevaba ❄️", "Cuando era niñ{a/o}, nieva mañana.", "😅 Mixed-up times",
        { n: "En primavera, en abril o mayo. ¿Y en tu país, cómo era el invierno cuando eras niñ{a/o}?" }),
      C("¡Qué bonito! ¿Y jugabas en la nieve?", "How lovely! And did you play in the snow?", "¡Sí! Hacíamos muñecos de nieve con mi hermano.", "Yes! We used to make snowmen with my brother.",
        "¡Sí! Hicimos muñecos todos los días.", "Every day = habit → hacíamos ⛄", "¡Sí! Jugaba en la playa.", "In the snow? 🏖️❄️"),
      C("¡Qué envidia! Yo nunca vi la nieve. Bueno, ¿un chocolate caliente para el frío?", "I'm so jealous! I've never seen snow. Well, a hot chocolate for the cold?", "¡Sí, por favor! Hace tanto frío como en Inglaterra.", "Yes, please! It's as cold as in England.",
        "¡Sí! Hace tan frío como en Inglaterra.", "With nouns: tanto frío ☕", "No, gracias, tengo calor.", "But you said it's cold! 🥶",
        { n: "¡Qué envidia! Yo nunca he visto la nieve. Bueno, ¿un gazpacho fresquito?", a: "¡Sí, por favor! Hace tanto calor como en el desierto.", w: ["¡Sí! Hace tan calor como en el desierto.", "With nouns: tanto calor 🥵"] })
    ] },
  gq: { name: "Comparing weather, childhood memories", items: [
    G("En Mérida hace más frío ___ en Caracas.", "que", "como|de", "It's colder in Mérida than in Caracas.", "ve"),
    G("En Madrid hace más frío ___ en Sevilla.", "que", "como|de", "It's colder in Madrid than in Seville.", "es"),
    G("Cuando era niña, ___ todos los inviernos.", "nevaba", "nevó|nieva", "When I was a girl, it snowed every winter."),
    G("Cuando ___ pequeño, vivía en Escocia.", "era", "fui|soy", "When I was little, I lived in Scotland."),
    G("Hace ___ calor como en la costa.", "tanto", "tan|más", "It's as hot as on the coast."),
    G("Antes ___ a la playa todos los veranos.", "íbamos", "fuimos|vamos", "We used to go to the beach every summer."),
    G("El verano es ___ caluroso que la primavera.", "más", "tan|muy", "Summer is hotter than spring."),
    G("Aquí no ___ cuatro estaciones.", "hay", "son|están", "There aren't four seasons here.", "ve"),
    G("En diciembre ___ fresquito.", "hace", "está|es", "In December it's nice and cool.")
  ] }
});

U(38, {
  sit: "What did you do today?", gram: "preterite for today; imperfect and preterite in one sentence (mientras); en la noche",
  tip: "Background (imperfect) + event (preterite): mientras leía, empezó a llover. Venezuela uses the preterite even for today (esta mañana fuimos); Spain uses the perfect: esta mañana hemos ido.",
  phrases: [
    "Esta mañana fuimos a la playa y nadamos un rato.|This morning we went to the beach and swam for a while.|Esta mañana hemos ido a la playa y hemos nadado un rato.",
    "Mientras leía en la hamaca, empezó a llover.|While I was reading in the hammock, it started to rain.|Mientras leía en la hamaca, ha empezado a llover.",
    "En la noche salimos a bailar salsa.|In the evening we went out salsa dancing.|Por la noche hemos salido de tapas.",
    "¿Qué hicieron hoy?|What did you do today?|¿Qué habéis hecho hoy?",
    "Hoy comí arepa.|Today I ate an arepa.|Hoy he comido tortilla.",
    "Mientras caminábamos, vimos un mono.|While we were walking, we saw a monkey.",
    "Estaba cansad{a/o}, así que descansé.|I was tired, so I had a rest.",
    "Hacía mucho sol cuando llegamos.|It was very sunny when we arrived.",
    "Después del almuerzo dormí la siesta.|After lunch I had a nap.|Después de comer he dormido la siesta.",
    "Fue un día perfecto.|It was a perfect day.|Ha sido un día perfecto."
  ],
  words: ["🏊|nadar|to swim", "📖|leer|to read", "🐒|el mono|monkey", "😴|la siesta|nap", "🍽️|el almuerzo|lunch|la comida",
    "💃|salir a bailar|to go out dancing", "⏳|un rato|a while", "🌅|esta mañana|this morning", "🌃|en la noche|in the evening|por la noche", "⏱️|mientras|while"],
  chat: { npc: "Doña Elena", av: "👵🏾", scene: "Evening at the posada in Choroní. Doña Elena wants to know about your day.", sceneEs: "Evening at the hostal on the coast. Doña Elena wants to know about your day.",
    lines: [
      C("¡Buenas noches! ¿Qué hicieron hoy?", "Good evening! What did you do today?", "Esta mañana fuimos a la playa y nadamos un rato.", "This morning we went to the beach and swam for a while.",
        "Esta mañana vamos a la playa.", "It's evening — that's the past now: fuimos ⏪", "Esta mañana íbamos a la playa y nadábamos.", "One finished event: fuimos, nadamos 🏖️",
        { n: "¡Buenas noches! ¿Qué habéis hecho hoy?", a: "Esta mañana hemos ido a la playa y hemos nadado un rato.", w: ["Esta mañana vamos a la playa.", "It's evening — that's the past now: hemos ido ⏪"] }),
      C("¡Qué rico! ¿Y en la tarde?", "Lovely! And in the afternoon?", "Mientras leía en la hamaca, empezó a llover.", "While I was reading in the hammock, it started to rain.",
        "Mientras leí en la hamaca, empezaba a llover.", "Swap them: leía (background), empezó (event) 🌧️", "Mientras leía, empiezo a llover.", "😂 YOU started raining?",
        { n: "¡Qué bien! ¿Y por la tarde?", a: "Mientras leía en la hamaca, ha empezado a llover.", w: ["Mientras he leído en la hamaca, empezaba a llover.", "Swap them: leía (background), ha empezado (event) 🌧️"] }),
      C("¡Ay, sí! Cayó un palo de agua. ¿Y se mojaron?", "Oh yes! It poured. And did you get wet?", "¡Sí, un poco! Pero hacía calor, así que no importó.", "Yes, a bit! But it was warm, so it didn't matter.",
        "¡Sí! Pero hace calor ayer.", "Past background: hacía calor ☀️", "No, nos mojamos.", "That means you DID get wet 😄",
        { n: "¡Ay, sí! Ha caído un chaparrón. ¿Os habéis mojado?" }),
      C("¿Y vieron algún animal?", "And did you see any animals?", "¡Sí! Mientras caminábamos, vimos un mono.", "Yes! While we were walking, we saw a monkey.",
        "¡Sí! Mientras caminamos, veíamos un mono.", "Swap them: caminábamos (background), vimos (event) 🐒", "¡Sí! Comimos un mono.", "😱 No!",
        { n: "¿Y habéis visto algún animal?", a: "¡Sí! Mientras caminábamos, hemos visto un delfín.", w: ["¡Sí! Mientras hemos caminado, veíamos un delfín.", "Swap them: caminábamos (background), hemos visto (event) 🐬"] }),
      C("¡Qué suerte! ¿Y ahora qué van a hacer?", "Lucky you! And what are you going to do now?", "En la noche vamos a salir a bailar salsa.", "This evening we're going to go out salsa dancing.",
        "En la noche salimos a bailar salsa ayer.", "Now → plans: vamos a salir 💃", "Ahora fuimos a bailar.", "Mixed up 😅",
        { n: "¡Qué suerte! ¿Y ahora qué vais a hacer?", a: "Por la noche vamos a salir de tapas.", w: ["Por la noche salimos de tapas ayer.", "Now → plans: vamos a salir 🍷"] }),
      C("¡Que la pasen bien! Hoy fue un día completo, ¿eh?", "Have a good time! Today was a full day, wasn't it?", "¡Sí! Fue un día perfecto.", "Yes! It was a perfect day.",
        "¡Sí! Era un día perfecto.", "The whole day, finished: fue 🌟", "¡Sí! Es un día perfecto mañana.", "😅",
        { n: "¡Que lo paséis bien! Hoy ha sido un día completo, ¿eh?", a: "¡Sí! Ha sido un día perfecto.", w: ["¡Sí! Era un día perfecto.", "The whole day, finished: ha sido 🌟"] })
    ] },
  gq: { name: "Today's story: preterite and imperfect", items: [
    G("Esta mañana ___ a la playa.", "fuimos", "íbamos|vamos", "This morning we went to the beach.", "ve"),
    G("Esta mañana hemos ___ a la playa.", "ido", "fuimos|ir", "This morning we've been to the beach.", "es"),
    G("Mientras ___ en la hamaca, empezó a llover.", "leía", "leí|leo", "While I was reading in the hammock, it started to rain."),
    G("Mientras leía, ___ a llover.", "empezó", "empezaba|empieza", "While I was reading, it started to rain.", "ve"),
    G("___ la noche salimos a bailar.", "En", "Por|A", "In the evening we went out dancing.", "ve"),
    G("___ la noche hemos salido de tapas.", "Por", "En|A", "In the evening we went out for tapas.", "es"),
    G("___ mucho sol cuando llegamos.", "Hacía", "Hace|Hará", "It was very sunny when we arrived."),
    G("Hoy ___ arepa.", "comí", "comía|comeré", "Today I ate an arepa.", "ve"),
    G("Hoy he ___ tortilla.", "comido", "comí|comiendo", "Today I've eaten tortilla.", "es"),
    G("Estaba cansad{a/o}, así que ___.", "descansé", "descansaba|descanso", "I was tired, so I had a rest.")
  ] }
});

U(39, {
  sit: "Swapping stories: have you ever been ill on holiday?", gram: "alguna vez + preterite; tuve que; tan ... que; imperfect and preterite in a story",
  tip: "alguna vez = ever, una vez = once. Stories mix the imperfect for the background (me sentía, tenía) and the preterite for the events (tuve que, me llevaron). tan + adjective, tanto / tanta + noun.",
  phrases: [
    "¿Alguna vez te enfermaste en un viaje?|Have you ever been ill on a trip?|¿Alguna vez has estado enferm{a/o} en un viaje?",
    "Una vez en Colombia me sentía tan mal que tuve que ir al médico.|Once in Colombia I felt so ill that I had to see a doctor.|Una vez en Portugal me sentía tan mal que tuve que ir al médico.",
    "Me llevaron al hospital en ambulancia.|They took me to hospital in an ambulance.",
    "Nunca me enfermé de viaje.|I've never been ill when travelling.|Nunca he estado enferm{a/o} de viaje.",
    "Tenía tanta fiebre que no podía levantarme.|I had such a high fever that I couldn't get up.",
    "El médico me dio unas pastillas.|The doctor gave me some tablets.",
    "Al día siguiente ya estaba mejor.|The next day I was already better.",
    "¡Qué susto!|What a fright!",
    "Una vez me picó una medusa.|Once a jellyfish stung me.",
    "Por suerte, tenía seguro de viaje.|Luckily, I had travel insurance."
  ],
  words: ["🚑|la ambulancia|ambulance", "🏥|el hospital|hospital", "👨‍⚕️|el médico|doctor", "😱|el susto|fright", "🪼|la medusa|jellyfish",
    "📄|el seguro de viaje|travel insurance", "🔁|alguna vez|ever", "1️⃣|una vez|once", "🛌|levantarse|to get up", "🤒|enfermarse|to get ill|ponerse enfermo"],
  chat: { npc: "Señora Teresa", av: "👵🏻", scene: "A long queue at the pharmacy. The lady in front of you turns round for a chat.", sceneEs: "A long queue at the pharmacy. The lady in front of you turns round for a chat.",
    lines: [
      C("¡Uf, qué cola! ¿Usted también está enferm{a/o}?", "Phew, what a queue! Are you ill too?", "No, solo vengo a comprar protector solar.", "No, I've just come to buy sun cream.",
        "No, solo vengo a comprar una ambulancia.", "😂", "Sí, estoy en la cola.", "She asked if you're ill 🤒",
        { a: "No, solo vengo a comprar crema solar." }),
      C("¡Qué bueno! ¿Y alguna vez te enfermaste en un viaje?", "Good! And have you ever been ill on a trip?", "Sí, una vez en Colombia me sentía tan mal que tuve que ir al médico.", "Yes, once in Colombia I felt so ill that I had to see a doctor.",
        "Sí, una vez en Colombia me siento tan mal.", "It's a story from the past: me sentía ⏪", "Sí, alguna vez mañana.", "😂",
        { n: "¡Qué bien! ¿Y alguna vez has estado enferm{a/o} en un viaje?", a: "Sí, una vez en Portugal me sentía tan mal que tuve que ir al médico.", w: ["Sí, una vez en Portugal me siento tan mal.", "It's a story from the past: me sentía ⏪"] }),
      C("¡No me diga! ¿Y qué tenía?", "You don't say! And what was wrong?", "Tenía tanta fiebre que no podía levantarme.", "I had such a high fever that I couldn't get up.",
        "Tenía tan fiebre que no podía levantarme.", "With nouns: tanta fiebre 🤒", "Tenía una ambulancia.", "😂"),
      C("¡Qué susto! ¿Y fue al hospital?", "What a fright! And did you go to hospital?", "Sí, me llevaron al hospital en ambulancia.", "Yes, they took me to hospital in an ambulance.",
        "Sí, me llevaban al hospital en ambulancia.", "One event: me llevaron 🚑", "Sí, llevé la ambulancia.", "You were the patient, not the driver 😂",
        { n: "¡Qué susto! ¿Y tuvo que ir al hospital?" }),
      C("¡Pobrecit{a/o}! ¿Y cuánto tiempo estuvo así?", "You poor thing! And how long were you like that?", "No mucho. El médico me dio unas pastillas y al día siguiente ya estaba mejor.", "Not long. The doctor gave me some tablets and the next day I was already better.",
        "No mucho. Al día siguiente ya estoy mejor.", "Past background: ya estaba mejor 🙂", "Dos ambulancias.", "😂"),
      C("¡Menos mal! A mí una vez me picó una medusa en la playa. ¡Qué dolor!", "Thank goodness! Once a jellyfish stung me on the beach. How painful!", "¡Ay, qué horror! ¿Y qué hizo?", "Oh, how awful! And what did you do?",
        "¡Ay, qué horror! ¿Y qué hacía?", "Ask about the event: ¿qué hizo? 🪼", "¡Qué bueno!", "Good?! 😱")
    ] },
  gq: { name: "Telling a story", items: [
    G("¿Alguna vez te ___ en un viaje?", "enfermaste", "enfermabas|enfermas", "Have you ever been ill on a trip?", "ve"),
    G("¿Alguna vez has ___ enferm{a/o}?", "estado", "estuviste|estar", "Have you ever been ill?", "es"),
    G("Me sentía ___ mal que fui al médico.", "tan", "tanto|muy", "I felt so ill that I went to the doctor."),
    G("Tenía ___ fiebre que no podía levantarme.", "tanta", "tan|tanto", "I had such a fever that I couldn't get up."),
    G("___ que ir al médico.", "Tuve", "Tengo|Tendré", "I had to go to the doctor."),
    G("Me ___ al hospital en ambulancia.", "llevaron", "llevaban|llevan", "They took me to hospital in an ambulance."),
    G("Al día siguiente ya ___ mejor.", "estaba", "estoy|estaré", "The next day I was already better."),
    G("Una vez me ___ una medusa.", "picó", "picaba|pica", "Once a jellyfish stung me.")
  ] }
});

U(40, {
  sit: "Looking back and planning the next trip", gram: "preterite, conditional and present-for-future together; superlatives; conocer for places",
  tip: "Everything together: the preterite to look back (fueron las mejores vacaciones), the conditional to dream (me gustaría conocer...), the present for plans (te escribo, nos vemos pronto). Conocer un lugar = to visit a place for the first time. ¡Felicitaciones!",
  phrases: [
    "Fueron las mejores vacaciones de mi vida.|It was the best holiday of my life.|Han sido las mejores vacaciones de mi vida.",
    "El próximo año me gustaría conocer el Salto Ángel.|Next year I'd like to see Angel Falls.|El próximo año me gustaría conocer Galicia.",
    "¡Te escribo y nos vemos pronto!|I'll write to you, see you soon!",
    "Lo mejor fue la gente.|The best thing was the people.|Lo mejor ha sido la gente.",
    "Aprendí mucho español.|I learnt a lot of Spanish.|He aprendido mucho español.",
    "Voy a extrañar las arepas.|I'm going to miss the arepas.|Voy a echar de menos la tortilla.",
    "La próxima vez quiero quedarme más tiempo.|Next time I want to stay longer.",
    "Mañana vuelvo a casa.|Tomorrow I go back home.",
    "¿Cuándo vienes a visitarme?|When are you coming to visit me?",
    "¡Gracias por todo, de corazón!|Thank you for everything, from the bottom of my heart!"
  ],
  words: ["🏆|las mejores vacaciones|the best holiday", "❤️|la gente|the people", "📚|aprender|to learn", "🗺️|conocer|to get to know (a place)", "🔜|pronto|soon",
    "📨|escribir|to write", "🔁|la próxima vez|next time", "🏠|volver a casa|to go back home", "😢|extrañar|to miss|echar de menos", "💛|de corazón|from the heart"],
  chat: { npc: "Carmen", av: "👩🏽", scene: "The very end: a farewell dinner at Carmen's in Caracas, where your first holiday began.", sceneEs: "The very end: a farewell dinner at Carmen's in Madrid, where your first holiday began.",
    lines: [
      C("¡{N}! ¿Entonces mañana te vas? ¿Qué tal las vacaciones?", "{N}! So you're leaving tomorrow? How was the holiday?", "¡Fueron las mejores vacaciones de mi vida!", "It was the best holiday of my life!",
        "¡Eran las mejores vacaciones de mi vida!", "The whole holiday, finished: fueron 🏆", "¡Son las peores vacaciones!", "Ouch! 😢",
        { a: "¡Han sido las mejores vacaciones de mi vida!", w: ["¡Eran las mejores vacaciones de mi vida!", "The whole holiday, finished: han sido 🏆"] }),
      C("¡Qué bueno! ¿Y qué fue lo mejor?", "Great! And what was the best part?", "Lo mejor fue la gente. Y la comida, claro.", "The best thing was the people. And the food, of course.",
        "El mejor fue la gente.", "The best THING = lo mejor ❤️", "La mejor fue la arepa.", "Close — but say lo mejor 😉",
        { n: "¡Qué bien! ¿Y qué ha sido lo mejor?", a: "Lo mejor ha sido la gente. Y la comida, claro.", w: ["El mejor ha sido la gente.", "The best THING = lo mejor ❤️"] }),
      C("¡Ay, qué lindo! ¿Y aprendiste mucho español?", "Aw, how sweet! And did you learn a lot of Spanish?", "¡Sí, aprendí mucho! Ahora entiendo cuando ustedes hablan rápido.", "Yes, I learnt a lot! Now I understand when you all talk fast.",
        "¡Sí, aprendo mucho ayer!", "Past: aprendí 📚", "No, aprendí mucho inglés.", "😂",
        { n: "¡Ay, qué bonito! ¿Y has aprendido mucho español?", a: "¡Sí, he aprendido mucho! Ahora entiendo cuando habláis rápido.", w: ["¡Sí, aprendo mucho ayer!", "Past: he aprendido 📚"] }),
      C("¡Se nota! ¿Y vas a volver?", "It shows! And will you come back?", "¡Claro! El próximo año me gustaría conocer el Salto Ángel.", "Of course! Next year I'd like to see Angel Falls.",
        "¡Claro! El año pasado me gustaría conocer el Salto Ángel.", "Pasado = last; next = próximo 🔜", "¡Claro! Me gustó conocer el Salto Ángel.", "You haven't been there yet! 💦",
        { a: "¡Claro! El próximo año me gustaría conocer Galicia.", w: ["¡Claro! El año pasado me gustaría conocer Galicia.", "Pasado = last; next = próximo 🔜"] }),
      C("¡El salto de agua más alto del mundo! Te va a encantar. Te voy a extrañar, {N}.", "The highest waterfall in the world! You're going to love it. I'm going to miss you, {N}.", "¡Yo también te voy a extrañar! ¡Gracias por todo, de corazón!", "I'm going to miss you too! Thank you for everything, from the bottom of my heart!",
        "¡Yo también te voy a extrañar! ¡Gracias para todo!", "gracias POR 🙏", "¡Te va a encantar!", "That's her line 😉",
        { n: "¡Galicia es preciosa! Te va a encantar. Te voy a echar de menos, {N}.", a: "¡Yo también te voy a echar de menos! ¡Gracias por todo, de corazón!", w: ["¡Yo también te voy a echar de menos! ¡Gracias para todo!", "gracias POR 🙏"] }),
      C("¡Escríbeme cuando llegues!", "Write to me when you get home!", "¡Te escribo y nos vemos pronto!", "I'll write to you, see you soon!",
        "¡Te escribí y nos vimos pronto!", "Future plans → present: te escribo, nos vemos ✉️", "¡Escríbeme!", "That's her line 😉")
    ] },
  gq: { name: "Everything together", items: [
    G("___ las mejores vacaciones de mi vida.", "Fueron", "Eran|Serán", "It was the best holiday of my life.", "ve"),
    G("___ sido las mejores vacaciones de mi vida.", "Han", "Ha|Habían", "It's been the best holiday of my life.", "es"),
    G("El próximo año me ___ conocer el Salto Ángel.", "gustaría", "gustó|gustaba", "Next year I'd like to see Angel Falls.", "ve"),
    G("El próximo año me ___ conocer Galicia.", "gustaría", "gustó|gustaba", "Next year I'd like to see Galicia.", "es"),
    G("Lo ___ fue la gente.", "mejor", "más bueno|mejores", "The best thing was the people.", "ve"),
    G("Mañana ___ a casa.", "vuelvo", "volví|volvía", "Tomorrow I go back home."),
    G("Te ___ y nos vemos pronto.", "escribo", "escribí|escribía", "I'll write to you and see you soon."),
    G("Es la playa ___ bonita del país.", "más", "mejor|muy", "It's the most beautiful beach in the country."),
    G("Voy a ___ las arepas.", "extrañar", "extraño|extrañé", "I'm going to miss the arepas.", "ve"),
    G("Voy a echar ___ menos la tortilla.", "de", "a|en", "I'm going to miss the tortilla.", "es")
  ] }
});
