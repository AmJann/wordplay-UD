const movies = [
  {
    Title: "Star Wars: Episode VII - The Force Awakens",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2015",
    UsSales: "936662225",
    WorldSales: "2069521700",
    Runtime: "2 hr 18 min",
    Rating: "PG-13",
  },
  {
    Title: "Avengers: Endgame",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "858373000",
    WorldSales: "2797501328",
    Runtime: "3 hr 1 min",
    Rating: "PG-13",
  },
  {
    Title: "Avatar",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "2009",
    UsSales: "760507625",
    WorldSales: "2847246203",
    Runtime: "2 hr 42 min",
    Rating: "PG-13",
  },
  {
    Title: "Black Panther",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2018",
    UsSales: "700426566",
    WorldSales: "1347597973",
    Runtime: "2 hr 14 min",
    Rating: "NA",
  },
  {
    Title: "Avengers: Infinity War",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2018",
    UsSales: "678815482",
    WorldSales: "2048359754",
    Runtime: "2 hr 29 min",
    Rating: "NA",
  },
  {
    Title: "Spider-Man: No Way Home",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2021",
    UsSales: "675813257",
    WorldSales: "1544455963",
    Runtime: "2 hr 28 min",
    Rating: "NA",
  },
  {
    Title: "Titanic",
    Distributor: "Paramount Pictures",
    ReleaseDate: "1997",
    UsSales: "659363944",
    WorldSales: "2201647264",
    Runtime: "3 hr 14 min",
    Rating: "PG-13",
  },
  {
    Title: "Jurassic World",
    Distributor: "Universal Pictures",
    ReleaseDate: "2015",
    UsSales: "652385625",
    WorldSales: "1670516444",
    Runtime: "2 hr 4 min",
    Rating: "PG-13",
  },
  {
    Title: "The Avengers",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2012",
    UsSales: "623357910",
    WorldSales: "1518815515",
    Runtime: "2 hr 23 min",
    Rating: "PG-13",
  },
  {
    Title: "Star Wars: Episode VIII - The Last Jedi",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2017",
    UsSales: "620181382",
    WorldSales: "1332698830",
    Runtime: "2 hr 32 min",
    Rating: "PG-13",
  },
  {
    Title: "Incredibles 2",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2018",
    UsSales: "608581744",
    WorldSales: "1243089244",
    Runtime: "1 hr 58 min",
    Rating: "NA",
  },
  {
    Title: "The Lion King",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "543638043",
    WorldSales: "1662899439",
    Runtime: "1 hr 58 min",
    Rating: "PG",
  },
  {
    Title: "The Dark Knight",
    Distributor: "Warner Bros.",
    ReleaseDate: "2008",
    UsSales: "534858444",
    WorldSales: "1005973645",
    Runtime: "2 hr 32 min",
    Rating: "PG-13",
  },
  {
    Title: "Rogue One: A Star Wars Story",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2016",
    UsSales: "532177324",
    WorldSales: "1056057720",
    Runtime: "2 hr 13 min",
    Rating: "PG-13",
  },
  {
    Title: "Star Wars: Episode IX - The Rise of Skywalker",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "515202542",
    WorldSales: "1074149279",
    Runtime: "2 hr 21 min",
    Rating: "PG-13",
  },
  {
    Title: "Beauty and the Beast",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2017",
    UsSales: "504481165",
    WorldSales: "1273576220",
    Runtime: "2 hr 9 min",
    Rating: "PG",
  },
  {
    Title: "Finding Dory",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2016",
    UsSales: "486295561",
    WorldSales: "1028570942",
    Runtime: "1 hr 37 min",
    Rating: "NA",
  },
  {
    Title: "Frozen II",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "477373578",
    WorldSales: "1450026933",
    Runtime: "1 hr 43 min",
    Rating: "PG",
  },
  {
    Title: "Star Wars: Episode I - The Phantom Menace",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "1999",
    UsSales: "474544677",
    WorldSales: "1027082707",
    Runtime: "2 hr 16 min",
    Rating: "PG",
  },
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "1977",
    UsSales: "460998507",
    WorldSales: "775398007",
    Runtime: "2 hr 1 min",
    Rating: "PG",
  },
  {
    Title: "Avengers: Age of Ultron",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2015",
    UsSales: "459005868",
    WorldSales: "1402809540",
    Runtime: "2 hr 21 min",
    Rating: "PG-13",
  },
  {
    Title: "The Dark Knight Rises",
    Distributor: "Warner Bros.",
    ReleaseDate: "2012",
    UsSales: "448139099",
    WorldSales: "1081142612",
    Runtime: "2 hr 44 min",
    Rating: "PG-13",
  },
  {
    Title: "Shrek 2",
    Distributor: "DreamWorks Distribution",
    ReleaseDate: "2004",
    UsSales: "441226247",
    WorldSales: "928760770",
    Runtime: "1 hr 33 min",
    Rating: "PG",
  },
  {
    Title: "E.T. the Extra-Terrestrial",
    Distributor: "Universal Pictures",
    ReleaseDate: "1982",
    UsSales: "435110554",
    WorldSales: "792910554",
    Runtime: "1 hr 55 min",
    Rating: "PG",
  },
  {
    Title: "Toy Story 4",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "434038008",
    WorldSales: "1073394593",
    Runtime: "1 hr 40 min",
    Rating: "G",
  },
  {
    Title: "Captain Marvel",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "426829839",
    WorldSales: "1128462972",
    Runtime: "2 hr 3 min",
    Rating: "PG-13",
  },
  {
    Title: "The Hunger Games: Catching Fire",
    Distributor: "Lionsgate",
    ReleaseDate: "2013",
    UsSales: "424668047",
    WorldSales: "865011746",
    Runtime: "2 hr 26 min",
    Rating: "PG-13",
  },
  {
    Title: "Pirates of the Caribbean: Dead Man's Chest",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2006",
    UsSales: "423315812",
    WorldSales: "1066179747",
    Runtime: "2 hr 31 min",
    Rating: "PG-13",
  },
  {
    Title: "The Lion King",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "1994",
    UsSales: "422783777",
    WorldSales: "1063611805",
    Runtime: "1 hr 28 min",
    Rating: "G",
  },
  {
    Title: "Jurassic World: Fallen Kingdom",
    Distributor: "Universal Pictures",
    ReleaseDate: "2018",
    UsSales: "417719760",
    WorldSales: "1310466296",
    Runtime: "2 hr 8 min",
    Rating: "PG-13",
  },
  {
    Title: "Toy Story 3",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2010",
    UsSales: "415004880",
    WorldSales: "1066970811",
    Runtime: "1 hr 43 min",
    Rating: "NA",
  },
  {
    Title: "Wonder Woman",
    Distributor: "Warner Bros.",
    ReleaseDate: "2017",
    UsSales: "412815408",
    WorldSales: "822824522",
    Runtime: "2 hr 21 min",
    Rating: "PG-13",
  },
  {
    Title: "Iron Man 3",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2013",
    UsSales: "409013994",
    WorldSales: "1214811252",
    Runtime: "2 hr 10 min",
    Rating: "PG-13",
  },
  {
    Title: "Captain America: Civil War",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2016",
    UsSales: "408084349",
    WorldSales: "1153337496",
    Runtime: "2 hr 27 min",
    Rating: "PG-13",
  },
  {
    Title: "The Hunger Games",
    Distributor: "Lionsgate",
    ReleaseDate: "2012",
    UsSales: "408010692",
    WorldSales: "694394724",
    Runtime: "2 hr 22 min",
    Rating: "PG-13",
  },
  {
    Title: "Spider-Man",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2002",
    UsSales: "407022860",
    WorldSales: "825025036",
    Runtime: "2 hr 1 min",
    Rating: "PG-13",
  },
  {
    Title: "Jumanji: Welcome to the Jungle",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2017",
    UsSales: "404540171",
    WorldSales: "962542945",
    Runtime: "1 hr 59 min",
    Rating: "PG-13",
  },
  {
    Title: "Jurassic Park",
    Distributor: "Universal Pictures",
    ReleaseDate: "1993",
    UsSales: "404214720",
    WorldSales: "1033928303",
    Runtime: "2 hr 7 min",
    Rating: "PG-13",
  },
  {
    Title: "Transformers: Revenge of the Fallen",
    Distributor: "DreamWorks",
    ReleaseDate: "2009",
    UsSales: "402111870",
    WorldSales: "836303693",
    Runtime: "2 hr 29 min",
    Rating: "PG-13",
  },
  {
    Title: "Frozen",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2013",
    UsSales: "400953009",
    WorldSales: "1281508100",
    Runtime: "1 hr 42 min",
    Rating: "PG",
  },
  {
    Title: "Spider-Man: Far from Home",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2019",
    UsSales: "390532085",
    WorldSales: "1131927996",
    Runtime: "2 hr 9 min",
    Rating: "PG-13",
  },
  {
    Title: "Guardians of the Galaxy Vol. 2",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2017",
    UsSales: "389813101",
    WorldSales: "863756051",
    Runtime: "2 hr 16 min",
    Rating: "PG-13",
  },
  {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Distributor: "Warner Bros.",
    ReleaseDate: "2011",
    UsSales: "381409310",
    WorldSales: "1342321665",
    Runtime: "2 hr 10 min",
    Rating: "NA",
  },
  {
    Title: "Finding Nemo",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2003",
    UsSales: "380843261",
    WorldSales: "940352645",
    Runtime: "1 hr 40 min",
    Rating: "NA",
  },
  {
    Title: "Star Wars: Episode III - Revenge of the Sith",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "2005",
    UsSales: "380270577",
    WorldSales: "868390560",
    Runtime: "2 hr 20 min",
    Rating: "PG-13",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Distributor: "New Line Cinema",
    ReleaseDate: "2003",
    UsSales: "377845905",
    WorldSales: "1146030912",
    Runtime: "3 hr 21 min",
    Rating: "PG-13",
  },
  {
    Title: "Spider-Man 2",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2004",
    UsSales: "373585825",
    WorldSales: "788976453",
    Runtime: "2 hr 7 min",
    Rating: "PG-13",
  },
  {
    Title: "The Passion of the Christ",
    Distributor: "Newmarket Films",
    ReleaseDate: "2004",
    UsSales: "370782930",
    WorldSales: "612054506",
    Runtime: "2 hr 7 min",
    Rating: "R",
  },
  {
    Title: "The Secret Life of Pets",
    Distributor: "Universal Pictures",
    ReleaseDate: "2016",
    UsSales: "368384330",
    WorldSales: "875458631",
    Runtime: "1 hr 27 min",
    Rating: "PG",
  },
  {
    Title: "Despicable Me 2",
    Distributor: "Universal Pictures",
    ReleaseDate: "2013",
    UsSales: "368065385",
    WorldSales: "970766005",
    Runtime: "1 hr 38 min",
    Rating: "PG",
  },
  {
    Title: "The Jungle Book",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2016",
    UsSales: "364001123",
    WorldSales: "966554929",
    Runtime: "1 hr 46 min",
    Rating: "PG",
  },
  {
    Title: "Deadpool",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "2016",
    UsSales: "363070709",
    WorldSales: "782836791",
    Runtime: "1 hr 48 min",
    Rating: "R",
  },
  {
    Title: "Inside Out",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2015",
    UsSales: "356921711",
    WorldSales: "858848019",
    Runtime: "1 hr 35 min",
    Rating: "PG",
  },
  {
    Title: "Aladdin",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2019",
    UsSales: "355559216",
    WorldSales: "1050693953",
    Runtime: "2 hr 8 min",
    Rating: "PG",
  },
  {
    Title: "Furious 7",
    Distributor: "Universal Pictures",
    ReleaseDate: "2015",
    UsSales: "353007020",
    WorldSales: "1515341399",
    Runtime: "2 hr 17 min",
    Rating: "PG-13",
  },
  {
    Title: "Transformers: Dark of the Moon",
    Distributor: "DreamWorks",
    ReleaseDate: "2011",
    UsSales: "352390543",
    WorldSales: "1123794079",
    Runtime: "2 hr 34 min",
    Rating: "PG-13",
  },
  {
    Title: "American Sniper",
    Distributor: "Warner Bros.",
    ReleaseDate: "2014",
    UsSales: "350126372",
    WorldSales: "547426372",
    Runtime: "2 hr 13 min",
    Rating: "R",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Distributor: "New Line Cinema",
    ReleaseDate: "2002",
    UsSales: "342551365",
    WorldSales: "947495095",
    Runtime: "2 hr 59 min",
    Rating: "PG",
  },
  {
    Title: "Zootopia",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2016",
    UsSales: "341268248",
    WorldSales: "1024121104",
    Runtime: "1 hr 48 min",
    Rating: "NA",
  },
  {
    Title: "The Hunger Games: Mockingjay - Part 1",
    Distributor: "Lionsgate",
    ReleaseDate: "2014",
    UsSales: "337135885",
    WorldSales: "755356711",
    Runtime: "2 hr 3 min",
    Rating: "PG-13",
  },
  {
    Title: "Spider-Man 3",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2007",
    UsSales: "336530303",
    WorldSales: "894983373",
    Runtime: "2 hr 19 min",
    Rating: "PG-13",
  },
  {
    Title: "Minions",
    Distributor: "Universal Pictures",
    ReleaseDate: "2015",
    UsSales: "336045770",
    WorldSales: "1159444662",
    Runtime: "1 hr 31 min",
    Rating: "PG",
  },
  {
    Title: "Joker",
    Distributor: "Warner Bros.",
    ReleaseDate: "2019",
    UsSales: "335451311",
    WorldSales: "1074419384",
    Runtime: "2 hr 2 min",
    Rating: "R",
  },
  {
    Title: "Aquaman",
    Distributor: "Warner Bros.",
    ReleaseDate: "2018",
    UsSales: "335061807",
    WorldSales: "1148485886",
    Runtime: "2 hr 23 min",
    Rating: "NA",
  },
  {
    Title: "Spider-Man: Homecoming",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2017",
    UsSales: "334201140",
    WorldSales: "880166924",
    Runtime: "2 hr 13 min",
    Rating: "PG-13",
  },
  {
    Title: "Alice in Wonderland",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2010",
    UsSales: "334191110",
    WorldSales: "1025468216",
    Runtime: "1 hr 48 min",
    Rating: "PG",
  },
  {
    Title: "Guardians of the Galaxy",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2014",
    UsSales: "333718600",
    WorldSales: "773350147",
    Runtime: "2 hr 1 min",
    Rating: "PG-13",
  },
  {
    Title: "Forrest Gump",
    Distributor: "Paramount Pictures",
    ReleaseDate: "1994",
    UsSales: "330455270",
    WorldSales: "678226133",
    Runtime: "2 hr 22 min",
    Rating: "PG-13",
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Distributor: "Warner Bros.",
    ReleaseDate: "2016",
    UsSales: "330360194",
    WorldSales: "873637528",
    Runtime: "2 hr 32 min",
    Rating: "PG-13",
  },
  {
    Title: "It",
    Distributor: "Warner Bros.",
    ReleaseDate: "2017",
    UsSales: "328828874",
    WorldSales: "701796444",
    Runtime: "2 hr 15 min",
    Rating: "R",
  },
  {
    Title: "Suicide Squad",
    Distributor: "Warner Bros.",
    ReleaseDate: "2016",
    UsSales: "325100054",
    WorldSales: "746846894",
    Runtime: "2 hr 3 min",
    Rating: "PG-13",
  },
  {
    Title: "Deadpool 2",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "2018",
    UsSales: "324591735",
    WorldSales: "785896609",
    Runtime: "1 hr 59 min",
    Rating: "R",
  },
  {
    Title: "Shrek the Third",
    Distributor: "DreamWorks",
    ReleaseDate: "2007",
    UsSales: "322719944",
    WorldSales: "813367380",
    Runtime: "1 hr 33 min",
    Rating: "PG",
  },
  {
    Title: "Jumanji: The Next Level",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "2019",
    UsSales: "320314960",
    WorldSales: "800059707",
    Runtime: "2 hr 3 min",
    Rating: "PG-13",
  },
  {
    Title: "Transformers",
    Distributor: "DreamWorks",
    ReleaseDate: "2007",
    UsSales: "319246193",
    WorldSales: "709709780",
    Runtime: "2 hr 24 min",
    Rating: "PG-13",
  },
  {
    Title: "Iron Man",
    Distributor: "Paramount Pictures",
    ReleaseDate: "2008",
    UsSales: "319034126",
    WorldSales: "585796247",
    Runtime: "2 hr 6 min",
    Rating: "PG-13",
  },
  {
    Title: "Harry Potter and the Sorcerer's Stone",
    Distributor: "Warner Bros.",
    ReleaseDate: "2001",
    UsSales: "318087620",
    WorldSales: "1016813075",
    Runtime: "2 hr 32 min",
    Rating: "PG",
  },
  {
    Title: "Indiana Jones and the Kingdom of the Crystal Skull",
    Distributor: "Paramount Pictures",
    ReleaseDate: "2008",
    UsSales: "317101119",
    WorldSales: "790653942",
    Runtime: "2 hr 2 min",
    Rating: "PG-13",
  },
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Distributor: "New Line Cinema",
    ReleaseDate: "2001",
    UsSales: "315710750",
    WorldSales: "897690072",
    Runtime: "2 hr 58 min",
    Rating: "PG-13",
  },
  {
    Title: "Thor: Ragnarok",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2017",
    UsSales: "315058289",
    WorldSales: "853983911",
    Runtime: "2 hr 10 min",
    Rating: "PG-13",
  },
  {
    Title: "Iron Man 2",
    Distributor: "Paramount Pictures",
    ReleaseDate: "2010",
    UsSales: "312433331",
    WorldSales: "623933331",
    Runtime: "2 hr 4 min",
    Rating: "PG-13",
  },
  {
    Title: "Star Wars: Episode II - Attack of the Clones",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "2002",
    UsSales: "310676740",
    WorldSales: "653779970",
    Runtime: "2 hr 22 min",
    Rating: "PG",
  },
  {
    Title: "Pirates of the Caribbean: At World's End",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2007",
    UsSales: "309420425",
    WorldSales: "960996492",
    Runtime: "2 hr 49 min",
    Rating: "PG-13",
  },
  {
    Title: "Star Wars: Episode VI - Return of the Jedi",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "1983",
    UsSales: "309306177",
    WorldSales: "475106177",
    Runtime: "2 hr 11 min",
    Rating: "PG",
  },
  {
    Title: "Independence Day",
    Distributor: "Twentieth Century Fox",
    ReleaseDate: "1996",
    UsSales: "306169268",
    WorldSales: "817400891",
    Runtime: "2 hr 25 min",
    Rating: "PG-13",
  },
  {
    Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Distributor: "Walt Disney Studios Motion Pictures",
    ReleaseDate: "2003",
    UsSales: "305413918",
    WorldSales: "654264015",
    Runtime: "2 hr 23 min",
    Rating: "PG-13",
  },
  {
    Title: "Skyfall",
    Distributor: "Sony Pictures Entertainment (SPE)",
    ReleaseDate: "1977",
    UsSales: "304360277",
    WorldSales: "1108569499",
    Runtime: "2 hr 23 min",
    Rating: "PG-13",
  },
];

// What is the earliest year on this list, and what were the
// films from that year?

/* 
input: array of objects/ movies
output: string/ string and array

create a function that takes an array of movie objects
create empty answer array
create a loop inside the function
    inside the loop check if array is empty or 
    if array [0][1] === movie.Year(parseInt)
    if so push title and year into array in the form of an array
    else if check if the movie.Year(parseInt) < array[0][1]
    if greater set array to empty then push movie.Title and movie.Year in the form of an array
map the answer to console log each movie print year seperately

 -
*/

function earliestMovieYearAndMovies(movies) {
  let earlyMovies = [];

  for (const movie of movies) {
    if (
      earlyMovies.length === 0 ||
      earlyMovies[0][1] === parseInt(movie.ReleaseDate)
    ) {
      earlyMovies.push([movie.Title, parseInt(movie.ReleaseDate)]);
    } else if (earlyMovies[0][1] > parseInt(movie.ReleaseDate)) {
      earlyMovies = [];
      earlyMovies.push([movie.Title, parseInt(movie.ReleaseDate)]);
    }
  }
  console.log(earlyMovies);
}

earliestMovieYearAndMovies(movies);