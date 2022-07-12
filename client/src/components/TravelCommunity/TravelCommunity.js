import React, { useEffect,useState } from 'react';
import './TravelCommunity.scss'
import axios from 'axios'


const TravelCommunity = () => {
  

    const [letter,Setletter] =useState([])
   const [Skip,setSkip] =useState(0)
   const [limit,setLimit] =useState(10)
   const [Page,setPage] =useState(1);
    useEffect(()=>{
         let body ={
            Skip:Skip,
            limit:limit
         }

         getProduct(body);


    },[])

    const PageHandler = () =>{
       
    }

    const RenderList  = letter.map((item,index)=>{
         return(
            <div key={index}>
                <a href={`/community/${item._id}`}>
                    <img width='60px' height='60px' alt={item.Communutytitle}
                 src={`http://localhost:5000/${item.images[0]}`}></img></a>
                 <h4>{item.Communutytitle}</h4>
                 <h4>작성자:{item.writer.name}</h4>
            </div>
         )
          
    })
   
     const getProduct =(body) =>{
        axios.post('/api/users/addcommunity/letter',body)
        .then(response=>{
            if(response.data.success){
                console.log(response.data)
                Setletter(response.data.productInfo)

            }else{
                alert('글을 가져오는데 실패했습니다.')
            }
        })
     }
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
                <div style={{  position:'absolute',top:'20px',left:'650px'}}>
                  <a href='/communityupdate'>update</a>
                </div>
                <div style={{width:'700px',height:'500px',border:"1px solid black",
            position:'absolute',top:'50px',marginBottom:"50px"}}>
               {RenderList}
                </div>
             
                <div style={{  position:'absolute',top:'600px',marginBottom:"50px"}}>
                    {Skip ===0 ? null: <button onClick={beforeloadHandler}>이전</button>}
                   
                    <button onClick={loadmoreHandler}>다음</button>
                </div>
              </div>

            
        </div>
    );
};

export default TravelCommunity;