import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(`is auth: ${isAuthenticated}`);
  return (
    <Route exact path='/home'>
      {isAuthenticated ? { ...children } : <Redirect to='/' />}
    </Route>
  );
}

export default ProtectedRoute;
