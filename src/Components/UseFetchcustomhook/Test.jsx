import React from "react";
import Usefetch from "./Usefetch";

function Test(){
    const {data,err,loading}=Usefetch('https://dummyjson.com/users?limit=20')
    console.log(data)
    return(
        <div className="container my-5">
            <h1>UseFetch Custom Hook</h1>
            <div>
            {err===false && loading===false && data.map((ele)=>(
                 <p>{ele.firstName}</p>
            ))}
            </div>
        </div>
    )
}
export default Test