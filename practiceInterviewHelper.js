const fs = require("fs");
const text = fs.readFileSync("./countries.txt").toString("utf-8");
const countries = text.split("\r\n");

//find countries that begin and end with a vowel

function isVowel(char) {
  let letter = ["A", "E", "I", "O", "U"].includes(char.toUpperCase()); // change to set later when I get to hashmaps sets are 0(1)
  return letter;
}
// function isVowelCountry() {
for (const country of countries) {
  let firstLetter = country[0];
  let lastLetter = country.slice(-1);
  if (isVowel(firstLetter) && isVowel(lastLetter)) {
    console.log(country);
  }
}
// }
//O(a * b)
// isVowelCountry(countries);

//hw -what countries name have %50 more vowels in them
