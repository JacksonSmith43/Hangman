document.addEventListener("DOMContentLoaded", function () {

    let exitGame = document.getElementById("exit-game");
    let nextWord = document.getElementById("next-word");
    let word = document.getElementById("random-word");
    let wordLength = document.getElementById("word-length");

    const LIVES = 11;
    let usedLetters = [LIVES];
    let incorrectLetter = [];
    let correctLetter = [];


    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html"
    });

    nextWord.addEventListener("click", function () {
        randomWordGenerator();
    });


    document.addEventListener("keydown", function (event) {

        if (event.defaultPrevented) { // If the event has already been processed.
            return;
        }
    })


    function randomWordGenerator() {
        let wordsArray = ["miscellaneous", "music", "apple", "compiler"];
        let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        let lengthOfWord = randomWord.length;
        let dash = '';

        for (let i = 0; i < lengthOfWord; i++) {
            dash += '-';
        }
        wordLength.textContent = lengthOfWord;
        word.textContent = dash;
        return 1;
    }


});