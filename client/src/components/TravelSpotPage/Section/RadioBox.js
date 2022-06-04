import React, { useState } from 'react';
import { Radio } from 'antd';
import { Collapse } from 'antd';
import { Checkbox } from 'antd';

const { Panel } = Collapse;

const RadioBox = (props) => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);
  
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
  

    return (
        <div>
              <span   style={{position:'absolute',top:'270px', left:'200px'}}>
              <Collapse accordion  >
              <Panel  header="컨텐츠 구분" key="1" style={{width:'300px'}}>
         

                  {
                      props.data.map((item)=>{
                        return(
                            <span key={item.id}>
                           <Checkbox  onChange={onChange} >{item.area}</Checkbox>
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