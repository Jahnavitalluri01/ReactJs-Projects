import React, { useState } from "react";
import Box from "./Box";

function Tictactoe(){
    let [squares,setsquares]=useState(Array(9).fill(''));
    let [xturn,setxturn]=useState(true)
    let [winner,setwinner]=useState('')
    function getelementval(ele){
        let squaresclone=[...squares]
        if(squaresclone[ele]===''){
        squaresclone[ele]=xturn?"X":"0";
        setsquares(squaresclone)
        setxturn(!xturn)
        findwinner()
        }
    }
    function findwinner(){
       for(let i=0; i<7; i+=3){
        // console.log("In for"+squares[i]+squares[i+1]+squares[i+2])
        console.log(i)
            if(squares[i]!=='' && squares[i]==squares[i+1] && squares[i+1]==squares[i+2]){
                // console.log("satisfied")
                setwinner(squares[i]);
            }
       }
       for(let j=0; j<3; j++){
        if(squares[j]!=='' && squares[j]==squares[j+3] && squares[j+3]==squares[j+6]){
            setwinner(squares[j]);
        }
       }
       if(squares[0]==squares[4] && squares[4]==squares[8]){
        setwinner(squares[0]);
       }
       if(squares[2]==squares[4] && squares[4]==squares[6]){
        setwinner(squares[2]);
       }
    }
    console.log(winner)
    function restart(){
        window.location.reload()
    }
    return(
        <div className="container my-5">
            <h1>Tic-Tac-Toe Game</h1>
            { 
            winner===''?
            <div className="mt-5">
            <div className="row justify-content-center">
                <Box getelement={()=>getelementval(0)} value={squares[0]} />
                <Box getelement={()=>getelementval(1)} value={squares[1]} />
                <Box getelement={()=>getelementval(2)} value={squares[2]} />
            </div>
            <div className="row justify-content-center">
            <Box getelement={()=>getelementval(3)} value={squares[3]} />
                <Box getelement={()=>getelementval(4)} value={squares[4]} />
                <Box getelement={()=>getelementval(5)} value={squares[5]} />
            </div>
            <div className="row justify-content-center">
            <Box getelement={()=>getelementval(6)} value={squares[6]} />
                <Box getelement={()=>getelementval(7)} value={squares[7]} />
                <Box getelement={()=>getelementval(8)} value={squares[8]} />
            </div>
            <button onClick={restart} className="btn btn-danger mt-5">Restart</button>
            </div>
            :
            <div className="my-5">
                <h1 className="text-primary">Heyy {winner} won!!</h1>
                <button onClick={restart} className="btn btn-danger mt-5">Restart</button>
                </div>
}
        
        </div>
    )
}
export default Tictactoe