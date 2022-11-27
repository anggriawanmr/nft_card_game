import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logo, heroImg } from '../assets';
import styles from '../styles';

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      <div className={styles.hocContentBox}>
        <img
          src={logo}
          alt="logo"
          className={styles.hocLogo}
          onClick={() => navigate('/')}
        />
        <div className={styles.hocBodyWrapper}>
          <Component />
        </div>
      </div>
    </div>
  );
};

export default PageHOC;
