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
          return "Tie!";
      }
  }
}

// plays the game 5 times, displays results based on score
function game() {
  console.log("---Game on!---")
  let playerScore = 0;
  let computerScore = 0;


  // plays 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt(`Rock, Paper or Scissors? \nCurrent score: [${playerScore}:${computerScore}]`);
    
    let outcome = playRound(playerInput, computerPlay()); // plays current round
    console.log(outcome); // outputs the outcome of the current round
    
    // increments current score based on outcome
    let outcomeShort = outcome.slice(4, 8);
    if (outcomeShort === "Win!") {
      playerScore++;
    }
    else if (outcomeShort === "Lose") {
      computerScore++;
    }
  }


  //displays results of the game
  console.log("---Game finished!---")
  console.log(`The final score is ${playerScore}:${computerScore} (You:Computer)`)
  
  if (playerScore > computerScore) {
    console.log("You won the game!");
  }
  else if (playerScore < computerScore) {
    console.log("You lost the game!");
  }
  else {
    console.log("The game was a tie!")
  }
  
  
  console.log(`---Enter "game()" to play again---`)
}

// welcome message
console.log(`---Enter "game()" to play---`)