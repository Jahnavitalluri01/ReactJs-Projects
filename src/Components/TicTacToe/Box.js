import React from "react";

function Box({getelement,value}){
    
    return(
          <div className="border border-2 border-primary mx-1 my-1 rounded d-flex justify-content-center align-items-center" style={{height:"120px",width:"120px",fontSize:"70px"}} onClick={()=>getelement()}>
                {value}
          </div>
    )
}
export default Box