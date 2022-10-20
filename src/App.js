import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Navigate exact from='/' to='/login'></Navigate> */}
          {/* <Route path> and <Link to> are relative. This means that they automatically build on the 
          parent route's path and URL so you don't have to manually interpolate match.url or match.path */}
          <Route path='/' element={<Login />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='home/*' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
