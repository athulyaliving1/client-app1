import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home";
import Blogs from "./Compontents/Blogs";
import Login from "./Compontents/Login";
import Register from "./Compontents/Register";
import Siderbar from "./Compontents/Siderbar.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import Dashboard from "./Compontents/Dashboard";




 export default  function App() {
  return (
    <div className= 'App'>
      
 

      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route exact path="/blogs" element={<Blogs/>}/>
            
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/siderbar" element={<Siderbar/>}/>
            <Route exact path="/emailverification" element={<EmailVerification/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>

          </Route>
        </Routes>
      </Router>
   
    </div>
  )
}