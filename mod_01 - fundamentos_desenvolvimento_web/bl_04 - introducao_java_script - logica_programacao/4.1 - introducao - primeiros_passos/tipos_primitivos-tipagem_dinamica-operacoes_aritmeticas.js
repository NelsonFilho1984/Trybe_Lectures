//Tipos Primitivos:

let movie = "Back to the Future"; //string literal 
let gigawatts = 1.21; //number literal
let isValid = true; //boolean
let futuro; //undefined
let color = null; //nulo - redefinição de valor

//Tipagem Dinâmica:

var dinamica = false;
console.log(typeof(dinamica)); //boolean

var dinamica = 'hoverboard';
console.log(typeof(dinamica)); //string

var dinamica = 88;
console.log(typeof(dinamica)); //number

//Mão na Massa:
var patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof(patientAge)); //undefined pois não existe esta variável declarada

console.log(typeof(patientId)); //number
var patientId = '50';
console.log(typeof(patientId)); //string

/*
🚀 Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los?

Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators se tiver dúvidas.

Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.

1. Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
*/

const base = 5; 
var height = 8;

const area = base * height;
console.log(area);


let baseRetangulo = 10;
let alturaRetangulo = 5;
let perimeter = 2 * (baseRetangulo + alturaRetangulo);

console.log(perimeter);