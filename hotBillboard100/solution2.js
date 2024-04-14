const hitSongs = require("./billboardHelper.js");

// What song was the #1 song for the most weeks of 2000, who was the artist, and how many weeks was it at #1?
/*
input: array of objects
ouput: artist and weeks at number 1/string/template literal
edgecases: watch for string versus int type when comparing

create a function hat take in an array of objects
create a empty map
create a loop
    rank is not equal to 1 
    break

    if so analyze the record
        check if the song is in map
        if it is add to count
        else add song artist and count
set a variable to map.entries
loop through entries and to find the largest count
set largest to a variable, variable will be artist name and count
return variable in template literal form for answer
*/

function mostNumberOneSongs2000(hitSongs) {
  let songMap = new Map();
  let artistSong = new Map();
  for (const hit of hitSongs) {
    if (hit.rank === "1") {
      if (!songMap.has(hit.song)) {
        songMap.set(hit.song, 1);
        artistSong.set(hit.song, hit.artist);
      } else {
        songMap.set(hit.song, songMap.get(hit.song) + 1);
      }
    }
  }

  let songEntries = songMap.entries();
  let topSong;
  let mostTimesAtNum1 = 0;

  for (const entry of songEntries) {
    if (entry[1] > mostTimesAtNum1) {
      topSong = entry[0];
      mostTimesAtNum1 = entry[1];
    }
  }
  let topArtist = artistSong.get(topSong);

  return `The artist ${topArtist} was at number one the most times in 2000. They held the spot for ${mostTimesAtNum1} weeks with the hit song ${topSong}!`;
}

console.log(mostNumberOneSongs2000(hitSongs));
