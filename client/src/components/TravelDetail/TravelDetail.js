import React, { useEffect, useState } from 'react';
import './TravelDetail.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ImageGallery } from 'react-image-gallery';
import {useDispatch} from 'react-redux'
import {addToGood} from '../../_actions/User_action'


const TravelDetail = () => {
    const {contentsId} =useParams();
    const [newdata,setnewdata] = useState([]);
    const navigate =useNavigate();
    const [Images,setImages] =useState([])
    console.log('contentsId',contentsId);
    const dispatch = useDispatch()
    useEffect(()=>{
        try{
            axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&cid=${contentsId}`)
            .then((response)=>{
             setnewdata(response.data.items)
               
        })
        }catch(error){
            console.log(error)
        }
      
    },[])

    console.log(newdata);
    const ClickHandler = () =>{
           
        dispatch(addToGood(newdata[0].contentsid,newdata[0].repPhoto.photoid.imgpath,newdata[0].address,
            newdata[0].title))
    }

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
                                        <button onClick={ClickHandler}>좋아요 페이지에 추가</button>
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