/*
Condicionais:

if --> se
else --> senão

se (condição) {
    //execute este código;

} senão se (outraCondição) {
    //execute este código;

} senão {
    //execute este código;
}

🚀 Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. 

1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

* Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!";

* Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera";

* Se a nota for menor que 60, imprima "Você foi reprovada(o)";

3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam;
*/

const nota = 100;

if(nota < 60) {
    console.log("Você foi reprovado(a)");
} else if (nota < 80) {
    console.log("Você está na nossa lista de espera");
} else {
    console.log("Parabéns, você foi aprovada(o)!");
}