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

var totalScore = 0;
var questionNumber = 0;

startButton.addEventListener('click', function(event) {
    event.preventDefault;
    quiz.removeAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");
    playQuiz();
})

function playQuiz() {
    if (questionNumber < quizData.length) {

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
        wrong.setAttribute("class", "hidden");
        right.setAttribute("class", "hidden");
        calculateScore();
    }
}

answers.addEventListener('click', function(event) {
    //console.log(event.target.textContent);
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
    question.innerHTML = '';
    answers.innerHTML = '';
    playQuiz();
}

function wrongAnswer() {
    wrong.removeAttribute("class", "hidden");
    questionNumber += 1;
    question.innerHTML = '';
    answers.innerHTML = '';
    playQuiz();
}

function calculateScore() {
    var percentage = (totalScore / quizData.length) * 100;
    var displayScore = document.createElement("h2");
    displayScore.textContent = "Total score: " + percentage + "%";
    quiz.append(displayScore);
    quiz.removeAttribute("class", "hidden");
    startButton.removeAttribute("class", "hidden");
}