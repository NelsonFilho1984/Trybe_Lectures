//Array.prototype.find():
//A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada.

//Atenção! A função que deverá ser passada precisa retornar um valor booleano, true ou false.

const numbers = [19, 21, 30, 3, 45, 22, 15];

//A função abaixo 'verifyEven', verifica se o número recebido é par. Se sim, seu retorno será true; caso contrário, seu retorno é false.
const verifyEven = number => number % 2 === 0;

//Quando passamos 'verifyEven' como callback, o find executará a função para cada um dos elementos do array e retornará o primeiro elemento quando o retorno da função for true.
const isEven = numbers.find(verifyEven);

console.log('função isEven:', isEven); // função isEven: 30

console.log('função verifyEven:', verifyEven(9)); // função verifyEven: false
console.log('função verifyEven:', verifyEven(22)); // função verifyEven: true

// Outra forma de ser realizada sem a necessidade de criar uma nova função:
const isEven2 = numbers.find((element) => element %2 === 0);
console.log('isEven2:', isEven2); //isEven2: 30

//Exercícios:
//1. Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

numbers = [19, 21, 30, 3, 45, 22, 15];

const divisible3N5 = numbers.find((element) => element % 2 === 0 && element % 3 === 0);
console.log('divisible3N5:', divisible3N5); // divisible3N5: 30

//2. Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const name5Letters = names.find((element) => {return element.length === 5});
console.log('name5Letters:', name5Letters); // name5Letters: Irene

//3. Utilize o 'find' para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((obj, index) => obj.id === id);
}
console.log(findMusic('31031686')); // { id: '31031686', title: 'Toccata and Fugue, BWV 565' }
console.log('id:', musicas[1].id); // id: 31031686
console.log('title:', musicas[1].title); // title: Toccata and Fugue, BWV 565