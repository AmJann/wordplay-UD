const nbaStats = require("./nbaHelper");

//  Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
//     - 6 times: Michael Jordan
//     - 3 times: Shaquille O'Neal, LeBron James
//     - 2 times: <etc></etc>

/* 
input: array of objects/ nba stats
output: see "result" object below
edge cases: empty array, wrong data type, array of empty objects

create a function
in function create a new map
create a loop
in the loop create an if statment
    if the mvp is not in map, set to map
    else add one to the value in the map
after the loop create a variable that is equal to map.entries
create another loop and print each entry in a template literal using the entries [[name,number],[name,number]]


set a loop to do blah blah blah

result = {
    6: ['Michael Jordan'],
    3: ['Shaq Oneal', 'LeBron James']
};
for (const [k, v] of Object.entries(result)) {
    console.log(`${k} times: ${v.join(',')}`)
}

*/

function testResult() {
  const result = {
    6: ["Michael Jordan"],
    3: ["Shaq Oneal", "LeBron James"],
  };
  for (const [k, v] of Object.entries(result)) {
    console.log(`${k} times: ${v.join(",")}`);
  }
}

function mvpCount(data) {
  let mvpMap = new Map();
  for (const obj of data) {
    if (!obj.MVP) {
      continue;
    } else if (!mvpMap.has(obj.MVP)) {
      mvpMap.set(obj.MVP, 1);
    } else {
      mvpMap.set(obj.MVP, mvpMap.get(obj.MVP) + 1);
    }
  }

  let reverseMap = new Map();
  let mvpEntries = mvpMap.entries();

  for (const [k, v] of mvpEntries) {
    if (!reverseMap.has(v)) {
      reverseMap.set(v, [k]);
    } else {
      let arr = reverseMap.get(v);
      arr.push(k);
      reverseMap.set(v, arr);
    }
  }
  // console.log(reverseMap);
  let keys = reverseMap.keys();
  let keysArr = [];
  for (const k of keys) {
    keysArr.push(k);
  }
  let sortedArr = keysArr.sort((a, b) => b - a);

  for (const key of sortedArr) {
    let player = reverseMap.get(key);
    if (key > 1) {
      console.log(`${key} times: ${player}`);
    }
  }
}

mvpCount(nbaStats);
// testResult();
