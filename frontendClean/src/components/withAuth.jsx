import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

/**
 * Higher-order component that checks if the user is authenticated.
 * If no token is available in Redux state, it redirects to /login.
 *
 * Usage:
 *   const ProtectedPage = withAuth(MyComponent);
 */
const withAuth = (WrappedComponent) => {
  const RequiresAuth = (props) => {
    const token = useSelector((state) => state.auth && state.auth.token);
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return <WrappedComponent {...props} />;
  };

  return RequiresAuth;
};

export default withAuth;
