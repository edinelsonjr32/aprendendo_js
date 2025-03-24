const estudante = {
    nome : 'Edinelson Junior',
    idade: 30,
    cpf: '01508999201',
    turma: 'javascript',
    bolsista: true,
    telefone: [
        '5593999989899',
        '5593999989891',
        '5593999989892',
    ],
    endereco : [{
        rua: 'Atalaia',
        numero: '120',
        complemento: 'apto 43',
        cidade: 'Óbidos',
        estado: 'Pará'
    },{
        rua: 'Atalaia',
        numero: '120',
        complemento: 'apto 43',
        cidade: 'Óbidos',
        estado: 'Pará'
    }]
}


estudante.endereco.push({
    rua: 'Teste 2',
    numero: '71',
    complemento: ''
})

//console.log(estudante);
//console.log(estudante.endereco);

const listaEnderecoComComplementos = estudante.endereco.filter((endereco)=> endereco.complemento)

console.log(listaEnderecoComComplementos);
