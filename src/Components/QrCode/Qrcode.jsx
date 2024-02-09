import React, { useState } from "react";
 
function Qrcode(){
     let [inputt,setinput]=useState('')
     let [qrcodee,setqrcode]=useState('')
     function handlegenerate(){
        setqrcode(inputt)
        setinput('')
     }
console.log(qrcodee)
      return(
        <div className="container my-5">
            <h1 className="my-2">Qr Code Generator</h1>
            <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <input type='text' placeholder="Enter Text..." className="px-3 py-2 rounded border border-primary" value={inputt} onChange={(e)=>{setinput(e.target.value)}}></input>
                <button className="btn btn-success" disabled={inputt.length===0?true:false} onClick={handlegenerate} >Generate</button>
            </div>
            {/* <Qrcode value={qrcodee} size={200} /> */}
        </div>
      )
}
export default Qrcode