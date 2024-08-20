document.addEventListener("DOMContentLoaded", function () {

    const inputedWord = document.querySelector("input");
    let submitInputedWordButton = document.getElementById("submit-inputed-word-button");
    let outputedWord = document.querySelector(".outputed-word"); // querySelector is used, to only get the first element. 
    let nextWord = document.getElementById("next-word");
    let exitGame = document.getElementById("exit-game");

    submitInputedWordButton.addEventListener("click", function (e) {
        e.preventDefault(); // Because of the form tag, this prevents the page from reloading after it has been sumbitted.

        outputedWord.textContent = `Word: ${inputedWord.value}` // e.target is often used, when multiple buttons/inputs have the same name. It determines, which one (event) was triggered.

        localStorage.setItem("savedWord", inputedWord.value);
        localStorage.getItem("savedWord");

        document.getElementById("player-one-container").style.display = 'none';
        document.getElementById("player-two-container").style.display = 'block';

    });


    nextWord.addEventListener("click", function () {
        document.getElementById("player-one-container").style.display = 'block';
        document.getElementById("player-two-container").style.display = 'none';
    });


    exitGame.addEventListener("click", function () {
        window.location.href = "../index.html";
    });

});