import React from "react";

function Home({user,ispres,setuser,setpass}){
    console.log(user)
    function logout(){
        ispres(false)
        setuser('')
        setpass('')
        
    }
    return(
        <div className="d-flex flex-column justify-content-center align-items-center gap-4">
        <h1>Welcome {user}</h1>
        <button onClick={logout} className="btn btn-primary btn-lg">Logout</button>
        </div>
    )
}
export default Home;