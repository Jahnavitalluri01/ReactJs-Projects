import React from "react";

function Suggestions({users,suggestionsword}){
    // console.log(users)
       return(
        <ul className="container mt-2">
            
            { users.map((ele)=>
                <li style={{listStyleType:"none",cursor:"pointer"}} className="mt-2 py-2 border border-1 rounded" onClick={()=>suggestionsword(ele)}>{ele}</li>
            )
}
        </ul>
       )
}
export default Suggestions