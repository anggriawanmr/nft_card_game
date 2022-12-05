import { ethers } from 'ethers';

import { ABI } from '../contract';

const addNewEvent = (evenFilter, provider, cb) => {
  provider.removeListener(eventFilter);

  provider.on(eventFilter, (logs) => {
    const parsedLog = new ethers.utils.Interface(ABI).parseLog(logs);
  });
};
