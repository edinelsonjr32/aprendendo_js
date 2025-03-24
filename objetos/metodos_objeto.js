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

const chavesObjeto = Object.keys(estudante);
const valoresObjetos = Object.values(estudante);

console.log(chavesObjeto);
console.log(valoresObjetos);

if (!chavesObjeto.includes("enderecos")) {
  console.error('Necessário ter um endereço cadastrado');
  
} 
