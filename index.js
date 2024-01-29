const pokemonList = document.getElementById('pokemonLista');
const general = document.getElementById('pokemonInfo');

document.addEventListener('DOMContentLoaded', async function () {
    try {
        for (let i = 1; i <= 10; i++) {
            const randomPokemonId = Math.floor(Math.random() * 300) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
            const pokemon = response.data;

            const lista = document.createElement('li');
            lista.textContent = pokemon.name;
            lista.addEventListener('click', () => informacion(pokemon));

            pokemonList.appendChild(lista);
        }
    } catch (error) {
        console.error('Error al obtener los Pokémon', error);
    }
});

function informacion(pokemon) {
    general.innerHTML = '';

    const elemento = document.createElement('div');
    elemento.classList.add('divPokemon');

    const nombrePokemon = document.createElement('div');
    nombrePokemon.textContent = pokemon.name;
    elemento.appendChild(nombrePokemon);

    const imagenPokemon = document.createElement('img');
    imagenPokemon.src = pokemon.sprites.front_default;
    imagenPokemon.alt = pokemon.name;
    imagenPokemon.classList.add('pokemonImagen');
    elemento.appendChild(imagenPokemon);

    general.appendChild(elemento);
}
