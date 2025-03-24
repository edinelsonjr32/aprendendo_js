const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeNota(aluno){
    if (lista[0].includes(aluno)){
        const [alunos, medias] = lista
        //indexOf retorna o indice da ocorrencia da busca
        const indice = alunos.indexOf(aluno)
        console.log(medias[indice]);
        
    }else{
        console.log('Dado não encontrado');
    }
}

exibeNomeNota('João')
exibeNomeNota('Edinelson')