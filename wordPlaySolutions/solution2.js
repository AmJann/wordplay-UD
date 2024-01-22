const wordsArr = require("../helper");
const words = wordsArr();

// words containing an X and a Y and a Z

for (i = 0; i < words.length; i++) {
  let word = words[i];
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    console.log(word);
  }
}
