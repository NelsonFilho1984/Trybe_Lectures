//Exercícios:
/*
1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 10;
const b = 5;

console.log(`Adição: ${a} + ${b} = ${a+b}`);
console.log(`Subtração: ${a} - ${b} = ${a-b}`);
console.log(`Multiplicação: ${a} x ${b} = ${a*b}`);
console.log(`Divisão: ${a} : ${b} = ${a/b}`);
console.log(`Módulo: ${a} % ${b} = ${a%b}`); //Módulo ou resto da divisão inteira

/*
2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const num1 = 7;
const num2 = 13;

if(num1 > num2) {
  console.log(`${num1} é maior que ${num2}.`);
} else if (num1 < num2) {
  console.log(`${num1} é menor que ${num2}.`);
} else {
  console.log(`${num1} é igual a ${num2}.`);
}

/*
3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const numA = 207;
const numB = 89;
const numC = 420;

if(numA > numB && numA > numC) {
  console.log(`${numA} é maior que ${numB} e ${numC}.`);
} else if (numB > numA && numB > numC) {
  console.log(`${numB} é maior que ${numA} e ${numC}.`);
} else {
  console.log(`${numC} é maior que ${numA} e ${numB}.`);
}

/*
4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

const value = -1;

//Switch Case é limitado apenas valores descriminados -1 || 0 || +1, para outros valores ele cairá no 'default'.
switch (value) {
  case 1:
  console.log(`${value} é um número positivo.`);
  break;
  
  case 0:
  console.log(`${value} é zero.`);
  break;

  case 1:
  console.log(`${value} é um número negativo.`);  
  break;

  default:
  console.log(`${value} é um número inválido.`);
}

if(value == 0) {
  console.log(`${value} é zero.`);
} else if (value >= 1) {
  console.log(`${value} é um número positivo.`);
} else {
  console.log(`${value} é um número negativo.`);
}

/*
🚀 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

* Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const angleA = 60;
const angleB = 60;
const angleC = 60;
const angleSum = angleA + angleB + angleC;

if (angleA <= -1 || angleB <= -1 || angleC <= -1) {
  console.log('invalid');
} else if (angleSum < 180) {
  console.log(false);
} else {
  //angleSum == 180;
  console.log(true);
}

/*
6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

* Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

* Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

//rei - rainha - bispo - cavalo - torre - peão
const chessPiece = 'PEÃO';

switch (chessPiece.toLowerCase()) {
  case 'rei':
  console.log(`${chessPiece} --> 1 [] para qualquer direção.`);
  break;
  
  case 'rainha':
  console.log(`${chessPiece} --> quantos [] quiser para qualquer direção.`);
  break;

  case 'bispo':
  console.log(`${chessPiece} --> quantos [] quiser para as diagonais.`);
  break;

  case 'cavalo':
  console.log(`${chessPiece} --> move-se em 'L' e pode pular outra peça.`);
  break;

  case 'torre':
  console.log(`${chessPiece} --> quantos [] quiser para a horizontal ou vertical.`);
  break;

  case 'peão':
  console.log(`${chessPiece} --> até 2 [] apenas no primeiro turno, move-se apenas para frente, mas ataca na diagonal.`);
  break;

  default:
  console.log(`${chessPiece} --> não é uma peça de xadrez.`);
}

/*
7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

* Porcentagem >= 90 -> A
* Porcentagem >= 80 -> B
* Porcentagem >= 70 -> C
* Porcentagem >= 60 -> D
* Porcentagem >= 50 -> E
* Porcentagem < 50 -> F

* O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

//A sigla GPA significa, em inglês, “Grade Point Average”, ou algo como “média de pontos das notas” na tradução direta.

const gradeNum = 100;


if(gradeNum >= 90 && gradeNum <= 100) {
  console.log('A');
} else if (gradeNum >= 80 && gradeNum < 90) {
  console.log('B');
} else if (gradeNum >= 70 && gradeNum < 80) {
  console.log('C');
} else if (gradeNum >= 60 && gradeNum < 70) {
  console.log('D');
} else if (gradeNum >= 50 && gradeNum < 60) {
  console.log('E');
} else if (gradeNum >= 0 && gradeNum < 50) {
  console.log('F');
} else {
  console.log('Error');
}

/*
🚀 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

* Bonus: use somente um if.
*/

const n1 = 2;
const n2 = 3;
const n3 = 5;

if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

/*
9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

* Bonus: use somente um if.
*/

const num_1 = 2;
const num_2 = 3;
const num_3 = 6;


if (num_1 % 2 === 1 || num_2 % 2 === 1 || num_3 % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}

/*
Atenção! Relembrando Porcentagem:
---------------------------------

A primeira coisa que deve-se ter em mente é que a porcentagem nada mais é que: um número dividido por 100.

Na linguagem matemática, observe que:
* 50% é o mesmo que 50/100, ou 0,5;
* 30% é o mesmo que 30/100, ou 0,3;
* 70% é o mesmo que 70/100, ou 0,7;

Seguindo o mesmo raciocínio, basta multiplicar a fração pelo número total, i.e. 100%.

* Ex.1.: Quanto é 50% de 1000?

É 0,5 multiplicado por 1000 ---> 0,5 x 1000 = 500;

* Ex.2.: Quanto é 45% de 520, usando JS:

let porcentagem = 0.45 * 520 = 234;
|ou|
let porcentagem = 45 * 520/100 = 234;


* Fator de multiplicação:
O fator de multiplicação pode ser um aumento (incremento) ou uma redução (decremento) no valor de determinado produto.

Por exemplo, se o preço de uma camisa aumentou 10%, então seu fator de multiplicação é de 1 + taxa de acréscimo, sendo essa taxa de 0,1.

E.g. 0,1 + 1 = 1.1;

Dessa maneira, temos que seu fator de multiplicação é de 1,1.

Se a mesma camisa teve um desconto de 10%, então seu fator de multiplicação é de 1 – taxa de decréscimo, sendo essa taxa de 0,1.

E.g. 0.1 - 1 = 0,9;

Assim sendo, seu fator de multiplicação é de 0,9.

Confira, a seguir, as tabelas com fatores de multiplicação de acréscimo e decréscimo para melhor sanar eventuais dúvidas:

Acréscimo	 Fator de Multiplicação
10%................1.1
15%................1.15
18%................1.18
20%................1.2
63%................1.63
86%................1.86
100%...............2

Decréscimo	Fator de Multiplicação
10%................0.9
15%................0.85
18%................0.82
20%................0.8
63%................0.37
86%................0.14
100%...............0
*/

/*
10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

* Atente que, sobre o custo do produto, incide um imposto de 20%.

* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

* valorCustoTotal = valorCusto + impostoSobreOCusto

* lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

/*
Imposto:
I.e. um acréscimo de 20%

20/100 = 0.20

0.20 + 1 = 1.2 ---> valorCusto * 1.2 
*/

const valorCusto = 2.50; //insira um valor;
const valorVenda = 5.50; //insira um valor;

if(valorVenda >= 0 && valorCusto >= 0) {
  const lucro = (valorVenda - (valorCusto * 1.2)) * 1000;
  console.log(lucro);
} else {
  console.log(`valor de custo: ${valorCusto} ou valor de venda: ${valorVenda}, ambos valores não podem ser inferiores a zero.`);
}

/*
11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social):
 * Salário bruto até R$ 1.556,94: alíquota de 8%
 * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
 * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
 * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
 
IR (Imposto de Renda)
 * Até R$ 1.903,98: isento de imposto de renda
 * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
 * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
 * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
 * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
* O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

* Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

* Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

 * R$ 2.670,00: salário com INSS já deduzido;
 * 7.5%: alíquota de imposto de renda;
 * R$ 142,80 parcela a se deduzir do imposto.
 
Fazendo a conta, temos:
(7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

* Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

const grossSalary = 33000.00; //insira um valor do salário bruto;
let discountedINSS;
let aliquotIR;
let netSalary;

if (grossSalary < 1555.95) {
  discountedINSS = grossSalary * 0.92 //-8% ---> 0.08 - 1 ---> 0.92
  console.log(`INSS: alíquota de 8% = ${grossSalary * 0.08} R$.`); 
} else if (grossSalary < 2594.93) {
  discountedINSS = grossSalary * 0.91 //-9% ---> 0.09 - 1 ---> 0.91
  console.log(`INSS: alíquota de 9% = ${grossSalary * 0.09} R$.`); 
} else if (grossSalary < 5189.82) {
  discountedINSS = grossSalary * 0.89; //-11% ---> 0.11 - 1 ---> 0.89
  console.log(`INSS: alíquota de 11% = ${grossSalary * 0.11} R$.`); 
} else {
  discountedINSS = grossSalary - 570.88; //alíquota fixa
  console.log(`INSS: alíquota fixa de 570.88 R$.`); 
}

if(discountedINSS < 1903.99) {
  //isento
  aliquotIR = 0;
  console.log(`IR: isento.`);
} else if (discountedINSS < 2826.66) {
  //alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
  aliquotIR = discountedINSS * 0.075 - 142.80; //7.5% ---> 0.075
  console.log(`IR: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto.`); 
} else if (discountedINSS < 3751.06) {
  //alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
  aliquotIR = discountedINSS * 0.15 - 354.80; //-15% ---> 0.15
  console.log(`alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto.`);
} else if (discountedINSS < 4664.68) {
  //alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
  aliquotIR = discountedINSS * 0.255 - 636.13; //-22.5% ---> 0.255
  console.log(`IR: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto.`);
} else {
  //alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  aliquotIR = discountedINSS * 0.275 - 869.36; //-27.5% ---> 0.275
  console.log(`IR: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.`);
}

netSalary = discountedINSS -  aliquotIR; 

console.log(`O salário bruto é: ${grossSalary} R$, descontado o INSS: ${discountedINSS} R$,  a alíquota do IR: ${aliquotIR} R$ e o salário líquido: ${netSalary} R$.`);
