import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCalendarPlusFill } from 'react-icons/bs';
import axios from 'axios';
import MyscheduleDetail from './MyscheduleDetail';
import './/MytravelUpdate.scss'
import { BsFillTrashFill } from 'react-icons/bs';


const MyTravelUpdate = (props) => {

    const[listControl,setlistControl] =useState(false)

    useEffect(()=>{
        list();
        removeHandler();
        listHandler()
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
                  border:"1px solid lightgray",width:'200px',display:"flex",justifyContent:'center',
                  background:"#DAEAF1",borderRadius:'10px'}}>
                    <span>
                    
                    <div>
                    여행제목:{item.title}
                        </div>
                        
                        <div>
                        여행스타일:{item.style}
                        </div>
                        <div>
                        출발일:{item.startDate.substr(0,10)}
                        </div>
                            <div>
                            
                            돌아가는날:{item.endDate.substr(0,10)}
                            </div>
                      <div>
                      <a href={`/mytravel/${item.id}`}>자세히 보기..</a>
                      </div>
                        <div style={{display:"flex",justifyContent:'center',cursor:'pointer'}} onClick={()=>{removeHandler(item.id) }}>
                        <BsFillTrashFill>일정삭제</BsFillTrashFill>
                        </div>
                    
                 
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
                
                      
                       <span style={{display:'flex'}}><h2 style={{fontSize:'20px'}}>{props.user.userData.name}</h2>
                       <span style={{position:'relative',top:'7px',left:'10px'}}>님의 제주여행</span></span>
                      <div style={{position:'relative',top:'27px',left:'0px'}}>이메일:{props.user.userData.email}</div>
                    
                
            </div>
        )
    }
   }

   const goodlist = ()=>{
    if(props.user.userData&&props.user.userData.good){

     
             
           return (
          
                   <span>
                   <div style={{position:'absolute', top:'60px',left:'650px'}}>
                  <span style={{marginRight:'10px',fontSize:'17px'}}>찜리스트 </span> 
                   
                    <a href='/userstyle' style={{color:'#f58d9c'}}>{props.user.userData.good.length}</a>
                   
                </div>
                
                   </span>
            
           )

     
    }
  }

  const listHandler = () =>{

    if(props.user.userData&&props.user.userData.schedule){
            if(props.user.userData.schedule.length>0){
              return (
                <div  style={{position:'absolute', top:'420px',left:'310px',
                display:'flex'}}>
                   
                    {list()}
                 </div>
              )
                }else{
                    return (
                        <div  style={{position:'absolute', top:'450px',left:'320px',
                        display:'flex'}}>
                           
                            <h2>등록된 일정이 없습니다.</h2>
                         </div>
                      )
                }     
    }
  }
    return ( 
        <div className='travelDetail' style={{height:"750px",background:" #C6DCE4"}}>
        
         <div style={{border:'1px solid lightgray', width:'900px',height:"200px",
         position:'absolute', top:'150px',left:"300px",background:"#DAEAF1",borderRadius:"50px"}}>
            <div> <h2 style={{position:'absolute', top:'20px',left:'400px'}}> My Travel</h2></div>
         <span>
            <span style={{position:'absolute', top:'50px',left:'50px'}}>
                {userDetail()}
        
  
            </span>
            <span>
               <div>
                {
                goodlist()
                }
               </div>
                <div  style={{position:'absolute', top:'110px',left:'650px',display:'flex'}}>
                    <div style={{fontSize:'15px',}}>나의 일정 </div>
                <div><a href='/myschedule' style={{width:"30px",color:"pink",marginLeft:"15px",
            color:"#f58d9c"}}><BsCalendarPlusFill  style={{width:"20px",height:"20px"}} ></BsCalendarPlusFill></a>  </div>  
                </div>

            </span>
         </span>
         </div>
         <div style={{position:'absolute', top:'380px',left:'320px',width:'900px'}}>
         <h2>나의 일정 리스트</h2>
         </div>

         {
            listHandler()
         }

        </div>
    );
};

export default MyTravelUpdate;