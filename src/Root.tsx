import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function Root() {
  return (
    <div className="App">
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Root;
