import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blogs from "./Compontents/Blogs";
import LoginPage from "./Compontents/LoginPage";
import Register from "./Compontents/Register";
import Siderbar from "./Compontents/Siderbar.jsx";
import EmailVerification from "./pages/EmailVerification.jsx";
import Dashboard from "./Compontents/Dashboard";
// import EmailRegister from "./Compontents/EmailRegister";

import ProfilePage from "./pages/ProfilePages";
import VitalsComponent from "./pages/VitalsComponent";
import Sidebar from "./Compontents/Sidebar";
import Layout from "./Compontents/Layout";
import FoodComponent from "./pages/FoodComponent";



function App() {



  return (
    <div className='App'>

      <Router>
        <Layout>
          <Routes>
            <Route>


              <Route exact path="/login" element={<LoginPage />} />
              {/* <Route path="/" element={<Home />} /> */}
         
              <Route exact path="/blogs" element={<Blogs />} />
              

              <Route exact path="/register" element={<Register />} />
              <Route exact path="/siderbar" element={<Siderbar />} />
              <Route exact path="/sidebar" element={<Sidebar />} />
              <Route exact path="/emailverification" element={<EmailVerification />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/profilepage" element={<ProfilePage />} />
              <Route exact path="/clientpage" element={<clientPage />} />
              <Route exact path="/clientvitals" element={<VitalsComponent />} />
              <Route exact path="/foodmenu" element={<FoodComponent/>} />
              <Route exact path="/login" element={<LoginPage />} />





              {/* <Route exact path="/emailverify" element={<EmailRegister/>}/> */}
            </Route>
          </Routes>
        </Layout>
      </Router>

    </div>
  )
}



export default (App);