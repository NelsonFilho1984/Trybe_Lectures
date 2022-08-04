//TDD - Test Driven Development:

//TDD significa em uma tradução livre Desenvolvimento Orientado por Testes, e trata-se de uma prática de desenvolvimento de software onde a codificação das funcionalidades começa a partir da escrita de testes unitários.

//Basicamente o TDD se baseia em pequenos ciclos de repetições, onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda não temos a implementação da funcionalidade em questão e, em seguida, implementamos a funcionalidade para fazer o teste passar!

//  ----------------------------------------------------------------    //

/*
Utilizando o método TDD, Implemente uma função 'summationOf(number)' que recebe um número inteiro e retorna o seu [somatório]:

* Por exemplo:
  * summation0f(1)`retorna 1: soma de 1 até 1 = 1;
  * summationOf(3)`retorna 6: soma de 1 até 3 = 1 + 2 + 3 = 6;
  * summationOf(5)`retorna 15: soma de 1 até 5 = 1 + 2 + 3 + 4 + 5 = 15;
*/

describe('A função summationOf, "somatória de", verifica:', (num) => {
  test('expects that summationOf exists', () => {
    expect(typeof summationOf).toBe('function');
  });
});

