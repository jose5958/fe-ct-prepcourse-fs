function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  let a=valor;
  if (a===null || typeof(a)==="undefined" ) { return true;}else{return false;}

}
let b=null;
console.log(esNuloOIndefinido(b));
module.exports = esNuloOIndefinido;