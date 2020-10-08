// Set the main to a variable
var body = document.body;

// Create all necessary elements and variables for navbar
var navEl = document.createElement("nav");
var navLinkH4 = document.createElement("h4");
var navLink = document.createElement("a");
var timerEl = document.createElement("h4");
var timerCountEl = document.createElement("span");
var secondsLeft = 75;

// Create main section
var mainEl = document.createElement("div");

// Create progress bar row
// Create progress bar cols
// Create progress bar div
//var progressEl = document.querySelector("#progress");

var quizEl = document.createElement("div");
var quizRow = document.createElement("div");
var quizCol = document.createElement("div");
var quizCard = document.createElement("div");

// Create start button
var startEl = document.createElement("div");
var startHeader = document.createElement("div");
var startHeaderText = document.createElement("h1");
var startBody = document.createElement("div");
var startBodyText = document.createElement("p");

// Create 10 dynamic questions
// Create 4 answer button variables
// Create correct/wrong show/hide
// Create variable to track score in local storage

// Create final element
// Pull back final score from local storage
// Create form element for initials
// Create form submit

// Create high scores screen
// Create go back/play again button
// Create clear high scores button

// Set IDs to elements
timerCountEl.setAttribute("id", "timer");
quizCard.setAttribute("id", "quiz");
startEl.setAttribute("id", "start-card");

// Set the text content of relevant elements
navLink.textContent = "View High Scores";
timerEl.textContent = "Time: ";
startHeaderText.textContent = "Coding Quiz Challenge";
startBodyText.textContent = "Try to answer the following code-related questions within the time limit. But beware! For every answer you get wrong, you'll lose 10 seconds from the timer!"

// Create hyperlinks
navLink.href = "./index.html";


// Append all of our elements
body.appendChild(navEl);
navEl.appendChild(navLinkH4);
navLinkH4.appendChild(navLink);
navEl.appendChild(timerEl);
timerEl.appendChild(timerCountEl);

body.appendChild(mainEl);

mainEl.appendChild(quizEl);
quizEl.appendChild(quizRow);
quizRow.appendChild(quizCol);
quizCol.appendChild(quizCard);

quizCard.appendChild(startEl);
startEl.appendChild(startHeader);
startHeader.appendChild(startHeaderText);
startEl.appendChild(startBody);
startBody.appendChild(startBodyText);


// Style all of our elements
navEl.setAttribute("class", "navbar navbar-dark fixed-top");

mainEl.setAttribute("class", "container-fluid");

quizEl.setAttribute("class", "container-fluid");
quizRow.setAttribute("class", "row");
quizCol.setAttribute("class", "col-8 mx-auto");
quizCard.setAttribute("class", "card bg-transparent");

startHeader.setAttribute("class", "card-header bg-transparent");
startBody.setAttribute("class", "card-body");

// Timer countdown
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerCountEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}

setTime();