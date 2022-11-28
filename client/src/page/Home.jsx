import React from 'react';

import { PageHOC } from '../components';

const Home = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From Home</h1>
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods <br /> a Web3 NFT Card Game
  </>,
  <>
    Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
    Game
  </>
);
