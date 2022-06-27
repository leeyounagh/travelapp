import axios from 'axios';
import { Card,Row,Col } from 'antd';
import React, { useCallback, useEffect, useMemo, useRef, useState,
    createContext} from 'react';
import './NorthHotSpot.scss';
import RadioBox from './Section/RadioBox'
import {jejuSection} from './Section/data'
import Search from  './Section/Search'
import { FaParachuteBox,FaArrowAltCircleUp } from 'react-icons/fa';
const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr`

const { Meta } = Card;

const SouthHotSpot = () => {
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
     const [navbarposition,setnavbarposition] = useState(0);
   
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
            if(newdata[i].region1cd.label ==="서귀포시"){
               
                
                copy.unshift(newdata[i]);
            
              
            }
          
            i++;
           
          
           
        }
     
    
      return setTest((oldphotos)=>{
     
            return [...copy,...oldphotos]
           

           
        

      });
    }


    const event = () => {
      
       
        if(!loading&&window.innerHeight +window.scrollY >= document.documentElement.scrollHeight-500
           ){
            setNewImages(true);
            setPage((oldPage)=> {return oldPage+1 
            } );
         
           
        }
       
    }
  console.log("page",page)
    useEffect(()=>{
    window.addEventListener('scroll',event);
    setnavbarposition(window.scrollTop)
    return () => window.removeEventListener('scroll',event)
    },[])
 
    const showFilterResults =(filters)=>{
        // filter =>1이면 관광지만
        //filter =>2면 맛집만 
        setContents('')
      
        console.log('안녕',filters[0],contents)
        if(Number(filters[0]) === 1){
         setContents('')
         let copy = [];
        

         setContents('c1') 
         setTest([...copy]);
         setPage(1)
         
         console.log('안녕',contents)
        }else if(Number(filters[0]) === 2){
         setContents('')
         let copy = [];
         setContents('c2') 
         setTest([...copy]);
         setPage(1)
         console.log('안녕',contents)
        }else if(Number(filters[0]) === 3){
         let copy = [];
         setContents('')
         setTest([...copy]);
         setContents('c3') ;
         setPage(1)
       
         console.log('안녕',contents)
        }else if(Number(filters[0])  === 4){
         let copy = [];
         setContents('')
         setTest([...copy]);
         setContents('c4');
         setPage(1)
       
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
   const scrollTop = () =>{
       return  window.scrollTo(0, 0);
   }
    //제주시
    return (
        
    <div>
        <div 
        style={{position:'absolute',top:'150px', left:'700px'}}>
            <h1 className='travel_font' >서귀포시</h1>
        </div>
    
        <div >
            <RadioBox data={jejuSection} handleFilters={filters=>handleFilters(filters)}></RadioBox>
          </div>
          <div  style={{position:'absolute',top:'300px', left:'1000px'}}>
              {/* <Search data = {test} searchFilters={filters=>searchFilters(filters,[...test])}/> */}
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
     <div className='heart_all' style={{position:'fixed',top:"1600px",marginTop:"100px",left:'1350px',top:{navbarposition}
  , width:"100px",height:"500px" }}> 
  <div style={{position:"absolute",top:"400px",left:"30px",zIndex:"300",cursor:'pointer'}}>
<FaArrowAltCircleUp style={{width:"30px",height:"30px"}}onClick={scrollTop}></FaArrowAltCircleUp>
</div>
   
    <div sclass=" heart-box">
  <div style={{ height:"500px"}} class="heart">
    <svg width="80" height="80" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
      <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
    </svg>
  </div>
  <div class="heart">
    <svg width="70" height="70" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
      <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
    </svg>
  </div>
  <div class="heart">
    <svg width="68" height="68" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
      <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
    </svg>
  </div>

</div>



     </div>
        </div>
      

      
    );
};

export default React.memo(SouthHotSpot);