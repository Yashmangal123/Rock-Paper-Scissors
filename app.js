let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice(){
const choices = ['r','p','s'];
const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
}

function convertToWard(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice,computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWard(userChoice)}${smallUserWord} beats ${convertToWard(computerChoice)}${smallCompWord}. You Win!🔥`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},300);
}

function lose(userChoice,computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWard(userChoice)}${smallUserWord} loses to ${convertToWard(computerChoice)}${smallCompWord}. You lost...💩`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')},300);
}

function draw(userChoice,computerChoice) {
  const smallUserWord = "(user)".fontsize(3).sub();
  const smallCompWord = "(comp)".fontsize(3).sub();
  result_p.innerHTML = `${convertToWard(userChoice)}${smallUserWord} equals ${convertToWard(computerChoice)}${smallCompWord}.It's a draw.`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')},300);
}
//console.log(getComputerChoice());

function game(userChoice){
  const computerChoice = getComputerChoice();
  // console.log("user choice => " + userChoice);
  //   console.log("computer choice => " + computerChoice);
  switch (userChoice + computerChoice){
    case "rs":
    case "sp":
    case "pr":
       // console.log("USER WINS.");
       win(userChoice,computerChoice);
       break;
    case "rp":
    case "ps":
    case "sr":
       // console.log("COMPUTER WINS.");
       lose(userChoice,computerChoice);
       break;
   case "rr":
   case "pp":
   case "ss":
       // console.log("ITS A DRAW.");
       draw(userChoice,computerChoice);
       break;
  }

}


function main(){
rock_div.addEventListener('click', function(){
  game("r");
})
paper_div.addEventListener('click', function(){
  game("p");
})

scissors_div.addEventListener('click', function(){
  game("s");
})
}

main();
