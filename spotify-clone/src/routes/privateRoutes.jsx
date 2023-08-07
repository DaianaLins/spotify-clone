import React from 'react'
import {Navigate} from 'react-router-dom'

export const  PrivateRoute = ({children}) => {
    // const user = localStorage.getItem("user")
    const token = localStorage.getItem("token")
    
  return token ? children : <Navigate to="/login" />;
}

