var tablaA = [[1,2,3], [4,5,6], [7,8,9,10], ['A', 'B', 'C']];
console.log(tablaA.length);
console.log(tablaA[0].length);
tablaA[1][1] = 20;
console.log(tablaA[1][1]);

console.log("Recorrer la tabla con dos bucles for");
for (let i=0; i<tablaA.length; i++){
    for (let j=0; j<tablaA[i].length; j++){
        console.log(tablaA[i][j]);
    }
}

console.log("Recorrer la tabla con el método forEach")

tablaA.forEach(function (e, i){
    e.forEach(function(e, i){
        console.log(e);
    });
});

var tablaB = new Array(5);
tablaB.fill(['a', 'b', 'c']);
console.log('Tabla b')
tablaB.forEach(function(e, i){
    console.log(e.join(","));
});

let tablaBContenido = "";
tablaB.forEach(function(e, i){
    e.forEach(function(e2, j){
        tablaBContenido += e2
        if (j<e.length-1)
            tablaBContenido += ", "
    })
    if (i<tablaB.length - 1)
        tablaBContenido += "\n"
})
console.log(tablaBContenido);

var tablaC = Array.of([1,2,3], [3,4,5], [3,4,5,6,7]);
console.log("Tabla C")
tablaC.forEach(function(e,i){
    console.log(e.join(","))
});

var tablaD = Array(Array(3), Array(3));
console.log("Tabla D");
tablaD.forEach(function (e,i){
    console.log(e.join(","));
})

tablaD[0].fill(true);
tablaD[1].fill(false);

tablaD.forEach(function (e,i){
    console.log(e.join(","));
})