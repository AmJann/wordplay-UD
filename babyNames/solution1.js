/*What is the shortest baby name in the top 40 baby names for 2020?
1.create a separate file with a helper function that sets the txt file content to an array 
of baby names that is exported and im ported into a separate file where the problem will be solved.
2.creating a loop to iterate over baby names in a function so I can make it reusable for different arrays
3. add a variable that keeps track of the shortest baby name initial value set to babyArr[0];
4. i want to compare IF the variable with the shortest baby name is shorter or longer if the 
current word in the iteration is shorter then the one in the variable set the new word to the variable else continue
5. at the end of iteration outside the loop return shortest baby name variable
6. outside of function/ after function call function with baby name arr to get answer
*/

const babyNames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "William",
  "James",
  "Benjamin",
  "Lucas",
];

/*
I need an array but I need to find the shortest length first than I can make a second iteration and find all of the names with the same length as the shortest
*/
const names = ["Alexander", "Mason", "Michael", "Ethan", "Daniel", "Henry"];

function iterateToFindAllShortest(array, smallestLength) {
  let answer = [];
  for (const item of array) {
    if (item.length === smallestLength.length) {
      answer.push(item);
    }
  }
  return answer;
}

function shortestBabyName2(arr) {
  let shortest = arr[0];
  let answer = [];

  for (const item of arr) {
    if (item.length < shortest.length) {
      shortest = item;
    }
  }

  for (const item of arr) {
    if (item.length === shortest.length) {
      answer.push(item);
    }
  }
  return answer;
}

function shortestBabyName(arr) {
  let shortest = arr[0];

  for (const item of arr) {
    if (item.length < shortest.length) {
      shortest = item;
    }
  }
  return shortest;
}

// console.log(shortestBabyName2(babyNames));
// console.log(shortestBabyName2(names));

//HW: find all of the shortest names in baby names without iterating more than once
//prince
function shortestBabyName3(arr) {
  let shortestNames = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let name = arr[i];

    if (name.length < shortestNames[0].length) {
      shortestNames = [name];
    } else if (name.length === shortestNames[0].length) {
      shortestNames.push(name);
    }
  }
  return shortestNames;
}

// console.log(shortestBabyName3(names));

/*HW:Homework on hashmaps.
Use the MDN doc that I sent you to learn the following
How to create an empty hashmap. (use the new Map method)
How to create a hashmap with key value pairs. 
How to add key value pairs to an empty hashmap. map.set(key,value)
How check if a key exists in a hashmap. (use has)
How to check if a value exists in a hashmap.
How to retrieve a value from a hashmap.
How to remove a key value pair from a hashmap.
How to update a value when given a key in a hashmap.*/

let map = new Map();
let map2 = new Map([
  ["orange", 11],
  ["apple", 10],
  ["pear", 15],
]);

map2.set("squash", 7).set("banana", 8);
console.log(map2.has("orange"));
console.log(map2.get("apple"));
// map2.delete("banana");
map2.set("apple", 11);
console.log(map2);
