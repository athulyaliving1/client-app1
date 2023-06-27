import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { connect } from "react-redux";
import { fetchUserData } from './../features/userAction';
import LoginPage from './LoginPage';


const Layout = ({ children,userData,fetchUserData }) => {

    useEffect(() => {
        fetchUserData();
      }, [fetchUserData]);


    return (

        <>
        {
        userData ? (    
            <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
            </>
        ) : (  
            <>
            <LoginPage/>
            </>
        )
        }
            
        </>
    )
}


const mapStateToProps = (state) => ({
    userData: state.user.userData,
    loading: state.user.loading,
    error: state.user.error,
  });
  
  const mapDispatchToProps = {
    fetchUserData,
  };



  export default connect(mapStateToProps, mapDispatchToProps)  (Layout)