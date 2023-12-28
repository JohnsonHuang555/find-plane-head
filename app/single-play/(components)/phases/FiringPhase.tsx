import { BoardCell } from '@/games/FindPlaneHead';
import GameBoard from '../GameBoard';
import { PapayaMotion } from '@/components/papaya/PapayaMotion';

type FiringPhaseProps = {
  isYourTurn: boolean;
  playerBoard: BoardCell[];
  computerBoard: BoardCell[];
  onFire: (x: number, y: number) => void;
};

const FiringPhase = ({
  isYourTurn,
  playerBoard,
  computerBoard,
  onFire,
}: FiringPhaseProps) => {
  return (
    <div>
      {isYourTurn ? (
        <PapayaMotion
          key={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
          className="text-center text-2xl mb-5 font-semibold"
        >
          你的回合
        </PapayaMotion>
      ) : (
        <PapayaMotion
          key={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
          className="text-center text-2xl mb-5 font-semibold"
        >
          電腦回合
        </PapayaMotion>
      )}
      <div className="flex flex-col gap-12 laptop:flex-row">
        <div className="flex-1">
          <div className="text-center text-xl mb-2">YOU</div>
          <GameBoard
            mode="firing"
            disableHover={true}
            firingBoard={playerBoard}
            isPlayer={true}
          />
        </div>
        <div className="flex-1">
          <div className="text-center text-xl mb-2">電腦</div>
          <GameBoard
            mode="firing"
            onFire={onFire}
            firingBoard={computerBoard}
            isComputer={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FiringPhase;
