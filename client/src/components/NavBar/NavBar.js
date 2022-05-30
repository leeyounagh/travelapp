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

    if(user.userData&&!user.userData.isAuth){
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',height:'80px',border:'1px solid black',
            left:'300px'}}>
                <a href='/landing' style={{marginRight:'10px',marginTop:"30px"}}>Home</a>
                <a href='/register' style={{marginRight:'10px',marginTop:"30px"}}>회원가입</a>
                <a href='/login' style={{marginRight:'10px',marginTop:"30px"}}>로그인</a>
               
            </div>
        );
    }else{
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',left:'300px',height:'80px',border:'1px solid black',
          }}>
                <a href='/landing' style={{marginRight:'10px',marginTop:"30px"}}>Home</a>
                <a href='/travelspot'  style={{marginRight:'10px',marginTop:"30px"}}>TravelSpot</a>
                <a href='/travelnews'  style={{marginRight:'10px',marginTop:"30px"}}>여행뉴스</a>
                <a href='/userstyle'  style={{marginRight:'10px',marginTop:"30px"}}>나의 여행스타일</a>
                <a href='/community'  style={{marginRight:'10px',marginTop:"30px"}}>community</a>
                <a href='/mytravel'  style={{marginRight:'10px',marginTop:"30px"}}>나의여행</a>
                <a onClick={logoutHandler} style={{marginRight:'10px',marginTop:"30px"}} >logout</a>
                
               
            </div>
        );
    }
  
    
      };
  

export default NavBar;