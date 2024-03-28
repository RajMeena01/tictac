let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let messageContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new-btn");
let winnerPattern=[[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
let turnX=true;
let count=0;
const resetGame=()=>{
    turnX=true;
    enableBox();
    count=0;
    messageContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const enableBox=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const winner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBox();
}

const gameDraw=()=>{
    msg.innerText=`Game Draw`;
    messageContainer.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>{
    for(let pattern of winnerPattern){
        let poss1=boxes[pattern[0]].innerText;
        let poss2=boxes[pattern[1]].innerText;
        let poss3=boxes[pattern[2]].innerText;
        if(poss1 !="" && poss2!="" && poss3!=""){
            if(poss1==poss2 && poss2==poss3){
                winner(poss1);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame)
newBtn.addEventListener("click", resetGame)
