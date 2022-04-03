function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 

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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "x";
        case "paper":
          return "x";
        case "scissors":
          return "x";
      }

    case "paper":
      switch (computerSelection) {
        case "rock":
          return "x";
        case "paper":
          return "x";
        case "scissors":
          return "x";
      }

    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "x";
        case "paper":
          return "x";
        case "scissors":
          return "x";
      }
  }
}