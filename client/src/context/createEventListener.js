import { ethers } from 'ethers';

import { ABI } from '../contract';
import { defenseSound } from '../assets';
import { playAudio, sparcle } from '../utils/animation';

const emptyAccount = '0x0000000000000000000000000000000000000000';

const addNewEvent = (eventFilter, provider, cb) => {
  provider.removeListener(eventFilter);

  provider.on(eventFilter, (logs) => {
    const parsedLog = new ethers.utils.Interface(ABI).parseLog(logs);

    cb(parsedLog);
  });
};

export const createEventListener = ({
  navigate,
  contract,
  provider,
  walletAddress,
  setShowAlert,
  setUpdateGameData,
}) => {
  const NewPlayerEventFilter = contract.filter.newPlayer();

  addNewEvent(NewPlayerEventFilter, provider, ({ args }) => {
    console.log('New Player created!', args);

    if (walletAddress === args.owner) {
      setShowAlert({
        status: true,
        type: 'success',
        message: 'Player has been successfully registered',
      });
    }
  });

  const newBattleEventFilter = contract.filter.newBattle();

  addNewEvent(newBattleEventFilter, provider, ({ args }) => {
    console.log('New Battle Started!', args, walletAddress);

    if (
      walletAddress.toLowerCase() === args.player1.toLowerCase() ||
      walletAddress.toLowerCase() === args.player2.toLowerCase()
    ) {
      navigate(`/battle/${args.battleName}`);
    }

    setUpdateGameData((prevUpdateGameData) => prevUpdateGameData + 1);
  });

  const BattleMoveEventFilter = contract.filters.BattleMove();
  addNewEvent(BattleMoveEventFilter, provider, ({ args }) => {
    console.log('Battle move initiated', args);
  });

  const RoundeEndedEventFilter = contract.filters.RoundEnded();

  addNewEvent(RoundeEndedEventFilter, provider, ({ args }) => {
    console.log('Round ended!', args, walletAddress);

    for (let i = 0; args.damagedPlayers.length; i += 1) {
      if (args.damagedPlayers[i] !== emptyAccount) {
        if (args.damagedPlayers[i] === walletAddress) {
          sparcle();
        } else if (args.damagedPlayers[i] !== walletAddress) {
          sparcle();
        }
      } else {
        playAudio(defenseSound);
      }
    }
  });
};
