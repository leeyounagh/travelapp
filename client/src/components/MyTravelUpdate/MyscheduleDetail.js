import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MyscheduleDetail = (props) => {
    const {id} =useParams();
    let navigate =useNavigate()
    console.log(id)
   
    useEffect(()=>{
        scheduleDetail()
    },[])
    const scheduleDetail = () =>{
        console.log(props.user.userData)
     if(props.user.userData&&props.user.userData.schedule){
        props.user.userData.schedule.indexOf(id)
       
     } 
    }
    return (
        <div>
           <div  style={{position:'absolute',
         top:'100px',left:'700px'}}> <h2 >나의 스케쥴</h2></div>
        {scheduleDetail()}
        {props.user.userData&&<div>
            </div>}
        </div>
    );
};

export default MyscheduleDetail;