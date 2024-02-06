import React from "react";
import Menuitem from "./Menuitem";

export default function Menulist({list=[]}){
    return(
        <ul className="menulist d-flex flex-column text-white">
          {
            list && list.length>0 &&
            list.map((listitem)=>(
                <Menuitem item={listitem} />
            ))
          }
         
        </ul>
    )
}