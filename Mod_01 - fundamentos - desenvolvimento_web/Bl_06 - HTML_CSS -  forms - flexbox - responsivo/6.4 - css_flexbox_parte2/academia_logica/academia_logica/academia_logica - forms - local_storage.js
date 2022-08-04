const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelector('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getRoom() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPersons() {
  return select.options[select.selectedIndex].value;
}

function getDate(value) {
  const valueDate = value + 'T03:00:00.000Z';
  data = new Date(valueDate);
  dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

function reservationList(event) {
  event.preventDefault();

  const liStay = document.createElement("li");
  const pRoom = document.createElement("p");
  const pObs = document.createElement("p");

  liStay.innerText = 'Reserva do dia ' + getDate(checkin.value) + ' até o dia ' + getDate(checkout.value);
  pRoom.innerText = 'Quarto ' + getRoom() + ' - para ' + getPersons() + ' pessoas.';
  pObs.innerText = 'Obs: ' + textArea.value;

  liStay.appendChild(pRoom);
  liStay.appendChild(pObs);
  ol.appendChild(liStay);

  saveLocalStorage();
}
btnSubmit.addEventListener('click', reservationList);

function eraseOl() {
 ol.innerHTML = '';

 saveLocalStorage();
}
btnClear.addEventListener('click', eraseOl);

//Salvando a lista com LocalStorage:
//Cria uma função que salva a lista quando alteramos algo nela:
function saveLocalStorage() {
  localStorage.setItem('lista', ol,innerHTML);
}

//Função que restaura a lista quando recarregarmos a pagina:
function loadLocalStorage() {
  const load = localStorage.getItem('lista');
  if(load) {
    ol.innerHTML = load;
  }
}
//A função que restaura a lista deve ser chamada dentro do window.onload
window.onload = loadLocalStorage;