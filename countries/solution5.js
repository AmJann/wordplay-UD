const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();

//What countries use only one vowel in their name (the vowel can be used multiple times)
let answer = [];
for (const country of countries) {
  let vowels = ["a", "e", "i", "o", "u"];
  let lowerCountry = country.toLowerCase();

  if (
    lowerCountry.includes("a") &&
    !lowerCountry.includes("e") &&
    !lowerCountry.includes("i") &&
    !lowerCountry.includes("o") &&
    !lowerCountry.includes("u")
  ) {
    answer.push(country);
  }

  if (
    lowerCountry.includes("e") &&
    !lowerCountry.includes("a") &&
    !lowerCountry.includes("i") &&
    !lowerCountry.includes("o") &&
    !lowerCountry.includes("u")
  ) {
    answer.push(country);
    if (
      lowerCountry.includes("i") &&
      !lowerCountry.includes("e") &&
      !lowerCountry.includes("a") &&
      !lowerCountry.includes("o") &&
      !lowerCountry.includes("u")
    ) {
      answer.push(country);
    }
    if (
      lowerCountry.includes("o") &&
      !lowerCountry.includes("e") &&
      !lowerCountry.includes("i") &&
      !lowerCountry.includes("a") &&
      !lowerCountry.includes("u")
    ) {
      answer.push(country);
    }
    if (
      lowerCountry.includes("u") &&
      !lowerCountry.includes("e") &&
      !lowerCountry.includes("i") &&
      !lowerCountry.includes("o") &&
      !lowerCountry.includes("a")
    ) {
      answer.push(country);
    }
  }
}
// console.log(answer);

let countriesWithSameVowel = [];
function isVowel(char) {
  let letter = ["A", "E", "I", "O", "U"].includes(char.toUpperCase());
  return letter;
}

function checkForCountriesWithSameVowel(arr) {
  for (let i = 0; i < arr.length; i++) {
    let splitCountryName = arr[i].splitCountryName("");

    let vowelCount = splitCountryName.reduce(function (obj, letter) {
      if (!obj[letter] && isVowel(letter)) {
        obj[letter] = 1;
      } else if (isVowel(letter)) {
        obj[letter]++;
      }
      return obj;
    }, {});

    if (Object.keys(vowelCount).length < 2) {
      countriesWithSameVowel.push(arr[i]);
    }
  }

  console.log(countriesWithSameVowel);
}

// checkForCountriesWithSameVowel(countries);

function hasOnlyOneVowel(country) {
  const lowerCaseCountry = country.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  const foundVowels = new Set();

  for (const char of lowerCaseCountry) {
    if (vowels.includes(char)) {
      foundVowels.add(char);
      if (foundVowels.size > 1) {
        return false;
      }
    }
  }

  return foundVowels.size === 1;
}

const answer2 = countries.filter(hasOnlyOneVowel);
console.log(answer2);
