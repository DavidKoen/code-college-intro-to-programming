document.getElementById("myName").innerHTML = "David KOEN" + " aka Davido Dawie"; // LOOKS FOR THE ID THEN CHANGES THE VALUE.

let newOne;
let newTwo;
let newThree;

document.getElementById("changeList").onclick = newList; // ONCLICK IS AN EVENT HANDLER, AND WILL WAIT FOR THE EVENT TO ACCURE FOR THE CALLED ID.

function newList(){
    newOne = prompt("Enter a new activity: ");
    newTwo = prompt("Enter a new activity: ");
    newThree = prompt("Enter a new activity: ");
    updateList()
};

function updateList() {
    document.getElementById("firstThing").innerHTML = newOne;
    document.getElementById("secondThing").innerHTML = newTwo;
    document.getElementById("thirdThing").innerHTML = newThree
};