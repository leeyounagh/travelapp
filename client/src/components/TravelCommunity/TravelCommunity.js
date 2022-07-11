import React from 'react';
import './TravelCommunity.scss'

const TravelCommunity = () => {
    return (
        <div style={{height:'50000px',background:"#DAEAF1",}}>
           
                <div style={{position:'absolute',top:'100px',left:'500px'}}>
                   <h1> Hello Jeju Community</h1>
                </div>
                <div style={{position:'absolute',top:'200px',left:'300px'}}>
                    <h3>최신업데이트</h3>
                    <div style={{width:'700px',height:'100px',border:"1px solid black"}}>

                    </div>
                </div>
                <div  style={{position:'absolute',top:'350px',left:'300px'}}>
                <h3>조회수</h3>
                    <div style={{width:'700px',height:'100px',border:"1px solid black"}}>

                    </div>
                </div>
              <div  style={{position:'absolute',top:'500px',left:'300px'}}>
                <h2>
                    Community
                </h2>
                <div style={{  position:'absolute',top:'20px',left:'650px'}}>
                  <a href='/communityupdate'>update</a>
                </div>
                <div style={{width:'700px',height:'500px',border:"1px solid black",
            position:'absolute',top:'50px',marginBottom:"50px"}}>

                </div>
             
                <div style={{  position:'absolute',top:'600px',marginBottom:"50px"}}>
                    페이지네이션
                </div>
              </div>

            
        </div>
    );
};

export default TravelCommunity;