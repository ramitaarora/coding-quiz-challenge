var highScoresDiv = document.querySelector('.display-scores');
var displayScores = document.querySelector('.view-scores');

var highScores = JSON.parse(localStorage.getItem("scores"));

if (!highScores) {
    displayScores.innerHTML = '';
    var warning = document.createElement("p").textContent = "No scores yet!"
    displayScores.append(warning);
} else {
    for (let i=0; i < highScores.length; i++) {
        var eachScore = document.createElement("li")
        eachScore.textContent = highScores[i].name + ": " + highScores[i].score;
        displayScores.append(eachScore);
    }
}