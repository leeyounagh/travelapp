import React, { useState,useCallback } from "react";
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './Myschedule.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addschedule } from "../../_actions/User_action";

import moment from 'moment';	
import { DateRange } from 'react-date-range';


const Myschedule = (props) => {
    

   let [title,setTitle] =useState('');
   let[style,setStyle] =useState('');
   let [desc,setDesc] = useState('');
   const dispatch = useDispatch();
   const navigate =useNavigate();
   const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
    console.log(state[0].startDate)
        const titleHandler = (event) =>{
            setTitle(event.currentTarget.value);
            console.log(title)
        }
        const selectedHandler = (event) =>{
          setStyle(event.currentTarget.value);
          console.log(style)
        }
        const descdHandler = (event) =>{
          setDesc(event.currentTarget.value);
          console.log(desc)
        }
           const onsubmitHandler = (event) =>{
                event.preventDefault();
                console.log(props.user.userData);
                if(!title || !style || !desc){
                    return alert("모든값을 넣어주셔야됩니다.")
                }
                const body = {
                  writer:props.user.userData._id,
                  title:title,
                  desc:desc,
                  style:style,
                  startDate:state[0].startDate,
                  endDate:state[0].endDate
                }

                dispatch(addschedule(body))
           }
  
    return (
      <form onSubmit={onsubmitHandler}>
      <div style={{position:'absolute',top:"200px",left:'200px',
        width:'80%'}}>
        <div>
     

        </div>
            <div >
              <div style={{position:'absolute', left:"300px",
             top:'20px'}}>
              제목:
            <input style={{width:'300px'}} type="text" onChange={titleHandler} value={title} />
              </div>
         
            <div style={{marginTop:'20px',display:'flex',
             position:'relative', left:"100px",top:"50px"}}>
         
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            
                />
                            <div>
            
               
            </div>
            </div>
            <br/>
        
                <h4  style={{position:"absolute", left:"600px", top:'100px'}}>여행스타일</h4>
                <select  name="여행스타일"  style={{position:"absolute", left:"600px", top:'130px'}}
                onChange={selectedHandler} value={style}>
                
                <option value="호캉스 러버">호캉스 러버</option>
                <option value="쇼핑 러버">쇼핑 러버</option>
                <option value="관광지 러버">관광지 러버</option>
               
                </select>
               
               <textarea placeholder="여행일정을 적어주세요.."   value={desc} onChange={descdHandler}
               style={{position:"absolute", left:"600px", top:'160px',
              width:"300px",height:"200px"}}>

               </textarea>
              
             <button  style={{position:"absolute", left:"600px", top:'370px',
           }} type="submit">일정 등록</button>
         
           </div>
           <br/>
                      

        
          
           
        </div>
      </form>
    
       
    );
};

export default React.memo(Myschedule);