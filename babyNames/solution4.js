const getBabyNames = require("../babyNamesHelper.js");
let babyNames = getBabyNames();
const getBabyNames1880 = require("../babyNamesHelper2.js");
let babyNames1880 = getBabyNames1880();

// What are all of the names that
//  were top 40 baby names in both 1880 and 2020?

/*
input: 2 arrays
output: 1 array
to uppercase each name in each array
check type of input
put all of 1880 names into a map
then compare IF 1880 HAS 2020 names
IF it does PUSH to answer ARRAY
*/

let babyMap = new Map();

function compareNames(arr1, arr2, map) {
  let answer = [];
  for (const item of arr1) {
    map.set(item, true);
  }
  for (const item of arr2) {
    if (map.has(item)) {
      answer.push(item);
    }
  }
  return answer;
}
//TC:O(a+b) SC:O(n)
console.log(compareNames(babyNames, babyNames1880, babyMap));
//Richard
