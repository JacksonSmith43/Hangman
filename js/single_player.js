document.addEventListener("DOMContentLoaded", function () {

    let exitGame = document.getElementById("exit-game");
    let nextWord = document.getElementById("next-word");
    let wordInputs = document.getElementById("word-inputs");
    let wordLength = document.getElementById("word-length");
    let incorrectLettersDiv = document.getElementById("incorrect-letters");
    let livesLeft = document.getElementById("lives-left");
    let winAudio = new Audio('../audio/congratulations_you_are_the_winner.mp3');
    let looseAudio = new Audio('../audio/neck_snap_up_tempo.mp3');
    let img = document.createElement('img');
    let src = document.getElementById("lives-status-container");


    let LIVES = 5;
    let incorrectLetters = [];

    let wordsArray = ["miscellaneous", "music", "apple", "compiler"];
    let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    let lengthOfWord = randomWord.length;

    livesLeft.textContent = `Leben übrig: ${LIVES}`;
    wordLength.textContent = `Länge des Wortes: ${lengthOfWord}`;
    img.src = "../images/black_knight_all_limbs.png"
    src.appendChild(img);

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

        checksLivesPictureStatus();

        if (randomWord[index] === letter) {
            input.value = letter;
            input.style.background = "rgb(156, 202, 156)";

            if (LIVES === 5) {
                img.src = "../images/black_knight_all_limbs.png"
                src.appendChild(img);
            }

            lengthOfWord--;

            if (lengthOfWord == 0) {
                console.log("Congratualtions.");
                winAudio.play();
            }

        } else {
            input.value = input.value;
            input.style.background = "rgb(245, 138, 138)";
            incorrectLetters.push(letter);
            incorrectLettersDiv.textContent = `Falsche buchstaben: ${incorrectLetters}`;

            LIVES--;

            if (LIVES === 0) {
                console.log("Loser.");
                looseAudio.play();
            }
            livesLeft.textContent = LIVES;
            livesLeft.textContent = `Leben übrig: ${LIVES}`;

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.defaultPrevented) { // If the event has already been processed.
            return;
        }
    })


    function checksLivesPictureStatus() {
        switch (LIVES) {
            case 6:
                img.src = "../images/black_knight_all_limbs.png"
                src.appendChild(img);
                break;

            case 5:
                img.src = "../images/black_knight_three_limbs.png"
                src.appendChild(img);
                break;

            case 4:
                img.src = "../images/black_knight_two_limbs.png"
                src.appendChild(img);
                break;

            case 3:
                img.src = "../images/black_knight_one_limb.png"
                src.appendChild(img);
                break;

            case 2:
                img.src = "../images/black_knight_no_limbs.png"
                src.appendChild(img);
                break;

            case 1:
                img.src = "../images/gallows.png"
                src.appendChild(img);
                break;

            default:
                console.log("Some problem with the switch case.");
        }

        return src.appendChild(img);
    }

});