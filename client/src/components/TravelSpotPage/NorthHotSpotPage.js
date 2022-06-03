import axios from 'axios';
import { Card,Row,Col } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './NorthHotSpot.scss'
const { Meta } = Card;



const NorthHotSpotPage = () => {

    const [data,setData] =useState([]);
    const [test,setTest] =useState([]);
    const [page,setPage] = useState(1);
    const lastPage = 12;
    let PageArray = [0,1,2,3,4,5,6,7,8,9,10];
     
    useEffect(()=>{
        try{
            axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=c1&page=${Number(page)}`)
            .then((response)=>{setData(response.data.items)
                
                filtertest(response.data.items)});
            console.log(data);
            console.log(test);
            PageNation(); 
            window.scrollTo(0, 0);
           
        }
       catch (error) {
            console.error(error);
          }
    },[page]);


   

    function filtertest(arr){
        let i = 0;
        let newdata = [];
        let copy = [];
        newdata =Array.from(arr);
        
       console.log(newdata);
       console.log(newdata[0]);

        while(i<newdata.length){
            // console.log("들어가니",newdata[i].address)
            if(newdata[i].region1cd.label ==="제주시"){
               
                
                copy.push(newdata[i]);
            
              
            }
          
            i++;
           
          
           
        }
     
    
      return setTest(copy);
    }

   const PageNation = (Page) =>{
          console.log("Page",Page);

          return setPage(Page)
   }


 
 const PreviesPage =(oldPage) =>{
       
 }
   

    //제주시
    return (
        <div style={{position:'absolute', top:'300px',left:'200px',
       }}>
                 <Row >
                
             {
                
                    test.map((item,i)=>{
                        return(
                             <div key ={i} style={{ marginRight:'50px',
                             marginBottom:"50px"}}>
           <Col lg={12} sm={24} key={item.contentsid}>
               <Card
                hoverable
                style={{ width: 240, height:250 }}
                cover={<img  
                    width='240px' 
                    height='150px'alt="example" src={item.repPhoto.photoid.thumbnailpath} />}
            >
                <Meta title={item.title} description={item.repPhoto.descseo} />
            </Card>
            </Col> 
                            </div>
                        )
                  })
                 }
              
           

      
                </Row>
                <div style={{display:'flex',justifyContents:'center',
             position:'relative', left:'500px',}}>
                    {
                        PageArray.map((item,i)=>{
                           return(<span>
                               
                               <button style={{marginRight:'10px'}} 
                           value={i+1} onClick={(e)=>{PageNation(e.target.value)
                            PreviesPage(e.target.value) }}>{i+1}</button>
                            </span>) 
                        })
                    }
                
                 </div>
              
        </div>
    );
};

export default React.memo(NorthHotSpotPage);