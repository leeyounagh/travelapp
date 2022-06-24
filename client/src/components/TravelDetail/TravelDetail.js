import React, { useEffect, useState } from 'react';
import './TravelDetail.scss';
import { useNavigate, useParams ,useHistory} from 'react-router-dom';
import axios from 'axios';
import { ImageGallery } from 'react-image-gallery';
import {useDispatch} from 'react-redux'
import {addToGood} from '../../_actions/User_action'
import { GiCrownedHeart} from 'react-icons/gi';



const TravelDetail = () => {
    const {contentsId} =useParams();
    const [newdata,setnewdata] = useState([]);
    const navigate =useNavigate();
    const [Images,setImages] =useState([]);

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
        <div className='travelDetail' style={{height:"720px"}}>
             {
                 newdata.map((item)=>{
                     return(
                         <span style={{display:'flex'
                         ,justifyContent:'space-around'}}>
                             <span >
                             <img alt={item.repPhoto} 
                             src={item.repPhoto.photoid.imgpath} width='400px' height='400px'
                             style={{position:'relative',left:"150px", top:'140px ',
                             marginRight:"20px",borderRadius:"30px"}}></img>
                             </span> 
                             <span>
                                 <div style={{position:'relative', top:'140px',left:"-150px",
                                    width:'400px',height:'100%',border:"1px solid lightgray",paddingTop:"30px",borderRadius:"30px"}}>
                                     <h2 style={{display:"flex",justifyContent:"center"}}>{item.title}</h2>
                                     <br/>
                                     <div >
                                       <div style={{display:"flex",justifyContent:"center"}}>주소: {item.address}</div> 
                                        <br/>
                                      
                                       <div style={{display:"flex",justifyContent:"center"}}>{item.alltag}</div> 
                                        <br/>
                                       
                                        <div style={{display:"flex",justifyContent:"center",marginLeft:"20px"}}>tag: {item.tag}</div>
                                        <br/>
                                     
                                        <div style={{display:"flex",justifyContent:"center"}}> 정보: {item.introduction}</div>
                                       
                                     </div>

                                     <br/>
                                     <div  style={{display:"flex",justifyContent:"center",width:"100px",height:'30px',
                                      borderRadius:'50px',position:"relative",left:'150px'}}>
                                     
                                        <div><GiCrownedHeart  style={{width:"40px",height:"40px",
                                    position:"relative",left:"0px",cursor:'pointer'}} onClick={ClickHandler}>찜</GiCrownedHeart></div>
                                     </div>
                                     <div style={{ position:"relative",display:"flex",justifyContent:'center',top:'10px'}}>찜</div> 
                                    
                                  
                                 </div>
                                 <div   style={{display:"flex",justifyContent:"center",marginTop:'10px',width:"100px",height:'30px',
                                       position:"relative",top:"200px",left:"200px"}}>
                                     <button  className="myButton" onClick={()=>{navigate(-1)}}>
                                       뒤로가기
                                     </button>
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