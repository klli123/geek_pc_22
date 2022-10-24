import styles from 'App.module.scss';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { unstable_HistoryRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/home'
import NotFound from './pages/NotFound'
import { Token_Key, getToken, hasToken } from 'utils/token.js'
import React, { Component } from 'react'
import history from 'utils/history'


export default class App extends Component {
  TokenExist = hasToken(Token_Key) ? getToken(Token_Key) : '';
  state = { token: this.TokenExist }
  render() {
    return (
      //Here we must use unstable_HistoryRouter, it cannot be simply used with Router
      <Router history={history}>
        <div className={styles.App}>
          <Routes>
            {/* <Route path> and <Link to> are relative. This means that they automatically build on the 
          parent route's path and URL so you don't have to manually interpolate match.url or match.path */}
            <Route path='/' element={<Login withToken={this.withToken} />}></Route>
            <Route path='/login' element={<Login withToken={this.withToken} />}></Route>
            {/* <Route path='/home/*' element={<Home />}></Route> */}
            {/* {console.log(sessionStorage.getItem(Token_Key))} */}

            <Route
              path='/home/*'
              element={this.state.token !== "" ? <Home /> : <Login withToken={this.withToken} />}>
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
  withToken = (token) => { this.setState({ token: token }, this.callback) }
  callback = () => { return this.state.token }
}


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           {/* <Navigate exact from='/' to='/login'></Navigate> */}
//           {/* <Route path> and <Link to> are relative. This means that they automatically build on the 
//           parent route's path and URL so you don't have to manually interpolate match.url or match.path */}
//           <Route path='/' element={<Login />}></Route>
//           <Route path='/login' element={<Login />}></Route>
//           {/* <Route path='/home/*' element={<Home />}></Route> */}
//           <Route path='/home/*' element={<Home getAuth={this.getAuth}/>}></Route>
//           <Route path='*' element={<NotFound />}></Route>
//         </Routes>
//       </div>
//     </Router>

//   );
// }

