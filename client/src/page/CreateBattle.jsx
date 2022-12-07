import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { useGlobalContext } from '../context';
import { CustomButton, CustomInput, PageHOC } from '../components';

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello From createBattle</h1>
    </div>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
