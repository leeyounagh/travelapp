import React,{ Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getGoodItems} from '../../_actions/User_action'
import './UserStyle.scss'
import { removeFromgood } from '../../_actions/User_action';
import Myschedule from '../MyTravelUpdate/Myschedule';
import { FcFullTrash } from 'react-icons/fc';
const UserStyle = (props) => {

let dispatch = useDispatch()

useEffect(()=>{
    test()
},[])


let removeHandler = (contentsId) =>{
    console.log(contentsId)
   dispatch(removeFromgood(contentsId)).catch((err)=>console.log(err))
}
const test = ()=>{
    if(props.user.userData&&props.user.userData.good){
      
        
        
        return props.user.userData.good.map((item,index)=>{
           console.log(item)
            return (<div key ={index}style={{marginTop:'20px',
            }}>
                  <div>
                  <a href={`/detail/${item.id}`}><img alt={item.title} src={item.image} width='100px' height ='100px'
                style={{position:'absolute',left:'230px',borderRadius:'50px'}}></img></a> 
                  </div>
                 <div style={{width:"100px",height:'50px',position:'absolute',left:'380px',marginTop:'20px'
                }} >
                 <h2   >{item.title}</h2>
                 </div>
                 <div style={{width:"300px",height:'100px',position:'relative',left:'550px',top:'20px'
                }} >
                    <h2>{item.address}</h2>
                 </div>
               <div style={{position:'relative',left:'870px',top:'-70px'
                }}>
               <FcFullTrash onClick={()=>removeHandler(item.id)} style={{width:'30px',height:'40px',
              cursor:'pointer'}}>삭제</FcFullTrash>
               </div>
                 
            </div>)
          })
    }
}
 

    return (
         <div className='userstyle_body' >
      <div  style={{position:'absolute', marginTop:'20px',top:'130px',left:'700px',display:'flex',textAlign:'center',
      fontSize:"20px"
       
    }}className="goodDetail" ><h2 >찜 리스트</h2></div>
        <div style={{position:'absolute', marginTop:'20px',top:'200px',left:'200px',
        }}>
           
     <div className="goodDetail">
     {test()}
     </div>
     
          
        </div>
         </div>
  
    );
};

export default React.memo(UserStyle);