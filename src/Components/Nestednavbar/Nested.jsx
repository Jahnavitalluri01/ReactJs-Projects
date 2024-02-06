import React from "react";
import Menulist from "./Menulist";

function Nested({menus=[]}){

    return(
        <div className="fluid-container my-4">
            <h1>Nested Navbar</h1>
        <div className="w-25 d-flex justify-content-start">
            <Menulist list={menus} />
           
        </div>
        </div>
    )
}
export default Nested