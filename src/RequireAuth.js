import { Cookie } from 'apiHelpers';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

export const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn || Cookie.get('user') ? (
    children
  ) : (
    <Navigate to='/login' replace />
  );
};
