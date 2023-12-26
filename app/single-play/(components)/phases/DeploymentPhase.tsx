import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { Plane, PlaneMap, PlaneType } from '@/games/FindPlaneHead';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  existPlacedPlane,
  generatePlaneA,
  generatePlaneB,
  generatePlaneC,
} from '@/helpers/BasicPlanePosition';
import { Toast } from '@douyinfe/semi-ui';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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
    const plane = Object.values(settingPlaneMap).find(v => !v.isSet);
    return plane;
  }, [settingPlaneMap]);

  const handleRotatePlane = useCallback(() => {
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
  }, [currentRotateDirection]);

  const handleResetPlane = () => {
    setSettingPlaneMap(state => {
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
    const overlayPlane = deployedPlane.some(d => {
      return !!existPlacedPlane(d.x, d.y, settingPlaneMap);
    });
    const overRange = deployedPlane.some(d => {
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
    setSettingPlaneMap(state => {
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

  const handleKeyClick = useCallback(
    (e: any) => {
      if (e.key === 'q') {
        handleRotatePlane();
      }
    },
    [handleRotatePlane],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyClick, false);

    return () => {
      window.removeEventListener('keydown', handleKeyClick);
    };
  }, [handleKeyClick]);
  return (
    <div className="flex w-full gap-16">
      <div className="flex justify-center items-center flex-col">
        <div className="mb-2 text-2xl font-semibold">設置飛機</div>
        <div className="mb-6 text-base">
          請放置三架飛機，使用旋轉按鈕或 Q 鍵改變飛機方向，使用清除重新放置飛機
        </div>
        <GameBoard
          mode="deployment"
          rotateDirection={currentRotateDirection}
          onCellClick={handleCellClick}
          deployingPlaneFunc={needGeneratedPlane?.generateFunc}
          isAllPlaced={!needGeneratedPlane}
          placedPlanes={settingPlaneMap}
        />
        <div className="flex gap-3">
          <PapayaButton
            className="w-[200px] mt-6"
            size="large"
            theme="solid"
            onClick={handleResetPlane}
          >
            清除
          </PapayaButton>
          <PapayaButton
            className="w-[200px] mt-6"
            size="large"
            theme="solid"
            onClick={handleRotatePlane}
            disabled={!needGeneratedPlane}
          >
            旋轉
          </PapayaButton>
          <PapayaButton
            disabled={!!needGeneratedPlane}
            className="w-[200px] mt-6"
            size="large"
            theme="solid"
            type="tertiary"
            onClick={handleDeployPlane}
          >
            完成
          </PapayaButton>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center min-w-[200px]">
        <div className="mb-8 mt-9 text-xl font-semibold">當前飛機</div>
        {needGeneratedPlane?.plane === PlaneType.A && (
          <img src="/planeA.png" className="w-[200px]" />
        )}
        {needGeneratedPlane?.plane === PlaneType.B && (
          <img src="/planeB.png" className="w-[200px]" />
        )}
        {needGeneratedPlane?.plane === PlaneType.C && (
          <img src="/planeC.png" className="w-[200px]" />
        )}
        {needGeneratedPlane?.plane === undefined && (
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="text-green-700 w-[80px] h-[80px] mb-4" />
            <span className="text-lg">已設置完成</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeploymentPhase;
