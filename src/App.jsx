import React from 'react';
import Todo from './Componenets/Todo';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import LoginProvider from './context/Login';
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <LoginProvider>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Settings/>} path='/settings'/>
          </Routes>
          </LoginProvider>
      </BrowserRouter>
    );
  }
}