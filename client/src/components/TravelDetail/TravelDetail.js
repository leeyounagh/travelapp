import React, { useEffect, useState } from 'react';
import './TravelDetail.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ImageGallery } from 'react-image-gallery';

const TravelDetail = () => {
    const {contentsId} =useParams();
    const [newdata,setnewdata] = useState([]);
    const navigate =useNavigate();
    const [Images,setImages] =useState([])
    console.log('contentsId',contentsId);
    useEffect(()=>{
        try{
            axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&cid=${contentsId}`)
            .then((response)=>{
             setnewdata(response.data.items)
                console.log(newdata)
        })
        }catch(error){
            console.log(error)
        }
      
    },[])


    return (
        <div>
             {
                 newdata.map((item)=>{
                     return(
                         <span style={{display:'flex'
                         ,justifyContent:'space-around'}}>
                             <span >
                             <img alt={item.repPhoto} 
                             src={item.repPhoto.photoid.imgpath} width='600px' height='600px'
                             style={{position:'relative',left:"0px", top:'100px ',
                             marginRight:"20px"}}></img>
                             </span> 
                             <span>
                                 <div style={{position:'relative', top:'150px',left:"-100px",
                                    width:'400px',height:'500px', border:'1px solid black'}}>
                                     <h2>{item.title}</h2>
                                     <br/>
                                     <div>
                                        주소: {item.address}
                                        <br/>
                                        <br/>
                                        <br/>
                                        {item.alltag}
                                        <br/>
                                        <br/>
                                        tag: {item.tag}
                                        <br/>
                                        <br/>
                                        <br/>
                                        정보: {item.introduction}
                                     </div>

                                     <br/>
                                     <div>
                                         좋아요 페이지에 추가
                                     </div>
                                 </div>
                             </span>
                            
                         </span>
                     )
                 })
             }
                 
                   
                  
          
            
            
        </div>
    );
};

export default TravelDetail;