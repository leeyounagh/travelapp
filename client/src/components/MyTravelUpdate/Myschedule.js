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
                  id:v4()
                 
                }

                dispatch(addschedule(body))
           }

    return (
      <div className='schedule' style={{height:'720px',background:"#C6DCE4",}}>
         <form onSubmit={onsubmitHandler}>
      <div style={{position:'absolute',top:"70px",left:'230px',
        width:'70%',height:'500px',border:'1px solid lightgray',borderRadius:'30px',background:"#DAEAF1",
      }}>
        
            <div  >
              <div style={{position:'absolute', left:"120px",top:'20px'
             }}>
              제목:
            <input style={{width:'600px',height:'30px',borderRadius:'30px',
          border:'none',padding:'10px'}} type="text" onChange={titleHandler} value={title} autofocus />
              </div>
         
            <div style={{marginTop:'20px',display:'flex',
             position:'relative', left:"100px",top:"60px",borderRadius:'30px',fontSize:"12px",}}>
         
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            style={{width:'300px',height:'250px'}}
                />
                           
            </div>
            <br/>
             <div  style={{position:"absolute", left:"590px", top:'75px'}}>
              <h4>여행 스타일:</h4>
             </div>
             
                <select  className='select'name="여행스타일"  style={{position:"absolute", left:"670px", top:'75px',padding:'0px'}}
                onChange={selectedHandler} value={style}>
                {/* <option  selected disabled value="호캉스 러버" style={{color:'gray'}}>여행스타일</option> */}
                <option value="호캉스 러버">호캉스 러버</option>
                <option value="쇼핑 러버">쇼핑 러버</option>
                <option value="관광지 러버">관광지 러버</option>
               
                </select>
               
               <textarea placeholder=" 여행일정을 적어주세요.."   value={desc} onChange={descdHandler}
               style={{position:"absolute", left:"420px", top:'110px',
              width:"350px",height:"330px",borderRadius:'20px',border:'none',padding:'10px'}} autofocus>

               </textarea>
              
             <button style={{position:"absolute", left:"400px", top:'450px',color:'black'
           }} type="submit">등록</button>

         
          
           </div>
           <br/>
                      
             
        
          
           
        </div>
      </form>
      <div style={{position:"absolute", left:"950px", top:'520px',
           }} >
        <button onClick={(e) =>{
          e.preventDefault()
          NaviGate('/mytravel')
        } }>mytravel</button>
      </div>
     
      </div>
     
      
    
       
    );
};

export default React.memo(Myschedule);