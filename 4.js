function inverterValor(p){
    if (typeof p === 'boolean'){
        return !p
    } else if (typeof p === 'number'){
        return -p
    } else{
        return "Voce so pede digitar 1 boolean e 1 number" +typeof p
    }
}

var valorBoolean = false
var resultBoolean = inverterValor(valorBoolean)
console.log(resultBoolean)

var valorNumber = 1
var resultNumber = inverterValor(valorBoolean)
console.log(resultNumber)

var valorTxt = "texto foda"
var resultTxt = inverterValor(valorTxt)
console.log(resultTxt)
