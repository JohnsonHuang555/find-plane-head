'use client';

import { useEffect } from 'react';
import { BoardProps, Client } from 'boardgame.io/react';
import {
  FindPlaneHead,
  FindPlaneHeadState,
  PlaneMap,
} from '../../games/FindPlaneHead';
import DeploymentPhase from './(components)/phases/DeploymentPhase';
import FiringPhase from './(components)/phases/FiringPhase';

const SinglePlay: React.FunctionComponent<BoardProps<FindPlaneHeadState>> = ({
  G,
  moves,
  ctx,
}) => {
  const isYourTurn = ctx.currentPlayer === '0';
  const handleDeployPlane = (planes: PlaneMap) => {
    moves.placePlane(planes);
  };

  const handleFire = (x: number, y: number) => {
    if (isYourTurn) {
      moves.playerFire(x, y);
    }
  };

  useEffect(() => {
    if (!isYourTurn) {
      moves.computerFire();
    }
  }, [isYourTurn, moves]);

  return (
    <div className="flex flex-col justify-center items-center">
      {ctx.phase === 'deployment' && (
        <DeploymentPhase onDeployPlane={handleDeployPlane} />
      )}
      {ctx.phase === 'firing' && (
        <FiringPhase
          isYourTurn={isYourTurn}
          playerBoard={G.playerBoard}
          computerBoard={G.computerBoard}
          onFire={handleFire}
        />
      )}
    </div>
  );
};

const FindPlaneHeadClient = Client({
  game: FindPlaneHead,
  board: SinglePlay,
});

export default FindPlaneHeadClient;
