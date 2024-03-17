const nbaStats = require("./nbaHelper");

// Write a function that takes as an argument a team name and
// returns an array of all of the years the team has won the NBA finals.

/* 
input: string: team name, nba stats
output: array
edge cases: upper/lowercase characters, correct data type

-create a function that takes a string/team name as an argument and the nba stats
-create an answer array in the function
-create a loop
    - inside the loop check if each year if the winner is equal to the input
    -if equal push to answer array
-after loop return answer array
*/

function isChampion(team, stats) {
  let yearsWon = [];
  let teamUpperCase = team.toUpperCase();
  for (const stat of stats) {
    if (teamUpperCase === stat.Winner.toUpperCase()) {
      yearsWon.push(stat.Year);
    }
  }
  return yearsWon;
}

console.log(isChampion("miami heat", nbaStats));
