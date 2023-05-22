let numClicks = -1;
let level = 0;
let correctPattern = [];
let userPattern = [];
let colors = ["green", "red", "blue", "yellow"];

$(".box").click ( function (buttonClicked) {
    numClicks++;
    let color = buttonClicked.target.id;
    playAudio(color);
    clickAnimation('#'+color);
    userPattern.push(color);
    checkAnswer(color);
});

function checkAnswer(color) {
    if (color == correctPattern[numClicks]) {
        if (userPattern.length == correctPattern.length) {
            setTimeout( function() {
                userPattern = [];
                newSequence();
                numClicks = -1;
            }, 1000);
        }
    }
    else {
        $("#message").text("Wrong!");
        $("#title").text("Game Over");
        userPattern = [];
        correctPattern = [];
        numClicks = -1;
        level = 0;
    }
}

function playAudio(color) {
    let relpath = "sounds/"+color+".mp3";
    let audio = new Audio(relpath);
    audio.play();
}

function clickAnimation(id) {
    $(id).fadeOut(100).fadeIn(100);
}

function newSequence() {
    level++;
    $("#message").text("Level : " + level);
    let newColor = colors[Math.floor(Math.random()*4)];
    correctPattern.push(newColor);
    playAudio(newColor);
    clickAnimation('#'+newColor);
}

$("#start").click (function() {
    $("#title").text("Simon Game");
    numClicks = -1;
    level = 0;
    correctPattern = [];
    userPattern = [];
    newSequence();
});