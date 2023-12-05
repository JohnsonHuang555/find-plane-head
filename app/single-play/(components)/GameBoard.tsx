import { Plane } from '@/games/FindPlaneHead';
import { useCallback, useState } from 'react';
import { RotateDirection, SettingPlane } from './phases/DeploymentPhase';

type GameBoardProps = {
  mode: 'deployment' | 'firing';
  rotateDirection: RotateDirection;
  onCellClick: (x: number, y: number) => void;
  generatePlane?: (
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
  generatePlane,
  placedPlanes,
}: GameBoardProps) => {
  const [deployingPlane, setDeployingPlane] = useState<Plane[]>([]);

  const handleMouseHoverPosition = (currentX: number, currentY: number) => {
    if (generatePlane) {
      const generatedPlane = generatePlane(currentX, currentY, rotateDirection);
      setDeployingPlane(generatedPlane);
    }
  };

  // TODO: 顯示已放置的飛機顏色
  const showDeployedPlane = useCallback(
    (x: number, y: number): boolean => {
      if (placedPlanes) {
        const planes = Object.values(placedPlanes).find((plane) => plane);
      }
      return false;
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
            className={`w-[80px] h-[80px] cursor-pointer border border-solid border-gray-400 hover:bg-slate-300 ${
              isDeploying ? 'bg-orange-200 hover:bg-orange-200' : ''
            }`}
            onClick={() => onCellClick(j, i)}
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
    <div className="grid grid-cols-10 grid-rows-10 grid-gap-0 border border-gray-400">
      {generateBoard()}
    </div>
  );
};

export default GameBoard;
