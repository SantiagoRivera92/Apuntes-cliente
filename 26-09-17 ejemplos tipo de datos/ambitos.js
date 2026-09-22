let a1=1;          // Ámbito global
//...
console.log(a1);
{                  // Ámbito de bloque
    let a2=2;
    //...
    console.log(a2);
}
function f() {     // Ámbito de función
    let a3=3;
    console.log(a3);
    //...
    if (true){     // Ámbito de bloque
        let a4=4;
        console.log(a4);
        //...
    }
}
f();