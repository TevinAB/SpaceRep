import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <Route path='/'>
      {isAuthenticated ? { ...children } : isLoading || <Welcome />}
    </Route>
  );
}

export default ProtectedRoute;
