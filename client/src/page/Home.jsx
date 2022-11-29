import React from 'react';

import { useGlobalContext } from '../context';
import { PageHOC } from '../components';

const Home = () => {
  const {} = useGlobalContext();

  return (
    <div>
      <h1 className="text-xl text-white"></h1>
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
