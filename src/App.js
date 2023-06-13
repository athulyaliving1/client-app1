import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Blogs from "./Compontents/Blogs";
import LoginPage from "./Compontents/LoginPage";
import Register from "./Compontents/Register";
import Siderbar from "./Compontents/Siderbar.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import Dashboard from "./Compontents/Dashboard";
import {  useSelector } from "react-redux";
// import EmailRegister from "./Compontents/EmailRegister";
import "react-toastify/dist/ReactToastify.css";


 export default  function App() {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  return (
    <div className= 'App'>
      
 

      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route exact path="/blogs" element={<Blogs/>}/>
            
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/siderbar" element={userInfo ? <Siderbar /> :<LoginPage/>  }/>
            <Route exact path="/emailverification" element={<EmailVerification/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            {/* <Route exact path="/emailverify" element={<EmailRegister/>}/> */}

          </Route>
        </Routes>
      </Router>
   
    </div>
  )
}