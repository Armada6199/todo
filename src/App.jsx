import React from 'react';

import Todo from './Componenets/Todo';
import Header from './Componenets/Header';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Footer } from '@mantine/core';
import Home from './pages/Home';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Settings/>} path='/settings'/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    );
  }
}