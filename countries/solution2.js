const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();

//which countries begin and end with a vowel

// for (let i = 0; i < countries.length; i++) {
//   let country = countries[i];
//   if (
//     (country[0] === "A" ||
//       country[0] === "E" ||
//       country[0] === "I" ||
//       country[0] === "O" ||
//       country[0] === "U") &&
//     (country[country.length - 1] === "a" ||
//       country[country.length - 1] === "e" ||
//       country[country.length - 1] === "i" ||
//       country[country.length - 1] === "o" ||
//       country[country.length - 1] === "u")
//   ) {
//     console.log(country);
//   }
// }

function isVowel(char) {
  //pass in a single letter of the word and compare

  return ["A", "E", "I", "O", "U"].includes(char.toUpperCase());
}

for (const country of countries) {
  let firstLetter = country[0];
  let lastLetter = country.slice(-1);

  if (isVowel(firstLetter) && isVowel(lastLetter)) {
    console.log(country);
  } else {
  }
}

//if((the first letter is an upper case vowel or the first letter is a lower case vowel) and (the last letter is an upper case vowel or the last letter is a lower case vowel)){}
