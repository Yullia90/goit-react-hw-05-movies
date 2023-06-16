import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from "../Footer/Footer.styled"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
