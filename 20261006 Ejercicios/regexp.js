/**
 * Comprueba si el dato que le pasamos cumple con el patrón
 * que también le hemos pasado, además pinta por pantalla
 * el resultado booleano.
 * @param {String} titulo Nombre a mostrar cuando se pinta
 * @param {String} dato Dato a comprobar
 * @param {RegExp} expr Expresión regular que debe cumplirse.
 * @returns {Boolean} true si el dato cumple el patrón
 */
function comprobar(titulo, dato, expr) {
    const resultado = expr.test(dato);
    const p = document.createElement("p");
    p.textContent = titulo + " (" + dato + "): " + resultado;
    p.style.color = resultado ? "green" : "red";
    document.body.appendChild(p);
    return resultado;
}

/**
 * Solicita un dato con prompt() hasta que cumple la expresión regular.
 * Informa al usuario cuando el campo no cumple las especificaciones.
 */
function pedir(titulo, expr, ayuda, validacionExtra) {
    let dato;
    let valido;
    do {
        dato = prompt("Introduce " + titulo + ":");
        if (dato === null) dato = "";          // si pulsa Cancelar
        dato = dato.trim();
        valido = comprobar(titulo, dato, expr);
        if (valido && validacionExtra && !validacionExtra(dato)) {
            valido = false;
        }
        if (!valido) {
            alert("El campo " + titulo + " no cumple con las especificaciones:\n" + ayuda);
        }
    } while (!valido);
    return dato;
}

// ---------- Expresiones regulares ----------
const palabra = "[A-ZÁÉÍÓÚÑ][a-záéíóúüñ]+";
// Una o varias palabras, cada una con la primera letra en mayúscula, sin números ni símbolos
const exprNombre = new RegExp("^" + palabra + "(\\s" + palabra + ")*$");
const exprEdad = /^\d{1,3}$/;
// letras, números, guiones altos/bajos (y puntos separando partes) @ letras/números . 2 o 3 letras
const exprEmail = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
const exprTelefono = /^[69]\d{8}$/;
const exprCentro = /^.{5,120}$/;
const exprCurso = /^[12]$/;
const exprObservaciones = /^[A-Za-z0-9\u00C0-\u00FF\s.,;:¡!¿?'-]{1,120}$/;
// Año entre 1900 y 2099 (además se comprueba que no sea futuro)
const exprAnio = /^(19|20)\d{2}$/;

// ---------- Programa principal ----------
const nombre = pedir("nombre", exprNombre,
    "Sin números ni caracteres especiales y con la primera letra en mayúscula.");
const apellidos = pedir("apellidos", exprNombre,
    "Sin números ni caracteres especiales y cada apellido con la primera letra en mayúscula.");
const edad = pedir("edad", exprEdad,
    "Solo números, máximo 3 dígitos.");
const email = pedir("email", exprEmail,
    "Letras, números, guiones altos o bajos, una @ y un dominio con un solo punto y 2 o 3 letras al final.");
const telefono = pedir("teléfono", exprTelefono,
    "Debe empezar por 6 o 9 y tener 9 dígitos.");
const centro = pedir("centro", exprCentro,
    "Debe tener entre 5 y 120 caracteres.");
const curso = pedir("curso", exprCurso,
    "Un dígito: 1 o 2.");
const observaciones = pedir("observaciones", exprObservaciones,
    "Texto y/o números, máximo 120 caracteres.");
const anio = pedir("año de nacimiento", exprAnio,
    "Cuatro dígitos entre 1900 y el año actual.",
    (a) => Number(a) <= new Date().getFullYear());

// Resumen final
const resumen = document.createElement("pre");
resumen.textContent =
    "\n--- DATOS INTRODUCIDOS ---\n" +
    "Nombre: " + nombre + "\n" +
    "Apellidos: " + apellidos + "\n" +
    "Edad: " + edad + "\n" +
    "Email: " + email + "\n" +
    "Teléfono: " + telefono + "\n" +
    "Centro: " + centro + "\n" +
    "Curso: " + curso + "\n" +
    "Observaciones: " + observaciones + "\n" +
    "Año: " + anio;
document.body.appendChild(resumen);