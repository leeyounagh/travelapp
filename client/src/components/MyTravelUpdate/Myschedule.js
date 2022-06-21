import React, { useState,useCallback, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Myschedule.scss';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addschedule } from "../../_actions/User_action";
import { parse as uuidParse } from 'uuid';
import moment from 'moment';	
import { DateRange } from 'react-date-range';
import { v4 } from 'uuid';
const UUID = require('uuid-int');

const Myschedule = (props) => {
    
  const id = 0;

  const generator = UUID(id);
   let [title,setTitle] =useState('');
   let[style,setStyle] =useState('');
   let [desc,setDesc] = useState('');
   const dispatch = useDispatch();
   const NaviGate = useNavigate()
   const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const uuid = generator.uuid();
console.log(uuid); // 3270411116609537
  console.log(v4());
 
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
                  endDate:state[0].endDate,
                  uuid:generator.uuid()
                 
                }

                dispatch(addschedule(body))
           }

    return (
      <div>
         <form onSubmit={onsubmitHandler}>
      <div style={{position:'absolute',top:"200px",left:'200px',
        width:'80%'}}>
        <div>
     

        </div>
            <div >
              <div style={{position:'absolute', left:"300px",
             top:'-50px'}}>
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
        
             
                <select  name="여행스타일"  style={{position:"absolute", left:"600px", top:'80px'}}
                onChange={selectedHandler} value={style}>
                <option value="호캉스 러버">여행스타일</option>
                <option value="호캉스 러버">호캉스 러버</option>
                <option value="쇼핑 러버">쇼핑 러버</option>
                <option value="관광지 러버">관광지 러버</option>
               
                </select>
               
               <textarea placeholder="여행일정을 적어주세요.."   value={desc} onChange={descdHandler}
               style={{position:"absolute", left:"600px", top:'110px',
              width:"300px",height:"200px"}}>

               </textarea>
              
             <button  style={{position:"absolute", left:"600px", top:'320px',
           }} type="submit">일정 등록</button>

         
          
           </div>
           <br/>
                      
             
        
          
           
        </div>
      </form>
      <div style={{position:"absolute", left:"1000px", top:'520px',
           }} >
        <button onClick={(e) =>{
          e.preventDefault()
          NaviGate('/mytravel')
        } }>mytravel로 돌아가기</button>
      </div>
     
      </div>
     
      
    
       
    );
};

export default React.memo(Myschedule);