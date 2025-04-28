import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import BackgroundFrame from './BackgroundFrame';
import ScrollToTop from './ScrollToTop';

function Root() {
  return (
    <div>
    <Header />
    <ScrollToTop /> 
    <BackgroundFrame/>
    <div className="main-content">
      <Outlet /> 
    </div>
    <Footer />
  </div>
  )
}

export default Root;