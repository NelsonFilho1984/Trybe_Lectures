/*
    * Event.preventDefault():
    
    Previne que o comportamento padrão de um evento seja executado; cancelando um evento se for cancelável, sem parar a programação do mesmo.

    * Alguns exemplos de elementos e seus comportamentos:

    <a href="www.google.com" target="_blank" id="href">Google</a>

    Esse código gera um elemento clicável que redireciona o usuário para o buscador do Google. O atributo target="_blank" indica que o comportamento do elemento é abrir o link em outra aba do navegador.

    <input type="text" id="input-text"/>

    Esse código gera uma caixa de input de texto. O comportamento desse elemento é capturar o(s) caractere(s) digitado(s) pelo usuário e exibí-lo(s) dentro da caixa de texto, alterando o atributo "value" do input de acordo com o que é digitado.

    <input type="checkbox" id="input-checkbox" />

    Esse código gera um caixinha de input do tipo checkbox. O comportamento desse elemento é escutar o clique da pessoa usuária e marcar ou desmarcar a caixinha.
*/

//Exercício:

const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK =  document.querySelector("#href");


//1. Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

HREF_LINK.addEventListener('click', function(event){
  event.preventDefault();
});

//2. Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

INPUT_CHECKBOX.addEventListener('click', function(event){
  event.preventDefault();
});

//3. Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. (dica: para capturar a tecla digitada, utilize o event.key).

INPUT_TEXT.addEventListener('keypress', function(event) {
  const character = event.key;
  if (character != 'a') {
    event.preventDefault();
  }
});


