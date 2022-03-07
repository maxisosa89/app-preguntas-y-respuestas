let categories = [
    {name:"Historia"},
    {name:"Geografía"},
    {name:"Arte"},
    {name:"Ciencia"},
    {name:"Entretenimiento"},
    {name:"Deportes"}
]

let questions = 
[
    {
        question: "¿Cuál fue el primer país en aprobar el sufragio femenino?",
        category: "Historia",
        answer: [
                    {
                        option: "Nueva Zelanda",
                        true: true,
                    },
                    {
                        option: "Estados Unidos",
                        true: false,
                    },
                    {
                        option: "Argentina",
                        true: false,
                    },
                    {
                        option: "Dinamarca",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        category: "Historia",
        answer: [
                    {
                        option: "En el año 1969",
                        true: true,
                    },
                    {
                        option: "En el año 1974",
                        true: false,
                    },
                    {
                        option: "En el año 1958",
                        true: false,
                    },
                    {
                        option: "En el año 1966",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué importante batalla tuvo lugar en 1815?",
        category: "Historia",
        answer: [
                    {
                        option: "La batalla de Waterloo",
                        true: true,
                    },
                    {
                        option: "La batalla de Normandía",
                        true: false,
                    },
                    {
                        option: "La batalla de Stalingrado",
                        true: false,
                    },
                    {
                        option: "La batalla de Moscú",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál era la ciudad hogar de Marco Polo?",
        category: "Historia",
        answer: [
                    {
                        option: "Venecia",
                        true: true,
                    },
                    {
                        option: "Roma",
                        true: false,
                    },
                    {
                        option: "Madrid",
                        true: false,
                    },
                    {
                        option: "Paris",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué año tuvo lugar el genocidio de Ruanda?",
        category: "Historia",
        answer: [
                    {
                        option: "Ocurrió en el año 1994",
                        true: true,
                    },
                    {
                        option: "Ocurrió en el año 1980",
                        true: false,
                    },
                    {
                        option: "Ocurrió en el año 1996",
                        true: false,
                    },
                    {
                        option: "Ocurrió en el año 1988",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién fue el primer presidente de la democracia española después del franquismo?",
        category: "Historia",
        answer: [
                    {
                        option: "Adolfo Suárez",
                        true: true,
                    },
                    {
                        option: "Leopoldo Calvo",
                        true: false,
                    },
                    {
                        option: "Felipe González Márquez",
                        true: false,
                    },
                    {
                        option: "José Luis Rodríguez Zapatero",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué reina británica fue hija de los Reyes Católicos?",
        category: "Historia",
        answer: [
                    {
                        option: "Catalina de Aragón",
                        true: true,
                    },
                    {
                        option: "Jane Grey",
                        true: false,
                    },
                    {
                        option: "Mary Tudor",
                        true: false,
                    },
                    {
                        option: "Ana Estuardo",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Por qué nombre se conocía a la traductora e intérprete del conquistador Hernán Cortés en tierras aztecas?",
        category: "Historia",
        answer: [
                    {
                        option: "Malinche",
                        true: true,
                    },
                    {
                        option: "Atotoztli",
                        true: false,
                    },
                    {
                        option: "Metztli",
                        true: false,
                    },
                    {
                        option: "Quetzalli",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué año se disolvió la Unión Soviética?",
        category: "Historia",
        answer: [
                    {
                        option: "La disolución sucedió en el 1991",
                        true: true,
                    },
                    {
                        option: "La disolución sucedió en el 1987",
                        true: false,
                    },
                    {
                        option: "La disolución sucedió en el 1994",
                        true: false,
                    },
                    {
                        option: "La disolución sucedió en el 1982",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué suceso marca el final de la Edad Antigua y el inicio de la Edad Media?",
        category: "Historia",
        answer: [
                    {
                        option: "La caída del imperio romano de Occidente, en el 476 d.C.",
                        true: true,
                    },
                    {
                        option: "La derrota de los persas en las Guerras Médicas en el 449 a.C.",
                        true: false,
                    },
                    {
                        option: "La derrota de Cártago en las Guerras Púnicas en el 146 a.C.",
                        true: false,
                    },
                    {
                        option: "Las invasiones germánicas a partir del siglo III d.C.",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué ciudad se entrevistaron Hitler y Franco?",
        category: "Historia",
        answer: [
                    {
                        option: "Hendaya",
                        true: true,
                    },
                    {
                        option: "Berlin",
                        true: false,
                    },
                    {
                        option: "Madrid",
                        true: false,
                    },
                    {
                        option: "Paris",
                        true: false,
                    },
                ]
    },
    {
        question: "¿De qué país se independizó Eslovenia?",
        category: "Historia",
        answer: [
                    {
                        option: "Yugoslavia",
                        true: true,
                    },
                    {
                        option: "Rusia",
                        true: false,
                    },
                    {
                        option: "Alemania",
                        true: false,
                    },
                    {
                        option: "Inglaterra",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué presidente de la Unión Soviética instauró la Perestroika?",
        category: "Historia",
        answer: [
                    {
                        option: "Mijaíl Gorbachov",
                        true: true,
                    },
                    {
                        option: "Andréi Gromyko",
                        true: false,
                    },
                    {
                        option: "Vasili Kuznetsov",
                        true: false,
                    },
                    {
                        option: "Konstantín Chernenko",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué carabela no regresó del primer viaje de Colón al Nuevo Mundo?",
        category: "Historia",
        answer: [
                    {
                        option: "La Santa María",
                        true: true,
                    },
                    {
                        option: "La Niña",
                        true: false,
                    },
                    {
                        option: "La Pinta",
                        true: false,
                    },
                    {
                        option: "Ninguna regresó",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué país africano fue fundado por esclavos americanos liberados en 1847?",
        category: "Historia",
        answer: [
                    {
                        option: "Liberia",
                        true: true,
                    },
                    {
                        option: "Gambia",
                        true: false,
                    },
                    {
                        option: "Togo",
                        true: false,
                    },
                    {
                        option: "Sudán",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se conocía la Primera Guerra Mundial antes de que estallara la segunda?",
        category: "Historia",
        answer: [
                    {
                        option: "La Gran Guerra",
                        true: true,
                    },
                    {
                        option: "La Guerra Mundial",
                        true: false,
                    },
                    {
                        option: "La Primera Guerra Mundial",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál fue el segundo país americano en conseguir la independencia?",
        category: "Historia",
        answer: [
                    {
                        option: "Haití",
                        true: true,
                    },
                    {
                        option: "Argentina",
                        true: false,
                    },
                    {
                        option: "Brasil",
                        true: false,
                    },
                    {
                        option: "Mexico",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es la narración épica más antigua de la historia?",
        category: "Historia",
        answer: [
                    {
                        option: "La Epopeya de Gilgamesh",
                        true: true,
                    },
                    {
                        option: "La leyenda de Cutha",
                        true: false,
                    },
                    {
                        option: "Épica de Atrahasis",
                        true: false,
                    },
                    {
                        option: "Enuma Elish",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién era el emperador de Roma cuando murió Jesús de Nazaret?",
        category: "Historia",
        answer: [
                    {
                        option: "Tiberio",
                        true: true,
                    },
                    {
                        option: "Marco Aurelio",
                        true: false,
                    },
                    {
                        option: "Galerio",
                        true: false,
                    },
                    {
                        option: "Calígula",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué batalla marítima tuvo lugar en el año 1805?",
        category: "Historia",
        answer: [
                    {
                        option: "La Batalla de Trafalgar",
                        true: true,
                    },
                    {
                        option: "La Batalla de Lepanto",
                        true: false,
                    },
                    {
                        option: "La Batalla de Yamen",
                        true: false,
                    },
                    {
                        option: "La Batalla de Tsushima",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es la capital de Filipinas?",
        category: "Geografía",
        answer: [
                    {
                        option: "Manila",
                        true: true,
                    },
                    {
                        option: "Cebu",
                        true: false,
                    },
                    {
                        option: "Kuala Lumpur",
                        true: false,
                    },
                    {
                        option: "Hanói",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el río más caudaloso del mundo?",
        category: "Geografía",
        answer: [
                    {
                        option: "El Amazonas",
                        true: true,
                    },
                    {
                        option: "El Nilo",
                        true: false,
                    },
                    {
                        option: "El Misisipi",
                        true: false,
                    },
                    {
                        option: "El Yangtsé",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué país está entre Perú y Colombia?",
        category: "Geografía",
        answer: [
                    {
                        option: "Ecuador",
                        true: true,
                    },
                    {
                        option: "Venezuela",
                        true: false,
                    },
                    {
                        option: "Paraguay",
                        true: false,
                    },
                    {
                        option: "Uruguay",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué país se encuentra el río Po?",
        category: "Geografía",
        answer: [
                    {
                        option: "Italia",
                        true: true,
                    },
                    {
                        option: "Francia",
                        true: false,
                    },
                    {
                        option: "Estados Unidos",
                        true: false,
                    },
                    {
                        option: "Portugal",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es la montaña más alta de Europa?",
        category: "Geografía",
        answer: [
                    {
                        option: "El Monte Elbrús",
                        true: true,
                    },
                    {
                        option: "El Monte Dij-Tau",
                        true: false,
                    },
                    {
                        option: "Shjara",
                        true: false,
                    },
                    {
                        option: "El Monte Kazbek",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Dónde se encuentra la Casa Rosada?",
        category: "Geografía",
        answer: [
                    {
                        option: "En Argentina",
                        true: true,
                    },
                    {
                        option: "En Sudáfrica",
                        true: false,
                    },
                    {
                        option: "En Mexico",
                        true: false,
                    },
                    {
                        option: "En Canadá",
                        true: false,
                    },
                ]
    },
    {
        question: "¿A qué país pertenece la isla de Creta?",
        category: "Geografía",
        answer: [
                    {
                        option: "Grecia",
                        true: true,
                    },
                    {
                        option: "Filipinas",
                        true: false,
                    },
                    {
                        option: "Australia",
                        true: false,
                    },
                    {
                        option: "España",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué océano baña las aguas de Sri Lanka?",
        category: "Geografía",
        answer: [
                    {
                        option: "El océano Índico",
                        true: true,
                    },
                    {
                        option: "El océano Pacífico",
                        true: false,
                    },
                    {
                        option: "El océano Atlántico",
                        true: false,
                    },
                    {
                        option: "El océano Ártico",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama a día de hoy la antigua ciudad de Stalingrado?",
        category: "Geografía",
        answer: [
                    {
                        option: "Volvogrado",
                        true: true,
                    },
                    {
                        option: "Moscú",
                        true: false,
                    },
                    {
                        option: "Kazán",
                        true: false,
                    },
                    {
                        option: "Omsk",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama la línea vertical imaginaria que divide el mundo en dos mitades?",
        category: "Geografía",
        answer: [
                    {
                        option: "El meridiano de Greenwich",
                        true: true,
                    },
                    {
                        option: "La línea ecuatorial",
                        true: false,
                    },
                    {
                        option: "Trópico de Cáncer",
                        true: false,
                    },
                    {
                        option: "Trópico de Capricornio",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué país de Europa se habla el magyar?",
        category: "Geografía",
        answer: [
                    {
                        option: "Hungría",
                        true: true,
                    },
                    {
                        option: "Eslovaquia",
                        true: false,
                    },
                    {
                        option: "Eslovenia",
                        true: false,
                    },
                    {
                        option: "Moldavia",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué país se encuentra el pico Aconcagua?",
        category: "Geografía",
        answer: [
                    {
                        option: "Argentina",
                        true: true,
                    },
                    {
                        option: "Paraguay",
                        true: false,
                    },
                    {
                        option: "Chile",
                        true: false,
                    },
                    {
                        option: "Perú",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el país más visitado del mundo?",
        category: "Geografía",
        answer: [
                    {
                        option: "Francia",
                        true: true,
                    },
                    {
                        option: "Estados Unidos",
                        true: false,
                    },
                    {
                        option: "China",
                        true: false,
                    },
                    {
                        option: "Australia",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Por cuántos estados está formado Estados Unidos?",
        category: "Geografía",
        answer: [
                    {
                        option: "50",
                        true: true,
                    },
                    {
                        option: "48",
                        true: false,
                    },
                    {
                        option: "23",
                        true: false,
                    },
                    {
                        option: "75",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Dónde se encuentran las ruinas de Angkor?",
        category: "Geografía",
        answer: [
                    {
                        option: "Camboya",
                        true: true,
                    },
                    {
                        option: "Nigeria",
                        true: false,
                    },
                    {
                        option: "Egipto",
                        true: false,
                    },
                    {
                        option: "Mexico",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el país del mundo con mayor población?",
        category: "Geografía",
        answer: [
                    {
                        option: "China",
                        true: true,
                    },
                    {
                        option: "Rusia",
                        true: false,
                    },
                    {
                        option: "Estados Unidos",
                        true: false,
                    },
                    {
                        option: "Brasil",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué cordillera separa Europa de Asia?",
        category: "Geografía",
        answer: [
                    {
                        option: "Los montes Urales",
                        true: true,
                    },
                    {
                        option: "La cordillera de los Andes",
                        true: false,
                    },
                    {
                        option: "El Himalaya",
                        true: false,
                    },
                    {
                        option: "Los Alpes",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Entre qué países se encuentra el Estrecho de Bering?",
        category: "Geografía",
        answer: [
                    {
                        option: "Estados Unidos y Rusia",
                        true: true,
                    },
                    {
                        option: "Francia y España",
                        true: false,
                    },
                    {
                        option: "Uruguay y Brasil",
                        true: false,
                    },
                    {
                        option: "Mexico y Guatemala",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es la lengua más hablada del mundo?",
        category: "Geografía",
        answer: [
                    {
                        option: "Chino mandarín",
                        true: true,
                    },
                    {
                        option: "Español",
                        true: false,
                    },
                    {
                        option: "Inglés",
                        true: false,
                    },
                    {
                        option: "Frances",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué países se encuentra el Everest?",
        category: "Geografía",
        answer: [
                    {
                        option: "China y Nepal",
                        true: true,
                    },
                    {
                        option: "Argentina y Chile",
                        true: false,
                    },
                    {
                        option: "Sudáfrica y Zimbabue",
                        true: false,
                    },
                    {
                        option: "Italia y Austria",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién pintó el “Guernica”?",
        category: "Arte",
        answer: [
                    {
                        option: "Pablo Picasso",
                        true: true,
                    },
                    {
                        option: "Vincent Van Gogh",
                        true: false,
                    },
                    {
                        option: "Leonardo da Vinci",
                        true: false,
                    },
                    {
                        option: "Salvador Dalí",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió “La Guerra de los Mundos”?",
        category: "Arte",
        answer: [
                    {
                        option: "H.G. Wells",
                        true: true,
                    },
                    {
                        option: "William Shakespeare",
                        true: false,
                    },
                    {
                        option: "Stephen King",
                        true: false,
                    },
                    {
                        option: "Edgar Allan Poe",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué italiano puso música al Othelo de Shakespeare?",
        category: "Arte",
        answer: [
                    {
                        option: "Giuseppe Verdi",
                        true: true,
                    },
                    {
                        option: "Antonio Vivaldi",
                        true: false,
                    },
                    {
                        option: "Claudio Monteverdi",
                        true: false,
                    },
                    {
                        option: "Franco Mannino",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Con qué nombre firmaba Van Gogh sus obras?",
        category: "Arte",
        answer: [
                    {
                        option: "Vincent",
                        true: true,
                    },
                    {
                        option: "V.",
                        true: false,
                    },
                    {
                        option: "Willem",
                        true: false,
                    },
                    {
                        option: "X",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué tipo de instrumento es una cítara?",
        category: "Arte",
        answer: [
                    {
                        option: "De cuerda",
                        true: true,
                    },
                    {
                        option: "De viento",
                        true: false,
                    },
                    {
                        option: "De percusión",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué filósofo creó “El mito de la caverna”?",
        category: "Arte",
        answer: [
                    {
                        option: "Platón",
                        true: true,
                    },
                    {
                        option: "Sócrates",
                        true: false,
                    },
                    {
                        option: "Aristóteles",
                        true: false,
                    },
                    {
                        option: "Crátilo",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió “La colmena”?",
        category: "Arte",
        answer: [
                    {
                        option: "Camilo José Cela",
                        true: true,
                    },
                    {
                        option: "Miguel de Unamuno",
                        true: false,
                    },
                    {
                        option: "Lope de Vega",
                        true: false,
                    },
                    {
                        option: "Miguel Delibes",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué tiene en Segovia 128 arcos?",
        category: "Arte",
        answer: [
                    {
                        option: "El acueducto de Segovia",
                        true: true,
                    },
                    {
                        option: "Teatro romano de Segovia",
                        true: false,
                    },
                    {
                        option: "Templo de Augusto",
                        true: false,
                    },
                    {
                        option: "Itálica",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió “Poeta en Nueva York”?",
        category: "Arte",
        answer: [
                    {
                        option: "Federico García Lorca",
                        true: true,
                    },
                    {
                        option: "Antonio Machado",
                        true: false,
                    },
                    {
                        option: "Juan Ramón Jiménez",
                        true: false,
                    },
                    {
                        option: "Pedro Salinas",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió “Sueño de una noche de verano”?",
        category: "Arte",
        answer: [
                    {
                        option: "William Shakespeare",
                        true: true,
                    },
                    {
                        option: "Charles Dickens",
                        true: false,
                    },
                    {
                        option: "Oscar Wilde",
                        true: false,
                    },
                    {
                        option: "Agatha Christie",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el caballo de Don Quijote de la Mancha?",
        category: "Arte",
        answer: [
                    {
                        option: "Rocinante",
                        true: true,
                    },
                    {
                        option: "Babieca",
                        true: false,
                    },
                    {
                        option: "Pegaso",
                        true: false,
                    },
                    {
                        option: "Bucéfalo",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué escritor español era conocido como “el manco de Lepanto”?",
        category: "Arte",
        answer: [
                    {
                        option: "Miguel de Cervantes",
                        true: true,
                    },
                    {
                        option: "Federico García Lorca",
                        true: false,
                    },
                    {
                        option: "Antonio Machado",
                        true: false,
                    },
                    {
                        option: "Miguel de Unamuno",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué animal mitológico da nombre a un libro de Thomas Hobbe?",
        category: "Arte",
        answer: [
                    {
                        option: "Leviatán",
                        true: true,
                    },
                    {
                        option: "Cíclope",
                        true: false,
                    },
                    {
                        option: "Unicornio",
                        true: false,
                    },
                    {
                        option: "Centauro",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el libro en el que se basa la película “Blade Runner”?",
        category: "Arte",
        answer: [
                    {
                        option: "¿Sueñan los robots con ovejas eléctricas?",
                        true: true,
                    },
                    {
                        option: "El hombre en el castillo",
                        true: false,
                    },
                    {
                        option: "Una mirada a la oscuridad",
                        true: false,
                    },
                    {
                        option: "Ubik",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió las aventuras de Sandokán?",
        category: "Arte",
        answer: [
                    {
                        option: "Emilio Salgari",
                        true: true,
                    },
                    {
                        option: "Umberto Eco",
                        true: false,
                    },
                    {
                        option: "Italo Calvino",
                        true: false,
                    },
                    {
                        option: "Stefano Benni",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué pintor realizó la obra de “La joven de la perla”?",
        category: "Arte",
        answer: [
                    {
                        option: "Johannes Vermeer",
                        true: true,
                    },
                    {
                        option: "Salvador Dalí",
                        true: false,
                    },
                    {
                        option: "Pablo Picasso",
                        true: false,
                    },
                    {
                        option: "Leonardo da Vinci",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué poeta escribió el poema “Oda a Afrodita”?",
        category: "Arte",
        answer: [
                    {
                        option: "Safo de Mitilene",
                        true: true,
                    },
                    {
                        option: "Corina",
                        true: false,
                    },
                    {
                        option: "Praxila",
                        true: false,
                    },
                    {
                        option: "Filina de Tesalia",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué cantante de jazz compuso un álbum titulado “Glad Rag Doll”?",
        category: "Arte",
        answer: [
                    {
                        option: "Diana Krall",
                        true: true,
                    },
                    {
                        option: "Nina Simone",
                        true: false,
                    },
                    {
                        option: "Norah Jones",
                        true: false,
                    },
                    {
                        option: "Melody Gardot",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió “La conjura de los necios”?",
        category: "Arte",
        answer: [
                    {
                        option: "John Kennedy Toole",
                        true: true,
                    },
                    {
                        option: "Ernest Hemingway",
                        true: false,
                    },
                    {
                        option: "Julio Cortázar",
                        true: false,
                    },
                    {
                        option: "James Joyce",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué pintor noruego pintó “El grito”?",
        category: "Arte",
        answer: [
                    {
                        option: "Edvard Munch",
                        true: true,
                    },
                    {
                        option: "Eilif Peterssen",
                        true: false,
                    },
                    {
                        option: "Erik Werenskiold",
                        true: false,
                    },
                    {
                        option: "Gerhard Munthe",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué mes el Sol está más cerca de la Tierra?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Diciembre",
                        true: true,
                    },
                    {
                        option: "Junio",
                        true: false,
                    },
                    {
                        option: "Agosto",
                        true: false,
                    },
                    {
                        option: "Febrero",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué lado del cuerpo está el hígado?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Derecho",
                        true: true,
                    },
                    {
                        option: "Izquierdo",
                        true: false,
                    },
                    {
                        option: "Centro",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué número viene después del 14 en los decimales del Pi?",
        category: "Ciencia",
        answer: [
                    {
                        option: "1",
                        true: true,
                    },
                    {
                        option: "5",
                        true: false,
                    },
                    {
                        option: "3",
                        true: false,
                    },
                    {
                        option: "4",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuántos elementos tiene la tabla periódica?",
        category: "Ciencia",
        answer: [
                    {
                        option: "118",
                        true: true,
                    },
                    {
                        option: "130",
                        true: false,
                    },
                    {
                        option: "123",
                        true: false,
                    },
                    {
                        option: "115",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué gas de la atmósfera nos protege de la radiación ultravioleta?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Ozono",
                        true: true,
                    },
                    {
                        option: "Neón",
                        true: false,
                    },
                    {
                        option: "Nitrógeno",
                        true: false,
                    },
                    {
                        option: "Argón",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuáles son las bases nitrogenadas del ADN?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Adenina, timina, guanina y citosina",
                        true: true,
                    },
                    {
                        option: "Adenina, uracilo, guanina y citosina",
                        true: false,
                    },
                    {
                        option: "Timina, uracilo, guanina y citosina",
                        true: false,
                    },
                    {
                        option: "Timina, uracilo, Adenina y citosina",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es la velocidad de la luz?",
        category: "Ciencia",
        answer: [
                    {
                        option: "400.000 km/s",
                        true: true,
                    },
                    {
                        option: "500.000 km/s",
                        true: false,
                    },
                    {
                        option: "300.000 km/s",
                        true: false,
                    },
                    {
                        option: "343.357 km/s",
                        true: false,
                    },
                ]
    },
    {
        question: "De los cinco sentidos, ¿cuál es el que se desarrolla primero?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Olfato",
                        true: true,
                    },
                    {
                        option: "Visión",
                        true: false,
                    },
                    {
                        option: "Gusto",
                        true: false,
                    },
                    {
                        option: "Audición",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué elemento está presente en absolutamente todas las moléculas orgánicas?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Carbono",
                        true: true,
                    },
                    {
                        option: "Oxígeno",
                        true: false,
                    },
                    {
                        option: "Fósforo",
                        true: false,
                    },
                    {
                        option: "Nitrógeno",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el proceso celular en el que una célula se divide para dar lugar a dos células hijas iguales?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Mitosis",
                        true: true,
                    },
                    {
                        option: "Meiosis",
                        true: false,
                    },
                    {
                        option: "Metafase",
                        true: false,
                    },
                    {
                        option: "Anafase",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llaman las células con un núcleo diferenciado?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Eucariotas",
                        true: true,
                    },
                    {
                        option: "Procariotas",
                        true: false,
                    },
                    {
                        option: "Animal",
                        true: false,
                    },
                    {
                        option: "Vegetal",
                        true: false,
                    },
                ]
    },
    {
        question: "¿A partir de qué planta se elabora el tequila?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Agave",
                        true: true,
                    },
                    {
                        option: "Uva",
                        true: false,
                    },
                    {
                        option: "Cebada",
                        true: false,
                    },
                    {
                        option: "Ajenjo",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál fue el biólogo que de manera independiente a Darwin elaboró una teoría de la evolución casi idéntica a la suya?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Alfred Russell Wallace",
                        true: true,
                    },
                    {
                        option: "Gregor Mendel",
                        true: false,
                    },
                    {
                        option: "Anton van Leeuwenhoek",
                        true: false,
                    },
                    {
                        option: "Alexander Fleming",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué período tuvo lugar entre Devónico y el Pérmico?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Carbonífero",
                        true: true,
                    },
                    {
                        option: "Cámbrico",
                        true: false,
                    },
                    {
                        option: "Ordovícico",
                        true: false,
                    },
                    {
                        option: "Silúrico",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué ciencia estudia la sangre?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Hematología",
                        true: true,
                    },
                    {
                        option: "Oncología",
                        true: false,
                    },
                    {
                        option: "Nefrología",
                        true: false,
                    },
                    {
                        option: "Hepatología",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el único mes que puede tener menos de 4 fases lunares?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Febrero",
                        true: true,
                    },
                    {
                        option: "Diciembre",
                        true: false,
                    },
                    {
                        option: "Junio",
                        true: false,
                    },
                    {
                        option: "Septiembre",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué significan las siglas ADN?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Ácido desoxirribonucleico",
                        true: true,
                    },
                    {
                        option: "Ácido de nitrógeno",
                        true: false,
                    },
                    {
                        option: "Adenina doble núcleo",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el elemento más abundante de la Tierra?",
        category: "Ciencia",
        answer: [
                    {
                        option: "Hidrógeno",
                        true: true,
                    },
                    {
                        option: "Oxígeno",
                        true: false,
                    },
                    {
                        option: "Litio",
                        true: false,
                    },
                    {
                        option: "Helio",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el animal más venenoso del mundo?",
        category: "Ciencia",
        answer: [
                    {
                        option: "La medusa avispa de mar",
                        true: true,
                    },
                    {
                        option: "La serpiente cobra real",
                        true: false,
                    },
                    {
                        option: "La rana dardo dorada",
                        true: false,
                    },
                    {
                        option: "El avispón asiático gigante",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué edad tiene la Tierra?",
        category: "Ciencia",
        answer: [
                    {
                        option: "4.543 millones de años",
                        true: true,
                    },
                    {
                        option: "5.000 millones de años",
                        true: false,
                    },
                    {
                        option: "3.846 millones de años",
                        true: false,
                    },
                    {
                        option: "5.271 millones de años",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién interpretó a Hitler en “El gran dictador”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Charles Chaplin",
                        true: true,
                    },
                    {
                        option: "Marlon Brando",
                        true: false,
                    },
                    {
                        option: "Robert de Niro",
                        true: false,
                    },
                    {
                        option: "Leonardo DiCaprio",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién dirigió “Ciudadano Kane”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Orson Welles",
                        true: true,
                    },
                    {
                        option: "Martin Scorsese",
                        true: false,
                    },
                    {
                        option: "Steven Spielberg",
                        true: false,
                    },
                    {
                        option: "Alfred Hitchcock",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál fue la primera película de Disney?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Blancanieves",
                        true: true,
                    },
                    {
                        option: "La Cenicienta",
                        true: false,
                    },
                    {
                        option: "Pinocho",
                        true: false,
                    },
                    {
                        option: "Alicia en el País de las Maravillas",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué artista ha ganado más premios Grammy?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Georg Solti",
                        true: true,
                    },
                    {
                        option: "Stevie Wonder",
                        true: false,
                    },
                    {
                        option: "Beyoncé",
                        true: false,
                    },
                    {
                        option: "Jay Z",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama la madre de Simba en la película de “El rey león”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Sarabi",
                        true: true,
                    },
                    {
                        option: "Nala",
                        true: false,
                    },
                    {
                        option: "Pumba",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué banda publicó el álbum “Master of Puppets”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Metallica",
                        true: true,
                    },
                    {
                        option: "Black Sabbath",
                        true: false,
                    },
                    {
                        option: "Iron Maiden",
                        true: false,
                    },
                    {
                        option: "AC/DC",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué ciudad vive el mago de Oz?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "La ciudad Esmeralda",
                        true: true,
                    },
                    {
                        option: "La ciudad Diamante",
                        true: false,
                    },
                    {
                        option: "En Bogotá",
                        true: false,
                    },
                    {
                        option: "Ninguna de las anteriores",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué año se emitió el último episodio de la serie “The Office” (EEUU)?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "2013",
                        true: true,
                    },
                    {
                        option: "2012",
                        true: false,
                    },
                    {
                        option: "2011",
                        true: false,
                    },
                    {
                        option: "2014",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué calle ficticia vivía Sherlock Holmes?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Baker Street",
                        true: true,
                    },
                    {
                        option: "Wall Street",
                        true: false,
                    },
                    {
                        option: "Northhumberland Street",
                        true: false,
                    },
                    {
                        option: "Evergreen Terrace",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el protagonista de la saga de videojuegos “La Leyenda de Zelda”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Link",
                        true: true,
                    },
                    {
                        option: "Ash",
                        true: false,
                    },
                    {
                        option: "Taichi",
                        true: false,
                    },
                    {
                        option: "Ganondorf",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién escribió la novela gráfica “Watchmen”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Alan Moore",
                        true: true,
                    },
                    {
                        option: "J. K. Rowling",
                        true: false,
                    },
                    {
                        option: "Charles Dickens",
                        true: false,
                    },
                    {
                        option: "George Orwell",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué actor interpreta a Leonard Hofstadter en la popular serie “The Big Bang Theory”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Johnny Galecki",
                        true: true,
                    },
                    {
                        option: "Jim Parsons",
                        true: false,
                    },
                    {
                        option: "Simon Helberg",
                        true: false,
                    },
                    {
                        option: "Kunal Nayyar",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál de los actores que ha interpretado a James Bond luchó contra el Dr. No?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Sean Connery",
                        true: true,
                    },
                    {
                        option: "Roger Moore",
                        true: false,
                    },
                    {
                        option: "George Lazenby",
                        true: false,
                    },
                    {
                        option: "Pierce Brosnan",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál fue la primera película en ganar el Óscar a “Mejor película”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Alas",
                        true: true,
                    },
                    {
                        option: "Amanecer",
                        true: false,
                    },
                    {
                        option: "Hermanos de armas",
                        true: false,
                    },
                    {
                        option: "El séptimo cielo)",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué dúo musical participó en la banda sonora de la película “Tron: Legacy”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Daft Punk",
                        true: true,
                    },
                    {
                        option: "Modjo",
                        true: false,
                    },
                    {
                        option: "Stardust",
                        true: false,
                    },
                    {
                        option: "Motorbass",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué famoso youtuber español tiene su propia serie de animación?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "El Rubius",
                        true: true,
                    },
                    {
                        option: "AuronPlay",
                        true: false,
                    },
                    {
                        option: "VEGETTA777",
                        true: false,
                    },
                    {
                        option: "The WillyRex",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el líder de los Autobots en la saga de películas de “Transformers”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Optimus Prime",
                        true: true,
                    },
                    {
                        option: "Bumblebee",
                        true: false,
                    },
                    {
                        option: "Megatron",
                        true: false,
                    },
                    {
                        option: "Ratchet",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llama el perro de Tintín?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Milú",
                        true: true,
                    },
                    {
                        option: "Chuletas",
                        true: false,
                    },
                    {
                        option: "Firulais",
                        true: false,
                    },
                    {
                        option: "Odie",
                        true: false,
                    },
                ]
    },
    {
        question: "¿La película “El club de la lucha” está basado en la novela homónima de qué autor?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Chuck Palahniuk",
                        true: true,
                    },
                    {
                        option: "Stephen King",
                        true: false,
                    },
                    {
                        option: "Paul Auster",
                        true: false,
                    },
                    {
                        option: "Peter Abrahams",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué actriz protagonizó “Desayuno con diamantes”?",
        category: "Entretenimiento",
        answer: [
                    {
                        option: "Audrey Hepburn",
                        true: true,
                    },
                    {
                        option: "Jessie Matthews",
                        true: false,
                    },
                    {
                        option: "Gillian Lynne",
                        true: false,
                    },
                    {
                        option: "Moira Shearer",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién fue la primera mujer en ganar una medalla olímpica en el año 1900?",
        category: "Deportes",
        answer: [
                    {
                        option: "Charlotte Cooper",
                        true: true,
                    },
                    {
                        option: "Fanny Blankers-Koen",
                        true: false,
                    },
                    {
                        option: "Allyson Felix",
                        true: false,
                    },
                    {
                        option: "Larissa Latynina",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llaman los deportistas que practican Judo?",
        category: "Deportes",
        answer: [
                    {
                        option: "Judokas",
                        true: true,
                    },
                    {
                        option: "Judoquistas",
                        true: false,
                    },
                    {
                        option: "Judaos",
                        true: false,
                    },
                    {
                        option: "Judos",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuáles son los colores de los cinco anillos olímpicos?",
        category: "Deportes",
        answer: [
                    {
                        option: "Amarillo, azul, negro, rojo y verde.",
                        true: true,
                    },
                    {
                        option: "Amarillo, violeta, negro, rojo y verde.",
                        true: false,
                    },
                    {
                        option: "Amarillo, azul, blanco, rojo y verde.",
                        true: false,
                    },
                    {
                        option: "Amarillo, celeste, violeta, rojo y verde.",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué deporte destacó Carl Lewis?",
        category: "Deportes",
        answer: [
                    {
                        option: "Atletismo",
                        true: true,
                    },
                    {
                        option: "Futbol",
                        true: false,
                    },
                    {
                        option: "Basquet",
                        true: false,
                    },
                    {
                        option: "Tenis",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Dónde se inventó el Ping-Pong?",
        category: "Deportes",
        answer: [
                    {
                        option: "Inglaterra",
                        true: true,
                    },
                    {
                        option: "China",
                        true: false,
                    },
                    {
                        option: "España",
                        true: false,
                    },
                    {
                        option: "Canadá",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué atleta ostenta el récord de los 100 metros lisos?",
        category: "Deportes",
        answer: [
                    {
                        option: "Usain Bolt",
                        true: true,
                    },
                    {
                        option: "Florence Griffith Joyner",
                        true: false,
                    },
                    {
                        option: "Elaine Thompson-Herah",
                        true: false,
                    },
                    {
                        option: "Marcell Jacobs",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué jugador de fútbol inventó un movimiento conocido como la “Gravesinha”?",
        category: "Deportes",
        answer: [
                    {
                        option: "Thomas Gravessen",
                        true: true,
                    },
                    {
                        option: "Michael Laudrup",
                        true: false,
                    },
                    {
                        option: "Brian Laudrup",
                        true: false,
                    },
                    {
                        option: "Michael Gravessen",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llamaba Muhammad Ali antes de adoptar este nombre?",
        category: "Deportes",
        answer: [
                    {
                        option: "Cassius Clay",
                        true: true,
                    },
                    {
                        option: "Sonny Liston",
                        true: false,
                    },
                    {
                        option: "Joe Frazier",
                        true: false,
                    },
                    {
                        option: "Ken Norton",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién fue el campeón del mundo de Moto GP en 2017?",
        category: "Deportes",
        answer: [
                    {
                        option: "Marc Márquez",
                        true: true,
                    },
                    {
                        option: "Valentino Rossi",
                        true: false,
                    },
                    {
                        option: "Ángel Nieto",
                        true: false,
                    },
                    {
                        option: "Mike Hailwood",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué equipo de béisbol jugó el famoso Derek Jeter?",
        category: "Deportes",
        answer: [
                    {
                        option: "New York Yankees",
                        true: true,
                    },
                    {
                        option: "Boston Red Sox",
                        true: false,
                    },
                    {
                        option: "Toronto Blue Jays",
                        true: false,
                    },
                    {
                        option: "Tampa Bay Rays",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién es el máximo goleador histórico de los mundiales de fútbol?",
        category: "Deportes",
        answer: [
                    {
                        option: "Miroslav Klose",
                        true: true,
                    },
                    {
                        option: "Ronaldo",
                        true: false,
                    },
                    {
                        option: "Gerd Müller",
                        true: false,
                    },
                    {
                        option: "Pelé",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuál es el equipo de la NBA con más títulos?",
        category: "Deportes",
        answer: [
                    {
                        option: "Los Boston Celtics",
                        true: true,
                    },
                    {
                        option: "Los Angeles Lakers",
                        true: false,
                    },
                    {
                        option: "Chicago Bulls",
                        true: false,
                    },
                    {
                        option: "Philadelphia",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Quién fue la primera alpinista en llegar a la cima del Everest?",
        category: "Deportes",
        answer: [
                    {
                        option: "Junko Tabei",
                        true: true,
                    },
                    {
                        option: "Edurne Pasaban",
                        true: false,
                    },
                    {
                        option: "Wanda Rutkiewicz",
                        true: false,
                    },
                    {
                        option: "Lucy Walker",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué equipo jugaba David Beckham en el año 2007?",
        category: "Deportes",
        answer: [
                    {
                        option: "Los Angeles Galaxy",
                        true: true,
                    },
                    {
                        option: "Manchester United",
                        true: false,
                    },
                    {
                        option: "Real Madrid",
                        true: false,
                    },
                    {
                        option: "PSG",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuántos jugadores hay en un equipo de voleibol?",
        category: "Deportes",
        answer: [
                    {
                        option: "Seis",
                        true: true,
                    },
                    {
                        option: "Cinco",
                        true: false,
                    },
                    {
                        option: "Siete",
                        true: false,
                    },
                    {
                        option: "Cuatro",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cuántos rounds hay en un combate de boxeo olímpico?",
        category: "Deportes",
        answer: [
                    {
                        option: "Tres",
                        true: true,
                    },
                    {
                        option: "Ocho",
                        true: false,
                    },
                    {
                        option: "Doce",
                        true: false,
                    },
                    {
                        option: "Uno",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué país es el que ha ganado más mundiales?",
        category: "Deportes",
        answer: [
                    {
                        option: "Brasil",
                        true: true,
                    },
                    {
                        option: "Alemania",
                        true: false,
                    },
                    {
                        option: "Italia",
                        true: false,
                    },
                    {
                        option: "Argentina",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Cómo se llamaba el ciclista italiano apodado “il campionissimo”?",
        category: "Deportes",
        answer: [
                    {
                        option: "Fausto Coppi",
                        true: true,
                    },
                    {
                        option: "Vittorio Adorni",
                        true: false,
                    },
                    {
                        option: "Elio Aggiano",
                        true: false,
                    },
                    {
                        option: "Bartolomeo Aymo",
                        true: false,
                    },
                ]
    },
    {
        question: "¿En qué ciudad española está el estadio de fútbol de Mestalla?",
        category: "Deportes",
        answer: [
                    {
                        option: "Valencia",
                        true: true,
                    },
                    {
                        option: "Castellón",
                        true: false,
                    },
                    {
                        option: "Madrid",
                        true: false,
                    },
                    {
                        option: "Barcelona",
                        true: false,
                    },
                ]
    },
    {
        question: "¿Qué arte marcial se conoce como el “boxeo tailandés”?",
        category: "Deportes",
        answer: [
                    {
                        option: "El muay thai",
                        true: true,
                    },
                    {
                        option: "Capoeira",
                        true: false,
                    },
                    {
                        option: "Kickboxing",
                        true: false,
                    },
                    {
                        option: "Krav Maga",
                        true: false,
                    },
                ]
    },
    
]

module.exports = {
    categories,
    questions
  };