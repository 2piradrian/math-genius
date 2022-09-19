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
};
const getNumber = () => {
    const min = Math.ceil(limits[0]);
    const max = Math.floor(limits[1]);
    const myNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return myNumber;
};
const renderError = () => {
    $error.style.display = "block";
};
const changeLowerLimit = () => {
    limits[1] = +$theNumber.textContent;
    turns--;
    checkTurn();
};
const changeUpperLimit = () => {
    limits[0] = +$theNumber.textContent;
    turns--;
    checkTurn();
};
const checkTurn = () => {
    if (turns <= 1) {
        $theNumber.textContent = "😭";
        resetGame();
    }
};
const checkGameState = () => {
    if (turns === 10) {
        playNow();
        turns--;
    } else {
        $theNumber.textContent = "😎";
        resetGame();
    }
};
const resetGame = () => {
    $playBtn.textContent = "¡Juguemos!";
    limits = [1, 1000];
    weArePlaying = false;
    turns = 10;
};
init();
