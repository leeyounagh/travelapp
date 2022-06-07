import axios from 'axios';
import { Card,Row,Col } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef, useState,
    createContext} from 'react';
import './NorthHotSpot.scss';
import RadioBox from './Section/RadioBox'
import {jejuSection} from './Section/data'
import Search from  './Section/Search'


const { Meta } = Card;

let Url = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=$c1&page=1`
const NorthHotSpotPage = () => {
    
    const [data,setData] =useState([]);
    const [test,setTest] =useState([]);
    const [page,setPage] = useState(11);
   
     const [contents,setContents] = useState('c1')
    const [Filters,setFilters] =useState({
        continents:[]
    })
    let PageArray = [1,2,3,4,5,6,7,8,9,10,11];
     
    useEffect(()=>{
        try{
            axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=${contents}&page=${Number(page)}`)
            .then((response)=>{setData(response.data.items)
                
                filtertest(response.data.items)});
            console.log(data);
         
            PageNation(); 
            window.scrollTo(0, 0);
           
        }
       catch (error) {
            console.error(error);
          }
    },[page]);
    useEffect(()=>{
        try{
            axios.get(`http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=${contents}&page=${Number(page)}`)
            .then((response)=>{setData(response.data.items)
                
                filtertest(response.data.items)});
            console.log(data);
         
            PageNation(); 
            window.scrollTo(0, 0);
           
        }
       catch (error) {
            console.error(error);
          }
    },[contents]);


   useEffect(()=>{
    handleFilters();
    
   },[])

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


        const PageNation = useCallback(Page=>{
            console.log("Page",Page);

                return setPage(Page)
        },[page])

        const showFilterResults =(filters)=>{
           // filter =>1이면 관광지만
           //filter =>2면 맛집만 
           setContents('')
           console.log('안녕',filters[0],contents)
           if(filters[0] === 1){
            setContents('c1') 
            
            console.log('안녕',contents)
           }else if(Number(filters[0]) === 2){
            setContents('c2') 
            
            console.log('안녕',contents)
           }else if(filters[0] === 3){
            setContents('c3') 
            console.log('안녕',contents)
           }else if(filters[0]  === 4){
            setContents('c4') 
            console.log('안녕',contents)
           }



        }

   const handleFilters = (filters) =>{
   

     
        console.log('filters',filters)
       showFilterResults({...filters})
   }
 
    //제주시
    return (
        <div>
           <div 
           style={{position:'absolute',top:'150px', left:'700px'}}>
               <h1 className='nav_text' >제주시</h1>
           </div>
       
           <div >
               <RadioBox data={jejuSection} handleFilters={filters=>handleFilters(filters)}></RadioBox>
             </div>
             <div  style={{position:'absolute',top:'300px', left:'1000px'}}>
                 <Search/>
             </div>
  
       
            <div style={{position:'absolute', top:'400px',left:'200px',
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
             position:'relative', left:'400px',}}>
                    {
                        PageArray.map((item,i)=>{
                           return(<span>
                               
                               <button style={{marginRight:'10px'}} 
                             
                           value={Number(item)} onClick={(e)=>{PageNation(e.target.value)
                          }}>{item}</button>
                            </span>) 
                        })
                    }
                
                 </div>
              
        </div>
        </div>
      
    );
};

export default React.memo(NorthHotSpotPage);