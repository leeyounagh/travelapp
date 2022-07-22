import React, { useEffect } from 'react';
import axios from 'axios';

import LandingMain from './LandingMain/LandingMain';
import { useNavigate } from 'react-router-dom';
import LandingMiddle from './LandingMain/LandingMiddle';
import LandingBottom from './LandingMain/LandingBottom'

const LandingPage = (props) => {

    useEffect(()=>{
      axios.get('/api/hello')
      .then(response=>console.log(response.data))
    },[])
    const NaviGate =useNavigate()
    // const onClickHandler = () => {
    //     axios.get('/api/users/logout')
    //         .then(response => {
                
    //             if (response.data.success) {
    //                 NaviGate('/login')
    //             }else{
    //                alert('로그아웃에 실패했습니다.')
    //             }
    //         })
    // }
    return (
        <div style={{
          
        }}>
          
<LandingMain></LandingMain>
          
<LandingMiddle></LandingMiddle>
      <LandingBottom></LandingBottom>

        </div>
    );
};

export default LandingPage;