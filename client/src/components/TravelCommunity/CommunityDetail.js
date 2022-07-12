import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CommunityDetail = () => {

    const {productId} =useParams()
   

    useEffect(()=>{
      axios.get(`/api/users/addcommunity/letter/letter_by_id?contentsid=${productId}&type=single`)
      .then(response=>{
        if(response.data.success){
            console.log(response.data)
        }else{
            alert('게시글을 가져오는데 실패하였습니다.')
        }
      } )
    },[])
    return (
        <div>
            CommunityDetail
        </div>
    );
};

export default CommunityDetail;