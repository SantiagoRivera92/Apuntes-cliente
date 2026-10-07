let array1 = []
let array2 = []

array1.push("Hola")
array1.push("Adiós")
array2.push("Hola2")
array2.push("Adiós2")

console.log("Array 1:", array1.join(" / "))
console.log("Array 2:", array2.join(" / "))

let array3 = array1.concat(array2)

console.log("Array 3:", array3.join(" / "))

array3.pop()

console.log("Array 3 después de un pop:", array3.join(" / "))

array3.shift()

console.log("Array 3 después de un shift:", array3.join(" / "))

array3.unshift("Hola3")
array3.unshift("Adiós3")

console.log("Array 3 después de dos unshift:", array3.join(" / "))

array3.reverse()

console.log("Array 3 después de un reverse:", array3.join(" / "))

array3.sort()

console.log("Array 3 después de un sort:", array3.join(" / "))

array3.push("Hola2")
array3.push("Hola2")

console.log("Array 3 después de un push:", array3.join(" / "))

console.log("Posición de 'Hola2' en el array3:", array3.indexOf("Hola2"))
console.log("Posición final de 'Hola2' en el array3:", array3.lastIndexOf("Hola2"))

let array4 = array3.slice(1, 4)

console.log("Array 4 (slice de array3):", array4.join(" / "))

console.log("Array 1 antes de un splice:", array1.join(" / "))

array1.splice(1, 1, "Cadena un poco larga", "Longitud media")

console.log("Array 1 después de un splice:", array1.join(" / "))

array1.sort((a, b) => a.length - b.length)

console.log("Array 1 después de un sort por longitud:", array1.join(" / "))

let array5 = [6, -2, 2, -7]

console.log(array5.sort(function (a,b){
    return a-b;
}));

let orden = ["manzana", "plátano", "melocotón"]

let arrayFrutas = [
    "plátano", "manzana", "melocotón", 
    "plátano", "manzana", "plátano", 
    "melocotón", "manzana", "plátano", 
    "manzana", "melocotón", "manzana",
]

console.log(
    arrayFrutas.sort(function (a,b){
        return orden.indexOf(a) - orden.indexOf(b)
    }).join("/")
)

console.log("Acceso mediante índices")
for (indiceFruta in orden) {
    console.log(arrayFrutas[indiceFruta])
}

console.log("Acceso mediante valor")
for (fruta of orden) {
    console.log(fruta)
}

orden = {
    "manzana": 1,
    "plátano": 2,
    "melocotón": 3
}

arrayFrutas = [
    "plátano", "manzana", "melocotón", 
    "plátano", "manzana", "plátano", 
    "melocotón", "manzana", "plátano", 
    "manzana", "melocotón", "manzana",
]

console.log(
    arrayFrutas.sort(function (a,b){
        return orden[a] - orden[b]
    }).join("/")
)


let objeto = {
    "atributo1": "valor1",
    "atributo2": "valor2",
    "atributo3": "valor3",
    "atributo4": "valor4",
}

for (let attr in objeto) {
    console.log(attr, ":", eval("objeto." + attr))
}


let a = "abracadabra";

let firstIndex = a.indexOf("br");
let lastIndex = a.lastIndexOf("br");

let b = a.substring(firstIndex, lastIndex);

console.log("Cadena original:", a);
console.log("Primer índice de 'ab':", firstIndex);
console.log("Último índice de 'ab':", lastIndex);
console.log("Subcadena entre el primer y último índice:", b);

console.log(a.split("a"))

console.log(a.split("a", 3).join("4"))