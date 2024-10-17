//Josué Guerra
//Objetos
const film = {
    tittle: "Star Wars: La Guerra de los Clones",
    year: 2008,
    duration: "1h 38min",
    score: 5.9,
    production: {
        director: "Dave Filoni",
        script: ["George Lucas", "Henry Gilroy"],
        mainCast: ["Matt Lanter", "Ashley Eckstein", "James Arnold Taylor"]
    },
    mainActor(){
        return `El actor principal es ${this.production.mainCast[0]}`;
    }
}

const {tittle, year, duration, score, production} = film; //destructuración
console.log(`Titulo: ${tittle}
Año: ${year}
Duración: ${duration}
Puntuación: ${score}
Reparto Principal: ${production.mainCast}
`);

//Rest
const {tittle:titulo,year:año, ...detalles} = film;
console.log(detalles);

//Spread
const film2 = {
    ...film, //copia de film
    tittle: "Orgullo y Prejuicio",
    year: 2005
}
console.log(film2);

//Acceder al contenido
console.log(film.mainActor());

console.log("Obtener las claves:",Object.keys(film))
console.log("Obtener los valores:",Object.values(film))
console.log("Obtener las claves y valores en un array:",Object.entries(film))

//Abreviación de propiedades
const nombre = "Los Cazafantasmas";
const añoEstreno = 1984;

const movie = {
    nombre,
    añoEstreno
}
console.log(movie);

//Arreglos
const peliculas = [
    {
    nombre: "El Legado del Diablo", 
    añoEstreno: 2018, 
    duracion: "2h 7min"
    },
    {
    nombre: "Orgullo y Prejuicio", 
    añoEstreno: 2005, 
    duracion: "2h 9min"
    },
    {
    nombre: "Sueño de Fuga", 
    añoEstreno: 1994, 
    duracion: "2h 22min"
    }
]

//Uso de propiedades de arreglos

const peliculasBDD = peliculas.map(p => {
    return {
        nombre: p.nombre.toUpperCase(),
    }
})

console.log(peliculasBDD);

console.log("Número de elementos:", peliculas.length);
peliculas.length >= 2 ? console.log("Ver películas") : console.log("Solo hay una película");

//primera forma de iterar un arreglo 
console.log("\n Primera forma de iterar");

for(let i=0; i<peliculas.length; i++){
    console.log(`${i} - ${peliculas[i].nombre}`);
}

//segunda forma de iterar un arreglo
console.log("\n Segunda forma de iterar");
peliculas.forEach((p, i) => {
    console.log(`${i} - ${p.nombre}`);
})

//tercera forma de iterar un arreglo
console.log("\n Tercera forma de iterar");
const nuevaPelicula = peliculas.map((p, i) => {
    return `${i} - ${p.nombre}`;
})
console.log(nuevaPelicula);
console.log();

const peliculas2021 = ["Duna", "Cruella", "Viuda Negra"];

peliculas2021.push("Medicamentos") //Agregar elemento al final
peliculas2021.unshift("Adopciones") //Agregar elemento al inicio
console.log(peliculas2021)

peliculas2021.pop() //Elimina el último elemento
peliculas2021.shift() //Elimina el primer elemento 
console.log(peliculas2021)

//Encontrar elementos
const pelicula1 = peliculas2021.find(p => p === "Cruella");
console.log(pelicula1);

//filtrar elementos
const resultPeliculaFiltro = peliculas2021.filter(p => p.startsWith("V"));
console.log(resultPeliculaFiltro);
