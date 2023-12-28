'use client';

import { useEffect } from 'react';
import { Modal } from '@douyinfe/semi-ui';
import { BoardProps, Client } from 'boardgame.io/react';
import {
  FindPlaneHead,
  FindPlaneHeadState,
  PlaneMap,
} from '../../games/FindPlaneHead';
import DeploymentPhase from './(components)/phases/DeploymentPhase';
import FiringPhase from './(components)/phases/FiringPhase';
import { useRouter } from 'next/navigation';

const SinglePlay: React.FunctionComponent<BoardProps<FindPlaneHeadState>> = ({
  G,
  moves,
  ctx,
}) => {
  const router = useRouter();
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
    if (ctx.gameover) {
      Modal.info({
        title: '提示',
        content: ctx.gameover.winner,
        centered: true,
        icon: null,
        hasCancel: false,
        onOk: () => {
          setTimeout(() => {
            router.replace('/');
          }, 1500);
        },
      });
    }
  }, [ctx.gameover, router]);

  useEffect(() => {
    if (!isYourTurn) {
      setTimeout(() => {
        moves.computerFire();
      }, 1000);
    }
  }, [isYourTurn, moves]);

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {ctx.phase === 'deployment' && (
        <DeploymentPhase onDeployPlane={handleDeployPlane} />
      )}
      {(ctx.phase === 'firing' || ctx.gameover) && (
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
