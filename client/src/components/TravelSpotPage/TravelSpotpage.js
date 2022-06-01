import React from 'react';
import './TravelSpotPage.scss';


const TravelSpotpage = () => {
    return (
        <div className="TravelSPot_font" style={{display:'flex',justifyContent:'center',
        width:'100%',height:'720px',background:'#e8f8ff'}}>
          <img alt='제주지도' src='image/제주지도1.png'
           width="1000px" height="650px"
            style={{position:'absolute',top:'70px',opacity:'0.9'}}></img>
            <div><a href="/northspot" style={{position:'absolute',
            top:'160px',left:"430px",color:'#506ea5',fontWeight:'900',
             fontSize:'30px'}}>제주시</a></div>
              <div><a href="/southspot" style={{position:'absolute',
            top:'500px',left:"1150px",color:'#506ea5',fontWeight:'900',
             fontSize:'30px'}}>서귀포시</a></div>
        </div>
    );
};

export default TravelSpotpage;