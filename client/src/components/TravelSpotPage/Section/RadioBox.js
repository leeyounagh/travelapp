import React, { useState,useRef, useReducer } from 'react';
import { Input } from 'antd';
import { Collapse } from 'antd';
import { Checkbox } from 'antd';
import { Radio } from 'antd';
const { Panel } = Collapse;

const reducer =  (state,action) =>{
   console.log("리듀서 확인" ,state, action)
}
 
const RadioBox = (props) => {
 const [checked,setchecked] =useState([]);

       const handleToggle = (value) =>{
            //누른것의 인덱스를 구하고 
            const currentIndex =checked.indexOf(value);
            //전체 checked된 state에서 전체누른 checkbox가 이미 있다면 
           const newChecked = [...checked]

           if(currentIndex === -1) {
            newChecked.push(value)
             //state를 넣어준다.
           }else{
             newChecked.splice(currentIndex,1)
             //빼주고
           }

           setchecked(newChecked);
           props.handleFilters(newChecked);
            console.log("확인",checked)   
       }
          
       
     
    return (
      <div>
      <span   style={{position:'absolute',top:'270px', left:'200px'}}>
      <Collapse accordion  >
      <Panel  header="컨텐츠 구분" key="1" style={{width:'300px'}}>
 

          {
              props.data.map((item)=>{
                return(
                    <span key={item.id}>
                   <Checkbox value={item.area} 
                   onChange ={()=>{ handleToggle(item.id)
                  }}
                   checked={checked.indexOf(item.id)===-1?false:true}>{item.area}</Checkbox>
                    </span>
                ) 
         
              })
          }
     
        
        </Panel>
        </Collapse>

      </span>
      {/* <span style={{position:'absolute',top:'300px', left:'1000px'}}>
      <Radio.Group >
        <Radio value={5}>관광지</Radio>
        <Radio value={6}>맛집</Radio>
   
        </Radio.Group>
          </span> */}
</div>
    );
};

export default RadioBox;