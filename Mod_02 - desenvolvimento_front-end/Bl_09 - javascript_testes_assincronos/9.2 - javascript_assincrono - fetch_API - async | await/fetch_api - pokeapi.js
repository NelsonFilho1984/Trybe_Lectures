const pokemons = ['ditto', 'charmander', 'bulbasaur', 'squirtle', 'pikachu', 'porygon', 'mewtwo', 'onix', 'charizard', 'geodude'];

function append(data) {
  const ol = document.querySelector('ol');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ol.appendChild(li);
}

//Modo Then/Catch:
function fetchPokemonJSON(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((response) => response.json())
}

function fetchPokemon(nomePokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((respostaAPI) => respostaAPI.json())
    .then((objetoPokemon) => {
      const pokemon = {name: objetoPokemon.name, imageUrl: objetoPokemon.sprites.front_default};
      console.log(pokemon);
      append(pokemon);
    })
    .catch((error) => console.log(error))

}

function requestPokemons() {
  //fetchPokemon('pikachu');
  pokemons.filter((pokemon) => fetchPokemon(pokemon));
}

//função que chama os pokemons na ordem, sem correr o risco que algum atraso na promise os altere;
function requestPokemonsOrdered() {
  //Promises.all espera um array de promises; em resposta de todas as promessas ele retorna um array com todas as promessas na ordem;
  Promise.all([
    fetchPokemonJSON('articuno'),
    fetchPokemonJSON('zapdos'),
    fetchPokemonJSON('moltres'),
  ]).then((pokemonList) => {
    pokemonList.forEach((pokemon) => {
      const pokemonObjeto = {name: pokemon.name, imageUrl: pokemon.sprites.front_default};
      append(pokemonObjeto);
    })
  })
    .catch((error) => console.log(error));
}

//Modo Async/Await:
//Atenção! async/await não utiliza .then/.catch sendo necessário usar o try/catch;
async function fetchPokemonAsyncAwait() {
  try {
    await fetchPokemon('eevee'),
    await fetchPokemon('jigglypuff'),
    await fetchPokemon('lugia'),
    await fetchPokemon('gengar')
  } catch(error) {
    throw new Error('error');
  }
}

function getThemAll() {
  return 
}

window.onload = fetchPokemonAsyncAwait;