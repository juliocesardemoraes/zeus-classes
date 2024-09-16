// 1. Dado um array de objetos que representam pedidos em um restaurante, calcule
// o total de vendas.
let pedidos = [
  { id: 1, produto: "Pizza", quantidade: 2, precoUnitario: 40.0 },
  { id: 2, produto: "Hambúrguer", quantidade: 1, precoUnitario: 25.0 },
  { id: 3, produto: "Suco", quantidade: 3, precoUnitario: 8.0 },
  { id: 4, produto: "Sobremesa", quantidade: 2, precoUnitario: 15.0 },
];

console.log("EXERCÍCIO 1");
console.log("-----------");

// 2. Dado um array de objetos de alunos com suas notas,
// crie uma variável média, calcule a média geral das notas.
// e faça um console.log da média.
let alunos = [
  { nome: "João", nota: 8 },
  { nome: "Maria", nota: 7 },
  { nome: "Pedro", nota: 6 },
  { nome: "João", nota: 5 },
  { nome: "João2", nota: 1 },
  { nome: "João2", nota: 10 },
];

console.log("EXERCÍCIO 2");
console.log("-----------");

// 3. Implemente uma função para verificar as respostas de um quiz.
// Crie um array de resultadoRespostas para guardar as respostas corretas ou incorretas
// faça um log dos resultados
let quiz = [
  {
    pergunta: "Qual é a capital da França?",
    alternativas: { 1: "Paris", 2: "Londres", 3: "Berlim", 4: "Madrid" },
    respostaCorreta: 2,
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    alternativas: {
      1: "São Paulo",
      2: "Brasília",
      3: "Rio de Janeiro",
      4: "Salvador",
    },
    respostaCorreta: 2,
  },
];

let respostasAluno = [2, 2]; // Respostas fornecidas pelo aluno

console.log("EXERCÍCIO 3");
console.log("-----------");

// 4. Adicione uma nova propriedade `emEstoque` a cada um dos produtos abaixo.
// A propriedade emEstoque deve ser true caso a quantidade seja maior do que zero
// e false caso não seja faça um log dos produtos após essa adição
let produtos = [
  { id: 1, nome: "Notebook", quantidade: 10, preco: 3000.0 },
  { id: 2, nome: "Teclado", quantidade: 0, preco: 150.0 },
  { id: 3, nome: "Mouse", quantidade: 25, preco: 50.0 },
  { id: 4, nome: "Monitor", quantidade: 5, preco: 1200.0 },
];

console.log("EXERCÍCIO 4");
console.log("-----------");

// 5. Dado um array de objetos de funcionários, encontre o funcionário com o maior
// salário.
// faça um log do funcionário com o maior salário
let funcionarios = [
  { id: 1, nome: "Maria", cargo: "Desenvolvedora", salario: 8000 },
  { id: 2, nome: "Pedro", cargo: "Gerente", salario: 12000 },
  { id: 3, nome: "Ana", cargo: "Designer", salario: 7000 },
  { id: 4, nome: "Carlos", cargo: "Analista", salario: 9500 },
];

console.log("EXERCÍCIO 5");
console.log("-----------");

// 6. Dado um array de objetos representando livros em uma biblioteca, adicione uma
// nova propriedade `disponivel` e defina como `true` em todos os objetos.
let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", paginas: 256 },
  {
    id: 2,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96,
  },
  {
    id: 3,
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    paginas: 432,
  },
  {
    id: 4,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    paginas: 152,
  },
];

console.log("EXERCÍCIO 6");
console.log("-----------");
