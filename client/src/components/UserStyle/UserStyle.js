import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getGoodItems} from '../../_actions/User_action'
import './UserStyle.scss'
import { removeFromgood } from '../../_actions/User_action';


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
            return (<div key ={index}style={{marginTop:'20px'
            }}>
                <h2>{item.title}</h2>
                 <img alt={item.title} src={item.image} width='300px' height ='300px'></img>
                 <button onClick={()=>removeHandler(item.id)}>삭제</button>
            </div>)
          })
    }
}
 

    return (
        <div style={{position:'absolute', marginTop:'20px',top:'200px',left:'200px',
        }}>
            

        {test()}
          
        </div>
    );
};

export default React.memo(UserStyle);