/*
Operadores Loǵicos:

Na linguagem JavaScript, temos três principais operadores lógicos: &&, || e o !. Podemos nos referir a eles como "AND", "OR" e "NOT", respectivamente.

Os operadores lógicos devolvem resultados booleanos; true || false.

*/

const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}


const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); //false


const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
/* 
Obs.: SEMPRE a comparação é feita em PARES e a ordem que a operação vai obedecer, será da ESQUERDA PARA A DIREITA;
I.e. primeiramente será comparado: cenouras && leite == true; depois, true && arroz == true; depois, true && feijão == true.
*/
console.log(listaDeCompras); //true

//Operador AND [&&]:
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/*
1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.

3. Implemente condicionais para que:
* Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

* Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".

* Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

* Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

* Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

Agora imprima a variável message fora das suas condições.
*/

const currentHour = 12; //recebe um número entre 4 e 24.
let message = "";

if(currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
console.log(message);

//Operador OR [||]:
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

/*
1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".

2. Implemente condicionais para que:

* Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".

* Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).
*/

let weekDay = "quarta-feira";

if(weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D"); 
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

//Operador NOT [!]:
console.log((2 + 2) === 4); //true

console.log(!(2 + 2) === 4); //false

//Ele pode inverter o valor booleano de um elemento, mas não estamos limitados apenas aos tipos primitivos booleanos:

//string:
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); //false

//number:
console.log(!42); //false

//Atenção!!! [0 == false]
console.log(!0); //true
// O número 0 tem o valor "false" no javascript. Logo, seu oposto é true.

//null: [null == false]
console.log(!null); //true

//undefined: [undefined == false]
console.log(!undefined); //true