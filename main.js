const init = () => {
    $playBtn.addEventListener("click", () => {
        weArePlaying = true;
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
const playNow = () => {};
const renderError = () => {};
const changeLowerLimit = () => {};
const changeUpperLimit = () => {};
init();
