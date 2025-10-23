import React from 'react'
import { Navigate } from 'react-router-dom'
import { fakeAuth } from '../auth/auth'

const ProtectedRoute = ({ children }) => {
    if (!fakeAuth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

  return (
    children
  )
}

export default ProtectedRoute;