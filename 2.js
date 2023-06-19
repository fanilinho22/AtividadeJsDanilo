function maiorOuIgual(n1, n2){
    if(n1>n2){
        return "Primeiro numero maior que o ultimo";
    }else if(n1==n2){
        return "Ambos sao iguais"
    }else{
        return "Primeiro numero menor que o ultimo"
    }
}


console.log(maiorOuIgual(3, 3));
