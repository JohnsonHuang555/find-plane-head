import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { PlaneType } from '@/games/FindPlaneHead';
import { useMemo, useState } from 'react';
import {
  generatePlaneA,
  generatePlaneB,
  generatePlaneC,
} from '@/helpers/BasicPlanePosition';

type DeploymentPhase = {
  onDeployPlane: () => void;
};

export enum RotateDirection {
  Up = 'up',
  Down = 'down',
  Right = 'right',
  Left = 'left',
}

export type SettingPlane = {
  [PlaneType.A]: {
    plane: PlaneType.A;
    headX?: number;
    headY?: number;
    isSet: boolean;
    rotateDirection: RotateDirection;
    generateFunc: typeof generatePlaneA;
  };
  [PlaneType.B]: {
    plane: PlaneType.B;
    headX?: number;
    headY?: number;
    isSet: boolean;
    rotateDirection: RotateDirection;
    generateFunc: typeof generatePlaneB;
  };
  [PlaneType.C]: {
    plane: PlaneType.C;
    headX?: number;
    headY?: number;
    isSet: boolean;
    rotateDirection: RotateDirection;
    generateFunc: typeof generatePlaneC;
  };
};

const DeploymentPhase = ({ onDeployPlane }: DeploymentPhase) => {
  const [currentRotateDirection, setCurrentRotateDirection] =
    useState<RotateDirection>(RotateDirection.Up);
  const [settingPlaneMap, setSettingPlaneMap] = useState<SettingPlane>({
    A: {
      isSet: false,
      plane: PlaneType.A,
      rotateDirection: RotateDirection.Down,
      generateFunc: generatePlaneA,
    },
    B: {
      isSet: false,
      plane: PlaneType.B,
      rotateDirection: RotateDirection.Down,
      generateFunc: generatePlaneB,
    },
    C: {
      isSet: false,
      plane: PlaneType.C,
      rotateDirection: RotateDirection.Down,
      generateFunc: generatePlaneC,
    },
  });

  const generatePlane = useMemo(() => {
    const plane = Object.values(settingPlaneMap).find((v) => !v.isSet);
    return plane;
  }, [settingPlaneMap]);

  const rotatePlane = () => {
    switch (currentRotateDirection) {
      case RotateDirection.Up:
        setCurrentRotateDirection(RotateDirection.Left);
        break;
      case RotateDirection.Left:
        setCurrentRotateDirection(RotateDirection.Down);
        break;
      case RotateDirection.Down:
        setCurrentRotateDirection(RotateDirection.Right);
        break;
      case RotateDirection.Right:
        setCurrentRotateDirection(RotateDirection.Up);
        break;
      default:
        setCurrentRotateDirection(RotateDirection.Up);
        break;
    }
  };

  const handleCellClick = (x: number, y: number) => {
    setSettingPlaneMap((state) => {
      const tempState = { ...state };
      const plane = generatePlane?.plane as PlaneType;
      tempState[plane].isSet = true;
      tempState[plane].headX = x;
      tempState[plane].headY = y;
      tempState[plane].rotateDirection = currentRotateDirection;
      return tempState;
    });
    setCurrentRotateDirection(RotateDirection.Up);
  };

  return (
    <>
      <div className="mb-6 text-2xl">設置飛機</div>
      <GameBoard
        mode="deployment"
        rotateDirection={currentRotateDirection}
        onCellClick={handleCellClick}
        generatePlane={generatePlane?.generateFunc}
        placedPlanes={settingPlaneMap}
      />
      <div className="flex gap-3">
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="light"
          type="primary"
        >
          清除
        </PapayaButton>
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="light"
          type="primary"
          onClick={rotatePlane}
        >
          旋轉
        </PapayaButton>
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="solid"
          type="primary"
          onClick={onDeployPlane}
        >
          完成
        </PapayaButton>
      </div>
    </>
  );
};

export default DeploymentPhase;
