const ingredients = [
  '1 xícara de farinha de trigo;',
  '¼ xícara de cacau 100% em pó;',
  '1 xícara de açúcar;',
  '⅓ xícara de óleo;',
  '1 xícara de leite vegetal (coco, amendoim, aveia, arroz, soja, amêndoas, etc) ou suco de laranja;',
  '2 colheres de chá de fermento;',
  '¼ colher de chá de sal.'
];

const recipe = [
  'Pré-aqueça o forno a 180°C;',
  'Unte uma forma com óleo e cacau em pó;',
  'Em seguida, em uma vasilha, peneire os secos e misture;',
  'Adicione os líquidos e mexa devagar até misturar todos os ingredientes;',
  'Leve para assar por 25-35 minutos ou até passar no teste do palito.'
]

/*
>>> Perguntas-chave:
Onde quero adicionar o elemento?
Como criar um elemento HTML/JS?
Como Adicionar Classes a um elemento?
Como Adicionar o elemento ao arquivo HTML?
*/

//1. recuperar o elemento <ul> class="ingredient-list":
const ingredientList = document.querySelector('.ingredient-list');

//2. criar o item:
for (let element of ingredients) { 
  //criar laço para percorrer todos os itens da lista:
  let ingredient = element; 
  console.log(ingredient);

  //criar lista com a função .createElement():
  let ingredientListItem = document.createElement('li');

  //adicionar a lista vazia os itens:
  ingredientListItem.textContent = ingredient;

//3. Adicionar elemento (como elemento filho):
ingredientList.appendChild(ingredientListItem);
}


//adicionar os passos da receita:
let recipePreparation = document.querySelector('.recipe-preparation');

for(let step of recipe) {
  let recipeStep = step;
  
  let recipeStepList = document.createElement('li');

  recipeStepList.textContent = recipeStep;

  recipePreparation.appendChild(recipeStepList);
}




