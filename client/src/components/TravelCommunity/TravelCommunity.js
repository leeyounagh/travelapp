import React, { useCallback, useEffect,useState } from 'react';
import './TravelCommunity.scss'
import axios from 'axios'
import Pagination from './PageNation';

const TravelCommunity = () => {
  

    const [letter,Setletter] =useState([])
   const [Skip,setSkip] =useState(0)
   const [limit,setLimit] =useState(10)
  
   const [page, setPage] = useState(1);
   const offset = (page - 1) * limit;

   
   
    useEffect(()=>{
         let body ={
            Skip:Skip,
            limit:limit
         }

         getProduct(body);
      

    },[])




   
     const getProduct =(body) =>{
        axios.post('/api/users/addcommunity/letter',body)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)

                
                Setletter(response.data.productInfo.reverse());
            
              
                
              
            }else{
                alert('글을 가져오는데 실패했습니다.')
            }
        })
     }

   
   
     const RenderList  =  () =>{


     return(letter.slice(offset, offset + limit).map((item,index)=>{
        return(
           <div key={index} style={{display:'flex',justifyContent:'space-around',margin:'60px'}}> 
               <div style={{position:'absolute',left:"0px"}}>
               <a href={`/community/${item._id}`}>
                   <img width='80px' height='50px' alt={item.Communutytitle}
                src={`http://localhost:5000/${item.images[0]}`}></img></a>
               </div>
                    <div style={{position:'absolute',left:'100px',textOverflow:'ellipsis',border:'1px solid black',
                    width:'450px',whiteSpace:'nowrap',overflow:'hidden',display:'block'}}>
                    <a href={`/community/${item._id}`}> <h4>{item.Communutytitle}</h4></a>
                    </div>
             <div style={{position:'absolute',left:"550px"}}> <h4>작성자:{item.writer.name}</h4></div>
               
           </div>
        )
         
   }))   

     }
     
     
    //  const PagiNation = () =>{
    //     return setPage(page+1)
    //  }
     

    const loadmoreHandler = () =>{

        let skip = Skip + limit
        let body ={
            skip:skip,
            limit:limit,
            loadMore:true
         }

        getProduct(body)
        setSkip(skip)
    }
    const beforeloadHandler = () =>{

        let skip = Skip - limit
        let body ={
            skip:skip,
            limit:limit,
            loadMore:true
         }

        getProduct(body)
        setSkip(skip)
    }
    return (
        <div style={{height:'50000px',background:"#DAEAF1",}}>
            
                <div style={{position:'absolute',top:'100px',left:'500px'}}>
                   <h1> Hello Jeju Community</h1>
                </div>
                <div style={{position:'absolute',top:'200px',left:'300px'}}>
                    <h3>최신업데이트</h3>
                    <div style={{width:'700px',height:'100px',border:"1px solid black"}}>

                    </div>
                </div>
         
              <div  style={{position:'absolute',top:'400px',left:'300px'}}>
                <h2>
                    Community
                </h2>
                <div style={{  position:'absolute',top:'30px',left:'600px',color:'black'}}>
                  <a style={{color:'black'}} href='/communityupdate'>update</a>
                </div>
                <div style={{width:'700px',height:'500px',
            position:'absolute',top:'50px',margin:'0px'}}>
               {RenderList()}
                </div>
                <div style={{position:'absolute', left:'300px',top:"700px"}}>
                <Pagination
          total={letter.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
                </div>
       
                {/* <button  style={{position:'absolute',left:'0px', top:"700px"}} onClick={()=>setPage(page-1)}>이전</button>
                

                <button style={{position:'absolute', left:'300px',top:"700px"}} onClick={()=>{setPage(page+1)}}>
                 다음
                </button> */}
                {/* <div style={{  position:'absolute',top:'600px',marginBottom:"50px"}}>
                    {Skip ===0 ? null: <button onClick={beforeloadHandler}>이전</button>}
                   {letter.length<limit?null:<button onClick={loadmoreHandler}>다음</button>}
                    
                </div> */}
              </div>

            
        </div>
    );
};

export default TravelCommunity;