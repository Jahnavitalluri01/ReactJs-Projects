import React from "react";
import Menulist from "./Menulist";

function Nested({menus=[]}){

    return(
        <div className="container my-4 ">
            <h1>Nested Navbar</h1>
        <div className="w-25 d-flex justify-content-start bg-primary py-2" style={{height:'420px'}}>
            <Menulist list={menus} />
           
        </div>
        </div>
    )
}
export default Nested