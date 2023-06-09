import React from 'react'

// import Register from './Compontents/Register'
import { ErrorBoundary } from "react-error-boundary";
import LoginPage from './Compontents/LoginPage';

function Home() {
  return (
    <div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <LoginPage/>
      
        </ErrorBoundary>
    </div>
  )
}

export default Home