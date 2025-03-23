const notaFinal = 6.99
const faltas = 5

const advertencia = 0

if (notaFinal < 7 && faltas > 4){
    console.log('Reprovado');
    
}else{
    console.log('Não foi reprovado');
}


if (faltas >= 2 && !advertencia){
    console.log('Recebeu bonus');
    
}else{
    console.log('Não Recebeu bonus');

}