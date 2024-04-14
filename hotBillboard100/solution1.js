const hitSongs = require("./billboardHelper.js");

// Print out all of the #1 songs and the artists who made them. If a song was #1 for more than one week,
// only print it once. Example output:
//     These were the number one songs of 2000:
//     "Try Again" - Aaliyah
//     "Say My Name" - Destiny's Child
//     "What A Girl Wants" - Christina Aguilera
//     "Maria Maria" - Santana Featuring The Product G&B
//     "Smooth" - Santana Featuring Rob Thomas
//     "Independent Women Part I" - Destiny's Child
/* 
use peak-rank for #1 spot, weeks-on-board for songs on list more than 1 times

create a function that takes in an array of hit song objects
inside function create an empty map 
create a loop to iterate though hitSongs
    check if weeks on board is greater than 1 and peek-rank is === 1
    if so set song and artist to the map, song -key and artist value
set map.entries to a variable
for each or loop through map.entries and print each song name and artist
*/

function numberOneSongsMultipleWeeks(songs) {
  let topSongs = new Map();
  for (const song of songs) {
    if (song["peak-rank"] === "1" && !topSongs.has(song.song)) {
      topSongs.set(song.song, song.artist);
    }
  }
  const topSongsEntries = topSongs.entries();
  for (const song of topSongsEntries) {
    console.log(`"${song[0]}" - ${song[1]}`);
  }
}

numberOneSongsMultipleWeeks(hitSongs);
