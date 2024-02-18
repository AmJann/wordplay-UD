const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();

// There is at least one country name that
//  contains another country name. Find all of these cases.

function findCountryNameInOtherCountryName(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      //   process.exit();
      console.log(counter, i);
      if (
        (arr[j] !== item && arr[j].includes(item)) ||
        (arr[j] !== item && item.includes(arr[j]))
      ) {
        answer.push([item, arr[j]]);
      }
    }
  }
  return answer;
}
//TODO:
//be able to compare values both ways (includes)
//we don't want to re-search the previous indexes
console.log(findCountryNameInOtherCountryName(countries));
