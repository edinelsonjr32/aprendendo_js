const notas = [10, 8.5, 5, 6.5, 8, 7.5]


let somaNotas = 0;
for (let nota of notas){
    somaNotas += nota
}
const media = somaNotas / notas.length

console.log(`A media das notas é: ${media}`);
