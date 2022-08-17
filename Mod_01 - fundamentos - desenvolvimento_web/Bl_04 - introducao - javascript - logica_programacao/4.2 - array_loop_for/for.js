
//Loop 'for':

function tabuada (num) {
  console.log(`***Tabuada de ${num}***`);

  for(let index = 1; index <= 10; index++) {
    console.log(`${num} x ${index} = ${num * index}`);
  }
}
console.log(tabuada(9));

//For + Array
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//Exercício:

//1. Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}
