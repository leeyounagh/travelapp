import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addcommunity } from "../../_actions/User_action";
import axios from 'axios';
import TravelCommunity from './TravelCommunity';
import { AiFillPicture } from 'react-icons/ai';

const CommunityUpdate = (props) => {

     const [title,SetTitle] = useState('');
      const [desc,setDesc] = useState('')
      const dispatch = useDispatch()
      const [images,SetImages] =useState([])

     const titleHandler = ( event) =>{
        SetTitle(event.currentTarget.value)
        console.log(title)
     }
   const textareaHandler = (event) =>{
    setDesc(event.currentTarget.value)
    console.log(desc)
   }
   const onsubmitHandler = (event) =>{
                
    console.log(props.user.userData);
    if(!title || !desc ){
        return alert("모든값을 넣어주셔야됩니다.")
    }
    const body = {
      writer:props.user.userData._id,
      Communutytitle:title,
      Communutydesc:desc,
      images:images,
      id:v4()
     
    }

    dispatch(addcommunity(body))
}

const onDropHandler = (files) =>{

    let formData = new FormData();

    const config = {
        header :{'content-type':'multipart/form-data'}
    }
    formData.append("file",files[0])
    axios.post('/api/contents/image',formData,config)
    .then(response=>{
        if(response.data.success){
           console.log(response.data);
           SetImages([...images,response.data.fileName])
        } else{
            alert('파일을 저장하는데 실패했습니다.')
        }
    })
  

}
const deleteHandler = (image) =>{
    const currentIndex = images.indexOf(image);
    let newImages = [...images]
    newImages.splice(currentIndex,1)
    SetImages(newImages)
}


  
    return (
        <div className='commununity_font' style={{position:'absolute',top:'100px',left:'300px',width:'700px',height:"700px",
      }}>
            <form onSubmit={onsubmitHandler}>
            <h2>제목:</h2>
            <div style={{position:"absolute", top:"0px",left:"50px"}}>
            <input style={{width:"550px"}} value={title} onChange={titleHandler}></input>
            </div>
         
           <Dropzone onDrop={onDropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <AiFillPicture style={{width:"50px",height:"50px"}}></AiFillPicture>
                    </div>
                )}
                </Dropzone>
                <div style={{display:'flex',width:'100px',height:'60px',
         overflowX:'auto',marginLeft:"5px",zIndex:'300',position:'absolute',left:"70px",top:'40px'}}> 
          {images.map((image,index)=>{
           return( <div key ={index} onClick={()=>deleteHandler(image)} >
                 <img key={index} style={{minWidth:'100px', width: '60px', height:'50px'}} 

            src = {`http://localhost:5000/${image}`} />

         
               </div>) 
          })}
        </div>
           <textarea style={{width:'600px',height:"400px", } }onChange={textareaHandler}
            ></textarea>
           <div style={{position:"relative",left:"270px"}}><button type='submit'>등록</button></div>
            </form>
  
        </div>
    );
};

export default CommunityUpdate;