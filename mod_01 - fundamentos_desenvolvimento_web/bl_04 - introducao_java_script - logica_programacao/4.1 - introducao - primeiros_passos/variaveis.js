/*
Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
*/

const myName = "Nelson D'Vasconcelos";
const birthCity = "Fortaleza";
var birthYear = 1984;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);

birthCity = "Atlantida";
console.log(birthCity);//TypeError: Assignment to constant variable.
//Mensagem de erro vem em decorrência de não ser possível renomear uma variável 'const'(constante).
