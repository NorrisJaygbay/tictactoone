let boxes = document.querySelectorAll(".box");
var main_grid=document.querySelector('.main-grid');

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = "";
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();          
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i < winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            main_grid.classList.add('main-gridone');
            // boxes.disabled=true;
            document.querySelector("#results").innerHTML = "Player " + turn + " win \"CONGRATE!!!\"";
            document.querySelector("#play-again").style.display = "inline";
            document.querySelector("#play-again").addEventListener("click", ()=>{
                window.location.reload();
            })
            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        main_grid.classList.add('main-gridone');
        boxes.forEach(e =>{
            if(e.innerHTML ==="") isDraw = false;
            e.style.removeProperty("background-color");
        })
        if(isDraw){
            isGameOver = true;
            // boxes.style.removeProperty("background-color");
            document.querySelector("#results").innerHTML = " Game Draw!!!";
            document.querySelector("#play-again").style.display = "inline";
            document.querySelector("#play-again").addEventListener("click", ()=>{
                window.location.reload();
            })
            
        }
    }
}


