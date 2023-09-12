var totalWins;
var totalLosses;

quizData = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["alerts", "strings", "booleans", "numbers"] 
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
var quizVisibility = document.querySelector(".quiz");

startButton.addEventListener('click', function() {
    quizVisibility.removeAttribute("class", "hidden");
    startButton.setAttribute("class", "hidden")
})