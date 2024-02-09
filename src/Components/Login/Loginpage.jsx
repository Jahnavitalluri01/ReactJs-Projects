import React, { useState } from "react";
import Home from "./Home";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Loginpage(){
    let [username,setusername]=useState('')
    let [password,setpass]=useState('')
    let [ispresent,setpresent]=useState(false)
    let [popup,setpopup]=useState(false)
    let logindetails=[{Username:"Jahnavi",Password:"janu"},{Username:"Ravi Teja",Password:"teja"}]
    function login(){
         
          const isfound=logindetails.some((ele)=>{
            if(ele.Username===username && ele.Password===password){
                return true
            }
            return false
          })
        //   console.log(isfound+" "+username)
          if(isfound){
            setpresent(true)
          }
          else{
            setpopup(true)
          }
          console.log(popup) 
    }
   
    function popupclose(){
        setpopup(false)
    }

    return(
        <div className="container my-5 ">
            <div className="d-flex justify-content-center">
            {
    <Modal
    show={popup}
    backdrop="static"
    
   
  >
    <Modal.Dialog>
        <Modal.Body >
            <p>The Entered User Details are Not Found</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={popupclose}>Ok</Button>
        </Modal.Footer>
    </Modal.Dialog>
    </Modal>
    
   
}
            { 
             ispresent===true? <Home user={username} ispres={setpresent} setuser={setusername} setpass={setpass}/>
             :
             <div className="formm d-flex flex-column justify-content-center align-items-center gap-4 w-50 border py-5 rounded bg-dark">
                <h1 className="text-light fs-3">Login</h1>
                <input type="text" placeholder="Enter Username" onChange={(e)=>{setusername(e.target.value)}} value={username} className="rounded py-1 px-2  w-50"></input>
                <input type="text" placeholder="Enter Password" onChange={(e)=>{setpass(e.target.value)}} value={password} className="rounded py-1 px-2 w-50"></input>
                <button onClick={login} className="btn btn-primary w-50">Login</button>
             </div>       
}</div>





        </div>
       


    )
}
export default Loginpage