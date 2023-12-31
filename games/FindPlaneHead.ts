import {
  checkIsGameOver,
  generateComputerPlanes,
  generateComputerPosition,
} from '@/helpers/BasicPlanePosition';
import { Game } from 'boardgame.io';
import { TurnOrder } from 'boardgame.io/core';

export enum PlaneType {
  A = 'A',
  B = 'B',
  C = 'C',
}

export type Plane = {
  x: number;
  y: number;
  isHead: boolean;
};

export type PlaneMap = {
  [PlaneType.A]: Plane[];
  [PlaneType.B]: Plane[];
  [PlaneType.C]: Plane[];
};

export type BoardCell = {
  index: number;
  isReveal?: boolean;
  isPlaneHead?: boolean;
  isPlaneBody?: boolean;
};

export type FindPlaneHeadState = {
  playerBoard: BoardCell[];
  computerBoard: BoardCell[];
};

const placePlane = ({ G, events }: any, planes: PlaneMap) => {
  const { A, B, C } = generateComputerPlanes();
  const allPlayerPlanePositions = Object.values(planes).flat();
  const playerBoard: BoardCell[] = G.playerBoard.map((b: BoardCell) => {
    const plane = allPlayerPlanePositions.find(
      (p) => 10 * p.y + p.x === b.index
    );
    if (plane) {
      return {
        ...b,
        isPlaneHead: plane.isHead,
        isPlaneBody: !plane.isHead,
      };
    }
    return b;
  });
  G.playerBoard = playerBoard;

  const allComputerPlanePositions = [...A, ...B, ...C];
  const computerBoard: BoardCell[] = G.computerBoard.map((b: BoardCell) => {
    const plane = allComputerPlanePositions.find(
      (p) => 10 * p.y + p.x === b.index
    );
    if (plane) {
      return {
        ...b,
        isPlaneHead: plane.isHead,
        isPlaneBody: !plane.isHead,
      };
    }
    return b;
  });
  G.computerBoard = computerBoard;
  events.endPhase();
};

const playerFire = ({ G, events }: any, x: number, y: number) => {
  const data = [...G.computerBoard];
  const isAlreadyReveal = data.find((b) => y * 10 + x === b.index);
  if (isAlreadyReveal?.isReveal) {
    return;
  }
  const targetCellIndex = G.computerBoard.findIndex(
    (b: BoardCell) => 10 * y + x === b.index
  );
  data[targetCellIndex].isPlaneHead =
    G.computerBoard[targetCellIndex].isPlaneHead;
  data[targetCellIndex].isPlaneBody =
    G.computerBoard[targetCellIndex].isPlaneBody;
  data[targetCellIndex].isReveal = true;

  G.computerBoard = data;
  events.endTurn();
};

const computerFire = ({ G, events }: any) => {
  const data = [...G.playerBoard];
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const { headX, headY } = generateComputerPosition(x, y, data);
  console.log(headX, headY);
  const targetCellIndex = G.playerBoard.findIndex(
    (b: BoardCell) => 10 * headY + headX === b.index
  );
  data[targetCellIndex].isPlaneHead =
    G.playerBoard[targetCellIndex].isPlaneHead;
  data[targetCellIndex].isPlaneBody =
    G.playerBoard[targetCellIndex].isPlaneBody;
  data[targetCellIndex].isReveal = true;

  G.playerBoard = data;
  events.endTurn();
};

export const FindPlaneHead: Game<FindPlaneHeadState> = {
  name: 'FindPlaneHead',
  setup: () => ({
    playerBoard: Array(100)
      .fill(null)
      .map((_, index) => ({ index, isReveal: false })),
    computerBoard: Array(100)
      .fill(null)
      .map((_, index) => ({ index, isReveal: false })),
  }),
  endIf: ({ G }) => {
    if (checkIsGameOver(G.playerBoard)) {
      return { winner: '你輸了' };
    }
    if (checkIsGameOver(G.computerBoard)) {
      return { winner: '你獲勝了' };
    }
  },
  phases: {
    deployment: {
      // 玩家放置飛機階段
      moves: {
        placePlane,
      },
      start: true,
      next: 'firing',
    },
    firing: {
      // 玩家開始攻擊階段
      moves: {
        playerFire,
        computerFire,
      },
    },
  },
  turn: {
    order: TurnOrder.RESET,
  },
};
