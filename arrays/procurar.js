const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeNota(aluno){
    if (lista[0].includes(aluno)){
        //indexOf retorna o indice da ocorrencia da busca
        const indice = lista[0].indexOf(aluno)
        console.log(lista[1][indice]);
        
    }else{
        console.log('Dado não encontrado');
    }
}

exibeNomeNota('João')