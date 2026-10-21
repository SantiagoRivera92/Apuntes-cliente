const frase = "en un lugar de la mancha";

// Devuelve una string como la original pero sin espacios y en CamelCase
const f4 = (frase) => frase.split(" ")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .reduce((fraseFinal, palabra) => fraseFinal + palabra);

console.log(f4(frase));

// Devuelve la longitud media de las palabras de la frase
const f5 = (frase) => frase.split(" ")
    .map((palabra, _, array) => palabra.length/array.length)
    .reduce((prev, curr) => prev+curr);

console.log(f5(frase));

// Devuelve un array con la longitud de cada una de las palabras que contengan la letra "a"
const f6 = (frase) => frase.split(" ")
    .filter((n) => n.indexOf("a") != -1)
    .map((palabra) => palabra.length);

console.log(f6(frase));