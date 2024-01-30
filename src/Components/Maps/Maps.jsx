import React from "react";
import './maps.css';
import googleMapReact from "google-map-react";

function Maps(){
    const coordinates={lat:0,lon:0}
    return(
        <div>
            <googleMapReact 
            bootstrapURLKeys={{key:'YOUR_API_KEY'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >

            </googleMapReact>
            </div>
    )
}
export default Maps