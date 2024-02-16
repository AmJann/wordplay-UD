const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();

// What country names are > 50% vowels?

function isVowel(char) {
  return ["A", "E", "I", "O", "U"].includes(char.toUpperCase());
}
//new hashmap called map
//if i want o look up "A"
//map.get("A")

function countriesGreaterThanFiftyPercentVowels(arr) {
  for (let i = 0; i < arr.length; i++) {
    let vowels = 0;
    let consonants = 0;
    let country = arr[i];
    let splitCountryName = country.split("");

    for (let j = 0; j < splitCountryName.length; j++) {
      if (isVowel(splitCountryName[j])) {
        vowels += 1;
      } else {
        consonants += 1;
      }
    }

    if (vowels > consonants) {
      console.log(country);
    }
  }
}

countriesGreaterThanFiftyPercentVowels(countries);
