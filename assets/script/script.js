var totalWins;
var totalLosses;

quizData = [
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

var questionNumber = 0;

startButton.addEventListener('click', function(event) {
    event.preventDefault;
    quiz.removeAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");
    playQuiz();
})

function playQuiz() {
    // quiz.innerHTML = '';
    // answers.innerHTML = '';

    var eachQuestion = document.createElement("h2");
    eachQuestion.textContent = quizData[questionNumber].question;
    question.append(eachQuestion);

    for (var i=0; i < (quizData[questionNumber].answer).length; i++) {
        var eachAnswer = document.createElement("p");
        eachAnswer.setAttribute("class", "each-answer")
        eachAnswer.textContent = quizData[questionNumber].answer[i]
        answers.append(eachAnswer);
    }
}

answers.addEventListener('click', function(event) {
    //console.log(event.target.textContent);
    if (event.target.textContent === quizData[questionNumber].answer[0]) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
})

function rightAnswer() {
    right.removeAttribute("class", "hidden");
    questionNumber += 1;
    //playQuiz();
}

function wrongAnswer() {
    wrong.removeAttribute("class", "hidden");
    questionNumber += 1;
    //playQuiz();
}