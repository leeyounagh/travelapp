
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
       
      const newId = props.user.userData.schedule.findIndex((item)=>item.uuid ===Number(id))

       console.log(newId)

       let newDetail =  props.user.userData.schedule[newId]
       return(
        <div>
           <div style={{position:'absolute',top:"200px",left:"600px",border:'1px solid black', width:"300px"}}>
          제목: {newDetail.title}
          <br/>
          쇼핑스타일:{newDetail.style}
          <br/>
          제주도 도착하는날:{newDetail.startDate}
          집으로 가는날:{newDetail.endDate}
          <br/>
          여행일정:{newDetail.desc}
          <br/>
          <button onClick={()=>navigate('/mytravel')}>mytravel로</button>
           </div>
        </div>
       )
       
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