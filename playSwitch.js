/**
 * Agrupar diversos casos para ejecutar una rama de código en concreto
 *
 * Dias de la semana, de lunes a viernes vengo a PIMEC, y el fin de semana descanso
 *
 * 1- Lunes
 * 2- Martes
 * 3- Miercoles
 * 4- Jueves
 * .... 7- Domingo
 */

let diaEncuentro = 8;

switch (diaEncuentro) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Venir a PIMEC");
    break;
  case 6:
  case 7:
    console.log("Descanso");
    break;
  default:
    console.log("No existe ese dia de la semana!");
}

