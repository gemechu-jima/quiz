import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContext  from './useContext/GlobalContext';
import MainHeader from './Navigation/MainHeader';
import ProfileDetail from './components/UIElement/ProfileDetail';
import './index.css';
import App from './App';
// import BankStatement from './BankStatement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContext>
    <BrowserRouter>
    <MainHeader/>
    <Routes>
     <Route path='/' element={<App/>}/>
     <Route path='profile-detail' element={<ProfileDetail/>}/>
    </Routes>
    </BrowserRouter>
  </GlobalContext>
  
);
