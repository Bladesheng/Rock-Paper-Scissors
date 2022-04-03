function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 

function computerPlay() {
  let computerNumber = getRandomInt(0, 3);
  console.log(computerNumber)
  if (computerNumber === 0) {
    return "Rock";
  }
  else if (computerNumber === 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }

}