let box = document.querySelectorAll(".box");
let gameName = document.querySelector(".gamename");
let reset = document.querySelector("#reset");
let count = 0;

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

    ];

    


    const disabledbtn = () =>{

        box.forEach((box) => {

            box.disabled = true;
        })
    }

    const enabledbtn = () =>{

        box.forEach((box) => {

            box.disabled = flase;
        })
    }



box.forEach((box) => {

    box.addEventListener("click", () => {
        
        if(turn0){

            box.innerHTML = "X";
            turn0 = false;
            box.style.color = "green";

        }else{

            box.innerHTML = "O";
            turn0 = true;
            box.style.color = "orange";
        }

        box.disabled = true;

        checkwinner();
    })
})

const checkwinner = () => {
    for( const pattern of winPatterns){{

        const pos1Val = box[pattern[0]].innerText;
        const pos2Val = box[pattern[1]].innerText;
        const pos3Val = box[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){

            if(pos1Val === pos2Val &&  pos2Val === pos3Val){

                gameName.innerHTML = `${pos1Val} is winner`;
                disabledbtn();
                draw();
                return;

            }
            
        }
        
    }

}
}





reset.addEventListener("click", () => {

    resetGame();

})

const resetGame = () => {

    box.forEach((box) => {

        box.innerHTML = "";
        box.disabled = false;

    })

    gameName.innerHTML = "Tic-tac-toe";
    turn0 = true;
}


//draw function

// const draw = () => {

//     let count = 0;

//     box.forEach((box) => {

//         if(box.innerText !== ""){

//             count++;

//         }

//     })

//     if(count === 9){

//         gameName.innerHTML = "Draw";

//     }

// }

