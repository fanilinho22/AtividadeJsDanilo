function inverterValor(p){
    if (typeof p === 'boolean'){
        return !p
    } else if (typeof p === 'number'){
        return -p
    } else{
        return "O parâmetro passado não é do tipo boolean ou number, mas sim do tipo " +typeof p
    }
}

var valorBoolean = false
var resultBoolean = inverterValor(valorBoolean)
console.log(resultBoolean)

var valorNumber = 1
var resultNumber = inverterValor(valorBoolean)
console.log(resultNumber)

var valorTxt = "O jogo"
var resultTxt = inverterValor(valorTxt)
console.log(resultTxt)