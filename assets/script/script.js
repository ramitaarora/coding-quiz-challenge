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

startButton.addEventListener('click', function() {
    quiz.removeAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden");
    playQuiz();
})

function playQuiz() {
    var questionNumber = 0;
    nextQuestion([questionNumber]);

    function nextQuestion() {
        var eachQuestion = document.createElement("h2");
        eachQuestion.textContent = quizData[questionNumber].question;
        question.append(eachQuestion);

        for (var i=0; i < (quizData[questionNumber].answer).length; i++) {
            var eachAnswer = document.createElement("p");
            eachAnswer.textContent = quizData[questionNumber].answer[i]
            answers.append(eachAnswer);
        }
    }
    

    
}