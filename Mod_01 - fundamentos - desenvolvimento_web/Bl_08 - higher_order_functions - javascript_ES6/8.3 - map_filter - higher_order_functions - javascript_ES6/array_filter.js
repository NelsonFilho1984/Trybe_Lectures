//Array.prototype.filter()
//O '.filter()' é bem parecido com o '.find()'. O que o filter traz de novo é que, em vez de retornar apenas um elemento do array, ele retornará outro array com todos os elementos que satisfaçam à condição verificada pela função. Assista a seguir o vídeo que explica como o método filter funciona.


const array = ['ana', 'pedro', 'giovanna'];

const teste_find = array.find((element) => element === 'giovanna');
console.log(teste_find); // giovanna

const teste_filter = array.filter((element) => element === 'giovanna');
console.log(teste_filter); // [ 'giovanna' ]

//  --------------------------------------------------- //

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

//  --------------------------------------------------- //

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));
// [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]
