

import React, { useEffect, useState } from 'react';
import './LandingMain.css'
import LandingMainRight from './LandingMainRight';
const LandingMain = () => {

  const [position,setPosition] =useState(0);

  function onScroll() {
    setPosition(window.scrollY)
  }
  useEffect(()=>{
         window.addEventListener('scroll',onScroll);
         return ()=>{
           window.removeEventListener('scroll',onscroll);
         }
  },[])
    return (
     
      <div style={{ 
        top:'-300px',left:'0'
        ,opacity:'1', backgroundPositionY: position / 2,}}>
       <img alt='제주도' src='https://s3.ap-northeast-2.amazonaws.com/cloimage/home/rails/clo/public/ckeditor_assets/pictures/1611/content_1.bmp'
        width='1700px' height='750px'></img>
        <div style={{position:'absolute',
          top:'200px',left:'200px',
           fontSize:'50px',color:'#000069',weight:'500'}}>Hello Jeju</div>
           <LandingMainRight></LandingMainRight>
      </div>
           
        
  
    );
};

export default LandingMain;