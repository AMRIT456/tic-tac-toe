console.log("welcome to tic tac toe");
let music=new Audio('mp3/attention.mp3');
let turnmusic=new Audio('mp3/ting.mp3');
let gameovermusic=new Audio('mp3/gameover.mp3');
let turn="X";
let gameover=false;
const changeTurn=()=>{

    turn= turn ==="X"?"0":"X";
    return turn;
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnmusic.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
                if (turn === 'X') {
                    boxtext.classList.add('x-color');
                    boxtext.classList.remove('o-color');
                  } else {
                    boxtext.classList.add('o-color');
                    boxtext.classList.remove('x-color');
                  }
            }
            
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
        element.classList.remove('x-color', 'o-color');
    })
    turn="X";
    gameover=false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})