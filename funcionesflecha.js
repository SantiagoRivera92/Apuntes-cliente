// Funciones flecha

const a = [1, 2, 3, 4];

// f1: multiplica cada elemento por 3 y se queda solo con los divisibles por 4
const f1 = (array) => array.map((n) => n * 3).filter((n) => n % 4 === 0);

// f2: muestra en consola los elementos que NO son divisibles por 2
const f2 = (array) => array.filter((n) => n % 2 !== 0).forEach((n) => console.log(n));

// f3: suma los elementos que están en una posición par (índices 0, 2, 4...)
const f3 = (array) => array.reduce((suma, n, i) => (i % 2 === 0 ? suma + n : suma), 0);

console.log("f1:", f1(a)); // [12]
console.log("f2:");
f2(a); // 1 y 3
console.log("f3:", f3(a)); // 1 + 3 = 4
