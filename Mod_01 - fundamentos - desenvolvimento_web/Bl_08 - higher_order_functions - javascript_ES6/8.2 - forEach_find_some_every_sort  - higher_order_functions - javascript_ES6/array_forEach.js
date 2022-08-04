//Array.prototype.forEach():
//o forEach percorre o array e executa a função passada para cada um dos seus valores.

//Atenção! O forEach não retorna nenhum valor.

//array_name.forEach((element, index, array) => {/>code});

//Exercícios:
//1. Use o método forEach chamando a callback showEmailList para apresentar os emails do array abaixo:

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((item) => {
  showEmailList(item);
});
// O email roberta@email.com esta cadastrado em nosso banco de dados!
// O email paulo@email.com esta cadastrado em nosso banco de dados!
// O email anaroberta@email.com esta cadastrado em nosso banco de dados!
// O email fabiano@email.com esta cadastrado em nosso banco de dados!

//2. Agora vamos usar o forEach, para realizar a tabuada do 2.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((item) => console.log(`2 x ${item} = ${item * 2}`));
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18

//3. ponha todos os nomes do array abaixo com letra MAIÚSCULAS:
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

//Outra resolução:
names.forEach((element) => {console.log('modo 2:', element.toUpperCase());});
// modo 2: BIANCA
// modo 2: CAMILA
// modo 2: FERNANDO
// modo 2: ANA ROBERTA

// ------------------------------------------------------- //
//Aliando conhecimentos de HTML, CSS, DOM e JS com HOFs:

//index.html
/*
<p>Para cada e-mail do array emailList, a função callback é executada.</p>
<button id="btn-filter">ForEach</button>
<div id="email-list"></div>
*/


//style.css
/*
#btn-filter {
  color: white;
  background-color: green;
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
}
*/


//script.js
/*
// Array contendo a lista de emails.
const emailList = [
  "isa@myemail.com",
  "lipe@myemail.com",
  "digo@myemail.com",
  "greg@myemail.com"
];

// Função callback que recebe o array emailList como parâmetro.
 const showEmailList = (list) => {
  const div = document.querySelector("#email-list");
  div.innerHTML = '';
// Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
  list.forEach((email) => {
    const p = document.createElement("p");
    p.innerHTML = `${email} : Enviado com sucesso!`;
    div.appendChild(p);
  });
}

const btnFilter = document.querySelector("#btn-filter");
btnFilter.addEventListener("click", () => showEmailList(emailList));
*/
