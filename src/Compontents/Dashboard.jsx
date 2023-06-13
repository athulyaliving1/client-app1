import React, { useEffect } from "react";
import Sidebar1 from "./Siderbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (!userInfo || !storedUserInfo) {
      navigate("/login");
    } else {
      toast.success("login success");
    }
  }, [navigate, userInfo]);




  return (
    <div>
     
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
