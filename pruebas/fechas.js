let date1 = new Date();                             // Fecha actual
let date2 = new Date(1790663158031);                // 8:25:58 del 29 de septiembre de 2026
let date3 = new Date("2026-09-29T08:26:00Z");       // Por timezones, las 10:26 del 29 de septiembre de 2026
let date4 = new Date(2026, 8, 29, 8, 26, 0, 0);     // 8:26:00 del 29 de septiembre de 2026
let date5 = new Date(Date.now());                   // Equivalente a new Date()
let date6 = new Date(Date.parse("2026-02-08"));     // 8 de febrero de 2026

// Helper para imprimir los títulos
function logTitulo(text, depth){
    console.log("")
    if (depth == 0){
        console.log("========", text, "========")
    } else {
        console.log(" ".repeat(depth-1), "========", text, "========")
    }
    console.log("")
}

// Helper para imprimir los datos de una fecha
function logInfoFecha(date, title){
    logTitulo(title, 2);
    console.log("    Full year:", date.getFullYear());
    console.log("    Month:    ", date.getMonth());
    console.log("    Date:     ", date.getDate());
    console.log("    Day:      ", date.getDay());
    console.log("    Hours:    ", date.getHours());
    console.log("    Minutes:  ", date.getMinutes());
    console.log("    Seconds:  ", date.getSeconds());
    console.log("    Millis:   ", date.getMilliseconds());
    console.log("    Time:     ", date.getTime());
}

logTitulo("VALORES DE LAS FECHAS", 0)

console.log("  date1 =", date1);
console.log("  date2 =", date2);
console.log("  date3 =", date3);
console.log("  date4 =", date4);
console.log("  date5 =", date5);
console.log("  date6 =", date6);

logTitulo("DIFERENCIAS EN SEGUNDOS", 0);

logTitulo("DATE1", 2);

console.log("    date1 - date2", (date1 - date2)/1000);
console.log("    date1 - date3", (date1 - date3)/1000);
console.log("    date1 - date4", (date1 - date4)/1000);
console.log("    date1 - date5", (date1 - date5)/1000);
console.log("    date1 - date6", (date1 - date6)/1000);

logTitulo("DATE2", 2)

console.log("    date2 - date1", (date2 - date1)/1000);
console.log("    date2 - date3", (date2 - date3)/1000);
console.log("    date2 - date4", (date2 - date4)/1000);
console.log("    date2 - date5", (date2 - date5)/1000);
console.log("    date2 - date6", (date2 - date6)/1000);

logTitulo("DATE3", 2)

console.log("    date3 - date1", (date3 - date1)/1000);
console.log("    date3 - date2", (date3 - date2)/1000);
console.log("    date3 - date4", (date3 - date4)/1000);
console.log("    date3 - date5", (date3 - date5)/1000);
console.log("    date3 - date6", (date3 - date6)/1000);

logTitulo("DATE4", 2)

console.log("    date4 - date1", (date4 - date1)/1000);
console.log("    date4 - date2", (date4 - date2)/1000);
console.log("    date4 - date3", (date4 - date3)/1000);
console.log("    date4 - date5", (date4 - date5)/1000);
console.log("    date4 - date6", (date4 - date6)/1000);

logTitulo("DATE5", 2)

console.log("    date5 - date1", (date5 - date1)/1000);
console.log("    date5 - date2", (date5 - date2)/1000);
console.log("    date5 - date3", (date5 - date3)/1000);
console.log("    date5 - date4", (date5 - date4)/1000);
console.log("    date5 - date6", (date5 - date6)/1000);

logTitulo("DATE6", 2)

console.log("    date6 - date1", (date6 - date1)/1000);
console.log("    date6 - date2", (date6 - date2)/1000);
console.log("    date6 - date3", (date6 - date3)/1000);
console.log("    date6 - date4", (date6 - date4)/1000);
console.log("    date6 - date5", (date6 - date5)/1000);

logTitulo("DATOS FECHAS", 0)

logInfoFecha(date1, "DATE1");
logInfoFecha(date2, "DATE2");
logInfoFecha(date3, "DATE3");
logInfoFecha(date4, "DATE4");
logInfoFecha(date5, "DATE5");
logInfoFecha(date6, "DATE6");

let date7 = date6;
date7.setFullYear(2025)
date7.setMonth(6)
date7.setDate(28)
date7.setHours(12);
date7.setMinutes(30);
date7.setSeconds(40);
date7.setMilliseconds(950);

logInfoFecha(date7, "DATE7");

