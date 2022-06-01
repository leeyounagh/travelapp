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
            left:'0px', display:'flex', justifyContent:'space-around',padding:'20px',zIndex:'300',
            background:'#94b1b9'  }}>
                <div>
                <a href='/landing' className="nav_text" style={{marginRight:'10px',marginTop:"30px",color:'#f3efe6',
                  fontSize:"20px",fontWeight:'900'}}>Home</a>
                </div>
                <div>
                <a href='/register' className="nav_text" style={{marginRight:'10px',marginTop:"30px",color:'#f3efe6',
                   fontSize:"20px",fontWeight:'900'}}>Register</a>
                <a href='/login' className="nav_text" style={{marginRight:'10px',marginTop:"30px",color:'#f3efe6',     fontSize:"20px",fontWeight:'900'}}>Login</a>
                </div>
           
               
            </div>
        );
    }else{
        return (
            <div style={{position:'fixed',top:'0px',width:'100%',left:'0px',height:'80px',
          display:'flex', justifyContent:'space-around',padding:'20px',color:'black',  zIndex:'500',
        background:'#94b1b9' }}>
              <div>
              <a href='/landing' className="nav_text"style={{marginRight:'10px',marginTop:"20px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'
           }}>Home</a>
              </div>
                <div>
                <a href='/travelspot' className="nav_text" style={{marginRight:'30px',marginTop:"50px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}}>TravelSpot</a>
                <a href='/travelnews' className="nav_text" style={{marginRight:'30px',marginTop:"30px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}}>News</a>
             
                <a href='/community'  className="nav_text"  style={{marginRight:'30px',marginTop:"30px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}}>community</a>
                 <a href='/userstyle'  className="nav_text"  style={{marginRight:'30px',marginTop:"30px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}}>good</a>
                <a href='/mytravel'  className="nav_text"  style={{marginRight:'30px',marginTop:"30px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}}>MyTravel</a>
                <a onClick={logoutHandler} className="nav_text"  style={{marginRight:'30px',marginTop:"30px",color:'#f3efe6',weight:'50',
              fontSize:"20px",fontWeight:'900'}} >logout</a>
                </div>
            
                
               
            </div>
        );
    }
  
    
      };
  

export default NavBar;