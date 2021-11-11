// App.js
import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";
import Front from './Front'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Account from './Account'
import Board from './Board'
function App(){
    return (
      <BrowserRouter className="App">
          <Routes>
            <Route exact={true} path="/" element={<Front/>}/>
            <Route exact={true} path="/login" element={<LogIn/>}/>
            <Route exact={true} path="/signup" element={<SignUp/>}/>
            <Route exact={true} path="/account" element={<Account/>}/>
            <Route exact={true} path="/board/:id" element={<Board/>}/>
          </Routes>
      </BrowserRouter>
    );
}

export default App;
