import React from 'react'
import { Login } from './Compontents/Login'
import Register from './Compontents/Register'
import { ErrorBoundary } from "react-error-boundary";

function Home() {
  return (
    <div>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Login/>
        <Register/>
        </ErrorBoundary>
    </div>
  )
}

export default Home