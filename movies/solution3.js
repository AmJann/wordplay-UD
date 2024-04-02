const topMovies = require("./moviesHelper");
let movies = topMovies.then((value) => {
  console.log(value);
});
// What distributor has the most films on this list?
/* 
-parse the csv code in helper file using csv parsing library
-export the code and require it in file where I solve the problem
-the vriable where it is required is where I get the parsed data from
input: an array of objects
{
    title:value,
    distributor:value,

}
output: string
edgecases: tie,empty array, empty distributor name
-create a function and create a map inside key:distributor value: index in array
-loop through array of objects
    -check if distributor exists in  map 
    -if it does use map.get(ditributor) and use the index to get the array in a array and change the coutn to +!
    -else add the distributor with a value of 1
-outside underneath first loop create an array( in case of tie)
-make a loop and check if the arr[0][1]to see if the value is greater than or equal ect
-if value is greater reset array to [] and push the new key value pair
-if value is equal push the new key value pair
- after loop return keys/key in answer array

*/

function largestDistributor(movies) {
  let memoMap = new Map();
  let distributorCountArray = [];
  let count = 0;
  //   console.log(Array.isArray(movies));
  for (let i = 0; i < movies.length; i++) {
    // console.log(movie.distributor);

    if (memoMap.has(movies[i].distributor)) {
      distributorCountArray[memoMap.get(movies[i].distributor)][1] =
        distributorCountArray[memoMap.get(movies[i].distributor)][1].value() +
        1;
    } else {
      memoMap.set(movies[i].distributor, count);
      count++;
      Array.push([movies[i].distributor, 1]);
    }
  }
  console.log(distributorCountArray);
  console.log(memoMap);
}
// console.log(movies);
largestDistributor(movies);
