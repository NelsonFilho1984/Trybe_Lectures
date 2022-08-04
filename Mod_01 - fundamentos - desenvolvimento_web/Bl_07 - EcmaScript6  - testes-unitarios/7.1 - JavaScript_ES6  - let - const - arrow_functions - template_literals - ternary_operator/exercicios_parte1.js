//Exercícios:
/*
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

🚀 1. Conforme o código acima, altere as variáveis para respeitarem o escopo em que foram declaradas:
  * Modifique a estrutura da função para que ela seja uma arrow function;
  * Modifique as variáveis para que respeitem o escopo onde estão declaradas;
  * Modifique as concatenações para template literals.
*/

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

/*
🚀 2. Crie uma função que retorne um array em ordem crescente.
Copie o código abaixo:

    const oddsAndEvens = [13, 3, 4, 10, 7, 2];

    // Seu código aqui.

    console.log(oddsAndEvens); // será necessário alterar essa linha 😉

 * Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;

 * Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.

     * Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

 * Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). 

Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

/*
----------------------------------------------------------------
        Entendendo o conceito do Método array.sort():
----------------------------------------------------------------

Se o parametro da função 'compare' é fornecido, o array será ordenado de acordo com o valor de retorno da função 'compare'.

Considerando que a e b são dois elementos sendo comparados, então:

>>> Se function compare (a, b) for menor que 0, ordena 'a' para um índice anterior a 'b', i.e. a vem primeiro.

>>> Se function compare(a, b) retornar 0, deixa 'a' e 'b' inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos.

* Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.

>>> Se function compare(a, b) é maior que 0, ordena 'b' para um índice anterior que 'a'.

* Atenção! a function compare(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos 'a' e 'b' como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.

function comparar(a, b) {
  if (a é menor que b em algum critério de ordenação) {
    return -1;
  }
  if (a é maior que b em algum critério de ordenação) {
    return 1;
  }
  // a deve ser igual a b
  return 0;
}
*/


const numbers = [74, 18, 10, 5, 84, 23, 105];

const compare = (a, b) => {
  //se o retorno da função for < 0 ... o 'a' virá primeiro;
  //se o retorno da função for = 0 ... nada será modificado;
  //se o retorno da função for > 0 ... o 'b' virá primeiro;

  return a - b;
}

numbers.sort(compare);

console.log(numbers);

//---------------------------------------------------------------



const oddsAndEvens = [13, 3, 4, 10, 7, 2];


const compareNumbers = (a, b) => a - b; 

oddsAndEvens.sort(compareNumbers);

console.log(oddsAndEvens);


/*
const crescentOrder = oddsAndEvens => {
  let order = 0;

  for (let element of oddsAndEvens) {
    if (element < order) {
      order = oddsAndEvens.push();
    }
  }
  return console.log(`Os números ${order} se encontram ordenados de forma crescente!`);
};
console.log(crescentOrder);
*/