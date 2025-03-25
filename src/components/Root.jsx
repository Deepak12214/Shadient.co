import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import BackgroundFrame from './BackgroundFrame';

function Root() {
  return (
    <div>
    <Header />
    <BackgroundFrame/>
    <div className="main-content">
      <Outlet /> 
    </div>
    <Footer />
  </div>
  )
}

export default Root;