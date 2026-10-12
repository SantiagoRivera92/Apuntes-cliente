// Ejercicio de expresiones regulares:
// A partir de una cadena CSV, almacenar los datos en un array bidimensional ordenado.
// Columnas: 0 Nombre | 1 DNI | 2 Teléfono | 3 Código postal | 4 Matrícula

var cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";

// Cada tipo de dato con su expresión regular y su columna
var patrones = [
    { columna: 0, regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/ }, // nombre (solo letras y espacios)
    { columna: 1, regex: /^\d{8}[A-Za-z]$/ },          // DNI: 8 dígitos + letra
    { columna: 2, regex: /^\d{9}$/ },                  // teléfono: 9 dígitos
    { columna: 3, regex: /^\d{5}$/ },                  // código postal: 5 dígitos
    { columna: 4, regex: /^\d{4}[A-Za-z]{3}$/ }        // matrícula: 4 dígitos + 3 letras
];

function ordenarCSV(cadena) {
    var datos = cadena.split(",");
    var tabla = [];
    var fila = null;

    datos.forEach(function (dato) {
        dato = dato.trim();

        // Buscamos qué patrón cumple el dato
        var patron = patrones.find(function (p) {
            return p.regex.test(dato);
        });

        if (!patron) return; // dato que no encaja con ningún formato: se descarta

        if (patron.columna === 0) {
            // Un nombre inicia una nueva fila
            fila = [dato, "", "", "", ""];
            tabla.push(fila);
        } else if (fila) {
            fila[patron.columna] = dato;
        }
    });

    return tabla;
}

var resultado = ordenarCSV(cadenaCSV);
console.table(resultado);
