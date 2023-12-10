import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { Plane, PlaneMap, PlaneType } from '@/games/FindPlaneHead';
import { useMemo, useState } from 'react';
import {
  existPlacedPlane,
  generatePlaneA,
  generatePlaneB,
  generatePlaneC,
} from '@/helpers/BasicPlanePosition';
import { Toast } from '@douyinfe/semi-ui';

type DeploymentPhase = {
  onDeployPlane: (planes: PlaneMap) => void;
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

  const handleRotatePlane = () => {
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

  const handleResetPlane = () => {
    setSettingPlaneMap((state) => {
      const tempState = { ...state };
      tempState[PlaneType.A].isSet = false;
      tempState[PlaneType.A].position = undefined;
      tempState[PlaneType.B].isSet = false;
      tempState[PlaneType.B].position = undefined;
      tempState[PlaneType.C].isSet = false;
      tempState[PlaneType.C].position = undefined;
      return tempState;
    });
  };

  const handleCellClick = (deployedPlane: Plane[]) => {
    const overlayPlane = deployedPlane.some((d) => {
      return !!existPlacedPlane(d.x, d.y, settingPlaneMap);
    });
    const overRange = deployedPlane.some((d) => {
      return d.x < 0 || d.y < 0 || d.x >= 10 || d.y >= 10;
    });

    if (overlayPlane) {
      Toast.error({
        content: '不能與其他飛機重疊',
        duration: 3,
        theme: 'light',
      });
      return;
    }

    if (overRange) {
      Toast.error({
        content: '超出範圍',
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

  const handleDeployPlane = () => {
    onDeployPlane({
      A: settingPlaneMap[PlaneType.A].position as Plane[],
      B: settingPlaneMap[PlaneType.B].position as Plane[],
      C: settingPlaneMap[PlaneType.C].position as Plane[],
    });
  };

  return (
    <>
      <div className="mb-2 text-2xl">設置飛機</div>
      <div className="mb-6 text-base">
        請放置三架飛機，使用旋轉按鈕改變飛機方向，使用清除重新放置飛機
      </div>
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
          onClick={handleResetPlane}
        >
          清除
        </PapayaButton>
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="light"
          type="primary"
          onClick={handleRotatePlane}
        >
          旋轉
        </PapayaButton>
        <PapayaButton
          disabled={!!needGeneratedPlane}
          className="w-[200px] mt-6"
          size="large"
          theme="solid"
          type="primary"
          onClick={handleDeployPlane}
        >
          完成
        </PapayaButton>
      </div>
    </>
  );
};

export default DeploymentPhase;
