import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar';
import './Myschedule.scss';

import moment from "moment";





const Myschedule = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
   const timearray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
     
   let [Array,setArray] =useState([]);

   const diffDate = endDate.getTime() - startDate.getTime();
   const dateDays = Math.abs(diffDate / (1000 * 3600 * 24));
  
  
console.log(dateDays)

    const dayTable = () =>{
       
        
        
          let i = 1;
        while(i<dateDays+1){
           
            Array.push(i)
          
            
            
            
        }
        i++;
 
   
        return(
            Array.map((item)=>{
                return(
                
                <th>{item}일차</th>
               )
            })
            
        )
    }
    const time = () =>{

        
        return timearray.map((item)=>{
                return(
                
                    <tbody>
                    <tr>
                    <td>{item}:00</td> <td><input style={{width:'100%'}}></input></td>
                  
                </tr>
                </tbody>
                
                 
                
                )
            })        
        
        
        }
    return (
        <div style={{position:'absolute',top:"200px",left:'500px'}}>
            <form>
            <div>
            제목:
            <input type="text"></input>
            <div style={{marginTop:'20px',display:'flex'}}>
                <span>
                <span>
                    <h4>출발</h4>
            <Calendar value={startDate} onChange={(date) => setStartDate(date)} />
            </span>
         <span>
         <h4>돌아가는날</h4>
         <Calendar value={endDate} onChange={(date) => setEndDate(date)} />
         </span>
                </span>
              
 

            
            </div>
            <br/>
            <div>
                    같이갈사람:
                    <input type="text"></input>
                </div>

                <option>
                    여행스타일
                </option>
                <div style={{position:'absolute',top:"0px",left:'600px'}}>
               <h2 style={{textAlign:'center'}}>찜리스트</h2> 
           </div>
           </div>
           <br/>
           <div style={{width:'800px',height:'700px', border:'1px solid black',
             marginBottom:"30px"}}>
             <table>
               
                <thead>
                {/* <th>time</th> {dayTable( )} */}
                </thead>
                {time()}
   
             </table>

             <button >일정추가</button>
           </div>

            </form>
          
           
        </div>
    );
};

export default Myschedule;