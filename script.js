let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("com-score");
const scoreboard_div= document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");





function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

}
function lose(userChoice, computerChoice){
    compScore ++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

}
function tie(userChoice, computerChoice){ 
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  ties  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            tie(userChoice, computerChoice);
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


