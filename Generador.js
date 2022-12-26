//Listas de personajes

const per_profesiones = ["Profesor",
    "Carpintero",
    "Sacerdote",
    "Repartidor",
    "Doctor",
    "Dentista",
    "Enfermera",
    "Abogado",
    "Soldado",
    "Diseñador",
    "Psicólogo",
    "Escritor",
    "Periodista",
    "Reportero",
    "Psiquiatra",
    "Astronauta",
    "Plomero",
];

const per_animales = ["Gato",
    "Perro",
    "Gallina",
    "Tortuga",
    "Delfín",
    "Loro",
    "Hormiga",
    "Alacrán",
    "Jirafa",
    "León",
    "Tigre",
    "Lobo",
    "Chango",
    "Rinoceronte",
    "Pulpo"
];

const per_creaturas = ["Fantasma",
    "Demonio",
    "Zombie",
    "Gnomo",
    "Duende",
    "Centauro",
    "Unicornio",
    "Sirena",
    "Chupacabra",
];


function obtener_elemento_aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generar_personaje() {

    const listaPersonajes = [];

    if (document.getElementById('cb_per_profesiones').checked) {
        listaPersonajes.push(...per_profesiones);
    }

    if (document.getElementById('cb_per_animales').checked) {
        listaPersonajes.push(...per_animales);
    }

    if (document.getElementById('cb_per_creaturas').checked) {
        listaPersonajes.push(...per_creaturas);
    }

    personaje_generado = obtener_elemento_aleatorio(listaPersonajes);
    document.getElementById("mostrar_personaje").innerHTML = personaje_generado;
}