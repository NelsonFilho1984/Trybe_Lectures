//Object destructuring:

//Antes extraía-mos valores de um objeto em Javascript, como no exemplo abaixo:

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'iByte',
};

console.log(product.name); //Smart TV Crystal UHD
console.log(product['seller']); //iByte

//acessar os valores utilizando a notação de objeto, como console.log(product.name), e repetir para cada propriedade. Essa tarefa é repetitiva e verbosa...quando lidamos com objetos mais complexos, ela seria até mesmo impraticável.

// A padronização da linguagem ES6 introduz mais um recurso para otimizar atividades corriqueiras, como acessar os valores de um objeto, mais simples e com menos declarações. Essa feature é o que chamamos de desestruturação de objeto ou object destructuring.

//Desestruturação de objetos:
// E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product. A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:

product2 = {
  name2: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'iByte',
};

const {name2, seller} = product2;
console.log(name2, seller); // Smart TV Crystal UHD iByte

//Deste modo, conseguimos extrair o valor da propriedade que precisamos acessar com muito menos código, atribuindo este valor à variáveis. Vale lembrar também que podemos adicionar quantas propriedades forem necessárias dentro das chaves, basta seguirmos a sintaxe da desestruturação de objetos.

const character = {
  name3: 'Luke SkyWalker',
  age2: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

//Extraindo chaves do objeto contiver outro objeto como valor:
const{name3, age2, homeWorld:{name: planetName}, description: {jedi}} = character;

console.log(`Esse é o ${name3}, ele tem ${age2} anos, mora no planeta ${planetName} e por incrível que possa parecer, ele ${jedi ? 'é um jedi' : 'não é um jedi'}.`);

//Para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por ':', segue a sintaxe: homeWorld: { name: planetName }. Agora 'planetName' é uma variável que recebe o valor da propriedade 'name' do objeto 'homeWorld'.


const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

//Desestruturando 'daysOfWeek':
const {workDays, weekend} = daysOfWeek;

console.log(daysOfWeek);
/*
{
  workDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ],
  weekend: [ 'Saturday', 'Sunday' ]
}
*/

//Utilizando Spread após desestruturação:
//Atenção! Só é possivel utilizar o Spread depois da desestruturação;

const weekdays = [...workDays, ...weekend];
console.log(weekdays);
/*[
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]
*/

//Utilizando Spread após desestruturação:
//Obs.: sem necessidade de declarar uma nova varíavel.

console.log(...workDays, ...weekend);
//Monday Tuesday Wednesday Thursday Friday Saturday Sunday

//Outra feature interessante é que você poder reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável.

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

//Como podemos ver no exemplo supra citado, as propriedades do objeto 'student' não são nada descritivas. Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado... pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const {a: studentName, b: classAssigned, c: subject} = student; 

console.log(studentName); // Maria
console.log(classAssigned); //Turma B
console.log(subject); // Matematica
console.log(student); //{ a: 'Maria', b: 'Turma B', c: 'Matematica' }

// Acima informamos qual a propriedade que gostaríamos de acessar e redeclaramos em uma nova variável seguindo a sintaxe: { propriedade:nomeVariável } = objeto.

//Essa forma de acessar um valor de um objeto e atribuí-lo a uma variável é equivalente ao que temos abaixo:

student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name4 = student.a;
console.log(name4); // Maria

//Quando tentamos acessar um campo inexistente, o Javascript não vai conseguir fazer essa associação porque esse campo não existe e a variável receberá o valor undefined.

const turma = student.d;
console.log(turma); // undefined

//Atenção!!!
//Passando valores de um objeto como parâmetros para uma função:
const product2 = {
  productName: 'LG Smart Nanocell 4K',
  price: '2899.99',
  seller: 'iByte',
};
const printProductDetails = ({productName, price, seller}) => {
  console.log(`Não perca esta Promoção!!!
TV ${productName} por apenas ${price} é só na ${seller}!`);
};
printProductDetails(product2);

//Exercicios:
//1. Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
  name5: 'Maria',
  age3: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name5, age3, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

const userInfos = {...user, ...jobInfos};
console.log(userInfos);

//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic."

console.log(`Hi, my name is ${name5}, I'm ${age3} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);