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