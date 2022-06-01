import axios from 'axios';

import React, { useEffect, useState } from 'react';
import './NorthHotSpot.scss'

const NorthHotSpotPage = () => {

    const [data,setData] =useState([])
      
    useEffect(()=>{
        try{
            axios.get('http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=c1')
            .then((response)=>setData(response.data.items))
        }
       catch (error) {
            console.error(error);
          }
    },[])
       
   

        //  console.log('확인',data[0].alltag)
    
    return (
        <div>
             {
                
                    data.map((item,i)=>{
                        return(
                            <div key ={i}>
                                {item.address}
                            </div>
                        )
                  })
                 }
                
             
        </div>
    );
};

export default React.memo(NorthHotSpotPage);