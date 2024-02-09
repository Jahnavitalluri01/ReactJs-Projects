import React, { useEffect, useState } from "react";

function useLocalStorage(key,defalutvalue){
    let [value,setvalue]=useState(()=>{
        let currentvalue;
        try{
            currentvalue=JSON.parse(localStorage.getItem(key) || String(defalutvalue))
            console.log(currentvalue)
        }
        catch(e){
          console.log(e)
          currentvalue=defalutvalue;
        }
        return currentvalue;
    })
    useEffect(()=>{
          localStorage.setItem(key,JSON.stringify(value));
    },[key,value])
    return [value,setvalue]
}
export default useLocalStorage