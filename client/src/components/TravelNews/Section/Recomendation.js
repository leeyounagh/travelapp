import React from 'react';





const Recomendation = () => {
    return (
        <div style={{width:'900px',height:"500px",paddingBottom:'50px'}}>
            <div style={{display:'flex',position:'relative',left:'300px'}}>
                <h2>Hello 제주 추천 10</h2>
            </div>
            <div style={{display:'flex',justifyContent:"space-around",position:'relative',
        top:'50px',left:'-150px'}}>
            <div style={{marginBottom:'150px'}}>
                <div>#호텔</div>
                <img style={{width:'150px',height:"120px"}}alt='호텔' src='image/hotel.png'></img>
            </div>
            <div style={{}}>
                <h4>#쇼핑</h4>
                <div>
                    <img style={{width:'150px',height:'120px'} } alt='쇼핑' src='image/쇼핑.png'></img>
                </div>
            </div>
            <div>
            <div style={{width:'150px',height:'100px',marginBottom:'50px',
           }}>
                <div>#맛집</div>
                <img style={{width:'150px',height:'120px'}} alt='맛집' src='image/restaurant.png'></img>
            </div>
            </div>
          
            <div>
            <div style={{position:'absolute',}}>
                <h4>#관광지</h4>
                <div>
                    <img style={{width:'150px',height:'120px'} } alt='관광지' src='image/beach.png'></img>
                </div>
            </div>
            </div>

            </div>
   
         
        </div>
    );
};

export default Recomendation;