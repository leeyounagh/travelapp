import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GoogleMap, useJsApiLoader,Marker,
  InfoBox  } from '@react-google-maps/api';
  import {Context} from './Recomendation'


const containerStyle = {
  width: '700px',
  height: '400px'
};

// const center = {
//     lat:Number(33.37212380975274),lng:Number(126.53518867943278)
// };

function GMap(props) {

  let context =useContext(Context)
  const [center,setCenter] =useState( {
    lat:Number(33.37212380975274),lng:Number(126.53518867943278)
})

const [markerClick,SetMarkerClick] =useState(false)
 const ref =useRef(0)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBGRsNeYWBKmbw5-YWDwHVL8EOnXx-KTRc"
  })

  const [map, setMap] = React.useState(null)
  const [zoom,setZoom]= useState(11)
const options = { closeBoxURL: '', enableEventPropagation: true };

const onLoad = infoBox => {
  // console.log('infoBox: ', infoBox)
};

useEffect(()=>{
  SetMarkerClick()
},[])
 const infoboxHandler =(index ) =>{
    

        SetMarkerClick(true);
                
        ref.current = index;
             console.log(index)
 }




 function test () {
  if(markerClick&&ref.current){
    return(
      <div>
      {
       <InfoBox
       onLoad={onLoad}
       options={options}
       position={{lat:Number(props.data[ref.current].latitude),lng:Number(props.data[ref.current].longitude)}} 
       zoomOnClick ={false}
       >
       <div style={{ backgroundColor: 'yellow', padding: 12 }}>
       <div style={{ fontSize: 16, fontColor: `#08233B` }}>
       <div>
       <img alt={props.data[ref.current].title} src={props.data[ref.current].thumbnailpath} width='100px' height='100px'></img>

       </div>
       </div>
       </div>
       </InfoBox>
      }
    </div>
    )

     
  }
 }
 
 
 //여기서 placeFilter에 컨텐츠 아이디를 받아서 부모 클래스에서 해야됨
  return isLoaded ? (
    <div>
<GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
       
      >
        {
          props.data.map((item,i)=>{
        
            return(
                <div>
        <Marker onClick={(event)=>{
       infoboxHandler(i);
        setCenter({
          lat:Number(item.latitude),lng:Number(item.longitude)
      }) } } position={{lat:Number(item.latitude),lng:Number(item.longitude)}} 
       data-id={item.contentsid} >
       
      
   
        </Marker>

              
       
                </div>
              )
          }
       
          )
        }

         {test()}
        <></>
        
      </GoogleMap>
   
    </div>
      
      
  ) : <></>
}

export default React.memo(GMap)