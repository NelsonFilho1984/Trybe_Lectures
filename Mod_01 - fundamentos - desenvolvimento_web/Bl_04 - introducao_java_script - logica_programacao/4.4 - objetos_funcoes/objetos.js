//Objetos:
/*
Um objeto em JavaScript é uma entidade independente, com propriedades e tipos.
Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto.

chave: valor;
propriedade: tipo;
*/

let iconMPB = {
  name: "Antônio Carlos",
  LastName: "Belchior",
  nickname: "Belchior",
  activityBegin: 1965,
  activityClose: 2008,
  bestAlbuns: ['Alucinação (1976)', 'Coração Selvagem (1977)', 'Elogio da Loucura (1988)']
}

/*
Como acessar os valores do objeto?

* Dot Notation:
Mais utilizada para acessar ou atualizar o valor de uma propriedade.
object.property

* Bracket Notation:
Mais utilizada para criar novas propriedades de forma dinâmica.
object['property']
*/

//Dot Notation:
console.log('O cantor ' + iconMPB.nickname + ' iniciou suas atividades em: ' + iconMPB.activityBegin);

//Bracket Notation:
console.log('O cantor ' + iconMPB['nickname'] + ' encerrou suas atividades em: ' + iconMPB['activityClose']);

//Criar Propriedades Externas:
iconMPB['fullName'] = iconMPB.name + ' ' + iconMPB.LastName;

console.log(iconMPB);
console.table(iconMPB);

//Adicionar outro objeto dentro de um objeto:
iconMPB = {
  name: "Antônio Carlos",
  LastName: "Belchior",
  nickname: "Belchior",
  activityBegin: 1965,
  activityClose: 2008,
  bestAlbuns: ['Alucinação (1976)', 'Coração Selvagem (1977)', 'Elogio da Loucura (1988)'],
  bornInfo: {
    birthYear: 1946,
    city: "Sobral",
    state: "Ceará"
  }
}

console.table(iconMPB);
//Nota: a propriedade criada externamente 'iconMPB.fullName' não apareceu depois de reinserir o objeto 'iconMPB' novamente.

console.log('O compositor ' + iconMPB.fullName + ' nasceu no estado do: ' + iconMPB.bornInfo.state);
//O compositor undefined nasceu no estado do: Ceará

/*
Convenções de Nomenclatura:

* camelCase ---> padrão do JS;
* kebab-case ---> alternativa;
Apesar de ser uma convenção, kebab case, não é uma boa prática de escrita, pois muitas linguagens interpretam o traço como um sinal de subtração, o que pode ocasionar bugs.

https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case?gclid=CjwKCAjw5NqVBhAjEiwAeCa97Yec0OdZmZXjjmWSV_Jo9lFNuJfpYhyBfCxQ1KNERsZUld_6l8jP-BoCwJ0QAvD_BwE
*/

//Kebab Case:
iconMPB = {
  name: "Antônio Carlos",
  'last-name': "Belchior", //kebab case
  nickname: "Belchior",
  activityBegin: 1965,
  activityClose: 2008,
  bestAlbuns: ['Alucinação (1976)', 'Coração Selvagem (1977)', 'Elogio da Loucura (1988)'],
  bornInfo: {
    birthYear: 1946,
    city: "Sobral",
    state: "Ceará"
  }
}

//ATENÇÃO: Não use o estilo de escrita kebab-case no JavaScript, isso não é uma boa prática porque o traço pode ser interpretado como um sinal de subtração. Use o estilo camelCase.

console.log(iconMPB['last-name']); //Belchior


/*
Também é possível armazenar um objeto dentro de outro, ou até mesmo dentro de um array.

Se o objeto está dentro de um array, ele é acessado através do seu índice, da mesma forma que se acessaria uma informação num array de strings, por exemplo.

Atenção!
As chaves de um objeto são armazenadas como 'strings' e, para conseguir acessar propriedades nomeadas com números, como 0, por exemplo, só é possível usando a notação de colchetes. Se você usar a notação de ponto, ocorre um erro. 
*/

let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado'
}
/*
console.log(diasDaSemana.1); // SyntaxError: Unexpected number

No código acima, ocorre um erro por usar notação de ponto ao invés de notação de colchetes com uma propriedade nomeada com número.
*/

console.log(diasDaSemana['7']);
//Apesar das chaves de um objeto funcionarem como 'strings', no JS, funcionou sem a utilização de aspas, apesar de não recomendável.

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'Nubank',
  },
};

let infoDoBanco = 'banco';

// a chave banco do objeto conta, guarda um outro objeto, e também há o uso de variável na notação de colchetes, além de você poder ver exemplos usando notação de ponto e notação de colchetes.

console.log(conta[infoDoBanco]); //{ cod: '012', id: 4, nome: 'Nubank' }
console.log(conta[infoDoBanco]['nome']); //Nubank

console.log(conta.agencia); //0000
console.log(conta['agencia']); //0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

//O objeto deste exemplo possui a chave 'infoPessoal' que possui outras 3 chaves, uma delas sendo 'endereco', que é outro objeto! Ou seja, o objeto usuario possui outros dois dentro dele.

console.log(usuario['id']); //99
console.log(usuario.email); //jakeperalta@gmail.com

//Como vimos, é bem mais fácil se utilizar da notação de pontos para acessar ou atualizar o valor de uma propriedade.
console.log(usuario.infoPessoal.endereco.rua); //Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); //Nova Iorque

//Se o nosso objeto está dentro de um array? Como acessamos as propriedades do objeto?

let moradores = [
  {
    nome: 'Luiza',
    sobrenome: 'Guimarães',
    andar: 10,
    apartamento: 1005,
  },
  {
    nome: 'William',
    sobrenome: 'Albuquerque',
    andar: 5,
    apartamento: 502,
  },
  {
    nome: 'Murilo',
    sobrenome: 'Ferraz',
    andar: 8,
    apartamento: 804,
  },
  {
    nome: 'Zoey',
    sobrenome: 'Brooks',
    andar: 1,
    apartamento: 101,
  },
];

let primeiroMorador = moradores[0];

console.log(primeiroMorador); //{ nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); //10

let ultimoMorador = moradores[moradores.length - 1];

console.log(ultimoMorador); //{ nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); //Zoey

console.log(moradores[1].sobrenome);


//Exercício:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

//1. Crie um objeto 'player', contendo as variáveis listadas acima.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

//2. Acesse as chaves 'name', 'lastName' e 'age' e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//3. Adicione ao objeto a 'chave bestInTheWorld' e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(player.bestInTheWorld);

//4. Acesse a chave 'bestInTheWorld' e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

//5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);
