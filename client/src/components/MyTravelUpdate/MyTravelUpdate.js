import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCalendarPlusFill } from 'react-icons/bs';



const MyTravelUpdate = () => {


    let navigate =useNavigate()
    return (
        <div >
         <h2 style={{position:'absolute', top:'100px',left:'700px'}}> My Travel</h2>
         <div style={{border:'1px solid black', width:'900px',height:"200px",
         position:'absolute', top:'200px',left:"300px"}}>
         <span>
            <span style={{position:'absolute', top:'50px',left:'100px'}}>
                  <div>이름:</div>
                  <div>이메일:</div>
            </span>
            <span>
                <div style={{position:'absolute', top:'50px',left:'500px'}}>
                    좋아요한 리스트
                </div>
                <div  style={{position:'absolute', top:'90px',left:'500px'}}>
                    나의 일정 
                  <a href='/myschedule' style={{width:"30px",color:"black",marginLeft:"10px"}}><BsCalendarPlusFill  style={{width:"20px",height:"20px"}} ></BsCalendarPlusFill></a>  
                </div>

            </span>
         </span>
         </div>

        </div>
    );
};

export default MyTravelUpdate;