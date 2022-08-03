const getComputerChoice = (arr) => {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
}
const choiceArr = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(choiceArr))