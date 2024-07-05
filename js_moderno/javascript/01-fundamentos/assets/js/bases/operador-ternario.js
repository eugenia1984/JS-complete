console.warn('**** Operador ternario ****');
/**
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// entra al sitio web para consultar si está abierto
const day = 0; // 0 es domingo
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto / Esta cerrado / hoy abrimos a las X

// if (day === 0 || day === 6) {
if ([0, 6].includes(day)) {
  console.log("Fin de semana");
  horaApertura = 9;
} else {
  console.log("Día de semana");
  horaApertura = 11;
}

if (horaApertura >= horaActual) {
  mensaje = "Esta abierto";
} else {
  mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

// Si es sabado o domingo la hora de apertura es las 9, sino las 11
horaApertura = [0, 6].includes(day) ? 9 : 11;

mensaje =
  horaApertura >= horaActual
    ? "Esta abierto"
    : `Esta cerrado, hoy abrimos a las ${horaApertura}`;
