import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './loadmore.css'

function Loadmore({url}){
    let [productss,setproducts]=useState([])
    let [loading,setloading]=useState(true)
    let [errmsg,seterror]=useState('')
    let [skip,setskip]=useState(0)
    let [nomore,setnomore]=useState('')
    async function fetchproducts(url){
        try{
            setloading(true)
        const response=await fetch(`${url}?limit=20&skip=${skip}`);
        const data=await response.json();
        setproducts((productss)=>[...productss,...data.products])
        // console.log(data.products)
        setloading(false)
        }
        catch(e){
               seterror('Cannot retrieve Data')
               setloading(false)
        }


    }
    useEffect(()=>{
          if(url!==''){
               fetchproducts(url);
          }
        //   console.log("In use effect")        
        //   removed strict mode in index.js as useEffect is being called twice and products are being called twice initially    
        //                React.Strict mode is on
        //   StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).
    },[skip])
   
    // console.log(productss)
    function fetchmore(){
        
        if(skip+20>80){
            setnomore('No More Products Available')
            // console.log(nomore)
        }
       setskip(skip+20)
       
        
        // console.log(skip)
    }
    return(
        <div className='fluid-container my-5'>
            <h1>Load More</h1>
            <div className='row justify-content-center gx-2 gy-5 my-3'>
                {
                    
                    productss.length>0 &&
                    
                   productss.map((product,index)=>(
                    <div className='col-lg-3 col-md-4 col-sm-5 d-flex align-items-stretch justify-content-center' key={index}>
                        <Card style={{height:'30vh'}}>
                            <Card.Img src={product.thumbnail} className='card-imgg'/>
                            <Card.Body>
                                <Card.Text>Title-{product.title}</Card.Text>
                                <Card.Text>Price: ${product.price}</Card.Text>
                            </Card.Body>

                            
                        </Card>
                        </div>
                   ))
                      
                    
                        

                }
            </div>
            <h6 className='mt-5'>{nomore}</h6>
            <button className='btn btn-success mt-4' onClick={fetchmore}>Load More Products</button>
        </div>
    )
}
export default Loadmore;