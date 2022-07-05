//Exercícios:

//Objetos e For/In:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Usando o objeto acima, faça os exercícios a seguir:

//1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome:

console.log("Bem vinda, " + info['personagem']);

//🚀 2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console:

info['recorrente'] = 'Sim';
console.log(info);

//3. Faça um for/in que mostre todas as chaves do objeto: 
for (let keys in info) {
  console.log(keys);
}

//4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto:
for (let keys in  info) {
  console.log(info[keys]);
}

//5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
  personagem: 'tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:  'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let key in info) {
  if (key === 'recorrente' && info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim') {
    console.log('Ambos recorrentes');
  }
  if (info[key] !== info2[key]) {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}

/*
//Outro modo:

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
*/

//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//🚀 6. Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}"`);

/*
🚀 7. Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
*/

leitor['livrosFavoritos'][1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco'
};

console.log(leitor);

/*
//outro modo:

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);
*/

//🚀 8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

//Bracket Notation:
console.log(`${leitor['nome']} tem ${leitor['livrosFavoritos'].length} livros favoritos.`);

//Dot Notation:
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);