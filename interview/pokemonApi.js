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
const endpoint = `pokemon/`;

// const getPokemonItems = async () => {
//   let res = await axios.get(url + endpoint);
//   let items = [];
//   res.data.held_items.map((item) => {
//     items.push(item["item"]["name"]);
//   });
//   console.log(res.data);
// };

// getPokemonItems();

/* 

-Return an array using the help of .map()
-Function should accept an argument for pokemonName
-Use axios.send() instead of axios.get(), and pass into axios.send() a config object
-Let’s set a timeout: 2000

*/

const sendPokemonAPI = async (pokemonName) => {
  const res = await axios.request({
    method: "get",
    url: url + endpoint + pokemonName,
    headers: { "Content-Type": "application/json" },
    timeout: 2000,
  });
  let items = res.data.held_items.map((item) => {
    return item["item"]["name"];
  });
  console.log(items);
  return items;
};

async function doThings() {
  const myItems = await sendPokemonAPI("clefairy");
  console.log(myItems);
}

doThings();
// sendPokemonAPI("clefairy");

// const names = ["jake", "paul", "stacy", "john", "emma"];

// {
//   names.map((name, key) => {
//     console.log(name);
//   });
// }
