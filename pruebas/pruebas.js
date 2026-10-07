let tabla4 = ["Santi", 2, "", true, ["a", "b", ["c", "d"]]];

function procesarObjeto(objeto, indentacion = 2) {
  if (typeof objeto === "object") {
    console.log("  ".repeat(indentacion) + "Encontrado un array")
    for (let i = 0; i < objeto.length; i++) {
      procesarObjeto(objeto[i], indentacion + 2)
    }
  } else if (typeof objeto === "string" && objeto.length === 0) {
    console.log("  ".repeat(indentacion) + "objeto = Cadena vacía")
  } else {
    console.log("  ".repeat(indentacion) + "objeto =", objeto)
  }
}


for (let i = 0; i < tabla4.length; i++) {
  console.log("Fila", i)
  procesarObjeto(tabla4[i])
}