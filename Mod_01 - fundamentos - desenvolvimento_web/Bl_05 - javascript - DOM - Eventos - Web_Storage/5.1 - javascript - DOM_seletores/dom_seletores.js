//.getElementById():

let divTeste = document.getElementById("teste_div");
divTeste.style.backgroundColor = "gray";
divTeste.style.color = "chartreuse";


document.getElementById("teste_p").innerText = "Como visto acima, podemos modificar dinamicamente configurações de HTML e/ou CSS através do JavaScript."

//.getElementsByClassName:

//alterar getElementByClassName:
document.getElementsByClassName("piloto-f1-atual")[1].innerText = "Lance Stroll";

//alterar todos os elementos da classe:
/*
let pilotoF1Atual = document.getElementsByClassName("piloto-f1-atual");

for (let index = 0; index < pilotoF1Atual.length; index +=1) {
  pilotoF1Atual[index].innerText = "Lewis Hamilton";
}
*/

//.getElementsByTagName():
document.getElementsByTagName("p");

//alterar elementos por Tag Name:
document.getElementsByTagName("span")[0].innerText = "Carlos Sainz";

//.querySelector():
let owner = document.querySelector("#owner").innerText;
console.log(owner); //Liberty Media

let pTag = document.querySelector("p");
console.log(pTag);

//para selecionar uma classe específica:
let titledRacers = document.querySelector(".pilotos-com-titulo p"); //selecionando por hereditariedade CSS
console.log(titledRacers.innerText); // 'Ayrton Senna' --> que é a primeira tag 'p' da lista

let atualSemTitulo = document.querySelector(".pilotos-sem-titulo .piloto-f1-atual");
console.log(atualSemTitulo.innerText); //Lando Norris

//.querySelectorAll():
const legend = document.querySelectorAll("p")[4].innerText = "Ayrton Senna [Lenda]";
console.log(legend);

//manipular listas:
console.log(document.querySelectorAll(".pilotos-sem-titulo .piloto-f1-atual").length); //6 








