import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { Plane, PlaneMap, PlaneType } from '@/games/FindPlaneHead';
import { useState } from 'react';
import { generatePlaneA } from '@/helpers/BasicPlanePosition';

type DeploymentPhase = {
  onDeployPlane: () => void;
};

enum RotateDirection {
  Up = 'up',
  Down = 'down',
  Right = 'right',
  Left = 'left',
}

type SettingPlane = {
  [PlaneType.A]: {
    isSet: boolean;
    rotateDirection: RotateDirection;
    // planePositions: Plane[];
  };
};

const DeploymentPhase = ({ onDeployPlane }: DeploymentPhase) => {
  const [settingPlaneMap, setSettingPlaneMap] = useState<SettingPlane>({
    A: {
      isSet: false,
      rotateDirection: RotateDirection.Down,
    },
  });

  const handleCellClick = (x: number, y: number) => {};

  return (
    <>
      <div className="mb-6 text-2xl">設置飛機</div>
      <GameBoard mode="deployment" onCellClick={handleCellClick} />
      <div className="flex gap-3">
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="light"
          type="primary"
        >
          重製
        </PapayaButton>
        <PapayaButton
          className="w-[200px] mt-6"
          size="large"
          theme="light"
          type="primary"
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
