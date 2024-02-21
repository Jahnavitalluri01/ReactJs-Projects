import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

function Search(){
    let [word,setword]=useState('')
    let [names,setnames]=useState([])
    let [error,seterror]=useState('')
    let [filtered,setfiltered]=useState([])

    function handleword(e){
        setword(e.target.value.toLowerCase())
        if(word.length>0 && names){
            const filtereddata=names.filter((item)=>
                item.toLowerCase().indexOf(word)> -1
            )
                setfiltered(filtereddata)
        }
        else{
            setfiltered([])
        }
    }
    function fromsuggestions(selectedword){
        setword(selectedword)
        setfiltered([])
    }
    async function fetchproducts(){
        try{
            const res=await fetch('https://dummyjson.com/users')
            const data=await res.json();
            // console.log(data.products)
            setnames(data.users.map(ele=>
                 ele.firstName
            ))
            
        }
        catch(err){
            seterror(err);
        }
    }
    // console.log(names)
    useEffect(()=>{
           fetchproducts();
    },[])
     console.log(word)
       return(
        <div className="container my-5">
            <h1>Search AutoComplete</h1>
             <input type='text' placeholder="Search Here..." className="form-control" onChange={(e)=>handleword(e)} value={word}></input>
             {
                word &&
            <Suggestions users={filtered} suggestionsword={fromsuggestions} />
             }
        </div>
      
       )
}
export default Search