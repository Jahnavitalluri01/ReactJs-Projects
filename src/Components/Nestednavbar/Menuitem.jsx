import React, { useState } from "react";
import './nested.css'
import Menulist from "./Menulist";
export default function Menuitem({item}){
    let [plusorminus,setsymbol]=useState('+')
    let [children,setchildren]=useState([])
    
    function handleclick(currentchildren){
        if(plusorminus==='+'){
            setsymbol('-')
            const index = children.findIndex((c) => c.label === currentchildren[0].label); 
            if(index===-1){
            setchildren((children)=>[...children,...currentchildren])
            }   
        }
        else{
            setsymbol('+')           
        }
    }
    
    return(
       <li className="menuitem fs-3 bg-primary my-1 px-3 rounded">{item.label}
       {
        item && item.children && item.children.length>0?
        <span className="ms-3" style={{cursor:'pointer'}} onClick={()=>handleclick(item.children)}>{plusorminus}</span>:null
       }
       {
        children && children.length>0 && plusorminus==='-'?
        <Menulist list={children} />:null
       }
        </li>
    )
}

