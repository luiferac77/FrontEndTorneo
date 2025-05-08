import React from 'react'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'
import { AuthProvider } from './context/auth/AuthContex';
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <ToastContainer position='top-right' autoClose={3000} />
      </Router>
    </AuthProvider>
  )
}

export default App
