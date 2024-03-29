//API - Application Programming Interface:

/* 
Como utilizar APIs na minha aplicação?

APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. 

Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
Encontre uma API pública, que seja bem documentada e mantida;
Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
Entenda o formato dos dados disponíveis;
Faça requests e receba responses da API com os dados que você deseja receber.
*/

const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

/* 
Nesse script, utilizamos o JSON.parse() para analisar nosso json (nesse caso, uma string) e converter em um formato compatível com o JavaScript.

Assim, temos mais poder sobre as informações e podemos manipular elas para, por exemplo, adicionar elas ao DOM.
*/

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});
