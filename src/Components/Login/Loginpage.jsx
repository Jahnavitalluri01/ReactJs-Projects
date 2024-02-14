import React, { useState } from "react";
import Home from "./Home";

import Popup from "./Popup";

function Loginpage(){
    let [username,setusername]=useState('')
    let [password,setpass]=useState('')
    let [ispresent,setpresent]=useState(false)
    let [popup,setpopup]=useState(false)
    let [messagepopup,setmessage]=useState('Entered Credentials are not Found')
    let logindet=[]
    let [issignup,setsignup]=useState(false)
    function login(){
      logindet=JSON.parse(localStorage.getItem('credentials') || [])
          const isfound=logindet.some((ele)=>{
            if(ele.Username===username && ele.Password===password){
                return true
            }
            return false
          })
       
          if(isfound){
            setpresent(true)
          }
          else{
            setpopup(true)
            setusername('')
            setpass('')
          }
          console.log(popup) 
    }
    function signup(){
      if(username.length!==0 && password.length!==0 ){
        var currentlogin={Username:username,Password:password}
        logindet=JSON.parse(localStorage.getItem('credentials') || [])
         logindet.push(currentlogin);
        localStorage.setItem('credentials',JSON.stringify(logindet))
        setpresent(true)
        setsignup(false)
      }
      else{
        setpopup(true)
        setmessage('The credentials cannot be Empty')
      }
    }
   
    function popupclose(){
        setpopup(false)
        setmessage('Entered Credentials are not Found')
    }
    function handlesetsignup(){
      setsignup(!issignup)
    }

    return(
        <div className="container my-5 ">
            <div className="d-flex justify-content-center">
            <Popup popup={popup} popupclose={popupclose} messagepopup={messagepopup}/>
    
            { 
             ispresent===true? <Home user={username} ispres={setpresent} setuser={setusername} setpass={setpass}/>
             : issignup===false?
             <div className="formm d-flex flex-column justify-content-center align-items-center gap-4 w-50 border py-5 rounded bg-dark">
                <h1 className="text-light fs-3">Login</h1>
                <input type="text" placeholder="Enter Username" onChange={(e)=>{setusername(e.target.value)}} value={username} className="rounded py-1 px-2  w-50"></input>
                <input type="text" placeholder="Enter Password" onChange={(e)=>{setpass(e.target.value)}} value={password} className="rounded py-1 px-2 w-50"></input>
                <p className="text-light">Don't have an account?<span onClick={handlesetsignup} className="ps-1 text-primary" style={{cursor:"pointer"}}>Sign Up</span></p>
                <button onClick={login} className="btn btn-primary w-50">Login</button>
             </div>  
             :<div className="formm d-flex flex-column justify-content-center align-items-center gap-4 w-50 border py-5 rounded bg-dark">
             <h1 className="text-light fs-3">Sign Up</h1>
             <input type="text" placeholder="Enter Username" onChange={(e)=>{setusername(e.target.value)}} value={username} className="rounded py-1 px-2  w-50"></input>
             <input type="text" placeholder="Enter Password" onChange={(e)=>{setpass(e.target.value)}} value={password} className="rounded py-1 px-2 w-50"></input>
             <p className="text-light">Aldready have An account?<span onClick={handlesetsignup} className="ps-1 text-primary" style={{cursor:"pointer"}}>Login</span></p>
             <button onClick={signup} className="btn btn-primary w-50">Sign Up</button>
          </div>     
}</div>





        </div>
       


    )
}
export default Loginpage