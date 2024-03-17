const nbaStats = require("./nbaHelper");

// Which teams have made it to the NBA finals but have never won?

/* 
input:array of objects
output: array of strings
edge cases: empty objects, upper and lower case,

-create a function
create an answer array
create a winner and loser set
-create a loop
    -push each winner and loser to appropriate set
-create second loop    
-after loop check If each loser is in the winner set, if not push to answer array
*/

function losersOnly(stats) {
  let answer = [];
  let winners = new Set();
  let losers = new Set();
  for (const obj of stats) {
    winners.add(obj.Winner);
    losers.add(obj.Loser);
  }
  for (const loser of losers) {
    if (!winners.has(loser)) {
      answer.push(loser);
    }
  }
  return answer;
}

console.log(losersOnly(nbaStats));
