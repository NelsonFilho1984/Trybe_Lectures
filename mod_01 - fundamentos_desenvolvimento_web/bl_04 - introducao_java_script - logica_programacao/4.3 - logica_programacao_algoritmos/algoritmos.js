//Algoritmo:

/*
A resolução do problema acontece em 3 etapas:
 * Interpretação;
 * Criação do algoritmo;
 * Codificação do algoritmo.
 
Existe também, no processo de criação de um algoritmo, um conceito muito importante chamado 'baby steps' ou "passos de bebê".
*/

/*
Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":z
*/

/*
Analisando o enunciado, sabemos que:
 * devemos utilizar o array fruits;
 * o termo "percorra" indica uma estrutura de repetição, ou loop;
 * "somando todos os valores" mostra que devemos ter uma variável que guarda o valor da soma dos valores;
 * o termo "caso" indica uma estrutura condicional, ou if;
 * "imprima o valor final" indica um console.log;
 
Pode parecer um pouco bobo, mas em enunciados complexos, analisar friamente o enunciado nos afasta de cometermos erros e termos que escrever todo os passos seguintes novamente.

Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps. Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.

 * Adicionar o array;
 * Criar uma variável com valor 0;
 * Criar um loop que percorre o array;
 * Incrementar a variável com o valor correspondente a cada loop;
 * Criar um if com a condição da variável ser maior que 15;
 * Caso a variável obedeça a condição;
    > Imprimir a variável
 * Caso não obedeça a condição;
    > Imprimir a mensagem "valor menor que 16";

No momento já interpretamos o problema e já criamos um algoritmo, baseado nos 'baby steps', para ele. Como última etapa, vamos codificá-lo, seguindo nosso algoritmo:
Adicionar o array;
*/

let fruits = [3, 4, 10, 1, 12];

let sumFruits = 0;
for (let index = 0; index < fruits.length; index += 1) {
  sumFruits += fruits[index];
}
if(sumFruits > 15) {
  console.log(`soma do array: ${sumFruits}.`);
} else {
  console.log(`valor menor que 16 :z` );
}