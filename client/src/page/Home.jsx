import React from 'react';

import { useGlobalContext } from '../context';
import { PageHOC } from '../components';

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <CustomInput />
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
