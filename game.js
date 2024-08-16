document.addEventListener("DOMContentLoaded", function () {

    let exitGame = document.getElementById("exit-game");
    let nextWord = document.getElementById("next-word");
    let wordInputs = document.getElementById("word-inputs");
    let wordLength = document.getElementById("word-length");
    let incorrectLettersDiv = document.getElementById("incorrect-letters");

    let LIVES = 11;
    let incorrectLetters = [];

    let wordsArray = ["miscellaneous", "music", "apple", "compiler"];
    let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    let lengthOfWord = randomWord.length;

    wordLength.textContent = `Länge des Wortes: ${lengthOfWord}`;


    for (let i = 0; i < lengthOfWord; i++) {
        let inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute("maxlength", "1");
        inputField.setAttribute("data-index", i); // Safe the index of the letter.
        inputField.classList.add("word-input", "form-control", "text-center", "mx-5"); // mx-0 = margin-left: 0px;  margin-right: 0px;
        inputField.style.width = "40px";
        wordInputs.appendChild(inputField);

    }



    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html";
    });


    nextWord.addEventListener("click", function () {
        window.location.reload();
    });

    wordInputs.addEventListener("input", function (event) {
        let input = event.target;
        let index = input.getAttribute("data-index");
        let letter = input.value.toLowerCase();

        if (randomWord[index] === letter) {
            input.value = letter;
            input.style.background = "rgb(156, 202, 156)";

            lengthOfWord--;
            if (lengthOfWord == 0) {
                console.log("Congratualtions.");
            }

        } else {
            input.value = input.value;
            input.style.background = "rgb(245, 138, 138)";
            incorrectLetters.push(letter);
            incorrectLettersDiv.textContent = incorrectLetters;
            LIVES--;

            if (LIVES === 0) {
                console.log("Loser.");
            }
        }
    });


    document.addEventListener("keydown", function (event) {

        if (event.defaultPrevented) { // If the event has already been processed.
            return;
        }
    })

});