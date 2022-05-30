
import './App.css';
import {Routes,Route, Router, BrowserRouter} from'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage'
import auth from './hoc/auth';
import StartPage from './components/StartPage/StartPage';
import NavBar from './components/NavBar/NavBar';
import MyTravelUpdate from './components/MyTravelUpdate/MyTravelUpdate';
import TravelCommunity from './components/TravelCommunity/TravelCommunity';
import TravelSpotPage from './components/TravelSpotPage/TravelSpotpage';
import TravelNews from './components/TravelNews/TravelNews';
import UserStyle from './components/UserStyle/UserStyle'
function App() {
  const Header = () => {
    if (window.location.pathname === '/') return null;
      return (
        <NavBar></NavBar>
      );
  }

  return (
    <div className="App">
   
      <div>
        
           <Header></Header>
      {/* <NavBar></NavBar> */}
       
       <Routes>
   
         <Route exact path ="/" element={auth(StartPage,null)}/>
       
         
         <Route exact path ="/landing" element={auth(LandingPage,null)}/>
         <Route exact path ="/travelnews" element={auth(TravelNews,null)}/>
         <Route exact path ="/mytravel" element={auth(MyTravelUpdate,true)}/>
         <Route exact path ="/community" element={auth(TravelCommunity,true)}/>
         <Route exact path ="/travelspot" element={auth(TravelSpotPage,true)}/>
         <Route exact path ="/userstyle" element={auth(UserStyle,true)}/>
         
         
         <Route exact path='/register/' element={auth(RegisterPage,false)}>

         </Route>
        <Route exact path='/login/' element={auth(LoginPage,false)}></Route>
    
        

          
         
        </Routes>
      
    
     
        
      </div>
   
   
    </div>
  );
}


export default App;
