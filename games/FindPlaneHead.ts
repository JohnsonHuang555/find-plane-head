import { basicPlanePosition } from '@/helpers/BasicPlanePosition';
import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

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

export type FindPlaneHeadState = {
  playerAPlanes: PlaneMap;
  playerBPlanes: PlaneMap;
};

const placePlane = ({ G }: any, x: number, y: number) => {
  // 檢查該艦艇是否已經被放置
  // 更新遊戲狀態，放置艦艇
};

const fire = () => {};

export const FindPlaneHead: Game<FindPlaneHeadState> = {
  name: 'FindPlaneHead',
  // setup: () => {
  //   return {
  //     playerAPlanes: basicPlanePosition,
  //     playerBPlanes: basicPlanePosition,
  //   };
  // },
  phases: {
    deployment: {
      // 玩家放置飛機階段
      moves: {
        placePlane,
      },
      start: true,
      next: 'firing',
      endIf: ({ G }) => {
        if (G.playerAPlanes) {
        }
      },
    },
    firing: {
      // 玩家開始攻擊階段
      moves: {
        fire,
      },
    },
  },
  // turn: {
  //   moveLimit: 1,
  // },
  turn: {},
  moves: {},
  endIf: () => {},
};
