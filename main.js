const init = () => {
    $playBtn.addEventListener("click", () => {
        $playBtn.textContent = "¡Ese es mi número!";
        weArePlaying = true;
        checkGameState();
    });
    $greaterBtn.addEventListener("click", () => {
        if (weArePlaying) {
            changeUpperLimit();
            playNow();
        } else {
            renderError();
        }
    });
    $minorBtn.addEventListener("click", () => {
        if (weArePlaying) {
            changeLowerLimit();
            playNow();
        } else {
            renderError();
        }
    });
    if (!weArePlaying) {
        $playBtn.textContent = "¡Juguemos!";
    }
};
const playNow = () => {
    $error.style.display = "none";
    $theNumber.textContent = `${getNumber()}`;
    console.log(limits[0], limits[1]);
    checkTurn();
};
const getNumber = () => {
    const min = Math.ceil(limits[0] + 1);
    const max = Math.floor(limits[1] - 1);
    const myNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return myNumber;
};
const renderError = () => {
    $error.style.display = "block";
};
const changeLowerLimit = () => {
    limits[1] = +$theNumber.textContent;
    turns--;
};
const changeUpperLimit = () => {
    limits[0] = +$theNumber.textContent;
    turns--;
};
const checkTurn = () => {
    if (turns <= 1) {
        console.log("Perdiste, que triste.");
        $theNumber.textContent = "😭";
        resetGame();
    }
};
const checkGameState = () => {
    if (turns === 12) {
        playNow();
        turns--;
    } else {
        $theNumber.textContent = "😎";
        resetGame();
    }
};
const resetGame = () => {
    $playBtn.textContent = "¡Juguemos!";
    limits = [0, 300];
    weArePlaying = false;
    turns = 12;
};
init();
