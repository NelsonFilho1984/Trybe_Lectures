//Exercícios:
//Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions, template literals, objetos e temas dos fundamentos. Essa mistura de conceitos é de vital importância para o aprendizado!

//Atenção! os exercícios terão como base o template do código abaixo para sua realização:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// console.log(books[1].author); // { name: 'J. R. R. Tolkien', birthYear: 1892 }

//🚀 1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBorn1947() {
  return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log('Nascido em 1947:', authorBorn1947()); // Nascido em 1947: Stephen King

//2. Retorne o nome do livro de menor nome.
//nameBook = books.forEach((book, index) => Math.min(book[index].name.length)).name;

function smallerName() {
  let nameBook;
  console.log(nameBook); // undefined
  books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
console.log('Menor título:', smallerName()); // Menor título: Duna

  // !nameBook - fazemos isso, pois o fato de nameBook não guardar nenhum valor é retornado "undefined" por padrão, consequentemente o JavaScript interpreta ele como um valor "falsy". Desta maneira, ao utilizar o operador not (!) antes de nameBook, estamos negando que ele seja falso, ou seja, convertendo-o para "true";

  let nameBook;
  console.log(nameBook); // undefined
  console.log(!nameBook) // true

//3. Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  let bookName;
  if(!bookName) {
    bookName = books.find((book) => book.name.length === 26).name;
  }
  return bookName;
}
console.log('26 caracteres:', getNamedBook()); // 26 caracteres: As Crônicas de Gelo e Fogo


//Modo simplificado:
function getNamedBook2() {
  return books.find((book) => book.name.length === 26);
}
console.log('26 caracteres:', getNamedBook2());
/*
26 caracteres: {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: { name: 'George R. R. Martin', birthYear: 1948 },
  releaseYear: 1991
}
*/

//4. Ordene os livros por data de lançamento em ordem decrescente.
//sort()
//books.releaseYear
console.log('O Chamado de Cthulhu - ano:', books[5].releaseYear);

function booksOrderedByReleaseYearDesc() {
  let bookList;

  if(!bookList) {
    bookList = books.sort((a, b) => {
      if (a.releaseYear < b.releaseYear) {
        return 1;
      }
      if (a.releaseYear > b.releaseYear) {
        return -1
      }
    });
  }
  return bookList;
}
console.log('lançamento por ordem decrescente', booksOrderedByReleaseYearDesc());

//Modo simplificado:
/*
function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log('lançamento por ordem decrescente', booksOrderedByReleaseYearDesc());
*/

//🚀 5. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  let ifBorn;
  if(!ifBorn) {
    books.every((author) => {
      if(author.birthYear >= 1901 && author.birthYear <= 2000) {
        ifBorn = '\ntodos escritores pertecem ao séc XX';
      } else {
        ifBorn =  '\nnem todos os escritores pertencem ao séc. XX';
      }
    });
  }
  return ifBorn;
}
console.log('Todos os escritores da lista nasceram no séc.XX ?', everyoneWasBornOnSecXX());

//Modo simplificado:
function ifBornXX() {
  return books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}
console.log('ifBornXX:', ifBornXX());

//🚀 6. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function releaseIn80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log('Algum livro da lista lançado nos anos 80?', releaseIn80s());

//7. Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function sameYear() {
  return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)))
}
console.log('Nenhum autor nasceu no mesmo ano?', sameYear());

//???
/* 
function sameYear() {
  let year = 
  let sameYear = false;
  return books.same((book) => {
    if (book.author.birthYear === ) {
      sameYear = true;
    }
  });
}
*/