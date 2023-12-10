import {
  basicPlanePosition,
  generateComputerPlanes,
} from '@/helpers/BasicPlanePosition';
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

const placePlane = ({ G }: any, planes: PlaneMap) => {
  const { A, B, C } = generateComputerPlanes();
  G.playerBPlanes = {
    A,
    B,
    C,
  };
  G.playerAPlanes = planes;
};

const fire = () => {};

export const FindPlaneHead: Game<FindPlaneHeadState> = {
  name: 'FindPlaneHead',
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
