import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import { loadItems } from '../redux/actions/itemActions';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadItems());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Route path='/'>{isAuthenticated ? { ...children } : <Welcome />}</Route>
  );
}

export default ProtectedRoute;
