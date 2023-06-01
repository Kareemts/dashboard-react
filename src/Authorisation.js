import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Authorisation() {
  const login = localStorage.getItem('login');
  return !login ? <Outlet /> : <Navigate to="/dashboard" />;
}

export default Authorisation;
