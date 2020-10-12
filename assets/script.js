// Set the body to a variable
var body = document.body;

// Create navbar elements
var navEl = document.createElement("nav");
var navLinkH4 = document.createElement("h4");
var navLink = document.createElement("a");
var timerEl = document.createElement("h4");
var timerCountEl = document.createElement("span");

// Create main quiz section elements
var mainEl = document.createElement("div");
var quizEl = document.createElement("div");
var quizRow = document.createElement("div");
var quizCol = document.createElement("div");
var quizCard = document.createElement("div");

// Create progress bar row
// Create progress bar cols
// Create progress bar div
//var progressEl = document.querySelector("#progress");

// Create start card elements
var startCard = document.createElement("div");
var startHeader = document.createElement("div");
var startHeaderText = document.createElement("h1");
var startBody = document.createElement("div");
var startBodyText = document.createElement("p");
var startFooter = document.createElement("div");
var startButton = document.createElement("button");

// Create 10 dynamic questions
// Track current question
// Create 4 answer button variables
// Create correct/wrong show/hide
// Create variable to track score in local storage

// Create question card elements
var questionCard = document.createElement("div");
var questionHeader = document.createElement("div");
var questionText = document.createElement("h3");
var questionBody = document.createElement("div");
var answerButtons = document.createElement("div");
var answerButton1 = document.createElement("button");
var answerButton2 = document.createElement("button");
var answerButton3 = document.createElement("button");
var answerButton4 = document.createElement("button");
var questionFooter = document.createElement("div");
var questionFooterText = document.createElement("h5");


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

startCard.setAttribute("id", "start-card");
startButton.setAttribute("id", "start-button");

questionCard.setAttribute("id", "question-card");
questionText.setAttribute("id", "question-text");
answerButtons.setAttribute("id", "buttons");
answerButton1.setAttribute("id", "answer-button-1");
answerButton2.setAttribute("id", "answer-button-2");
answerButton3.setAttribute("id", "answer-button-3");
answerButton4.setAttribute("id", "answer-button-4");
questionFooter.setAttribute("id", "question-footer");
questionFooterText.setAttribute("id", "question-footer-text");

// Style all of our elements
navEl.setAttribute("class", "navbar navbar-dark fixed-top");
timerCountEl.setAttribute("class", "timer-format");

mainEl.setAttribute("class", "container-fluid");
quizEl.setAttribute("class", "container-fluid");
quizRow.setAttribute("class", "row");
quizCol.setAttribute("class", "col-8 mx-auto");
quizCard.setAttribute("class", "card bg-transparent");

startHeader.setAttribute("class", "start-header bg-transparent");
startBody.setAttribute("class", "start-body");
startFooter.setAttribute("class", "card-footer bg-transparent text-center");
startButton.setAttribute("class", "btn btn-primary text-center");
startButton.setAttribute("style", "display: inline");

questionHeader.setAttribute("class", "card-header bg-transparent");
questionBody.setAttribute("class", "card-body");
questionFooter.setAttribute("class", "card-footer bg-transparent");
questionFooter.setAttribute("style", "display: none");
answerButtons.setAttribute("style", "display: contents");
answerButton1.setAttribute("class", "btn btn-primary");
answerButton2.setAttribute("class", "btn btn-primary");
answerButton3.setAttribute("class", "btn btn-primary");
answerButton4.setAttribute("class", "btn btn-primary");

// Create hyperlinks
navLink.href = "./index.html";

// Build navbar
function buildNavbar() {

    // Set navbar text content
    navLink.textContent = "View High Scores";
    timerEl.textContent = "Time Remaining: ";
    timerCountEl.textContent = 75;

    // Append navbar elements
    body.appendChild(navEl);
    navEl.appendChild(navLinkH4);
    navLinkH4.appendChild(navLink);
    navEl.appendChild(timerEl);
    timerEl.appendChild(timerCountEl);
}

// Build main quiz container
function buildMainQuiz() {
    body.appendChild(mainEl);
    mainEl.appendChild(quizEl);
    quizEl.appendChild(quizRow);
    quizRow.appendChild(quizCol);
    quizCol.appendChild(quizCard);
}


// Build start card
function buildStartCard() {

    // Set start card text content
    startHeaderText.textContent = "Coding Quiz Challenge";
    startBodyText.textContent = "Try to answer the following code-related questions within the time limit. But beware! For every answer you get wrong, you'll lose 10 seconds from the timer!";
    startButton.textContent = "Start Quiz!";

    // Append start card elements
    quizCard.appendChild(startCard);
    startCard.appendChild(startHeader);
    startHeader.appendChild(startHeaderText);
    startCard.appendChild(startBody);
    startBody.appendChild(startBodyText);
    startCard.appendChild(startFooter);
    startFooter.appendChild(startButton);
}

// Build question card
function buildQuiz() {

    quizCard.appendChild(questionCard);
    questionCard.appendChild(questionHeader);
    questionHeader.appendChild(questionText);
    questionCard.appendChild(questionBody);
    questionBody.appendChild(answerButtons);
    answerButtons.appendChild(answerButton1);
    answerButtons.appendChild(answerButton2);
    answerButtons.appendChild(answerButton3);
    answerButtons.appendChild(answerButton4);
    questionCard.appendChild(questionFooter);
    questionFooter.appendChild(questionFooterText);

    quizCard.replaceChild(questionCard, startCard);





    var currentQuestion = 0;
    var userScore = 0;

    askQuestion(currentQuestion);

    function askQuestion() {

        x = currentQuestion;
        i = 0;

        var questions = [
            ["What is 2+2?", 6, 4, 7, 42, "answer-button-2"],
            ["What is 7+3?", 10, 342, 0, -14, "answer-button-1"],
        ];

        console.log("curr quest: " + currentQuestion);

        questionText.textContent = questions[x][i];
        answerButton1.textContent = questions[x][i + 1];
        answerButton2.textContent = questions[x][i + 2];
        answerButton3.textContent = questions[x][i + 3];
        answerButton4.textContent = questions[x][i + 4];

        answerButtons.addEventListener("click", function (event) {
            event.preventDefault;
            console.log(event.target.id);

            if (event.target.id === questions[x][i + 5]) {
                questionFooterText.textContent = "Correct!";
                toggleFooter();
                userScore = userScore + 10;
                console.log(userScore);
                currentQuestion = i + 1;
                setTimeout(() => {
                    toggleFooter();
                    askQuestion();
                }, 1000);
            } else {
                questionFooterText.textContent = "Wrong!";
                toggleFooter();
                console.log(userScore);
                currentQuestion = i + 1;
                setTimeout(() => {
                    toggleFooter();
                    askQuestion();
                }, 1000);
            }

            // Toggle question card footer show/hide
            function toggleFooter() {
                var footerVisibility = document.getElementById("question-footer");
                if (footerVisibility.style.display === "none") {
                    footerVisibility.style.display = "block";
                } else {
                    footerVisibility.style.display = "none";
                }
            }

        });






    }





}














// Page load
buildNavbar();
buildMainQuiz();
buildStartCard();

var secondsLeft = 75;

// Click button to start quiz
startButton.addEventListener("click", function () {

    startTimer();
    buildQuiz();
});



// Timer countdown
function startTimer() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerCountEl.textContent = secondsLeft;

        if (secondsLeft > 5 && secondsLeft <= 10) {
            timerCountEl.setAttribute("class", "ten-left");
        } else if (secondsLeft <= 5) {
            timerCountEl.setAttribute("class", "five-left");
        }

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}


