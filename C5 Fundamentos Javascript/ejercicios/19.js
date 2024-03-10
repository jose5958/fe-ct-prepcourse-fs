function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
switch (true) {
  case num>0:
    return "Es positivo"
  break;
  case num<0:
    return "Es negativo"
  break;
  case num===0:
    return false
  break;
  
}

}
console.log(esPositivo(0));

module.exports = esPositivo;