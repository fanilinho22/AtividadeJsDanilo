function semOperador(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "Erro: Os números devem ser não negativos.";
    }

    var resultado = 0;
    for (var i = 0; i < num2; i++) {
        resultado += num1;
    }

    return resultado;
}
var num1 = 5;
var num2 = 3;
var resultado = semOperador(num1, num2);
console.log(resultado);