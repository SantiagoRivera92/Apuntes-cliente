var frase = "Esto es un texto para hacer ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto String.";

console.log(frase);

var palabras = frase.split(" ");
var palabrasAlReves = palabras.reverse();
var fraseAlReves = palabrasAlReves.join(" ");
console.log("=".repeat(16))
console.log("Frase al revés por palabras:")
console.log("=".repeat(16))
console.log(fraseAlReves);
var letras = frase.split("");
var letrasAlReves = letras.reverse();
var fraseAlReves2 = letrasAlReves.join("");
console.log("\n")
console.log("=".repeat(16))
console.log("Frase al revés por caracteres")
console.log("=".repeat(16))
console.log(fraseAlReves2);



// Obtener los días de la semana de mis siguientes 5 cumpleaños

console.log("\n")
console.log("=".repeat(16))
console.log("Mis siguientes 5 cumpleaños")
console.log("=".repeat(16))
for (var i = 0; i < 5; i++) {
    var date = new Date("2027-02-08");
    date.setFullYear(date.getFullYear() + i);
    var dia = date.getDay();
    switch (dia) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
    }
    console.log("Mi cumpleaños en " + date.getFullYear() + " cae en " + dia);
}


console.log("\n")
console.log("=".repeat(16))
console.log("Expresiones regulares")
console.log("=".repeat(16))

const textoRegexp = "Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado."

const LETRA = "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]";

const UNA_LETRA     = new RegExp(`^${LETRA}{1}$`);
const DOS_LETRAS    = new RegExp(`^${LETRA}{2}$`);
const TRES_LETRAS   = new RegExp(`^${LETRA}{3}$`);
const CUATRO_LETRAS = new RegExp(`^${LETRA}{4}$`);
const CINCO_LETRAS  = new RegExp(`^${LETRA}{5}$`);

const filtradas = textoRegexp
    .split(/\s+/) // separamos por espacio en blanco
    .map(p => p.replace(/[¿?.,;()¡!]/g, "")) // Quitamos los símbolos de puntuación ¿?.,;()¡!
    .filter(p => p.length > 0); // Quitamos las que tengan longitud cero

const unaLetra = [];
const dosLetras = [];
const tresLetras = [];
const cuatroLetras = [];
const cincoLetras = [];
const masDeCinco = [];

for (const palabra of filtradas) {
    if (UNA_LETRA.test(palabra)) 
        unaLetra.push(palabra);
    else if (DOS_LETRAS.test(palabra)) 
        dosLetras.push(palabra);
    else if (TRES_LETRAS.test(palabra)) 
        tresLetras.push(palabra);
    else if (CUATRO_LETRAS.test(palabra)) 
        cuatroLetras.push(palabra);
    else if (CINCO_LETRAS.test(palabra)) 
        cincoLetras.push(palabra);
    else
        masDeCinco.push(palabra);
}

console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de una letra:", unaLetra.length)
console.log("=".repeat(16))
console.log(unaLetra.join(", "))
console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de dos letras:", dosLetras.length)
console.log("=".repeat(16))
console.log(dosLetras.join(", "))
console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de tres letra:", tresLetras.length)
console.log("=".repeat(16))
console.log(tresLetras.join(", "))
console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de cuatro letras:", cuatroLetras.length)
console.log("=".repeat(16))
console.log(cuatroLetras.join(", "))
console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de cinco letra:", cincoLetras.length)
console.log("=".repeat(16))
console.log(cincoLetras.join(", "))
console.log("\n")
console.log("=".repeat(16))
console.log("Palabras de más letras:", masDeCinco.length)
console.log("=".repeat(16))
console.log(masDeCinco.join(", "))

