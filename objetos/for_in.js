const estudante = {
  nome: "Edinelson Junior",
  idade: 30,
  cpf: "01508999201",
  turma: "javascript",
  bolsista: true,
  telefone: ["5593999989899", "5593999989891", "5593999989892"],
  endereco: [
    {
      rua: "Atalaia",
      numero: "120",
      complemento: "apto 43",
      cidade: "Óbidos",
      estado: "Pará",
    },
    {
      rua: "Atalaia",
      numero: "120",
      complemento: "apto 43",
      cidade: "Óbidos",
      estado: "Pará",
    },
  ],
};

for (let chave in estudante) {
  const tipo = typeof estudante[chave];

  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`;
    console.log(texto);
  }else{
    console.log(estudante[chave]);
    
  }
}
