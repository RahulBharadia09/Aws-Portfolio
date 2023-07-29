import React from 'react';
import NavBarr from './NavBarr';
import Page5 from './page5';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
        <NavBarr/>
        <Outlet/>
        <Page5/>
      
    </div>
  )
}

export default Layout
