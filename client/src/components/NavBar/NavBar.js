import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const user = useSelector(state=>state.user)
    const NaviGate =useNavigate()
  

    const logoutHandler =() =>{
        axios.get('/api/users/logout').then(response=>{
            if(response.status ===200){
                NaviGate('/login');
            }else{
                alert('로그아웃에 실패했습니다.')
            }
        })
    }
    // function navbarstyle(){
    //     if (window.location.pathname === '/landing') return ;
    //     return (
    //       <NavBar></NavBar>
    //     );
    // }
  
   
    if(user.userData&&!user.userData.isAuth){
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',height:'80px',
            left:'0px', display:'flex', justifyContent:'space-around',padding:'30px',zIndex:'300',
            }}>
                <div>
                <a href='/landing' style={{marginRight:'10px',marginTop:"30px",color:'#000069',
                fontSize:"20px"}}>Home</a>
                </div>
                <div>
                <a href='/register' style={{marginRight:'10px',marginTop:"30px",color:'#000069',
                fontSize:"20px"}}>회원가입</a>
                <a href='/login' style={{marginRight:'10px',marginTop:"30px",color:'#000069',  fontSize:"20px"}}>로그인</a>
                </div>
           
               
            </div>
        );
    }else{
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',left:'0px',height:'80px',
          display:'flex', justifyContent:'space-around',padding:'30px',color:'black',  zIndex:'500',
           }}>
              <div>
              <a href='/landing' style={{marginRight:'10px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"
           }}>Home</a>
              </div>
                <div>
                <a href='/travelspot'  style={{marginRight:'30px',marginTop:"50px",color:'#000069',weight:'50',
              fontSize:"20px"}}>TravelSpot</a>
                <a href='/travelnews'  style={{marginRight:'30px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"}}>여행뉴스</a>
                <a href='/userstyle'  style={{marginRight:'30px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"}}>나의 여행스타일</a>
                <a href='/community'  style={{marginRight:'30px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"}}>community</a>
                <a href='/mytravel'  style={{marginRight:'30px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"}}>나의여행</a>
                <a onClick={logoutHandler} style={{marginRight:'30px',marginTop:"30px",color:'#000069',weight:'50',
              fontSize:"20px"}} >logout</a>
                </div>
            
                
               
            </div>
        );
    }
  
    
      };
  

export default NavBar;