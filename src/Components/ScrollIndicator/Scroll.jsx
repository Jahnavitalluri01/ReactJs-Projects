import React, { useEffect, useState, useRef } from "react";
import Loading from "./Loading";
import "./scroll.css"

function Scroll({url}){
    let [data,setdata]=useState([])
    let [loading,setloading]=useState(true);
    const elementRef = useRef(null);
    let [progresspercentage,setpercent]=useState(0)

    async function fetchdata(url){
      try{
        setloading(true);
        const response=await fetch(`${url}?limit=50`);
        const res=await response.json();
        setdata(res.products);
        //  console.log(data)
         setloading(false)
      }
      catch(e){
           console.log(e)
      }
    }
    useEffect(()=>{
        fetchdata(url)
    },[url])
    function handlescroll(){
        console.log(document.documentElement.scrollTop+" "+document.documentElement.scrollHeight+" "+document.documentElement.clientHeight+" "+elementRef.current.offsetTop)
        let currentheight=elementRef.current.offsetTop;
        let scrolled=document.documentElement.scrollTop;
        let height=2090-document.documentElement.clientHeight  // 2136 is the height of element i.e scroll height rounded to 2090
      let per=((scrolled-currentheight)/height)*100
      if(per>0){
        setpercent(per);
      }
      else{
        setpercent(0)
      }
       
        
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
    },[])
    return(
        <div className="container my-5" ref={elementRef}>
            <h1>Custom Scroll Indicator</h1>
            <div className="scrollbarfull my-3">
                <div className="progress" style={{width:`${progresspercentage}%`,height:"100%",backgroundColor:"#006884"}}></div>
            </div>
            {
            loading===true?
            <Loading />: 
            // data && data.length>0 &&
            <div>
            {
                data.length>0?
            data.map((ele)=>(
                <p>{ele.title}</p>
            )):<h2>No data</h2>
            }
            </div>
            
}
        </div>
    )
}
export default Scroll;