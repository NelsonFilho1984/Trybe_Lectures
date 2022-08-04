//Estrutura das HOFs em Arrays:

//Algumas Higher Order Functions são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura.

//Abaixo vemos uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
//console.log(arrayOfValues); //[ 'josé', 50, 0.25, { comida: 'Chocolate' } ]

const hof = arrayOfValues.forEach((element, index) =>  console.log(`elemento ${index}: ${element}`));
console.log(hof);

/*
Suas partes:
  * arrayOfValues - Nome do array que será percorrido;
  * .forEach - A HOF, pode ser, .find, .some, .every;
  * element - Valor do elemento do array;
  * index - Valor do índice do array;
  * (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade.
*/
