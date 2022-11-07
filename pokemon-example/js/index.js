const BASE_URL = 'https://pokeapi.co/api/v2';
let pokemons;
const bodyElem = document.querySelector('body');

function createPokemonElem(pokemon) {
    const elem = document.createElement('p');
    elem.innerText = pokemon.name;
    bodyElem.append(elem);
}

function displayPokemons() {
    for(const pokemon of pokemons) {
        console.log(pokemon);
        createPokemonElem(pokemon);
    }
}

async function getPokemons() {
    try {
        const response = await fetch(`${BASE_URL}/pokemon?limit=50&offset=0`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        pokemons = data.results; // Spara i en global variabel
        
        displayPokemons();
    } catch (error) {
        
    }
}

getPokemons();