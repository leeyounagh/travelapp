import React from 'react';
import './LandingMiddle.scss';

import MiddleRight from './Section/MiddleRight';

const LandingMiddle = () => {

    var j_day=new Date("Aug 28, 2018 19:00:00").getTime();
    var x = setInterval(function() {
  // Get todays date and time
    var now = new Date().getTime();
    var gap = j_day-now;
   
    var days = Math.floor(gap/(1000*60*60*24));
    var hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((gap%(1000*60*60))/(1000*60));
    var seconds = Math.floor((gap%(1000*60))/(1000));
        
    if(gap<=0){
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("second").innerHTML = "00";
        var pop = document.getElementById("pop");
        pop.style.display="block";
        
       
      }else{
          if(days<10){days="0"+days;}
          if(hours<10){hours="0"+hours;}
          if(minutes<10){minutes="0"+minutes;}
          if(seconds<10){seconds="0"+seconds;}
        
            document.getElementById("day").innerHTML = days;
            document.getElementById("hour").innerHTML = hours;
            document.getElementById("minute").innerHTML = minutes;
            document.getElementById("second").innerHTML = seconds;
    
      }

},1000);
 
    return (
        <div style={{width:'120%',height:'600px',
        background:'black',overflowX:"hidden"}}>
  <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"/>
<div class="wrap">
        <h1 className="h1_style"style={{position:"relative",left:"40px",top:"50px",color:'white'}}><span>D</span>-day</h1>
        <div style ={{position:"relative",left:"130px",
         top:"50px"}}class="countdown" id="js-countdown">
            <div class="countdown_item">
              <div style={{position:"relative", left:"-10px",display:'flex',justifyContent:"center"}} class="countdown_timer" id="day"></div>
              <div style={{position:"relative",left:"-12px",color:'white'}} class="countdown_label">days</div>
            </div>
            <div class="middle">:</div>
            <div class="countdown_item">
              <div style={{position:"relative", left:"-10px",display:'flex',justifyContent:"center"}} class="countdown_timer" id="hour"></div>
              <div  style={{position:"relative",left:"-12px",color:'white'}}class="countdown_label">Hours</div>
            </div>
            <div class="middle">:</div>
            <div class="countdown_item">
              <div style={{position:"relative", left:"-10px",display:'flex',justifyContent:"center"}} class="countdown_timer" id="minute"></div>
              <div  style={{position:"relative",left:"-12px",color:'white'}} class="countdown_label">Minutes</div>
            </div>
            <div class="middle">:</div>
            <div class="countdown_item">
              <div style={{position:"relative", left:"-10px",display:'flex',justifyContent:"center"}}  class="countdown_timer" id="second"></div>      
              <div  style={{position:"relative",left:"-12px",color:'white'}} class="countdown_label">Seconds</div>
            </div>
          
          <div id="pop">
        <img src="http://blogfiles.naver.net/MjAxNzEwMjBfMjYy/MDAxNTA4NDI3NzQ5NDE4.n12IRviyUJzep8pNrYTposyPufPCzkWoI0f1CuIrEecg._CgRpP-pmKd3y8gVPx2tz5cDJ1s3g4UGl9ZTl-XB0OIg.JPEG.duckzil1234/resized_20170930_150451_550998570.jpg" alt=""/>
      </div>
        </div>
      
    </div>
<div><MiddleRight></MiddleRight></div>
        </div>
    );
};

export default LandingMiddle;