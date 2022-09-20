const $minorBtn = document.getElementById("minor");
const $greaterBtn = document.getElementById("greater");
const $playBtn = document.getElementById("play");
const $theNumber = document.getElementById("theNumber");
const $error = document.querySelector("small");

let weArePlaying = false;
let turns = 12;
let limits = [1, 300];
