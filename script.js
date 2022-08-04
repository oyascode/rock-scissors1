function getComputerChoice(arr){
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
const choiceArr = ["Rock", "Paper", "Scissors"];
// console.log(getComputerChoice(choiceArr))

function playRound(playerSelection, computerSelection) {
  if (playerSelection === /"Rock"/i && computerSelection === "Paper") {
    return "You Lose!, paper beats Rock"
  }
  return "Try again"
} 


const playerSelection = "rock";
const computerSelection = getComputerChoice(choiceArr);
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));