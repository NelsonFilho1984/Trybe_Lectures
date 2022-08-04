//Spread Operator:
//o operador spread é um recurso do ES6 que nos permite espalhar os valores de um objeto iterável, como um array, em um novo objeto. Dessa forma, apenas copiamos as informações do array original e colamos em outro lugar.

//para adicionar itens a um array até agora utilizamos apenas o método .push, como no exemplo abaixo:

const numbers = [1, 2, 3];
numbers.push(4);

console.log(numbers); // [1, 2, 3, 4]

/*
Essa solução é válida, Mas... Onde foi parar o array original numbers? 

Observe que quando usamos o .push para adicionar algo a um array, ele será sobrescrito.

No simples exemplo acima, sobrescrever o array numbers não foi um problema. No entanto, em aplicações maiores em que você precisa atualizar alguma informação de um array ou objeto, você pode querer manter as informações originais e apenas criar uma cópia do array original com o que precisa ser alterado. Em cenários como esse, vamos deixar o .push de lado e usar um recurso incrível para adicionar valores a objetos iteráveis: o operador spread.

Você se lembra do Object.assign? Pois bem, ao utilizar o operador spread, você pode obter o mesmo resultado do Object.assign, porém de uma forma mais simples pois é possível utilizar uma sintaxe mais curta. E não para por aí! Você verá que o operador spread pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis e também em funções que recebem múltiplos argumentos.
*/

//Object.assign()
//O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log('target:', target); //target: { a: 1, b: 2 }

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//Spread Operator em Matrizes:
const carros = ['HB20', 'Corolla', 'Renegade'];
const motos = ['Shadow', 'Kansas', 'Ninja'];

const veículos = [...motos, ...carros];
console.log(veículos); //[ 'Shadow', 'Kansas', 'Ninja', 'HB20', 'Corolla', 'Renegade' ]

//Spread Operator em Objetos:
const knowledge = {
  hard_skills: true,
  soft_skills: true,
  work_experience: false
}

const person = {
  nome: 'Nelson',
  idade: 37,
  cidade: 'Fortaleza'
}

const general = {
  ...person,
  ...knowledge
} 
console.log(general);
/* 
{
  nome: 'Nelson',
  idade: 37,
  cidade: 'Fortaleza',
  hard_skills: true,
  soft_skills: true,
  work_experience: false
}
*/

const numbers2 = [1, 2, 3];

const newArray = [...numbers2, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]


const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);
/*
[
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
]
*/

//Spread como argumento de função:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

//Podemos aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min.

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5