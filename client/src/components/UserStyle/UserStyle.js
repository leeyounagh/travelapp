import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getGoodItems} from '../../_actions/User_action'
import './UserStyle.scss'


const UserStyle = (props) => {

//    console.log(props.user.userData.good)

useEffect(()=>{
    test()
},[])

const test = ()=>{
    if(props.user.userData&&props.user.userData.good){
        console.log(props.user.userData.good,props.user.userData.good[0].image)
      
        
        
        return props.user.userData.good.map((item)=>{
            return (<div style={{marginTop:'20px'
            }}>
                <h2>{item.title}</h2>
                 <img alt={item.title} src={item.image} width='300px' height ='300px'></img>
            </div>)
          })
    }
}
 
// console.log(props.user.userData.good)
    return (
        <div style={{position:'absolute', marginTop:'20px',top:'200px',left:'200px',
        }}>
            

        {test()}
          
        </div>
    );
};

export default React.memo(UserStyle);