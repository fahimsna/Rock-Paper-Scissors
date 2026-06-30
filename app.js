let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#userScore");
const comScorepara = document.querySelector("#computerScore");
const resetBtn = document.querySelector("#reset");

const playGame = (userChoice) => {
  console.log(userChoice);
};
const resetGame = () => {
  userScore = 0;
  userScorepara.innerText = userScore;
  computerScore = 0;
  comScorepara.innerText = computerScore;
  msg.innerText = "Play your move";
  msg.style.backgroundColor = "#081b31";
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("Game was Drawn ");
  msg.innerText = `Game Drawn`;
  msg.style.backgroundColor = "#676793";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin === true) {
    userScore++;
    userScorepara.innerText = userScore;
    console.log("You Win");
    msg.innerText = `You Win! your ${userChoice} beats ${comChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    comScorepara.innerText = computerScore;
    console.log("You are lost");
    msg.innerText = `Computer Win! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("User Choice", userChoice);
    const comChoice = genCompChoice();
    console.log("com Choice", comChoice);

    if (userChoice === comChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = comChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = comChoice === "scissors" ? false : true;
      } else {
        userWin = comChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, comChoice);
    }
  });
});

resetBtn.addEventListener("click", resetGame);
