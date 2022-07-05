import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader,Marker,
  InfoBox  } from '@react-google-maps/api';

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
const options = { closeBoxURL: '', enableEventPropagation: true };

const onLoad = infoBox => {
  console.log('infoBox: ', infoBox)
};

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
        >
    <InfoBox
          onLoad={onLoad}
          options={options}
          position={center}
        >
          <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
              Hello, World!
            </div>
          </div>
        </InfoBox>

        </Marker>
    
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