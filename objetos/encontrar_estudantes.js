const estudantes = require('./estudantes.json')


//console.log(estudantes);

function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacao(estudantes, 'telefone', '9916828153')

console.log(estudanteEncontrado)
