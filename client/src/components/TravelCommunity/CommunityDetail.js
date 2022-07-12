import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommunityDetail = () => {

    const {productId} =useParams()
    const [community,setCommunity] =useState([])
    const [comment, SetComment] =useState([])
 
    useEffect(()=>{
      axios.get(`/api/users/addcommunity/letter/letter_by_id?contentsid=${productId}&type=single`)
      .then(response=>{
        if(response.data.success){
            console.log(response.data.product,response.data.product.comment)
            setCommunity(response.data.product)
            SetComment(response.data.product.comment)
        }else{
            alert('게시글을 가져오는데 실패하였습니다.')
        }
      } )
    },[])

    const CommetnArea = () =>{
             
    }
    return (
        <div  style={{position:"absolute",top:'100px',left:'400px',height:"30000px"}}>
            {
               community.map((item,index)=>{
                return(
                    <div key ={index}>
                 <div style={{borderBottom:'1px solid lightgray'}}>
                 <h3>제목: {item.Communutytitle}</h3> </div> 
                 <div><h5>작성자:{item.writer.name}</h5></div>
                 <br/>
                 <br/>
                 <div>
                 <img alt={item.Communutytitle} src={`http://localhost:5000/${item.images}`
                 } style={{maxWidth:'500px',maxWidth:'500px'}}></img>
                 </div>
                <div>
                    {item.Communutydesc}
                </div>
                  </div>
                )
                    
               })
                            }

                            <div style={{marginTop:"100px" , borderBottom:"1px solid lightgray"}}>
                                <div>
                                <h3>Comment</h3>  </div>
                          
                            </div>

                            <div style={{marginTop:'30px' , display:"flex", width:'680px'}} >
                                <form>
                                <input style={{width:"600px",
                             borderBottom:'1px solid lightgray',
                             borderTop:"none",borderLeft:"none",borderRight:"none",marginRight:'10px'}} placeholder="댓글을 입력하세요"></input>
                             <button>등록</button>
                                </form>
                              
                               </div>
          
        </div>
    );
};

export default CommunityDetail;