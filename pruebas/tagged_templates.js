let a = 2;
let b = 3;
function foo(texto, p1, p2, p3){
    console.log(texto, p1, p2, p3);
    return `La suma es: ${p1+p2}`;
}
let res = foo`La suma de ${a} y ${b} es ${a+b}`;
console.log(res);


function suma(...args){
    console.log("Número de argumentos:", args.length)
    let suma = 0;
    args.forEach(arg => suma+=arg);
    return suma;
}

console.log(suma(1,4,2,6,8,9,2,1,5,3,2))