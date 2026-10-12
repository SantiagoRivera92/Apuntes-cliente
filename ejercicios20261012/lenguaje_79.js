// Tiempo transcurrido entre dos fechas

/**
 * Calcula el tiempo transcurrido entre dos fechas.
 * Devuelve años, meses, días, horas, minutos y segundos (diferencia de calendario),
 * además del total de días.
 */
function tiempoTranscurrido(fecha1, fecha2) {
    // Aseguramos que "desde" sea la fecha anterior
    var desde = fecha1 <= fecha2 ? new Date(fecha1) : new Date(fecha2);
    var hasta = fecha1 <= fecha2 ? new Date(fecha2) : new Date(fecha1);

    var anyos = hasta.getFullYear() - desde.getFullYear();
    var meses = hasta.getMonth() - desde.getMonth();
    var dias = hasta.getDate() - desde.getDate();
    var horas = hasta.getHours() - desde.getHours();
    var minutos = hasta.getMinutes() - desde.getMinutes();
    var segundos = hasta.getSeconds() - desde.getSeconds();

    // Ajustes "de acarreo" cuando alguna diferencia es negativa
    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        // Días del mes anterior a la fecha final
        var diasMesAnterior = new Date(hasta.getFullYear(), hasta.getMonth(), 0).getDate();
        dias += diasMesAnterior;
        meses--;
    }
    if (meses < 0) { meses += 12; anyos--; }

    var totalDias = Math.floor((hasta - desde) / (1000 * 60 * 60 * 24));

    return { anyos, meses, dias, horas, minutos, segundos, totalDias };
}

// --- Ejemplo de uso ---
var fechaInicio = new Date(2000, 0, 15, 8, 30, 0);   // 15/01/2000 08:30:00
var fechaFin = new Date();                           // ahora mismo

var t = tiempoTranscurrido(fechaInicio, fechaFin);

console.log("Desde: " + fechaInicio.toLocaleString("es-ES"));
console.log("Hasta: " + fechaFin.toLocaleString("es-ES"));
console.log(
    "Han pasado " + t.anyos + " años, " + t.meses + " meses, " + t.dias + " días, " +
    t.horas + " horas, " + t.minutos + " minutos y " + t.segundos + " segundos."
);
console.log("Total de días: " + t.totalDias);
