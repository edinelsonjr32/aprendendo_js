const estudante = {
    nome : 'Edinelson Junior',
    idade: 30,
    cpf: '01508999201',
    turma: 'javascript'
}

//console.log(estudante.nome);

console.log(`O nome do estudante é: ${estudante.nome}`);
console.log(`A idade do ${estudante.nome} é : ${estudante.idade}`);
console.log(`O CPF do ${estudante.nome} é : ${estudante.cpf}`);
console.log(`A Turma do ${estudante.nome} é : ${estudante.turma}`);
console.log(`Os três primeiro digitos do CPF do ${estudante.nome} é : ${estudante.cpf.substring(0,3)}`);
