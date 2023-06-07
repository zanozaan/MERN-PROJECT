import React from 'react';
import Dashboard from "../components/Dashboard/Dashboard"
import NowPlaying from "../components/Dashboard/NowPlaying"
import UpComing from "../components/Dashboard/UpComing"

const Home = () => {
  return (
    <div>
      <div className='myBG'>
        <Dashboard />
        <NowPlaying />
        <UpComing />
      </div>
    </div>
  );
}

export default Home;
