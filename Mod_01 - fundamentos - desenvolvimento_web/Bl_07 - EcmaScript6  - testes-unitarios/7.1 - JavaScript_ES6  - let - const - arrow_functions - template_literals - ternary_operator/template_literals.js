//Template Strings / Template Literals:

//template literals é mais uma feature do ES6 que nos permite criar strings complexas de forma mais fácil.

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');

//Essa solução nada elegante é como fazíamos antes do ES6 introduzir uma nova forma de criar e manipular strings dinamicamente através de template literals.

myName = 'Isabella';
console.log(`Welcome ${myName}!`);

//A sintaxe do template literals pede para usarmos o sinal de crases no início e no final da frase, e variáveis dentro de um ${...}. Você também pode adicionar uma expressão dentro das chaves, como ${a + b}. Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha.

