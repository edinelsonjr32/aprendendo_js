const estudanteReprovou = function (notaFinal, faltas){
    if(notaFinal < 7 && faltas > 4){
        return true
    }else{
        return false
    }
}
//hoisting

console.log(estudanteReprovou(4, 5));
console.log(estudanteReprovou(8, 4));