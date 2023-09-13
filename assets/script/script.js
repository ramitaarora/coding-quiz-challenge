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
var score = document.querySelector(".score");
var playAgain = document.querySelector(".play-again");
var playAgainButton = document.querySelector('#play-again-button');
var timer = document.querySelector(".timer");

var totalScore = 0;
var questionNumber = 0;
var secondsLeft = 10;

function quizTimer() {
    var timerInterval = setInterval(function () {
        if (secondsLeft === 0) {
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
    score.innerHTML = '';
    timer.textContent = "Timer: " + secondsLeft;
    score.setAttribute("class", "hidden");
    playAgain.setAttribute("class", "hidden");
    quizTimer.removeAttribute("class", "hidden");
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
    quizTimer.setAttribute("class", "hidden");
    wrong.setAttribute("class", "hidden");
    right.setAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';
    var percentage = (totalScore / quizData.length) * 100;
    var displayScore = document.createElement("h2");
    displayScore.textContent = "Total score: " + percentage + "%";
    score.append(displayScore);
    score.removeAttribute("class", "hidden");
    playAgain.removeAttribute("class", "hidden");
}

function playQuiz() {
    quiz.removeAttribute("class", "hidden");
    question.innerHTML = '';
    answers.innerHTML = '';

    if (questionNumber < quizData.length && secondsLeft > 0) {

        var eachQuestion = document.createElement("h2");
        eachQuestion.textContent = quizData[questionNumber].question;
        question.append(eachQuestion);
        //console.log(questionNumber);

        for (var i=0; i < (quizData[questionNumber].answer).length; i++) {
            var eachAnswer = document.createElement("p");
            eachAnswer.setAttribute("class", "each-answer")
            eachAnswer.textContent = quizData[questionNumber].answer[i]
            answers.append(eachAnswer);
        }
    } else {
        calculateScore();
    }
}