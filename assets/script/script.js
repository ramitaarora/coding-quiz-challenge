var quizData = [
    {
        question: "Commonly used data types do NOT include:",
        answer: ["alerts", "strings", "booleans", "numbers"] 
    },
    {
        question: "The condition in an if/else state is enclosed with:",
        answer: ["curly brackets", "quotes", "parenthesis", "square brackets"]
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answer: ["all of the above", "strings", "numbers", "other arrays"]
    },
    {
        question: "Fill in the blank: string values must be enclosed with _____ when being assigned to variables.",
        answer: ["quotes", "curly brackets", "commas", "parenthesis"]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["console.log", "JavaScript", "terminal/bash", "for loops"]
    }
]

var startButton = document.querySelector("#start-button");
var quiz = document.querySelector(".quiz");
var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var selectAnswer = document.querySelector(".each-answer");
var right = document.querySelector(".right");
var wrong = document.querySelector(".wrong");
var viewScore = document.querySelector(".view-score");
var playAgain = document.querySelector(".play-again");
var playAgainButton = document.querySelector('#play-again-button');
var timer = document.querySelector(".timer");
var enterName = document.querySelector(".enter-name");
var nameInput = document.querySelector("#user-name");
var submitName = document.querySelector("#submit-name");
var saved = document.querySelector(".saved");

var totalScore = 0;
var questionNumber = 0;
var secondsLeft = 10;
var percentage;
var scoresArray = [];
var prevScores;
var highScore;

function quizTimer() {
    var timerInterval = setInterval(function () {
        if (secondsLeft === 0 || questionNumber === quizData.length) {
            clearInterval(timerInterval);
            calculateScore();
        } else {
            secondsLeft--;
            timer.textContent = "Timer: " + secondsLeft;
        }
    }, 1000)
}

startButton.addEventListener('click', function(event) {
    event.preventDefault();
    startButton.setAttribute("class", "hidden");
    quizTimer();
    playQuiz();
})

playAgainButton.addEventListener('click', function (event) {
    event.preventDefault();
    questionNumber = 0;
    totalScore = 0;
    secondsLeft = 10;
    percentage;
    viewScore.innerHTML = '';
    nameInput.value;
    timer.textContent = "Timer: " + secondsLeft;

    enterName.setAttribute("class", "hidden");
    viewScore.setAttribute("class", "hidden");
    playAgain.setAttribute("class", "hidden");
    saved.setAttribute("class", "hidden");

    playQuiz();
    quizTimer();
})

answers.addEventListener('click', function(event) {
    wrong.setAttribute("class", "hidden");
    right.setAttribute("class", "hidden");
    if (event.target.textContent === quizData[questionNumber].answer[0]) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
})

function rightAnswer() {
    right.removeAttribute("class", "hidden");
    questionNumber += 1;
    totalScore += 1;
    playQuiz();
}

function wrongAnswer() {
    wrong.removeAttribute("class", "hidden");
    questionNumber += 1;
    playQuiz();
}

function calculateScore() {
    wrong.setAttribute("class", "hidden");
    right.setAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';

    percentage = (totalScore / quizData.length) * 100;
    var displayScore = document.createElement("h2");
    displayScore.textContent = "Total score: " + percentage + "%";
    viewScore.append(displayScore);
    viewScore.removeAttribute("class", "hidden");

    saveHighScore(percentage);
}

function saveHighScore(newScore) {
    saved.setAttribute("class", "hidden");
    enterName.removeAttribute("class", "hidden");
    playAgain.removeAttribute("class", "hidden");

    submitName.addEventListener('click', function(event) {
        event.preventDefault();
        
        highScore = {name: nameInput.value, score: newScore};
        scoresArray.push(highScore);
        localStorage.setItem("scores", JSON.stringify(scoresArray));
        
        saved.removeAttribute("class", "hidden");
        enterName.setAttribute("class", "hidden");
    })
}

function playQuiz() {
    quiz.removeAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';

    if (questionNumber < quizData.length && secondsLeft > 0) {

        var eachQuestion = document.createElement("h2");
        eachQuestion.textContent = quizData[questionNumber].question;
        question.append(eachQuestion);

        for (var i=0; i < (quizData[questionNumber].answer).length; i++) {
            var eachAnswer = document.createElement("p");
            eachAnswer.setAttribute("class", "each-answer");
            eachAnswer.textContent = quizData[questionNumber].answer[i];
            answers.append(eachAnswer);
        }
    }
}