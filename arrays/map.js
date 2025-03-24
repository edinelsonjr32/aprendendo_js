const notas = [10, 8.5, 5, 6.5, 8, 7.5]

//operador ternário
//map retorna com os resultados atualizados
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10: nota + 1)

console.log(notasAtualizadas);
