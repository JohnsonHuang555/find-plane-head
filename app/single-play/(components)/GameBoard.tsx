import { Plane } from '@/games/FindPlaneHead';
import { useCallback, useState } from 'react';
import { RotateDirection, SettingPlane } from './phases/DeploymentPhase';

type GameBoardProps = {
  mode: 'deployment' | 'firing';
  rotateDirection: RotateDirection;
  onCellClick: (deployedPlane: Plane[]) => void;
  deployingPlaneFunc?: (
    headX: number,
    headY: number,
    rotateDirection: RotateDirection
  ) => Plane[];
  placedPlanes?: SettingPlane;
};

const GameBoard = ({
  mode,
  rotateDirection,
  onCellClick,
  deployingPlaneFunc,
  placedPlanes,
}: GameBoardProps) => {
  const [deployingPlane, setDeployingPlane] = useState<Plane[]>([]);

  const handleMouseHoverPosition = (currentX: number, currentY: number) => {
    if (deployingPlaneFunc) {
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
        const allPlanesPosition = Object.values(placedPlanes)
          .map((plane) => plane.position)
          .flat();
        const placed = allPlanesPosition.find(
          (plane) => plane?.x === x && plane?.y === y
        );
        if (placed && placed.isHead) {
          return 'bg-red-400';
        } else if (placed) {
          return 'bg-blue-400';
        } else {
          return '';
        }
      }
      return '';
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
            className={`w-[80px] h-[80px] cursor-pointer border-2 border-solid border-white  ${
              isDeploying ? 'bg-sky-600' : 'bg-slate-400 hover:bg-slate-300'
            } ${showDeployedPlane(j, i)}`}
            onClick={() => {
              onCellClick(deployingPlane);
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
