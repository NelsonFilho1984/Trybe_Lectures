//testa função de soma:
/* 
const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});
*/
//Importa a função a ser testada:
const sum = require('./jest_test');

// sintaxe padrão:
//test('descrição do teste', () => {}); ou
//it('descrição do teste', () => {});

describe('A função sum, "soma", verifica:',(a,b) => {
  test('se a soma de 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('se a soma de 5.1 + 6.55 = 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
    //Para igualdade de ponto flutuante, use o matcher .toBeCloseTo() em vez de .toEqual() ou .toBe(), porque você não quer um teste dependa de um pequeno erro de arredondamento.
  });
});

