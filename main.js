const init = () => {
    $playBtn.addEventListener("click", () => {
        weArePlaying = true;
        playNow();
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
};
const changeUpperLimit = () => {
    limits[0] = +$theNumber.textContent;
};
init();
