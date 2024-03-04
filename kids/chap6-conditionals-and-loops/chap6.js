// IF STATEMENT

// let myName = "David";

// alert("Hello " + myName + "!");

// if (myName.length < 6) { // THIS IS A CONDITION. THE LOOP WILL ONLY RUN THE BODY"S CODE IF THE CONDITION IS TRUE.
//     alert('That is quite a short name.');
// };

// IF, ELSE STATEMENT

// let myName = 'David';

// alert("Hello " + myName + "!");

// if (myName > 6) {
//     alert('That is quite a long name.');
// } else {
//     alert('That is quite a short name.');
// };

// CHAINING IF, ELSE STATEMENTS

// let chicken = confirm('Is there chicken?');
// let beef = confirm("Is there beef?");
// let lamb = confirm('Do you then have lamb?');

// if (chicken) {
//     alert('Awesome! I will have that then.');
// } else if (beef) {
//     alert('Beef it is then.') 
// } else if (lamb) {
//     alert('I will take the lamb.');
// } else {
//     alert('Nevermind I am not that hungry.')
// };

// alert("Time for a good night's sleep.");

// STATEMENT TASK

// let name = 'David';
// let mom = "Gwen";
// let dad = "Anton";

// let ask = prompt('What is your name?').toLowerCase();

// if (ask == name) {
//     alert('Hello David.');
// } else if (ask == mom) {
//     alert('Hello Gwen.');
// } else if (ask == dad) {
//     alert("Hello Anton.");
// } else {
//     alert('Who are you?');
// };

// WHILE LOOP

// let sheep = 0;

// while (sheep < 4) {
//     alert("You're missing sheep.");
//     sheep++;
//     alert("A sheep came back.")
// };

// alert('All your sheep are back.');

// FOR LOOP

// for (let i = 0; i < 5; ++i) {
//     console.log("Baaa!");
// };

// for (let countDown = 10; countDown > 0; --countDown) {
//     console.log("It's the final count down!");
// };

// let stop = 10;

// for (let i = 0; i < stop; ++i) {
//     console.log('hello');
// };

// alert("Badadada da da da!");

// LOOPS AND ARRAYS AND STRINGS.

// let animals = ['dog', 'cat', 'parrot', 'fish'];

// for (let i = 0; i < 4; ++i) {
//     console.log("I have a " + animals[i] + ".");
// };

// CHALLENGE

// let myFriends = ['Hendrik', 'Dean', 'MC'];
// let newFriends = ['Chelsea', 'Zee', 'Jason Botha'];

// for (let i = 0; i < newFriends.length; ++i) {
//     myFriends.push(newFriends[i]);
// };

// console.log(myFriends); // THIS LOOPS THROUGH AN ARRAY ADDING ITS ELEMENTS TO A DIFFERENT ARRAY.

// let alpha = 'abcdefghijklmnopqrstuvwxyz';
// let i = 0;
// let fill = '';

// while (i < 6) {
//     fill += alpha[Math.floor(Math.random() * alpha.length)];
//     ++i;
// };

// console.log(fill); // THIS LOOPS THROUGH AN ELEMENT 6 TIMES ADDING THE SAME NUMBER OF ELEMENTS TO A DIFFERENT ARRAY.

// let input = prompt('L3ts H4CK:');
// let output = "";

// for (let i = 0; i < input.length; ++i) {
//     if (input[i] === "a") {
//         output += "4";
//     } else if (input[i] === "e") {
//         output += "3";
//     } else if (input[i] === "i") {
//         output += "1";
//     } else if (input[i] === "o") {
//         output += "0";
//     } else {
//         output += input[i];
//     }
// };

// alert(output);