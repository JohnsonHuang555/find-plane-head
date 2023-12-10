'use client';

import { BoardProps, Client } from 'boardgame.io/react';
import {
  FindPlaneHead,
  FindPlaneHeadState,
  PlaneMap,
} from '../../games/FindPlaneHead';
import DeploymentPhase from './(components)/phases/DeploymentPhase';
import { useEffect } from 'react';
import { generateComputerPlanes } from '@/helpers/BasicPlanePosition';

const SinglePlay: React.FunctionComponent<BoardProps<FindPlaneHeadState>> = ({
  G,
  moves,
  events,
  ctx,
}) => {
  const handleDeployPlane = (planes: PlaneMap) => {
    moves.placePlane(planes);
    if (events.endPhase) {
      events.endPhase();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {ctx.phase === 'deployment' && (
        <DeploymentPhase onDeployPlane={handleDeployPlane} />
      )}
      {/* {ctx.phase === 'firing' && (
        <DeploymentPhase onDeployPlane={handleDeployPlane} />
      )} */}
    </div>
  );
};

const FindPlaneHeadClient = Client({
  game: FindPlaneHead,
  board: SinglePlay,
});

export default FindPlaneHeadClient;
