// initializes the game
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

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
function evaluateRound(playerSelection, computerSelection) {
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

// new game button - sets score and counter to 0:0
const newGameBtn = document.querySelector(".new-game");
newGameBtn.addEventListener("click", resetGame);

function resetGame() {
  updateScoreTracker(0, 0);
  playerScore = 0;
  computerScore = 0;
  playerSelection = "";
  computerSelection = "";
  logText("⠀");
  logText("---------------------");
  logText("⠀");
  unfreezeButtons();
}

// updates the score tracker
function updateScoreTracker(first, second) {
  const scoreTracker = document.querySelector(".score-tracker");
  scoreTracker.textContent = `${first}:${second}`;
}

// logs messages into log
function logText (message) {
  // makes all older messages dimmed
  const oldMessages = document.querySelectorAll(".msg");
  // extracts all messages except the last 3  
  Array.from(oldMessages).slice(2, 3).forEach((msg) => {
    msg.classList.add("msg-dimmed");
  })
  
  // creates div element with the message in the log
  const logElem = document.querySelector(".log");
  const div = document.createElement("div");
  div.classList.add("msg");
  div.textContent = message;
  logElem.prepend(div);
}

// player presses button
const buttons = document.querySelectorAll(".play-button");
buttons.forEach((button) => {
  // plays one round depending on whatever player selected
  button.addEventListener("click", playRound);
})

// plays one round based on the players selection
function playRound() {
  // changes player selection to id of clicked button and logs it
  playerSelection = this.id;
  logText(`player: ${playerSelection}`);

  // computer makes random play, it is logged and variabled'
  computerSelection = computerPlay();
  logText(`computer: ${computerSelection}`);

  // both selections are evaluated, outcome is logged
  let outcome = evaluateRound(playerSelection, computerSelection);
  logText(outcome);
  
  // increments winners score based on outcome
  let outcomeShort = outcome.slice(4, 8);
  if (outcomeShort === "Win!") {
    playerScore++;
  }
  else if (outcomeShort === "Lose") {
    computerScore++;
  }

  // tracker is updated
  updateScoreTracker(playerScore, computerScore)

  // if either score is == 5, winner is announced, buttons are locked
  if (playerScore === 5 || computerScore === 5) {
    freezeButtons();
    logText("---Game over!---");
    logText(`Final score is ${playerScore}:${computerScore}`)
    
    if (playerScore > computerScore) {
      logText("You won!");
    }
    else if (playerScore < computerScore) {
      logText("You lost!");
    }
    else {
      logText("The game was a tie!")
    }
  }
}

// freezes playing buttons (removes event listeners)
function freezeButtons () {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  })
}

// unfreezes playing buttons (reataches event listeners)
function unfreezeButtons () {
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  })
}
