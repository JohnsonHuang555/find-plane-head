import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { Plane, PlaneType } from '@/games/FindPlaneHead';
import { useMemo, useState } from 'react';
import {
  existPlacedPlane,
  generatePlaneA,
  generatePlaneB,
  generatePlaneC,
} from '@/helpers/BasicPlanePosition';
import { Toast } from '@douyinfe/semi-ui';

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
    isSet: boolean;
    position?: Plane[];
    generateFunc: typeof generatePlaneA;
  };
  [PlaneType.B]: {
    plane: PlaneType.B;
    isSet: boolean;
    position?: Plane[];
    generateFunc: typeof generatePlaneB;
  };
  [PlaneType.C]: {
    plane: PlaneType.C;
    isSet: boolean;
    position?: Plane[];
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
      generateFunc: generatePlaneA,
    },
    B: {
      isSet: false,
      plane: PlaneType.B,
      generateFunc: generatePlaneB,
    },
    C: {
      isSet: false,
      plane: PlaneType.C,
      generateFunc: generatePlaneC,
    },
  });

  const needGeneratedPlane = useMemo(() => {
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

  const handleCellClick = (x: number, y: number, deployedPlane: Plane[]) => {
    const placed = existPlacedPlane(x, y, settingPlaneMap);
    if (placed) {
      Toast.error({
        content: '不能與其他飛機重疊',
        duration: 3,
        theme: 'light',
      });
      return;
    }

    if (deployedPlane.length === 0) return;
    setSettingPlaneMap((state) => {
      const tempState = { ...state };
      const plane = needGeneratedPlane?.plane as PlaneType;
      tempState[plane].isSet = true;
      tempState[plane].position = deployedPlane;
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
        deployingPlaneFunc={needGeneratedPlane?.generateFunc}
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
