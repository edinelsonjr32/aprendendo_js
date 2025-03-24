const estudante = {
    nome : 'Edinelson Junior',
    idade: 30,
    cpf: '01508999201',
    turma: 'javascript'
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante]
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'idade'));
console.log(estudante['nome']);
console.log(estudante['idade']);
console.log(estudante.pet);

