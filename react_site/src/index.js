import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menus from './componates/menus';
import Calc from './pages/calc';
import TicTac from './pages/tic_tac';
import LoginPage from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/react_site">
  <Routes>
    <Route path="/tic" element={<TicTac />} />
    <Route path="/calc" element={<Calc />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<App />} />

  </Routes>
   
  </BrowserRouter>
);
const lmenu = ReactDOM.createRoot(document.getElementById('lmenu'));
lmenu.render(
  <Menus />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
