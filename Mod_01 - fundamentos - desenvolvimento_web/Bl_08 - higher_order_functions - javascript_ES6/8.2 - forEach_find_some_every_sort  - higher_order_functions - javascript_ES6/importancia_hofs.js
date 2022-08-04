//Importância das HOFs:

//Exemplo .forEach():
//Imaginemos que temos um array de objetos. Cada objeto é um estudante com seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota acima de 60. Como podemos ver, o objeto abaixo está desatualizado e precisa ser atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, provavelmente escreveríamos algo assim, utilizando laços de iteração:

const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
    (student.grade >= 60) ? student.approved = 'Aprovado': student.approved = 'Recuperação';
  }
}
verifyGrades();
console.log(students);
/*
[
  { name: 'Maria', grade: 70, approved: 'Aprovado' },
  { name: 'José', grade: 56, approved: 'Recuperação' },
  { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  { name: 'Ana', grade: 81, approved: 'Aprovado' }
]
*/

//Utilizando a HOF .forEach():
//array_name.forEach((element, index, array) => {/> code});

const gradeVerifier = () => {
   students.forEach((element) => {
     element.grade >= 60 ? element.approved = "Aprovado!" : element.approved = "Reprovado :(";
  });
};
gradeVerifier();
console.log('grade_verifier:', students);

function gradeVerifier_mode2 () {
  students.forEach((elemento, index) => {
    students.grade > 60 ? students[index].approved = 'Aprovado!!!' : students[index].approved = 'Reprovado!!!'
  });
}
gradeVerifier_mode2();
console.log('gradeVerifier_mode2', students);

/*
As duas abordagens geram o mesmo resultado, mas qual a diferença?

Na solução usando for, você vai precisar se preocupar mais com os detalhes durante a implementação de sua lógica de execução e menos com a solução do problema que você deseja solucionar - você só quer atualizar uma propriedade de cada estudante, afinal. Você precisa:

  * Declarar uma variável para controlar a iteração pelo array;
  * Inicializar essa variável com zero, a primeira posição do array;
  * Controlar o ponto de parada, quando o fim do array foi alcançado (index < students.length);
  * Incrementar manualmente a variável de controle do loop a cada iteração (index += 1);
  * Usar indexação de arrays pra acessar cada elemento/estudante (students[index]);
  
Já utilizando o forEach(), Tudo o que você precisa fazer é chamar a função (forEach) no array e passar para ela a função que você criou.
*/

//Exemplo .find():
//Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

let divisible5 = [0];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    divisible5 = numbers[index];
    break;
  } else {
    divisible5 = 'Sem divisíveis por 5 neste array...';
  } 
}
console.log(divisible5); //50

//Utilizando a HOF .find():
//array_number.find((elemento, index, array) => {/>code});
const ifDivisible5 = numbers.find((item) => item % 5 === 0);
console.log(ifDivisible5); //50

//Além de muito mais concisa, a solução usando find é muito mais fácil de entender.

