import GameBoard from '../GameBoard';

type FiringPhaseProps = {
  yourTurn: boolean;
  onFire: (x: number, y: number) => void;
};

const FiringPhase = ({ yourTurn, onFire }: FiringPhaseProps) => {
  return (
    <div>
      <div className="text-center text-2xl mb-5">
        {yourTurn ? '你的回合' : '電腦回合'}
      </div>
      <div className="flex flex-col gap-12 laptop:flex-row">
        <div className="flex-1">
          <div className="text-center text-xl mb-2">YOU</div>
          <GameBoard mode="firing" disableHover={true} />
        </div>
        <div className="flex-1">
          <div className="text-center text-xl mb-2">電腦</div>
          <GameBoard mode="firing" onFire={onFire} />
        </div>
      </div>
    </div>
  );
};

export default FiringPhase;
