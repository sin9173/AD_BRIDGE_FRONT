import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import { createGlobalStyle } from 'styled-components';
import { UserProvider } from './api/auth/UserContext';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
`;



function Root() {
  return (
    <div className="App">
      <UserProvider>
      <GlobalStyle/>
      <Outlet/>
      <Footer/>
      </UserProvider>
    </div>
  );
}

export default Root;
