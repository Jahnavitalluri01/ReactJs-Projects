import { useState, useEffect } from "react"
import Searchbar from "./Searchbar"
import Loading from "../ScrollIndicator/Loading"

function Weather(){
    const [loading,setloading]=useState(false)
    let [valuefromsearch,handlechange]=useState('')
    let [weather,setweather]=useState({})
    let [haddata,sethaddata]=useState(false)
    async function fetchdata(valuefromsearch){
        console.log('called')
        try{
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valuefromsearch}&appid=a2470564b14526890fbca2ec88d41fb1`)
            const data=await res.json()
            handlechange(valuefromsearch.toUpperCase())
            setloading(false)
            setweather(data)
            sethaddata(true)
            // console.log(data)
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        if(valuefromsearch.length>1){
            setloading(true)
        fetchdata(valuefromsearch)
        }
    },[valuefromsearch])
   console.log(weather)
    return(
            <div className="container my-5 py-5 w-50 rounded" style={{backgroundColor:"#3aafa9"}}>
                <h1 className="mt-4 mb-5">Weather App</h1>
                <Searchbar handlechange={handlechange}/>
                {
                    loading===false? (haddata==true?
                    (<div className="my-5">
                        <h5>{valuefromsearch}{', '}{weather.sys.country}</h5>
                        <h5>{new Date().toLocaleString()}</h5>
                        <h2 className="mt-4">{weather.main.temp}</h2>
                        <h6>{weather.weather[0].main}</h6>
                        <div className="d-flex align-items-center justify-content-around my-5">
                            <div>
                               <h2> {weather.wind.speed}</h2>
                               <h5>Wind Speed</h5>
                            </div>
                            <div>
                               <h2> {weather.main.humidity}</h2>
                               <h5>Humidity</h5>
                            </div>
                            </div>
                        </div>
                        ):(<div className="my-5 px-5"><h4>There is no such thing as bad weather, only different kinds of good weather.</h4></div>)):
                        <Loading color="#17252a" />
                    
                }
            </div>
    )
}
export default Weather