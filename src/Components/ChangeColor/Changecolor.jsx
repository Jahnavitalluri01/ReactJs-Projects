import React, { useState } from "react";
import './changecolor.css';
import googleMapReact from "google-map-react";

function Changecolor(){
    const [colorr,setcolor]=useState('grey')
    const [type,settype]=useState('')

    function hexcolor(){
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let code = "#";
      for(let i=0; i<6; i++){
         code += hexArray[Math.floor(Math.random()*16)];
       }
 setcolor(code)
 settype('hex')
    
    }

function rgbcolor(){
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    var rgb="rgb(";
    rgb+=x+",";
    rgb+=y+",";
    rgb+=z+")";
    setcolor(rgb)
    settype('rgb')
}
function randomcolor(typee){
    if(typee==='rgb'){
        rgbcolor()
    }
    else {
        rgbcolor()
    }
 
}
    return(
        <div className="container">
            <h1>Changing Random Colors</h1>
            <div className="d-flex justify-content-center gap-5 my-5">
            <button className="btn btn-outline-danger" onClick={hexcolor}>Generate Hex Color</button>
            <button className="btn btn-outline-danger" onClick={rgbcolor}>Generate RGB Color</button>
            <button className="btn btn-outline-danger" onClick={()=>randomcolor(type)}>Generate Random Color</button>
            </div>
        <div className="d-flex flex-column align-items-center justify-content-center change" style={{backgroundColor:`${colorr}`}}>
           <h2 className="text-white">{type}</h2>
           <h4 className="text-white">{colorr}</h4>
            </div>
            </div>
    )
}
export default Changecolor