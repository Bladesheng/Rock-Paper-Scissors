// generates ranomdom integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 

// returns a random selection for the computer
function computerPlay() {
  let computerNumber = getRandomInt(0, 3);

  switch (computerNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// evaluates players and computers selection
// returns outcome from players perspective
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Tie!";
        case "paper":
          return "You Lose! Paper beats Rock";
        case "scissors":
          return "You Win! Rock beats Scissors";
      }

    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock";
        case "paper":
          return "Tie!";
        case "scissors":
          return "You Lose! Scissors beat Paper";
      }

    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Scissors";
        case "paper":
          return "You Win! Scissors beat Paper";
        case "scissors":
          return "Tie";
      }
  }
}