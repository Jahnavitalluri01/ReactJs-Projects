import React, { useState } from "react";
import './star.css'
import { FaStar } from "react-icons/fa";

function Starrating(){
    const stars=[]
    const [final,setfinal]=useState(-1);
    const [temp,settemp]=useState(-1)
    for(var i=0; i<10; i++){
        stars.push(i)
    }
    function handleclick(ind){
        setfinal(ind)
        settemp(-1)
    }
    function handleover(ind){
        settemp(ind)
        setfinal(-1)
    }

    function handleleave(ind){
        settemp(-1)
        
    }

    return(
        <div className="container">
             <h1>Star Rating</h1>
        <div className="d-flex justify-content-center gap-3 my-3 mb-5">
           
       { 
        stars.map((i)=>(
            <div>
          
{/* {      i<=temp?
           
           <FaStar className="fs-1 text-warning" onMouseOver={()=>handleover(i)} onMouseLeave={()=>handleleave(i)} />:
           <FaStar className="fs-1" onMouseOver={()=>handleover(i)} onMouseLeave={()=>handleleave(i)} />} */}
            { i<=final || i<=temp? 
            (<FaStar className="fs-1 text-warning" onClick={()=>handleclick(i)} onMouseOver={()=>handleover(i)} onMouseLeave={()=>handleleave(i)} />):
            <FaStar className="fs-1" onClick={()=>handleclick(i)} onMouseOver={()=>handleover(i)} onMouseLeave={()=>handleleave(i)} />
 }
        </div>
    
           
           
        ))
       }
       </div>
       </div>
    )
}
export default Starrating