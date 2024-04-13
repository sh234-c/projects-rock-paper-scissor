let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");//we access all the choices 
const message=document.querySelector("#message");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#Comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    
    message.innerText="game draw";
    message.style.backgroundColor="blue";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        
        message.innerText="you win!";
        message.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
        
        message.innerText="you lose";
        message.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);

    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        } else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
  
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
   
    });
});
