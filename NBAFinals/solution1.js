const nbaStats = require("./nbaHelper");

// Write a function that takes as an argument a year
//  and returns the winner of the NBA finals that year.

/* 
input: number / value of the key year in an object
output:string/ team name
edge cases: year is before the first year of NBA 
    or year is past the last year in the data
    wrong data type, (could except string or numbers
         just use toString for the input)
check if number is a valid year
if number is a vaid year convert to string

*/

function winnerOfFinalsThatYear(year, data) {
  if (typeof year !== "number") {
    return "input must be a number";
  }
  if (year > 2019 || year < 1947) {
    return "no data avaible for this year. Input must be a year between 1947 and 2019";
  }
  for (const obj of data) {
    if (obj.Year === year.toString()) {
      return obj.Winner;
    }
  }
}
console.log(winnerOfFinalsThatYear("2019", nbaStats));
