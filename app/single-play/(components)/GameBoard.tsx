import { BoardCell, Plane } from '@/games/FindPlaneHead';
import { useCallback, useState } from 'react';
import { RotateDirection, SettingPlane } from './phases/DeploymentPhase';
import { existPlacedPlane } from '@/helpers/BasicPlanePosition';
import { PapayaMotion } from '@/components/papaya/PapayaMotion';

type GameBoardProps = {
  mode: 'deployment' | 'firing';
  rotateDirection?: RotateDirection;
  onCellClick?: (deployedPlane: Plane[]) => void;
  onFire?: (x: number, y: number) => void;
  deployingPlaneFunc?: (
    headX: number,
    headY: number,
    rotateDirection: RotateDirection,
  ) => Plane[];
  placedPlanes?: SettingPlane;
  disableHover?: boolean;
  isAllPlaced?: boolean;
  firingBoard?: BoardCell[];
  isPlayer?: boolean;
  isComputer?: boolean;
};

const GameBoard = ({
  mode,
  rotateDirection,
  onCellClick,
  onFire,
  deployingPlaneFunc,
  placedPlanes,
  disableHover = false,
  isAllPlaced = false,
  firingBoard,
  isPlayer,
  isComputer,
}: GameBoardProps) => {
  const [deployingPlane, setDeployingPlane] = useState<Plane[]>([]);

  const handleMouseHoverPosition = (currentX: number, currentY: number) => {
    if (deployingPlaneFunc && rotateDirection) {
      const generatedPlane = deployingPlaneFunc(
        currentX,
        currentY,
        rotateDirection,
      );
      setDeployingPlane(generatedPlane);
    }
  };

  const showDeployedPlane = useCallback(
    (x: number, y: number): string => {
      if (mode === 'deployment' && placedPlanes) {
        const placed = existPlacedPlane(x, y, placedPlanes);
        if (placed && placed.isHead) {
          return 'bg-red-400';
        } else if (placed) {
          return 'bg-blue-400';
        } else {
          return 'bg-slate-400';
        }
      }
      if (mode === 'firing' && firingBoard) {
        const cell = firingBoard.find(b => b.index === 10 * y + x);
        if (isPlayer) {
          if (cell?.isPlaneHead) {
            return 'bg-red-400';
          } else if (cell?.isPlaneBody) {
            return 'bg-blue-400';
          } else if (cell?.isReveal) {
            return 'bg-stone-400';
          } else {
            return 'bg-slate-400';
          }
        }
        if (isComputer) {
          if (cell?.isReveal) {
            if (cell?.isPlaneHead) {
              return 'bg-red-400';
            } else if (cell?.isPlaneBody) {
              return 'bg-blue-400';
            } else {
              return 'bg-stone-400';
            }
          }
          return 'bg-slate-400';
        }
      }
      return 'bg-slate-400';
    },
    [firingBoard, isComputer, isPlayer, mode, placedPlanes],
  );

  const showHit = useCallback(
    (x: number, y: number): boolean => {
      if (mode === 'firing' && firingBoard) {
        const cell = firingBoard.find(b => b.index === 10 * y + x);
        if (isPlayer && cell?.isReveal) {
          if (cell.isPlaneBody || cell.isPlaneHead) {
            return true;
          }
        }
        if (isComputer && cell?.isReveal) {
          if (cell.isPlaneBody || cell.isPlaneHead) {
            return true;
          }
        }
      }
      return false;
    },
    [firingBoard, isComputer, isPlayer, mode],
  );

  // 生成棋盤格的2D數組，用於標識每個格子的顏色
  const generateBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const isDeploying = deployingPlane.find(
          plane => plane.x === j && plane.y === i,
        );
        board.push(
          <div
            key={`${i}-${j}`}
            className={`relative desktop:w-[80px] desktop:h-[80px] laptop:w-[50px] laptop:h-[50px] border-2 border-solid border-white flex items-center justify-center ${
              isDeploying && !isAllPlaced
                ? 'bg-sky-600'
                : showDeployedPlane(j, i)
            } ${
              !disableHover
                ? 'cursor-pointer hover:opacity-80'
                : 'cursor-default'
            }`}
            onClick={() => {
              if (mode === 'deployment') {
                onCellClick && onCellClick(deployingPlane);
                setDeployingPlane([]);
              } else {
                onFire && onFire(j, i);
              }
            }}
            onMouseOver={() => {
              if (mode === 'deployment') {
                handleMouseHoverPosition(j, i);
              }
            }}
          >
            {showHit(j, i) && (
              <PapayaMotion
                key={`${i}-${j}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  repeat: 2,
                  ease: 'easeInOut',
                  duration: 0.5,
                }}
                className="w-[30px] h-[30px] rounded-full bg-amber-200"
              />
            )}
          </div>,
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
