//Outros exemplos de uso do reduce:

//1. Compare o valor dos elementos do array, para buscar o maior valor no array abaixo:

//const numbers = [50, 85, -30, 3, 15];
/* 
let getBigger = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (getBigger < numbers[index]) {
    getBigger = numbers[index];
  }
}
console.log(`Maior: ${getBigger}`); // 85
*/

//numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => bigger > number ? bigger : number;

const bigger = numbers.reduce(getBigger, 0);
// caso o segundo parâmetro passado, o '0', no reduce, fosse modificado para '100' e executasse o programa. O retorno agora seria '100', já que nenhum número de dentro do array é maior que o valor inicial passado.

console.log(`Maior múmero: ${bigger}`);

/*
A função passada agora pode possuir dois tipos de retorno:
  * O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
  * O valor do elemento do array, number, que indica que possui um valor maior que bigger.
*/

//2. Utilize o 'reduce' fazendo uma função que some todos os números pares do array:


//Solução usando filter e reduce:
//numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;

const sumPairs = (accumulator, number) => accumulator + number; // accumulator += number

const amount = (array) => array.filter(getEven).reduce(sumPairs);

console.log(`Soma dos pares: ${amount(numbers)}`); // 152

//Solução usando apenas 'reduce':

numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getPairSum = (accumulator, number) => {
    return (number % 2 === 0) ? accumulator + number : accumulator;
}
const total = (array) => array.reduce(getPairSum); 

console.log(total(numbers)); // 152

//3. Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

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
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];


//Resultado Esperado:
[
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));







