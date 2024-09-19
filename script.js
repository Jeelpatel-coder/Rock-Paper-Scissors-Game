let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreId = document.querySelector("#user-score");
const compScoreId = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreId.innerText = userScore;
        msg.innerText = `You won. Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreId.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`Comp choice = ${compChoice}`);

    if(userChoice==compChoice){
        msg.innerText = `This game is a draw. Try again.`;
        msg.style.backgroundColor = "rgb(0, 0, 41)";
    }
    else{
        let userWin;
        if(userChoice=="rock"){
            if(compChoice=="paper"){
                userWin = false;
            }
            else if(compChoice=="scissors"){
                userWin = true;
            }
        }
        else if(userChoice=="paper"){
            if(compChoice=="rock"){
                userWin = true;
            }
            else if(compChoice=="scissors"){
                userWin = false;
            }
        }
        else if(userChoice=="scissors"){
            if(compChoice=="rock"){
                userWin = false;
            }
            else if(compChoice=="paper"){
                userWin = true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log(`Your choice = ${userChoice}`);
        playGame(userChoice);
    })
})