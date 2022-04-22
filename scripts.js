var twoDiceIcons = document.querySelectorAll(".dice");
var firstDiceIcon = twoDiceIcons[0];
var secondDiceIcon = twoDiceIcons[1];
var diceHeader = document.querySelector(".dice-header h2");
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
  let firstDiceNumber = diceAnimation(firstDiceIcon);
  let secondDiceNumber = diceAnimation(secondDiceIcon);

  if (firstDiceNumber === secondDiceNumber) {
    diceHeader.textContent = diceHeaderOptions[2];
  } else if (firstDiceNumber < secondDiceNumber) {
    diceHeader.textContent = diceHeaderOptions[1];
  } else {
    diceHeader.textContent = diceHeaderOptions[0];
  }
}

function diceAnimation(dice) {
  dice.classList.add("fa-shake");
  dice.classList.remove("fa-dice-one");
  let diceNumber = randomInt(0, 5);
  dice.classList.add(diceOptions[diceNumber]);
  return diceNumber;
}
