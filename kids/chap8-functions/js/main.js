// HOW TO CREATE AND CALL A FUNCTION.

// let myFunction = function() {
//     alert("Simple function!");
// }

// myFunction();

// betterFunction();

// function betterFunction() {
//     console.log("Better ways to do a function.")
// };

// // PASSING ARGUMENTS INTO A FUNCTION.

// sayHelloTo("David Koen");
// sayHelloTo("Davido Dawie"); // YOU CAN USE THE ARGUMENT AS MANY TIMES WITH AS MUCH DATA AS YOU WANT.

// function sayHelloTo(name) { // "NAME" IS THE PARAMETER.
//     alert("Hello " + name + "!")
// };

// ADDING LOOPS INSIDE FUNCTIONS.

// function drawCats(howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//     }
// };

// drawCats(8); // 8 IS THE ARGUMENT. WHICH IS THE VALUE PASSED TO A PARAMETER.

// ADDING MORE THAN ONE PARAMETER.

// function greetings(firstName, secondName) {
//     console.log(firstName + " is good friends with " + secondName)
// };

// greetings("David", "Billy"); 

// let printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatToDraw);
//     }
// };

// printMultipleTimes(5, "=^.^=");

// THE RETURN VALUE IS A VALUE THAT A FUNCTION RETURNS. 

// function hikes(location, time) {
//     return (" decided to hike " + location + ", which will take about " + time + " hours to complete.")
// };

// let firstHike = hikes("Chapman's Peak", 2);
// let secondHike = hikes("Greenpoint", 1.5);

// let heavyHikers = ["John", "Bill", "Nick"];
// let lightHikers = ["Tom", "Ben", "Phil"];

// for (i = 0; i < heavyHikers.length; i++) {
//     console.log(heavyHikers[i] + firstHike);
// }

// for (i = 0; i < lightHikers.length; i++) {
//     console.log(lightHikers[i] + secondHike);
// }

// let letters = [1, 2, 3, 4, 5];

// function randomize(lotto) {
//     return lotto[Math.floor(Math.random() * lotto.length)];
// };

// console.log(randomize(letters));

// INSULT GENERATOR

// let inputName = prompt('Input your name, or press "cancel" to quit.');

// genInsult();

// function pickRandomWord(thePick) {
//     return thePick[Math.floor(Math.random() * thePick.length)]
// };

// function genInsult() {

//     let bodyParts = ["hair", "feet", "nose", "bum"];

//     let insults = ["stinky", "funny looking", "gross", "weird"]

//     let moreInsults = ["off!", "crazy!"];

//     let theDiss = inputName + " thinks Benjamin's " + pickRandomWord(bodyParts) + " is " + pickRandomWord(insults) + " and " + pickRandomWord(moreInsults);

//     alert(theDiss);
// };

// LEAVING A FUNCTION EARLY WITH THE RETURN VALUE.

// let names = ["Fred", "David", "Michael"];

// nameLength();

// function randomize(thePick) {
//     return thePick[Math.floor(Math.random() * thePick.length)];
// };

// function nameLength() {
//     console.log(randomize(names));
//     let randomNames = randomize(names);
//     if (randomNames.length < 5) {
//         return alert("Short name.");
//     } 
//     return alert("Long name.");
// };

// CHALLENGE ONE

// function multiply() {
//     return 36325 * 9824;
// };

// function add() {
//     return multiply() + 777;
// };
// console.log(add());

// CHALLENGE TWO

// function areArraysSame(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true;
// };

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

// HANGMAN REMAKE

// Write your functions here

let word = pickWord();

let answerArray = setupAnswerArray();

let remainingLetters = word.length;

let guess;

let lives = 3;

while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress(answerArray);
    guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
};

showAnswerAndCongratulatePlayer(answerArray);

// FILL THE FOLLOWING FUNCTIONS:

function pickWord() {
    let words = ["hello", "bye", "cheers"];
    let answer = words[Math.floor(Math.random() * words.length)];
    return answer
};

function setupAnswerArray() {
    let theArray = [];
    for (let i = 0; i < word.length; i++) {
        theArray[i] = "_";
    }
    return theArray;
};

function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
};

function getGuess() {
    return prompt("Guess your answer, or press cancel to exit.");
};

function updateGameState(guess, word, answerArray) {
    let correctG = 0;
    for (let j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            if (answerArray[j] !== "_") {
                alert("You have already inserted " + guess);
                correctG++;
                break
            }
            else {
                answerArray[j] = guess;
                correctG++;
            }
        }
    }
    if (correctG === 0) {
        lives--;
    }
    return correctG;
};

function showAnswerAndCongratulatePlayer(answerArray) {
    if (guess === null) {
        alert("Sorry to see you leaving.\nThe answer was " + word);
    } else if (remainingLetters === 0) {
        alert("Congratulations! The word is " + word);
    } else if (lives === 0) {
        alert("You ran out of lives.The word was " + word);
    } else {
        alert("Something seriously went wrong!");
    }
};