import React, { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
function Searchbar({handlechange}){
    let [value,setvalue]=useState('')
    function handleclick(){
          handlechange(value)
          setvalue('')
    }
    
    return(
            <div>
                <div className="row">
               <div className="col-lg-6 offset-lg-2">
                <Form.Control type="text" onChange={(e)=>setvalue(e.target.value)} placeholder="Search Here" value={value}/>
                </div>
                <div className="col-lg-4">
                    <button className="btn px-4" style={{backgroundColor:"#17252a",color:"white"}} onClick={handleclick}>Search</button>
                </div>
                </div>
            </div>
    )
}
export default Searchbar