import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './Componenets/Header';
import { Footer } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <Header/>
     <App/>
     <Footer/>
    </>
);