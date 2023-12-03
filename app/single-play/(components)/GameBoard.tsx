import { PlaneMap } from '@/games/FindPlaneHead';

type GameBoardProps = {
  playerAPlanes: PlaneMap;
  onCellClick: (x: number, y: number) => void;
};

const GameBoard = ({ playerAPlanes, onCellClick }: GameBoardProps) => {
  console.log(playerAPlanes);
  // 生成棋盤格的2D數組，用於標識每個格子的顏色
  const generateBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        board.push(
          <div
            key={`${i}-${j}`}
            className="w-[80px] h-[80px] transition cursor-pointer border border-solid border-gray-400 hover:bg-slate-300"
            onClick={() => onCellClick(i, j)}
          />
        );
      }
    }
    return board;
  };

  return (
    <div className="grid grid-cols-10 grid-rows-10 grid-gap-0 border border-gray-400">
      {generateBoard()}
    </div>
  );
};

export default GameBoard;
