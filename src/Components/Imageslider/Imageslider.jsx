import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import './slider.css';

function Imageslider({url,limit}){

    const [images,setimages]=useState([])
    let [loading,setloading]=useState(false)
    const [error,seterror]=useState(null)
    let [currentslide,setslide]=useState(0)

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

    function handleprev(){
           if(currentslide-1<0){
            currentslide=limit-1;
           }
           else{
            currentslide=currentslide-1;
           }
           setslide(currentslide);
    }
    function handlenext(){
        if(currentslide+1===limit){
            currentslide=0;
           }
           else{
            currentslide=currentslide+1;
           }
           setslide(currentslide);
    }
    function setslideforclick(current){
     setslide(current)
    }
    console.log(currentslide)
    return(
          <div className="container d-flex align-items-center justify-content-center slider my-5">
            <FaCircleArrowLeft onClick={handleprev} className="arrow arrow-left"/>
        
            {
                images && images.length>0?
                images.map((image,index)=>(
                    <img key={index} src={image.download_url} className={currentslide===index ? "img-fluid img-thumbnail w-50 h-50 current_img":"img-fluid img-thumbnail w-25 h-50 inactive_img"} />
                )):null
            }
            <FaCircleArrowRight onClick={handlenext} className="arrow arrow-right"/>
            <span className="circles">
                {images && images.length>0?
                images.map((image,index)=>(
                     <button key={index} onClick={()=>setslideforclick(index)} className={currentslide===index? "active_button":"buttonn"}></button>
                )):null}
            </span>
           
          </div>
    )
}
export default Imageslider