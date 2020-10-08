// Set the body, navbar, and main to variables
var body = document.body;

// Create all necessary elements and variables for navbar
var navEl = document.createElement("nav");
var navLinkEl = document.createElement("h4");
var timerEl = document.createElement("h4");
var timerCountEl = document.createElement("span");
var secondsLeft = 75;

// Set IDs to elements
timerCountEl.setAttribute("id", "timer");

// Set the text content of relevant elements
navLinkEl.textContent = "View High Scores";
timerEl.textContent = "Time: ";

// Append all of our elements
body.appendChild(navEl);
navEl.appendChild(navLinkEl);
navEl.appendChild(timerEl);
timerEl.appendChild(timerCountEl);

// Style all of our elements
body.setAttribute("style", "padding: 0;");
navEl.setAttribute("class", "navbar navbar-dark fixed-top");

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


// Create all necessary elements for progress bar
//var progressEl = document.querySelector("#progress");

// Create all necessary elements for main section


setTime();