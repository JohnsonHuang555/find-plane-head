'use client';

import { BoardProps, Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import {
  FindPlaneHead,
  FindPlaneHeadState,
  PlaneMap,
} from '../../games/FindPlaneHead';
import DeploymentPhase from './(components)/phases/DeploymentPhase';
import FiringPhase from './(components)/phases/FiringPhase';

const SinglePlay: React.FunctionComponent<BoardProps<FindPlaneHeadState>> = ({
  moves,
  ctx,
}) => {
  const handleDeployPlane = (planes: PlaneMap) => {
    moves.placePlane(planes);
  };

  const handleFire = (x: number, y: number) => {
    moves.fire(x, y);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {ctx.phase === 'deployment' && (
        <DeploymentPhase onDeployPlane={handleDeployPlane} />
      )}
      {ctx.phase === 'firing' && (
        <FiringPhase yourTurn={ctx.currentPlayer === '0'} onFire={handleFire} />
      )}
    </div>
  );
};

const FindPlaneHeadClient = Client({
  game: FindPlaneHead,
  board: SinglePlay,
});

export default FindPlaneHeadClient;
