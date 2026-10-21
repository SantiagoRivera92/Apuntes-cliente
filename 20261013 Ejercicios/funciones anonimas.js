
let hello = function(nombre){
    return `Hola ${nombre}`;
}

console.log(hello("Pepe"));


function hola(foo, ...args){
    foo(args);
};

hola(function(){
    console.log("hola");
});

(function(){
    console.log("hola 2")
}());

function adios(nombre){
    console.log(`Adiós ${nombre}`);
}

hola(adios, "Laura");

function adios2(nombre){
    console.log(`Adiós ${nombre}`);
}

function hola2(foo, ...params){
    foo(params);
}

function salu2(params){
    console.log(params.join(" "));
}

hola2(adios2, "Laura");
hola2(salu2, "Saludos", "Laura,", "¿Qué", "tal", "estás?")


noNombrada = function(){
    console.log("Función no nombrada asignada a una variable")
}

noNombrada();


function f1(nombre, edad){
    console.log(`${nombre} - ${edad}`);
}

f1("Pepe");
f1("Pepe", 30, "Otro Dato");

function f2(nombre, edad){
    console.log(`${arguments[0]} - ${arguments[1]}`)
}

f2("Pepe");
f2("Pepe", 30, "Otro dato");

function f3(nombre="Paco", edad=20){
    console.log(`${nombre} - ${edad}`)
}

f3("Pepe");
f3("Pepe", 30);
f3();

function suma(){
    let resultado=0;
    for (arg of arguments){
        resultado+=arg;
    }
    return resultado;
}

console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


function suma2(...args){
    result = 0;
    for (a of args){
        result += a;
    }
    return result;
}

console.log(suma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));


function avg(...args){ 
    return suma2(...args)/args.length;
}

console.log(avg(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21))


function añadirApellido(nombre, ...apellidos){
    console.log("Argumentos: " + arguments.length);
    console.log("Apellidos: " + apellidos.length);
    let result=nombre;
    result+=" " + apellidos.join(" ");
    return result
}

console.log(añadirApellido("Pedro"));
console.log(añadirApellido("Luis", "Ruiz"))
console.log(añadirApellido("Ana", "Gil", "Sanz"))



let values = [1,2,3];
console.log(values);
let copy=[...values];
console.log(copy);
let morevalues = [4,5];
values.push(...morevalues);
console.log(values);
let other = [0, ...morevalues];
console.log(other);

let last = [0, ...values, ...morevalues, ...copy]
console.log(last);