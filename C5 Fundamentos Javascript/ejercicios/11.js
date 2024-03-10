function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  b=new Date(Date.now());
  b.setHours(0);
  b.setMinutes(0);
  b.setSeconds(0);
  b.setMilliseconds(0);
  b.setYear(b.getFullYear()-18);

return Boolean(Math.floor(Date.parse(b)/Date.parse(fechaNacimiento)));



}
let a="03/11/2006";
console.log(esMayorDeEdad(a));

module.exports = esMayorDeEdad;