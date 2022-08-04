//NodeJS Assert:
//Trata-se de um módulo nativo do NodeJS, sendo uma ferramenta que testa expressões. Podemos entender o assert como sendo uma expressão booleana que será sempre 'true', a menos que haja uma falha.

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70