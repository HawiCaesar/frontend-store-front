import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { LanguageSelection } from './LanguageSelection';
import { Dashboard } from './Dashboard';
import { AuthProvider } from './contexts/AuthProvider';
import { RequireAuth } from './RequireAuth';

export const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/language-selection' element={<LanguageSelection />} />
          <Route
            path='/dashboard'
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
