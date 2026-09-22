let numero1=1;       console.log(typeof numero1);
let numero2=1.03;    console.log(typeof numero2);
let booleano = true; console.log(typeof booleano);
let cadena="Hola";   console.log(typeof cadena);
let nulo=null;       console.log(typeof nulo);
                     console.log(nulo);
let indefinido;      console.log(typeof indefinido);
                     console.log(indefinido)
let objeto = {a:1};  console.log(typeof objeto);

let text = "Hola";
let number = 2;
let boolean = false;
let notDefined;

console.log(text.constructor.name) // String
console.log(number.constructor.name) // Number
console.log(boolean.constructor.name) // Boolean
console.log(notDefined.constructor.name) // ERROR, sólo funciona con variables definidas