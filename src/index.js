import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './pages/Home';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favs from './pages/Favs';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  //<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favs' element={<Favs />}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
);