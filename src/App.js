import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/home'
import NotFound from './pages/NotFound/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Navigate exact from='/' to='/login'></Navigate> */}
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
