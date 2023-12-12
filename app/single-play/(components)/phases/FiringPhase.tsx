import { BoardCell } from '@/games/FindPlaneHead';
import GameBoard from '../GameBoard';

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
      <div className="text-center text-2xl mb-5">
        {isYourTurn ? '你的回合' : '電腦回合'}
      </div>
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
