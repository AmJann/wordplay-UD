const countriesArr = require("../countriesHelper.js");
let countries = countriesArr();
//drew

// There is at least one country name that
//  contains another country name. Find all of these cases.

function findCountryNameInOtherCountryName(arr) {
  let t0 = performance.now();
  let answer = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (
        (arr[j] !== item && arr[j].includes(item)) ||
        (arr[j] !== item && item.includes(arr[j]))
      ) {
        answer.push([item, arr[j]]);
      }
      counter++;
    }
  }
  console.log(counter);
  let t1 = performance.now();
  console.log(`1st solution took ${t1 - t0} milliseconds.`);
  return answer;
}
//TODO:
//be able to compare values both ways (includes)
//we don't want to re-search the previous indexes
function findCountryNameInOtherCountryName2(arr) {
  let t0 = performance.now();
  let answer = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (
        (arr[j] !== item &&
          arr[j].includes(item) &&
          !answer.includes(arr[i])) ||
        (arr[j] !== item && item.includes(arr[j]))
      ) {
        answer.push([item, arr[j]]);
      }
      counter++;
    }
  }
  let t1 = performance.now();
  console.log(counter);
  console.log(`2nd solution took ${t1 - t0} milliseconds.`);
  return answer;
}

console.log(findCountryNameInOtherCountryName(countries));
console.log(findCountryNameInOtherCountryName2(countries));
