const hitSongs = require("./billboardHelper.js");

// What artist had the most songs chart in 2000, and what were those songs?

// artist song
//input: array of objects/billboard data
//output: artist name and array of song can be converted to template litera
/* 
edge cases: featured artists in artist

-create a function that takes in billboard data
-in the function create a map or empty object variable
-create a loop and loop through billboard objects
    -check if the artist is in the map/object
    -if it is in the map object map.get the artist returning the set and add song to set
    -else map.set artist and new set with the song added in the set
-create a variable artistWithMostSongs  will have the entry array of the artist and songs 
-take map.entries and loop through entries checking the size of each set 
    -if the size of the set is larger than the current set in artistWithMostSongs set it equal to the entry
    -else continue/ no need for else
-return artistWithMostSongs or set the data from that to a template literal and return that

*/

//
let artistWithMostSongs;
let artistSongs = new Map();

function checkArtistWithMostSongs(hit) {
  if (
    !artistWithMostSongs ||
    artistSongs.get(hit.artist).size > artistWithMostSongs[1].size
  ) {
    artistWithMostSongs = [hit.artist, artistSongs.get(hit.artist)];
  }
}

function artistWithMostSongsOnBillboard(hits) {
  for (const hit of hits) {
    let songs = artistSongs.get(hit.artist);

    if (artistSongs.has(hit.artist)) {
      songs.add(hit.song);
      checkArtistWithMostSongs(hit);
    } else {
      artistSongs.set(hit.artist, new Set().add(hit.song));
    }
  }

  return artistWithMostSongs;
}
//time complexity O(n);
console.log(artistWithMostSongsOnBillboard(hitSongs));
