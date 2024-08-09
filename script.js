let choices = document.querySelectorAll(".choice")
let msg = document.querySelector(".message");
let box = document.querySelector(".dialog");
let userChoice, computerChoice;
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".compScore");
let icons = document.querySelector(".icons");
let us = 0; //user's score
let cs = 0; //computer's score
let flag = true;
let body = document.querySelector("body");
let gameOver = false;
//User Choice
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        if (gameOver) { return; }
        let userChoice = choice.classList[0];
        compChoice();
        console.log("UserChoice : ", userChoice);
        console.log("ComputerChoice : ", computerChoice);
        result(userChoice, computerChoice);
    });
});

//Computer Choice
let compChoice = () => {
    let n = Math.floor(Math.random() * 3);
    array = ["rock", "paper", "scissor"];
    computerChoice = array[n];
    return computerChoice;
}

//Finding Results
let result = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        console.log("Tie");
        msg.innerText = "It's a TIE!";
        msg.style.backgroundColor = "rgb(3, 30, 61)";
    }
    else if (userChoice == "rock") {
        if (computerChoice == "paper") {
            msg.innerText = "Your rock got wrapped by Paper!";
            cs++;
            compScore.innerText = cs;
            msg.style.backgroundColor = "Red";
        }
        else if (computerChoice == "scissor") {
            msg.innerText = "Your rock broke the scissor";
            us++;
            userScore.innerText = us;
            msg.style.backgroundColor = "Green";

        }
    }
    else if (userChoice == "paper") {
        if (computerChoice == "rock") {
            msg.innerText = "Your Paper Wrapped the rock!"
            us++;
            userScore.innerText = us;
            msg.style.backgroundColor = "Green";
        }
        else if (computerChoice == "scissor") {
            msg.innerText = "Thrashed into pieces by comp's scissor";
            cs++;
            compScore.innerText = cs;
            msg.style.backgroundColor = "Red";
        }
    }
    else {
        if (computerChoice == "rock") {
            msg.innerText = "Rock broke your scissor!"
            cs++;
            compScore.innerText = cs;
            msg.style.reload.style.backgroundColor = "black";
            reload.style.color = "white";
            reload.style.width = "200px";
            reload.style.height = "50px";
            reload.style.fontSize = "18px"; backgroundColor = "Red";
        }
        else if (computerChoice == "paper") {
            msg.innerText = "Thrashed into pieces by your scissor";
            us++;
            userScore.innerText = us;
            msg.style.backgroundColor = "Green";
        }
    }
    if (us == 10 || cs == 10) {
        if (us == 10) {
            msg.innerText = "You won!"
            let reloadbtn = document.createElement("Button");
            reloadbtn.innerText = "Want to win again? give it a Try"
            reloadbtn.setAttribute("class", "reload");
            reloadbtn.style.backgroundColor = "Green";
            if (flag == true) {
                icons.after(reloadbtn);
                flag = false;
                reloadbtn.addEventListener("click", () => {
                    location.reload();
                })
            }
            gameOver = true;

        }
        else {
            msg.innerText = "You lost!"
            let reloadbtn = document.createElement("Button");
            reloadbtn.innerText = "You will do better next time! Retry?"
            reloadbtn.setAttribute("class", "reload");
            reloadbtn.style.backgroundColor = "darkred";
            if (flag == true) {
                icons.after(reloadbtn);
                flag = false;
                reloadbtn.addEventListener("click", () => {
                    location.reload();
                })
            }
            gameOver = true;

        }
    }
}
