import axios from 'axios';
import React from 'react';
import Gallery from './Gallery'
import './TravelNews.scss';
import Recomendation from './Section/Recomendation';
const TravelNews = () => {
    var vid = document.getElementById("vid"); 

    function handleClick(evt) {
        const times = parseTime(evt.target);
        if(!times) return;
        // update the video's current time  
        vid.currentTime = times.start;
        // update the shared variable
        let next_stop = times.end;
        // start playing if needed
        if(vid.paused) {
          vid.play();
        }
      }      function handleClick(evt) {
        const times = parseTime(evt.target);
        if(!times) return;
        // update the video's current time  
        vid.currentTime = times.start;
        // update the shared variable
        let next_stop = times.end;
        // start playing if needed
        if(vid.paused) {
          vid.play();
        }
      }
      axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=c4')
      .then(res=>console.log(res.data.items))
    onclick =e=> {
        let next_stop = Infinity; // a variable shared by both event listeners

            // add the event listeners only once
            vid.addEventListener('timeupdate', handleTimeupdate, {passive: true});
            document.addEventListener('click', handleClick);

            function handleTimeupdate(evt) {
            // not set? exit early
            if(!isFinite(next_stop)) return;
            // a single action
            if(this.currentTime > next_stop) {
                this.pause();
                // if you want to disable the range once it's done
                // e.g to allow default controls interactions
            //    next_stop = Infinity;
            }
            }
        
        const data = e.target.dataset;
        if(!data.start) return;
        vid.src = vid.src.split('#')[0] +
          '#t=' + data.start + ',' + data.end;
        // url.vid#t=start,end
        vid.play();
      }

      function parseTime(target) {
        const data = target.dataset;
        if(!data || !data.start) return null;
        return {start: +data.start, end: +data.end};
      }

    return (
        <div className='recomm' style={{background:"#DAEAF1",
        overflowX:'hidden'}}>
        <div>
            <div style={{position:'absolute', top:"150px",left:'250px'}}>
           <h2 >에디터가 추천하는 여행지</h2>
           <div> 

        <div style={{width:'600px',position:'absolute',left:'650px',top:'40px',height:'300px'}}>
           <div>
            <h2>video clip</h2>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px'}}>
            
           <button style={{width:"60px",height:"30px",fontSize:"10px"}}  data-start="0" data-end="3">시작</button>
           <h4 style={{marginLeft:"30px",fontSize:"10px",marginTop:"10px"}}>0초~3초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"60px",height:"30px"}} data-start="3" data-end="5">쇠소깍</button>
           <h4 style={{marginLeft:"30px",marginTop:"10px"}}>3초~5초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"60px",height:"30px"}} data-start="5" data-end="10">칼호텔</button>
           <h4 style={{marginLeft:"30px",marginTop:"10px"}}>5초~10초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"70px",height:"30px"}} data-start="10" data-end="16">고흐의 빛의벙커</button>
           <h4 style={{marginLeft:"20px",marginTop:"10px"}}> 10초~16초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"70px",height:"30px"}} data-start="16" data-end="19">서귀포 바다</button>
           <h4 style={{marginLeft:"20px",marginTop:"10px"}}>16초~19초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"70px",height:"30px"}} data-start="19" data-end="21">애월 결이곱다</button>
           <h4 style={{marginLeft:"20px",marginTop:"10px"}}> 19초~21초</h4>
           </div>
           <div style={{height:'30px',display:'flex',marginBottom:'10px',fontSize:"10px"}}>
           <button style={{width:"70px",height:"30px"}} data-start="22" data-end="30">수우동</button>
           <h4 style={{marginLeft:"20px",marginTop:"10px"}}>22초~30초</h4>
           </div>
           
           
        
        
          

               
              
               
             
                
                
        </div>
      
        <div style={{width:'600px',position:'absolute',left:'0px',top:'50px'}}>
        <video style={{width:'500px'}} id="vid" src="video/제주도추천.mp4" controls></video>
        </div>

      
          
           
        </div>
       
           <div className='recomm' style={{width:'600px',position:'absolute',left:'-130px',top:'500px'}}>
            <h1 style={{width:'600px',position:'absolute',left:'470px',top:'10px',fontSize:'40px'}}>갤러리</h1>
               <div  style={{width:'600px',position:'absolute',left:'200px',top:'0px'}}> 
               <Gallery></Gallery>
               </div>
         
          </div>
           <div style={{width:'600px',position:'absolute',left:'0px',top:'1000px'}}>
       <Recomendation></Recomendation>
           </div>

            </div>
         
        </div>
    </div>
    );
};

export default TravelNews;