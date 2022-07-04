import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px'
};

// const center = {
//     lat:Number(33.37212380975274),lng:Number(126.53518867943278)
// };

function GMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGRsNeYWBKmbw5-YWDwHVL8EOnXx-KTRc"
  })

  const [map, setMap] = React.useState(null)
  const [center,setCenter] =useState( {
    lat:Number(33.37212380975274),lng:Number(126.53518867943278)
})
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])
   
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
       
      >
        {
          props.data.map((item)=>{
            return(
                <div>
        <Marker position={{lat:Number(item.latitude),lng:Number(item.longitude)}} 
        ></Marker>
    
                </div>
              )
          }
       
          )
        }
 
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GMap)