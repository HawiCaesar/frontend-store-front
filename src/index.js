import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { AppRoutes } from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import './i18n';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback='Store Front'>
      <AppRoutes />
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
