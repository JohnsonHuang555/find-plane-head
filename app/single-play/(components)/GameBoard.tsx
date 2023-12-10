import { Plane } from '@/games/FindPlaneHead';
import { useCallback, useState } from 'react';
import { RotateDirection, SettingPlane } from './phases/DeploymentPhase';
import { existPlacedPlane } from '@/helpers/BasicPlanePosition';

type GameBoardProps = {
  mode: 'deployment' | 'firing';
  rotateDirection?: RotateDirection;
  onCellClick?: (deployedPlane: Plane[]) => void;
  onFire?: (x: number, y: number) => void;
  deployingPlaneFunc?: (
    headX: number,
    headY: number,
    rotateDirection: RotateDirection
  ) => Plane[];
  placedPlanes?: SettingPlane;
  disableHover?: boolean;
};

const GameBoard = ({
  mode,
  rotateDirection,
  onCellClick,
  onFire,
  deployingPlaneFunc,
  placedPlanes,
  disableHover = false,
}: GameBoardProps) => {
  const [deployingPlane, setDeployingPlane] = useState<Plane[]>([]);

  const handleMouseHoverPosition = (currentX: number, currentY: number) => {
    if (deployingPlaneFunc && rotateDirection) {
      const generatedPlane = deployingPlaneFunc(
        currentX,
        currentY,
        rotateDirection
      );
      setDeployingPlane(generatedPlane);
    }
  };

  const showDeployedPlane = useCallback(
    (x: number, y: number): string => {
      if (placedPlanes) {
        const placed = existPlacedPlane(x, y, placedPlanes);
        if (placed && placed.isHead) {
          return 'bg-red-400';
        } else if (placed) {
          return 'bg-blue-400';
        } else {
          return 'bg-slate-400';
        }
      }
      return 'bg-slate-400';
    },
    [placedPlanes]
  );

  // 生成棋盤格的2D數組，用於標識每個格子的顏色
  const generateBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const isDeploying = deployingPlane.find(
          (plane) => plane.x === j && plane.y === i
        );
        board.push(
          <div
            key={`${i}-${j}`}
            className={`w-[80px] h-[80px] border-2 border-solid border-white ${
              isDeploying ? 'bg-sky-600' : showDeployedPlane(j, i)
            } ${
              !disableHover
                ? 'cursor-pointer hover:opacity-70'
                : 'cursor-default'
            }`}
            onClick={() => {
              if (mode === 'deployment') {
                onCellClick && onCellClick(deployingPlane);
              } else {
                onFire && onFire(j, i);
              }
              setDeployingPlane([]);
            }}
            onMouseOver={() => {
              if (mode === 'deployment') {
                handleMouseHoverPosition(j, i);
              }
            }}
          />
        );
      }
    }
    return board;
  };

  return (
    <div className="grid grid-cols-10 grid-rows-10 grid-gap-0 border-2 border-white">
      {generateBoard()}
    </div>
  );
};

export default GameBoard;
