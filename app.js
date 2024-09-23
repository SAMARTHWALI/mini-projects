let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-cointainer");
let msg=document.querySelector("#msg")
let turn0=true
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide")}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("button is clicked")
        if(turn0){
            box.innerText="0"
            box.style.colour="blue";
            turn0=false
        }
        else{
            box.innerText="x"
            box.style.colour="red";
            turn0=true
        }
        box.disabled=true;
        cheakWinner();
    });
});

const disableBoxes = () =>{
    for(let i of boxes)
        i.disabled=true;
};

const enableBoxes = () =>{
    for(let i of boxes){
    i.disabled=false;
    i.innerText="";
    }

};
const showWinner=(winner)=>{
    msg.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    

};


const cheakWinner=()=>{
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
                

            }
                
        }
    };
}

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

