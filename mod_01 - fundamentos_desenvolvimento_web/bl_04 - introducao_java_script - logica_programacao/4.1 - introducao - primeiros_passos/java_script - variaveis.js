/*
Abra o seu VS Code e faça os exercícios a seguir.

Dica: Com o plugin 'code runner', você pode executar o seu código no VS Code com o atalho ctrl + alt + n. 

Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente!

Você saberia explicar por que recebemos uma mensagem de erro? 🤔

> Isto acontece dado a variável ser do tipo 'const' que impossibilida a mudança da variável.
*/ 

const myName = "Nelson D'Vasconcelos";
const birthCity = "Fortaleza - CE";
var birthYear = "1984";

birthYear = 2030;
birthCity = 'San Francisco - CA';

console.log(myName);
console.log(birthCity);
console.log(birthYear);