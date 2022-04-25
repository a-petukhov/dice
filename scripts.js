var bothDiceIcons = document.querySelectorAll(".dice");
var firstDiceIcon = bothDiceIcons[0];
var secondDiceIcon = bothDiceIcons[1];
var diceHeader = document.querySelectorAll(".dice-header h2");
var diceHeaderOptions = [
  "Player One Wins!",
  "Player Two Wins!",
  "It is a draw!",
];
var diceOptions = [
  "fa-dice-one",
  "fa-dice-two",
  "fa-dice-three",
  "fa-dice-four",
  "fa-dice-five",
  "fa-dice-six",
];

function randomInt(min, max) {
  var randomID = Math.round(Math.random() * (max - min) + min);
  return randomID;
}

function rollDice() {
  let firstDiceNumber = newDice(firstDiceIcon);
  let secondDiceNumber = newDice(secondDiceIcon);

  if (firstDiceNumber === secondDiceNumber) {
    diceHeader[0].textContent = diceHeaderOptions[2];
    diceHeader[1].textContent = diceHeaderOptions[2];
  } else if (firstDiceNumber < secondDiceNumber) {
    diceHeader[0].textContent = diceHeaderOptions[1];
    diceHeader[1].textContent = diceHeaderOptions[1];
  } else {
    diceHeader[0].textContent = diceHeaderOptions[0];
    diceHeader[1].textContent = diceHeaderOptions[0];
  }
  clearTimeout();
}

function newDice(dice) {
  for (let i = 0; i < diceOptions.length; i++) {
    dice.classList.remove(diceOptions[i]);
  }
  let diceNumber = randomInt(0, 5);
  dice.classList.add(diceOptions[diceNumber]);
  dice.classList.remove("fa-shake");
  return diceNumber;
}

function diceShake() {
  for (let j = 0; j < 2; j++) {
    bothDiceIcons[j].classList.add("fa-shake");
  }
}
