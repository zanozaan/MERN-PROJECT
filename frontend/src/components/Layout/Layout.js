import React from 'react';
import Navigation from '../Dashboard/Navigation';
import Routers from '../../Routers/Routers';

const Layout = () => {
  return (
    <div>
      <Navigation />
        <Routers />
    </div>
  );
};

export default Layout;
