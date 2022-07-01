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
        listHandler();
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
                
                      
            <span style={{display:'flex'}}><h2 style={{fontSize:'12px',position:'relative',top:'60px',left:'84px'}}>
                {props.user.userData.name}</h2>
            <span style={{position:'relative',top:'60px',left:'90px',fontSize:"12px"}}>님의 제주여행</span></span>
            <div style={{position:'relative',top:'70px',left:'85px',fontSize:"12px"}}>이메일:{props.user.userData.email}</div>
        
                
            </div>
        )
    }
   }

   const goodlist = ()=>{
    if(props.user.userData&&props.user.userData.good){

     
             
           return (
          
                   <div>
                   <div >
                  <div style={{marginRight:'10px',fontSize:'12px',position:'absolute',top:"-50px",
                left:'-60px'}}><h4>찜리스트</h4> </div> 
                   
                    <a href='/userstyle' style={{color:'#f58d9c',fontSize:'12px',position:'absolute',top:"-50px",
                left:'0px'}}>{props.user.userData.good.length}</a>
                   
                </div>
                
                   </div>
            
           )

     
    }
  }

  const listHandler = () =>{

    if(props.user.userData&&props.user.userData.schedule){
            if(props.user.userData.schedule.length>0){
              return (
                <div  style={{position:'absolute', top:'320px',left:'310px',
                display:'flex'}}>
                   
                    {list()}
                 </div>
              )
                }else{
                    return (
                        <div  style={{position:'absolute', top:'320px',left:'320px',
                        display:'flex'}}>
                           
                            <h3>등록된 일정이 없습니다.</h3>
                         </div>
                      )
                }     
    }
  }
    return ( 
        <div className='travelDetail' style={{height:"750px",background:" #C6DCE4"}}>
        
         <div style={{border:'1px solid lightgray', width:'700px',height:"160px",
         position:'absolute', top:'100px',left:"300px",background:"#DAEAF1",borderRadius:"50px"}}>
            <div> <h3 style={{position:'absolute', top:'20px',left:'320px'}}> My Travel</h3></div>
         <div>
            <div>
                {userDetail()}
        
  
            </div>

            <span>
               <div style={{position:'absolute', top:'110px',left:'550px',}}>
                {
                goodlist()
                }
               </div>
                <div  style={{position:'absolute', top:'100px',left:'490px',display:'flex'}}>
                    <div style={{fontSize:'12px',}}>나의 일정 </div>
                <div><a href='/myschedule' style={{width:"30px",color:"pink",marginLeft:"15px",
            color:"#f58d9c"}}><BsCalendarPlusFill  style={{width:"15px",height:"15px"}} ></BsCalendarPlusFill></a>  </div>  
                </div>

            </span>
         </div>
         </div>
         <div style={{position:'absolute', top:'280px',left:'320px',width:'900px'}}>
         <h3>나의 일정 리스트</h3>
         </div>

         {
            listHandler()
         }

        </div>
    );
};

export default MyTravelUpdate;