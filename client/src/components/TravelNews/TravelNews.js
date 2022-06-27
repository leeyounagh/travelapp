import React from 'react';
import './TravelNews.scss'
const TravelNews = () => {
    var vid = document.getElementById("vid"); 
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
      }
      function parseTime(target) {
        const data = target.dataset;
        if(!data || !data.start) return null;
        return {start: +data.start, end: +data.end};
      }

    return (
        <div className='recomm' style={{height:'1000000px',background:"#DAEAF1"}}>
        <div>
            <div style={{position:'absolute', top:"150px",left:'200px'}}>
           <h2>에디터가 추천하는 여행지</h2>
           <div> 

        <div style={{width:'600px',position:'absolute',left:'700px',top:'100px',border:'1px solid black',height:'300px'}}>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button   data-start="0" data-end="3">시작</button>
           </div>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button data-start="3" data-end="5">쇠소깍</button>
           </div>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button data-start="5" data-end="10">칼호텔</button>
           </div>
           <div style={{border:'1px solid black' ,width:'200px',height:'30px'}}>
           <button data-start="10" data-end="16">고흐의 빛의벙커</button>
           </div>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button data-start="16" data-end="19">서귀포 바다</button>
           </div>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button data-start="19" data-end="21">애월 결이곱다</button>
           </div>
           <div style={{border:'1px solid black' ,width:'100px',height:'30px'}}>
           <button data-start="21" data-end="30">수우동</button>
           </div>
           
           
        
        
          

               
              
               
             
                
                
        </div>
      
        <div style={{width:'600px',position:'absolute',left:'0px',top:'100px'}}>
        <video style={{width:'600px'}} id="vid" src="video/제주도추천.mp4" controls></video>
        </div>

      
          
           
        </div>
           <div style={{width:'600px',position:'absolute',left:'0px',top:'500px'}}>3d사진 갤러리</div>
           <div style={{width:'600px',position:'absolute',left:'0px',top:'700px'}}>태그별 추천 리스트//클릭시 모달창 그리고 지도 </div>

            </div>
         
        </div>
    </div>
    );
};

export default TravelNews;