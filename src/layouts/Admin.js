import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import { RequireAuth } from 'RequireAuth';

// views

import Dashboard from 'views/admin/Dashboard.js';
import Maps from 'views/admin/Maps.js';
import Settings from 'views/admin/Settings.js';
import Tables from 'views/admin/Tables.js';

export function Admin() {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Routes>
            <Route path='/admin/dashboard' exact element={<>VREOVMREOVRE </>} />
            {/* <Route
              path='/admin/settings'
              exact
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
            <Route
              path='/admin/tables'
              exact
              element={
                <RequireAuth>
                  <Tables />
                </RequireAuth>
              }
            /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}
