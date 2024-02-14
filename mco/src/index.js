import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Body as Register} from './Register';
import {Body as Login} from './Login';

export const App = () => {
  return (
    <Routes>
    <Route exact path="/home/register" element={<><Header/><Register/></>}/>
    <Route exact path="/home/login" element={<><Header/><Login/></>}/>
    </Routes>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<Router><App /></Router>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
