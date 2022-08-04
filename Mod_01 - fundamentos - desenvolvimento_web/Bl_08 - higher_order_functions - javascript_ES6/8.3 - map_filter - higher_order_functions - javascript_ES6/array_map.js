//Array.prototype.map()

//A função '.map()' é, talvez, uma das mais poderosas (e complexas!) funções para manipulação e criação de arrays. Em conjunto com '.filter()', essas HOFs deixarão o código mais legível, conciso e expressivo.

//A função map possui a mesma estrutura das outras HOFs, o que muda é que retorna um array.

const persons = ['joicy', 'joel', 'ronald', 'ana', 'carol'];

const upper = persons.map((person => person.toUpperCase()));

console.log('Upper:', upper); // Upper: [ 'JOICY', 'JOEL', 'RONALD', 'ANA', 'CAROL' ]

// ------------------------------------------------------ //

const company = persons.map((element) => ({
  name: element,
  company: 'Nubank Fintech, S.A.'
}));
console.log('Empresa:', company);
/* 
Empresa: [
  { name: 'joicy', company: 'Nubank Fintech, S.A.' },
  { name: 'joel', company: 'Nubank Fintech, S.A.' },
  { name: 'ronald', company: 'Nubank Fintech, S.A.' },
  { name: 'ana', company: 'Nubank Fintech, S.A.' },
  { name: 'carol', company: 'Nubank Fintech, S.A.' }
]
*/

const empresa2 = persons.map((person) => {
  const registro = {};
  registro['nome'] = person;
  registro['empresa'] = 'PagSeguro, UOL Fintech S/A';
  return registro;
});
console.log('empresa2:', empresa2);
/* 
empresa2: [
  { nome: 'joicy', empresa: 'PagSeguro, UOL Fintech S/A' },
  { nome: 'joel', empresa: 'PagSeguro, UOL Fintech S/A' },
  { nome: 'ronald', empresa: 'PagSeguro, UOL Fintech S/A' },
  { nome: 'ana', empresa: 'PagSeguro, UOL Fintech S/A' },
  { nome: 'carol', empresa: 'PagSeguro, UOL Fintech S/A' }
]
*/

// ------------------------------------------------------ //


const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];
for (let index = 0; index < persons2.length; index += 1) {
  fullNames.push(`${persons2[index].firstName} ${persons2[index].lastName}`);
}
console.log('for_fullNames:', fullNames); // for_fullNames: [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

const fullNames2 = persons2.map((person) => `${person['firstName']} ${person['lastName']}`);
console.log('map_fullNames:', fullNames2); // map_fullNames: [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// ------------------------------------------------------ //

//Transforme todos os números em negativos e passá-los para um array novo:

const numbers = [1, 2, 3, 4, -5];

//Utilizando o método .map():
const negative = numbers.map((number) => {
  return number > 0 ? number * (-1) : number;
});

console.log('Array_negativo_map:', negative); // Array_negativo_map: [ -1, -2, -3, -4, -5 ]

//Utilizando o laço de iteração 'for':
let arrayNegativo = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    arrayNegativo.push(numbers[index] * (-1));
  } else {
    arrayNegativo.push(numbers[index]);
  }
}
console.log('Array_negativo_for:', arrayNegativo); //Array_negativo_for: [ -1, -2, -3, -4, -5 ]

// ------------------------------------------------------ //

//Outra forma de usar o .map é unir dois arrays, criando um novo:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

//Junte em apenas uma lista de objetos que fique dessa forma:
//const listProducts = [ { Arroz: 2.99 }, { 'Feijão': 3.99 }, { Alface: 1.5 }, { Tomate: 2 } ];

const fusion = (listProducts, listPrice) => listProducts.map((product, index) => ({[product] : listPrice[index]}));

console.log(fusion(products, prices)); //[ { Arroz: 2.99 }, { 'Feijão': 3.99 }, { Alface: 1.5 }, { Tomate: 2 } ]

// ------------------------------------------------------ //

//.map() x .forEach():
/* 
  * O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;

  * A forEach não tem tal restrição. Ela pode modificar o array original e não retorna nada por padrão - ela pode criar um array novo a partir de um antigo, pode simplesmente buscar por um elemento e retorná-lo, pode não retornar nada, enfim! Ela é genérica e pode fazer diversas coisas.
*/

const numeros = [1, 2, 3, 4, 5, 6];

//map
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

//forEach
const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

//Obs.: forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!

// ------------------------------------------------------ //

//Outras HOFs + .map():

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

//filter + map
function turno() {
  return estudantes.filter((estudante) => estudante.turno === 'Manhã').map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
}
console.log('Estudantes turno manhã:', turno());
/* 
Estudantes turno manhã: [
  'Jorge Silva',
  'Jorge Santos',
  'Maria Silveira',
  'Natalia Castro',
  'Wilson Martins'
]
*/

//laço for:
const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}
console.log(allNameStudents);
/* 
[
  'Jorge Silva',
  'Jorge Santos',
  'Maria Silveira',
  'Natalia Castro',
  'Wilson Martins'
]
*/

//Buscar um estudante pelo nome e retornar a situação dele em cada matéria: