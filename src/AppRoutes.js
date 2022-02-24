import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import pseudoLocalization from 'pseudo-localization';
import { Login } from './views/Login';
import { LanguageSelection } from './views/LanguageSelection';
import { AuthProvider } from './contexts/AuthProvider';
import { RequireAuth } from './RequireAuth';
import { Register } from './Register';

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

import Settings from 'views/admin/Settings.js';
import Dashboard from 'views/admin/Dashboard';
import Tables from 'views/admin/Tables.js';
import Concatenation from 'views/admin/Concatenation';
import Casing from 'views/admin/Casing';
import StylingIssues from 'views/admin/StylingIssues';
import DateTimeIssues from 'views/admin/DateTimeIssues';

const NavElements = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

function PseudoLocalization() {
  React.useEffect(() => {
    pseudoLocalization.start();

    return () => {
      pseudoLocalization.stop();
    };
  }, []);
}

export const AppRoutes = () => {
  //PseudoLocalization();
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/language-selection' element={<LanguageSelection />} />
          <Route
            path='/admin'
            element={<Navigate replace to='/admin/dashboard' />}
          />
          <Route path='/admin'>
            <Route
              path='/admin/dashboard'
              index
              element={
                <RequireAuth>
                  <NavElements>
                    <Dashboard />
                  </NavElements>
                </RequireAuth>
              }
            />

            <Route
              path='/admin/settings'
              element={
                <RequireAuth>
                  <NavElements>
                    <Settings />
                  </NavElements>
                </RequireAuth>
              }
            />

            <Route
              path='/admin/tables'
              element={
                <RequireAuth>
                  <NavElements>
                    <Tables />
                  </NavElements>
                </RequireAuth>
              }
            />

            <Route
              path='/admin/concatenation'
              element={
                <RequireAuth>
                  <NavElements>
                    <Concatenation />
                  </NavElements>
                </RequireAuth>
              }
            />

            <Route
              path='/admin/casing'
              element={
                <RequireAuth>
                  <NavElements>
                    <Casing />
                  </NavElements>
                </RequireAuth>
              }
            />
            <Route
              path='/admin/styling-issues'
              element={
                <RequireAuth>
                  <NavElements>
                    <StylingIssues />
                  </NavElements>
                </RequireAuth>
              }
            />

            <Route
              path='/admin/datetime-issues'
              element={
                <RequireAuth>
                  <NavElements>
                    <DateTimeIssues />
                  </NavElements>
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
