import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import { createGlobalStyle } from 'styled-components';

import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: inherit;
  }
`;



function Root() {
  return (
    <div className="App">
      <RecoilRoot>
      <GlobalStyle/>
      <Outlet/>
      <Footer/>
      </RecoilRoot>
    </div>
  );
}

export default Root;
