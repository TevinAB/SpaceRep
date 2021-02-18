import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route path='/'>{isAuthenticated ? { ...children } : <Welcome />}</Route>
  );
}

export default ProtectedRoute;
