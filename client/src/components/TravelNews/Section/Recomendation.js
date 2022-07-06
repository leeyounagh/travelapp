import React, { createContext,useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import GMap from './GMap';
import {rastaurantdata} from './rastaurantdata'
import {hotel} from './hotel'
import {shopping} from './shopping'
import {spot} from './spot'




export let Context =createContext()
const customStyles = {
    content: {
      top: '0px',
      left:'0px',
      zindex:'400',
      right: 'auto',
      bottom: 'auto',
      width:"1250px",
      height:"500px",
     
    
      overflow:'none'
   
    //   transform: 'translate(-50%, -50%)',
    },
  };

 
const Recomendation = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const placeInfo =useRef()
   let restaurant = rastaurantdata;
   const [datanumber,setdatanumber] =useState(1)
   const imgRef = useRef(null)
   const [imgcheck,setimgchecked] =useState(null)
   const [check,setChecked] = useState(false)

    function openModal(event) {
      setIsOpen(true);
      
     
     setdatanumber(event.target.dataset.number)

     placeInfo.current =event.target.dataset.number
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const placeHandler =(index)=>{
      imgRef.current =index
      setimgchecked(index)
      setChecked(true)
     console.log('레프값',imgRef.current)
      //클릭을하면 gmap에 있는 함수에 contentsid를 전송 그함수에서 전송받은 컨텐츠아이디와 마커들의 아이디를 비교해서 센터위치 변경
    }
    const placeFilter =(contentsId) =>{
       return contentsId
    } 

    useEffect(()=>{
      dataHandler()
    },[Modal])

    const dataHandler = () =>{
      if(Number(datanumber)===1 ){
        return(
        <div>
            <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
          opacity:"4",position:"relative",top:'50px',border:'1px solid black',
          overflow:'scroll'}}>
             {
               hotel.map((item,i)=>{
                    return(
                       <div>
                           <div >
                           <img alt= {item.title} src= {item.thumbnailpath}
                           width="100px" height='100px' data-tag={item.contentsid} 
                           onClick={()=>{placeHandler(i);
                           }}></img>
                           </div>
                          
                           
                           {item.title}
                           {item.tag}
                           
                       </div>
                    )
               })
             } 
            
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
          opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
            
            <GMap data ={hotel} imgcheck={imgcheck} check={check}></GMap>
      
           </div>

        </div>

        
        )
    
      }else if(Number(datanumber) ===2 ){
        return(
          <div>
  <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
          opacity:"4",position:"relative",top:'50px',border:'1px solid black',
          overflow:'scroll'}}>
             {
               shopping.map((item)=>{
                    return(
                       <div>
                           <div >
                           <img alt= {item.title} src= {item.thumbnailpath}
                           width="100px" height='100px' data-tag={item.contentsid} 
                           onClick={placeHandler}></img>
                           </div>
                          
                           
                           {item.title}
                           {item.tag}
                           
                       </div>
                    )
               })
             } 
            
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
          opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
          <GMap data ={shopping} placeFilter={filter =>placeFilter(filter)}></GMap>
         
           </div>
          </div>
    
        )
    
      } else if(Number(datanumber) ===3){
        return(
          <div>
  <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
          opacity:"4",position:"relative",top:'50px',border:'1px solid black',
          overflow:'scroll'}}>
             {
               restaurant.map((item)=>{
                    return(
                       <div>
                           <div >
                           <img alt= {item.title} src= {item.thumbnailpath}
                           width="100px" height='100px' data-tag={item.contentsid} 
                           onClick={placeHandler}></img>
                           </div>
                          
                           
                           {item.title}
                           {item.tag}
                           
                       </div>
                    )
               })
             } 
            
           </div>
           <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
          opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
              
               <GMap data ={restaurant} placeFilter={filter =>placeFilter(filter)}></GMap>
              
         
           </div>

          
          </div>
    
        )
      }else if(
        Number(datanumber)===4
      )       return(
        <div>
<div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
        opacity:"4",position:"relative",top:'50px',border:'1px solid black',
        overflow:'scroll'}}>
           {
             spot.map((item)=>{
                  return(
                     <div>
                         <div >
                         <img alt= {item.title} src= {item.thumbnailpath}
                         width="100px" height='100px' data-tag={item.contentsid} 
                         onClick={placeHandler}></img>
                         </div>
                        
                         
                         {item.title}
                         {item.tag}
                         
                     </div>
                  )
             })
           } 
          
         </div>
         <div style={{width:"670px",height:"400px",zIndex:"450",border:"1px solid black",
        opacity:"4",position:"relative",top:'-350px',left:'500px'}}>
         
          <GMap data ={spot} placeFilter={filter =>placeFilter(filter)}></GMap>
          
       
         </div>
        </div>
  
      )
}

     const modalHandler =(event) =>{

      

     
        return(
            <div style={{overFlow:"none"}}>
      
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button style={{position:"absolute",right:'50px'}}onClick={closeModal}>close</button>
           
  
             {dataHandler()}
            </Modal>
         
        </div>
        )
      
     }

        
 

    return (
        <div style={{width:'900px',height:"400px",paddingBottom:'50px'}}>
            <div style={{display:'flex',position:'relative',left:'300px'}}>
                <h2>Hello 제주 추천</h2>
            </div>
            <div style={{display:'flex',justifyContent:"space-around",position:'relative',
        top:'50px',left:'-150px'}}>
            <div style={{marginBottom:'150px'}}>
                <div>#호텔</div>
                <img style={{width:'150px',height:"120px",cursor:'pointer'}}alt='호텔' src='image/hotel.png'
                onClick={(event)=>openModal(event)} data-number={1}></img>
            </div>
            <div style={{}}>
                <h4>#쇼핑</h4>
                <div>
                    <img style={{width:'150px',height:'120px',cursor:'pointer'} } alt='쇼핑' src='image/쇼핑.png'
                    data-number={2} onClick={(event)=>openModal(event)}></img>
                </div>
            </div>
            <div>
            <div style={{width:'150px',height:'100px',marginBottom:'50px',
           }}>
                <div>#맛집</div>
                <img style={{width:'150px',height:'120px',cursor:'pointer'}} alt='맛집' src='image/restaurant.png'
                data-number={3} onClick={(event)=>openModal(event)}></img>
            </div>
            </div>
          
            <div>
            <div style={{position:'absolute',}}>
                <h4>#관광지</h4>
                <div>
                    <img style={{width:'150px',height:'120px'} } alt='관광지' src='image/beach.png'
                    data-number={4} onClick={(event)=>openModal(event)}></img>
                </div>
            </div>
            </div>
          
            </div>
          
         {modalHandler()}
        </div>
    );
};

export default Recomendation;