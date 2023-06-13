import React from 'react'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import Register from './Compontents/Register'
import { ErrorBoundary } from "react-error-boundary";
import LoginPage from './Compontents/LoginPage';

function Home() {
  return (
    <div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <LoginPage/>    
          <ToastContainer />
        </ErrorBoundary>
    </div>
  )
}

export default Home