function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
if(typeof(fecha)=="string"){return false;}
  if (Date.parse(fecha)){return true;}else{return false;}
  
}

//ingrese fehca en el siguiente formato mm/dd/aaaa
//ingrese fehca en el siguiente formato aaaa/dd/mm

module.exports = esFechaValida;