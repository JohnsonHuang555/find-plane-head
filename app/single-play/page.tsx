'use client';

import { BoardProps, Client } from 'boardgame.io/react';
import { FindPlaneHead, FindPlaneHeadState } from '../../games/FindPlaneHead';
import DeploymentPhase from './(components)/phases/DeploymentPhase';

const SinglePlay: React.FunctionComponent<BoardProps<FindPlaneHeadState>> = ({
  G,
  moves,
  ctx,
}) => {
  const handleCellClick = (x: number, y: number) => {};
  const handleDeployPlane = () => {};

  return (
    <div className="flex flex-col justify-center items-center">
      {ctx.phase === 'deployment' && (
        <DeploymentPhase
          playerAPlanes={G.playerAPlanes}
          playerBPlanes={G.playerBPlanes}
          onCellClick={handleCellClick}
          onDeployPlane={handleDeployPlane}
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
