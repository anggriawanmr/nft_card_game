import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles';
import { Alert } from '../components';
import { battlegrounds } from '../assets';
import { useGlobalContext } from '../context';

const Battleground = () => {
  const { setBattleGround, setShowAlert, showAlert } = useGlobalContext();

  const navigate = useNavigate();

  return <div>Battleground</div>;
};

export default Battleground;
