import PapayaButton from '@/components/papaya/PapayaButton';
import GameBoard from '../GameBoard';
import { PlaneMap } from '@/games/FindPlaneHead';

type DeploymentPhase = {
  playerAPlanes: PlaneMap;
  playerBPlanes: PlaneMap;
  onCellClick: (i: number, j: number) => void;
  onDeployPlane: () => void;
};

const DevelopmentPhase = ({
  playerAPlanes,
  playerBPlanes,
  onCellClick,
  onDeployPlane,
}: DeploymentPhase) => {
  return (
    <>
      <div className="mb-6 text-2xl">設置飛機</div>
      <GameBoard playerAPlanes={playerAPlanes} onCellClick={onCellClick} />
      <PapayaButton
        className="w-[200px] mt-6"
        size="large"
        theme="solid"
        type="primary"
        onClick={onDeployPlane}
      >
        完成
      </PapayaButton>
    </>
  );
};

export default DevelopmentPhase;
