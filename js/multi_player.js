document.addEventListener("DOMContentLoaded", function () {

    let inputedWord = document.querySelector("input");
    let submitInputedWordButton = document.getElementById("submit-inputed-word-button");
    let outputedWord = document.querySelector(".outputed-word"); // querySelector is used, to only get the first element. 
    let nextWord = document.getElementById("next-word");
    let exitGame = document.getElementById("exit-game");
    let wordLength = document.getElementById("word-length");
    let lengthOfWord;
    let wordInputs = document.getElementById("word-inputs");
    let incorrectLettersDiv = document.getElementById("incorrect-letters");
    let livesLeft = document.getElementById("lives-left");
    let img = document.createElement('img');
    let src = document.getElementById("lives-status-container");
    let winAudio = new Audio('../audio/congratulations_you_are_the_winner.mp3');
    let looseAudio = new Audio('../audio/neck_snap_up_tempo.mp3');

    let LIVES = 6;
    let incorrectLetters = [];

    submitInputedWordButton.addEventListener("click", function (e) {
        e.preventDefault(); // Because of the form tag, this prevents the page from reloading after it has been sumbitted.

        outputedWord.textContent = `Word: ${inputedWord.value}` // e.target is often used, when multiple buttons/inputs have the same name. It determines, which one (event) was triggered.

        localStorage.setItem("savedWord", inputedWord.value);

        document.getElementById("player-one-container").style.display = 'none';
        document.getElementById("player-two-container").style.display = 'block';

        lengthOfWord = inputedWord.value.length;
        wordLength.textContent = `Länge des Wortes: ${lengthOfWord}`;

        if (lengthOfWord === 0) {
            alert("Enter a word.");
            console.log("Enter a word.");
        }

        for (let i = 0; i < lengthOfWord; i++) {
            let inputField = document.createElement("input");
            inputField.setAttribute("type", "text");
            inputField.setAttribute("maxlength", "1");
            inputField.setAttribute("data-index", i); // Safe the index of the letter.
            inputField.classList.add("word-input", "form-control", "text-center", "mx-5"); // mx-0 = margin-left: 0px;  margin-right: 0px;
            inputField.style.width = "40px";
            wordInputs.appendChild(inputField);
        }

    });


    wordInputs.addEventListener("input", function (event) {
        let input = event.target;
        let index = input.getAttribute("data-index");
        let letter = input.value.toLowerCase();
        let savedWord = localStorage.getItem("savedWord");

        if (savedWord[index] === letter) {
            input.value = letter;
            input.style.background = "rgb(156, 202, 156)";

            if (LIVES === 5) {
                img.src = "../images/multi_player/gallows.jpg"
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
        checksLivesPictureStatus();

    });


    nextWord.addEventListener("click", function () {
        document.getElementById("player-one-container").style.display = 'block';
        document.getElementById("player-two-container").style.display = 'none';
        inputedWord.value = "";
        img.parentNode.removeChild(img);
        localStorage.removeItem("savedWord");
        window.location.reload();
    });


    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html";
    });


    function checksLivesPictureStatus() {
        switch (LIVES) {
            case 5:
                img.src = "../images/multi_player/gallows.jpg"
                src.appendChild(img);
                break;

            case 4:
                img.src = "../images/multi_player/head.png"
                src.appendChild(img);
                break;

            case 3:
                img.src = "../images/multi_player/one_limb.png"
                src.appendChild(img);
                break;

            case 2:
                img.src = "../images/multi_player/two_limbs.png"
                src.appendChild(img);
                break;

            case 1:
                img.src = "../images/multi_player/three_limbs.png"
                src.appendChild(img);
                break;

            case 0:
                img.src = "../images/multi_player/four_limbs.png"
                src.appendChild(img);
                break;

            default:
                console.log("Some problem with the switch case.");
        }

        return src.appendChild(img);
    }



});