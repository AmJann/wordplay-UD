const getBabyNames = require("../babyNamesHelper.js");
let babyNames = getBabyNames();
//olijijuan

// What are the longest baby names in the top 40 baby names for 2020? Make sure you can handle if there’s a tie.
//set an array to babynames[0], loop through and compare to the new  arr[0] if baby names are equal or longer
//push if equal
// if larger set array to empty then push
function findLongestBabyNames(arr) {
  let largestNames = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let name = arr[i];
    if (name.length === largestNames[0].length) {
      largestNames.push(name);
    } else if (name.length > largestNames[0].length) {
      largestNames = [];
      largestNames.push(name);
    }
  }
  return largestNames;
}

console.log(findLongestBabyNames(babyNames));
