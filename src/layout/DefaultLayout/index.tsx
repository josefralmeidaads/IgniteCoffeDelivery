import React from 'react';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout: React.FC = () => {
  return (
   <>
    <Header />
    <Outlet />
   </>
  );
}

export default DefaultLayout;