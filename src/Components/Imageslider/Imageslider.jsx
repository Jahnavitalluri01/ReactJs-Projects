import React, { useEffect, useState } from "react";

function Imageslider({url,limit}){
    const [images,setimages]=useState([])
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(null)
    const [currentslide,setslide]=useState(0)

    async function fetchImages(urll){
        try{
            setloading(true)
             const response=await fetch(`${urll}${limit}`);
            //  console.log(urll+limit)
             const data=await response.json();
             if(data){
             setimages(data)
             setloading(false)
             }
             
        }
        catch(e){
            seterror(e.message);
            setloading(false)
        }
    }
    // console.log(images[0].url)
    useEffect(()=>{
          if(url!==''){
            fetchImages(url)
          }
    },[url])
    return(
          <div>Image slider</div>
    )
}
export default Imageslider