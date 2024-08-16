document.addEventListener("DOMContentLoaded", function () {

    let exitGame = document.getElementById("exit-game");
    let nextWord = document.getElementById("next-word");
    let word = document.getElementById("word");
    let wordLength = document.getElementById("word-length");
    let userInput = document.getElementById("user-input");
    let submitButton = document.getElementById("submit-button");

    const LIVES = 11;
    let usedLetters = [];
    let incorrectLetter = [];
    let correctLetter = [];
    let wordsArray = ["miscellaneous", "music", "apple", "compiler"];
    let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    let lengthOfWord = randomWord.length;
    let dash = '';

    for (let i = 0; i < lengthOfWord; i++) {
        dash += '-';
    }
    wordLength.textContent = `Länge des Wortes: ${lengthOfWord}`;
    word.textContent = dash;

    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html";
    });


    nextWord.addEventListener("click", function () {
        window.location.reload();
    });

    document.addEventListener("keydown", function (event) {

        if (event.defaultPrevented) { // If the event has already been processed.
            return;
        }
    })


    submitButton.addEventListener("click", function () {

        let userLetter = userInput.value.toLowerCase();

        if (userLetter.length === 0 || usedLetters.includes(userLetter)) {
            return;
        }

        usedLetters.push(userLetter);
        let newDash = '';

        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userLetter) {
                newDash += userLetter;

            } else {
                newDash += dash[i];
            }
        }

        dash = newDash;
        word.textContent = dash;
        userInput.value = '';
    });


});