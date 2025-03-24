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
}

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

//exibirTelefones(estudante.telefone[0], estudante.telefone[1])
exibirTelefones(...estudante.telefone)

const dadosEnvio = {
    destinatario:  estudante.nome,
    ...estudante.endereco[0]
} 
console.log(dadosEnvio);
