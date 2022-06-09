import axios from 'axios';
import { Card,Row,Col } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef, useState,
    createContext} from 'react';
import './NorthHotSpot.scss';
import RadioBox from './Section/RadioBox'
import {jejuSection} from './Section/data'
import Search from  './Section/Search'

const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr`

const { Meta } = Card;

const NorthHotSpotPage = () => {
    const [loading,setLoading] =useState(false)
    const [data,setData] =useState([]);
    const [test,setTest] =useState([]);
    const [page,setPage] = useState(1);
    const [searchTerm,setSearchTerm]= useState('');
     const [contents,setContents] = useState('c1');
     const [fetching, setFetching] = useState(false);
     let items = []
     const [newImages,setNewImages]= useState(false);
    let PageArray = [1,2,3,4,5,6,7,8,9,10,11];
    const mounted =useRef(false);
     
   
    useEffect(()=>{
        axiosData()
    },[contents]);
    useEffect(()=>{
        axiosData()
    },[page]);

  
    
  

    const axiosData = async() =>{
        setFetching(true);
        setLoading(true);
        let url ;
        let urlPage = `&page=${page}`;
        let contentsPage =`&category=${contents}`
        try{
            await axios.get(`${mainUrl}${urlPage}${contentsPage}`)
            .then((response)=>{
             
                filtertest(response.data.items)});
                setLoading(false);
                setFetching(false);
            //  window.scrollTo(0, 0);
           
        }
       catch (error) {
            console.error(error);
            
          }
       
    }

   useEffect(()=>{
    handleFilters();
    searchFilters();
   },[]);



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
               
                
                copy.unshift(newdata[i]);
            
              
            }
          
            i++;
           
          
           
        }
     
    
      return setTest((oldphotos)=>{
     
            return [...copy,...oldphotos]
           

           
        

      });
    }


    const event = () => {
        console.log('innerHeight',window.innerHeight);
        console.log('documentbody',document.documentElement.scrollHeight);
        console.log('windowscroll',window.scrollY)
        if(!loading&&window.innerHeight +window.scrollY >= document.documentElement.scrollHeight-500
           ){
          
            setPage((oldPage)=> {return oldPage+1});
        
            // axiosDat a();
            if(page===12){
                setFetching(true)
            }
           
        }
    }
  
    useEffect(()=>{
    window.addEventListener('scroll',event);
    return () => window.removeEventListener('scroll',event)
    },[])
 
        const showFilterResults =(filters)=>{
           // filter =>1이면 관광지만
           //filter =>2면 맛집만 
           setContents('')
           setNewImages(true)
           console.log('안녕',filters[0],contents)
           if(filters[0] === 1){
            setContents('')
            let copy = [];
           

            setContents('c1') 
            setTest([...copy]);
            
            console.log('안녕',contents)
           }else if(Number(filters[0]) === 2){
            setContents('')
            let copy = [];
            setContents('c2') 
            setTest([...copy]);
            console.log('안녕',contents)
           }else if(filters[0] === 3){
            let copy = [];
            setContents('')
            setContents('c3') ;
            setTest([...copy]);
            console.log('안녕',contents)
           }else if(filters[0]  === 4){
            let copy = [];
            setContents('')
            setContents('c4') 
            setTest([...copy]);
            console.log('안녕',contents)
           }
      


        }

   const handleFilters = (filters) =>{

        
       showFilterResults({...filters})
   }
  
   const searchFilters = (newSearchTerm,title) =>{
         console.log('newSearchTerm',newSearchTerm,title);
         setSearchTerm(newSearchTerm)
       items = test.filter((val)=>{
             if(searchTerm == ""){
                 return null
             }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                 return val
             }
        }).map((item,i)=>{
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

        return items
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
              <Search data = {test} searchFilters={filters=>searchFilters(filters,[...test])}/>
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
             cover={<a href={`/detail/${item.contentsid}`}><img  
                 width='240px' 
                 height='150px'alt="example" src={item.repPhoto.photoid.thumbnailpath} 
             /></a> } 
         >
             <Meta title={item.title} description={item.repPhoto.descseo} />
         </Card>
         </Col> 
                         </div>
                     )
               })
              } 
           
      
          
   
             </Row>
       
           
     </div>
    
        </div>
      

      
    );
};

export default React.memo(NorthHotSpotPage);