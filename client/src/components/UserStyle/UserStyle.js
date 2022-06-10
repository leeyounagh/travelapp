import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getGoodItems} from '../../_actions/User_action'


const UserStyle = (props) => {
    //  let goodItems = [{id:[],image:[],address:[],title:[]}]
    //  let dispatch = useDispatch()
    //  console.log(goodItems)
    // useEffect(()=>{
     
    //     if(props.user.userData && props.user.userData.good){
    //         if(props.user.userData.good.length>0){
    //            props.user.userData.good.forEach(item => {
    //                goodItems.push({id:item.id,image:item.image,
    //             address:item.address,title:item.title})
    //            });
    //            dispatch(getGoodItems(goodItems,props.user.userData.good))
    //         }
    //     }
    // },[])

    return (
        <div>
           UserStyle 
        </div>
    );
};

export default React.memo(UserStyle);