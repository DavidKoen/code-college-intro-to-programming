// let cat = {
//     legs: 4,
//     "full name": 'Billy', // OBJECT KEYS CAN NOT HAVE SPACES UNLESS PUT IN QUOTES.
//     tail: 0
// };

// console.log(cat["tail"]);
// console.log(cat["full name"]);

// console.log(Object.keys(cat)); // LISTS ALL THE KEYS IN AN OBJECT.

// ADDING VALUES TO OBJECTS.

// let lfcPlayers = {};

// lfcPlayers['Goalie'] = "Alisson";
// lfcPlayers['Defenders'] = ['VVD', 'Trent', 'Robo', 'Konate'];

// console.log(lfcPlayers);

// COMBINING OBJECTS AND ARRAYS.

// let lfcPlayerPositions = [
//     {name: 'Jota', position: 'Forward'},
//     {name: 'Mo', position: 'Winger'},
//     {name: 'Nunez', position: 'Striker'}
// ];

// let gomez = {name: 'Gomez', bestSeasons: [2019, 2021, 2022], nickName: 'Joe'};
// let harvey = {name: 'Harvey', bestSeasons: [2020, 2023], nickName: 'Harv'};

// let lfc2players = [gomez, harvey];

// let lfcPlayerValues = {};

// lfcPlayerValues['Robo'] = 40;
// lfcPlayerValues['Trent'] = 90;
// lfcPlayerValues['Ali'] = 70;

// lfcPlayerValues['Ali'] += 30;
// console.log(lfcPlayerValues['Ali']);

// console.log(lfcPlayerValues);

// console.log(lfcPlayerPositions[1]);
// console.log(lfcPlayerPositions[1]['position']);

// console.log(lfc2players[1]);
// console.log(lfc2players[0]['nickName']);

// OBJECTS INSIDE OBJECTS.

// let premierLeague = {
//     chelsea: {
//         teamValue: 2,
//         captain: 'James'
//     },
//     lfc: {
//         teamValue: 4,
//         captain: 'VVD'
//     },
//     arsenal: {
//         teamValue: 1,
//         captain: 'Saha'
//     }
// };

// console.log(premierLeague['lfc']['captain']); // WHEN SEARCHING OBJECTS YOU USE KEYWORDS NOT INDEXING.

// let manCity = {
//     teamValue: 6,
//     captain: 'de Bruyne'
// };

// premierLeague["manCity"] = manCity; // THIS ADDS AN OBJECT TO YOUR OBJECT.

// console.log(premierLeague);

// CHALLENGE

let scores = {
    zee: {score: 0},
    hendrik: {score: 0},
    grant: {score: 0}
};

scores['zee']['score'] =+ 1;

console.log(scores);

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

delete myCrazyObject['some array'][2]['number']; // THIS DELETES THE SELECTED ELEMENT.

console.log(myCrazyObject);