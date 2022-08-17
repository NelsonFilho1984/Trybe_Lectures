//evento onload:
/* 
O evento 'onload' faz com que uma trecho de código seja executado somente após o carregamento de uma página web.

O evento onload pode ser usado para verificar o tipo e a versão do navegador do visitante e carregar a versão adequada da página da Web com base nas informações ou pode ser usado para lidar com cookies.

function ordered() {
  console.log('terceiro');
}

window.onload = ordered;
//A chamada da função 'ordered' no 'onload' deve ser feito sem os parênteses, caso contrário a função é executada antes do carregamento da página.

//Outro modo de utilizar o 'onload' é atrelando-o a uma função anônima, caso haja várias funções para aguardar o carregamento da página.
window.onload = () => {
  ordered();
};
console.log(window.onload);

console.log('primeiro');
console.log('segundo');
*/

//Mad Racer:

const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
//console.log(car1, car2);

car1.style.marginLeft = 0;
car2.style.marginLeft = 0;

const button = document.querySelector('#start-race-btn');

window.onload = () => {
  

  button.addEventListener('click', (event) => {
    //console.log(event.target);
    event.target.innerText = 'Gooo!!!';
    
    car1.style.marginLeft = parseFloat(car1.style.marginLeft) + Math.random() * 100 + 'px';
    car2.style.marginLeft = parseFloat(car2.style.marginLeft) + Math.random() * 100 + 'px';

    if(parseFloat(car1.style.marginLeft) > window.innerWidth) {
      alert('Carro 01 cruzou a chegadaaa!!!');
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
    }

    if(parseFloat(car2.style.marginLeft) > window.innerWidth) {
      alert('Carro 02 cruzou a chegadaaa!!!');
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
    }

    console.log('Car 01:', car1.style.marginLeft);
    console.log('Car 02:', car2.style.marginLeft);
    console.log('Largura da tela:', window.innerWidth);


  });
}
