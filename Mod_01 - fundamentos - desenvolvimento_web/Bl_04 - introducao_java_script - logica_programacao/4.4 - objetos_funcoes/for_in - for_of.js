//For in: (foco no: índice / Chave / Propriedade)
/*
O for/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades, ou seja, nos retorna o índice.
*/

//Iteração com array:
let cars = ['Toyota', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(index);
}
//0
//1
//2
/*
As propriedades dos elementos do array serão os índices de cada posição, começando por zero.
É por isso que os números retornados pelo console.log são 0, 1 e 2: as propriedades que correspondem ao índice de cada posição do array.

Se percorrermos um objeto, também teremos o mesmo resultado.
O for/in irá percorrer a propriedade declarada, e não o seu valor em si.
*/

//Iteração com object:
let pizzas = {
  sabor: "Palmito",
  preco: 39.90,
  bordaCatupiry: true
};

for (let keys in pizzas) {
  console.log(pizzas[keys]);
} 
//Palmito
//39.9
//true

for(let key in pizzas) {
  console.log(key, pizzas[key]);
};
//sabor Palmito
//preco 39.9
//bordaCatupiry true

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];

for(let keys in pizzasDoces) {
  console.log(keys, pizzasDoces[keys]);
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
//0 Chocolate
//1 Banana
//2 Morango


for (let index in car) {
  console.log(index, car[index]);
};
//type Fiat
//model 500
//color white


//For of: (foco no: Elemento / Valor / Tipo)
/*
O for/of tem uma aplicação bastante parecida com o que vimos agora no for/in, mas com uma diferença crucial.

O for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in.
*/

let food = ['hamburguer', 'bife', 'acarajé'];

for (let x in food) {
  console.log(x);
}
//0
//1
//2
//O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

for (let x of food) {
  console.log(x);
}
//hamburguer
//bife
//acarajé
//Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores.

//Exercícios:

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

//1. Usando o objeto acima, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

for (let key in names) {
  console.log(`Olá, ${names[key]}!`);
}

//2. Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let carA3 = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in carA3) {
  console.log(key, carA3[key]); //Object[Property]
}