import React, { useState } from "react";
import useLocalStorage from './useLocalStorage'
function Themechange(){
    const [theme,settheme]=useLocalStorage('theme','dark')
     function handletheme(){
        settheme(theme==='dark'?'light':'dark')
     }
     console.log(theme)
    return(
        <div className={`bg-${theme}`} style={{height:"100vh",width:"100%"}}>
            <div className="container d-flex flex-column align-items-start justify-content-center h-100 gap-2">
                <h2 className={`text-${theme==='dark'?'light':'dark'}`}>Hello!!!</h2>
                <button className={`btn btn-${theme==='dark'?'light':'dark'}`} onClick={handletheme}>Change Theme</button>
            </div>
        </div>
    )
}
export default Themechange