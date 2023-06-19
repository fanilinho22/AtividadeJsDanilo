function segundoMaior(array) {
  if (array.length < 2) {
    return "Precisa de minimo dois numeros";
  }
  
  var max1 = -Infinity;
  var max2 = -Infinity;
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2 && array[i] < max1) {
      max2 = array[i];
    }
  }
  
  if (max2 === -Infinity) {
    return "Nao existe o segundo maior valor da array";
  } else {
    return max2;
  }
}
var n1 = [1, 2, 3, 4, 5];
var segMaior1 = segundoMaior(n1);
console.log(segMaior1); 

var n2 = [10, 5, 20, 30, 15];
var segMaior2 = segundoMaior(n2);
console.log(segMaior2); 
