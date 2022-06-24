import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCalendarPlusFill } from 'react-icons/bs';
import axios from 'axios';
import MyscheduleDetail from './MyscheduleDetail';


const MyTravelUpdate = (props) => {

    useEffect(()=>{
        list();
        removeHandler();
    },[])
    
       const removeHandler = (scheduleId) =>{
        console.log('scheduleId',scheduleId)
         axios.get(`/api/users/removeFromschedule?id=${scheduleId}`)
           .then(response =>{
            
                 console.log(response.data)
            return response.data}).catch((error)=>{
                console.log('error',error)
            })
    
       }
   const list = ()=>{
     if(props.user.userData&&props.user.userData.schedule){
        <MyscheduleDetail schedule={props.user.userData.schedule}/>
        return props.user.userData.schedule.map((item,index)=>{
              
            return (
                <span key={index} style={{marginRight:"10px",
                  border:"1px solid lightgray"}}>
                    <span>
                    
                        여행제목:{item.title}
                        
                        여행스타일:{item.style}

                        출발일:{item.startDate}
                        돌아가는날:{item.endDate}
                        <a href={`/mytravel/${item.id}`}>자세히 보기..</a>
                        <button onClick={()=>{removeHandler(item.id) }}>일정삭제</button>
                 
                    </span>
                </span>
            )
 
        })
     }
   }
   
   const userDetail = () =>{
    if( props.user.userData){
        return (
            <div >
                
                      
                       <div>이름:{props.user.userData.name}</div>
                      <div>이메일:{props.user.userData.email}</div>
                    
                
            </div>
        )
    }
   }
    return (
        <div >
         <h2 style={{position:'absolute', top:'100px',left:'700px'}}> My Travel</h2>
         <div style={{border:'1px solid black', width:'900px',height:"200px",
         position:'absolute', top:'200px',left:"300px"}}>
         <span>
            <span style={{position:'absolute', top:'50px',left:'100px'}}>
                {userDetail()}
        
  
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
         <div style={{position:'absolute', top:'400px',left:'300px'}}>
         <h2>나의 일정 리스트</h2>
         </div>
         <div  style={{position:'absolute', top:'450px',left:'300px',
        display:'flex'}}>
           
            {list()}
         </div>

        </div>
    );
};

export default MyTravelUpdate;