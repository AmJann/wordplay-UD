const hitSongs = require("./billboardHelper.js");

// What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

/*
input: array of objects/hits
ouput: array of songs, count of weeks on billboard
edgecases: multiple answers, multiple songs with same amoutn fo weeks

create a function that takes in hitSongs data
create an empty map
create a loop that loops through hit songs
    check if the song is in the map
    if song is in the map get song and add 1 to the count
        (another if)check if count is greater than the most weeks count 
        if it is equal push song to songs array and keep overall count the same
        else if it's greater reset songs array and push song to array and update count
    else set song to map with count of 1 

return array of songs and overallcount of weeks

*/
let songMap = new Map();
let weeksCount = 0;
let songs = [];

function compareWeekCounts(hit) {
  let count = songMap.get(hit.song);
  if (weeksCount === count) {
    songs.push(hit.song);
  } else if (count > weeksCount) {
    songs = [];
    songs.push(hit.song);
    weeksCount = count;
  }
}

function songsWithMostWeeks(hits) {
  for (const hit of hits) {
    let count = songMap.get(hit.song);
    if (songMap.has(hit.song)) {
      songMap.set(hit.song, (count += 1));
      compareWeekCounts(hit);
    } else {
      songMap.set(hit.song, 1);
    }
  }

  return { weeksCount, songs };
}

console.log(songsWithMostWeeks(hitSongs));
