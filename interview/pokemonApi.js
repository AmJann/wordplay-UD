const axios = require("axios");

// Write a function which accepts the name of a Pokemon and returns an array of the 'name' of that Pokemon's 'held items.'
/*
npm install axios
require axios
get the url and endpoint
create an async await function that returns the pokemons data
map/forEach the held_items console.logging the items
held_items[index].item.name - would return items

*/

const url = "https://pokeapi.co/api/v2/";
let pokemonName = "clefairy";
const endpoint = `pokemon/${pokemonName}`;

const getPokemonItems = async () => {
  let res = await axios.get(url + endpoint);

  res.data.held_items.forEach((item) => {
    console.log(item["item"]["name"]);
  });
  console.log(res.data);
};

// getPokemonItems();

const names = ["jake", "paul", "stacy", "john", "emma"];

{
  names.map((name, key) => {
    console.log(name);
  });
}
