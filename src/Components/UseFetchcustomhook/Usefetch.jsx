import { useEffect, useState } from "react";

export default function Usefetch(url){
    const [data,setdata]=useState({})
    const [loading,setloading]=useState(false)
    const [err,seterror]=useState(false)
    const [defaultt,setdef]=useState(true)
    async function fetchdata(){
        setloading(true)
        try{
            const res=await fetch(url)
            const dataa=await res.json()
            // console.log(dataa)
            setdata(dataa.users)
            setloading(false)
        }
        catch(err){
            seterror(err)
            setloading(false)
        }
    }
    useEffect(()=>{
        fetchdata();
    },[url])
    // console.log(data)
    if(data.length>0){
        return {data,err,loading};
    }
    else{
        return {data,defaultt,defaultt}
    }
    
}