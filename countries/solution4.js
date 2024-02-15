const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();

// What is the shortest country name? Make sure your solution can handle ties.

function findShortestCountryName(list) {
  let shortestCountry = list[0];
  for (const item of list) {
    if (shortestCountry.length >= item.length) {
      shortestCountry = item;
    }
  }
  return shortestCountry;
}

console.log(findShortestCountryName(countries));
