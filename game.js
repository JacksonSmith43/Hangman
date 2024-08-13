document.addEventListener("DOMContentLoaded", function () {

    let exitGame = document.getElementById("exit-game");
    let nextWord = document.getElementById("next-word");
    let word = document.getElementById("random-word");

    const LIVES = 11;
    let usedLetters = [LIVES];
    let incorrectLetter = [];
    let correctLetter = [];
    let wordsArray = ["miscellaneous", "music", "apple", "compiler"];


    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html"
    });

    nextWord.addEventListener("click", function () {
        let wordsArray = ["miscellaneous", "music", "apple", "compiler"];
        var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        word.textContent = randomWord;
    });


    document.addEventListener("keydown", function (event) {

        if (event.defaultPrevented) { // If the event has already been processed.
            return;
        }
    })


    function randomWordGenerator() {
        //let wordsArray = ["miscellaneous", "music", "apple", "compiler"];

    }


});