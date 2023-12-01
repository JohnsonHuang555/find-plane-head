import { Game } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

export type FindPlaneHeadState = {
  cells: (string | null)[];
};

export const FindPlaneHead: Game<FindPlaneHeadState> = {
  name: 'FindPlaneHead',
  setup: () => ({ cells: Array(100).fill(null) }),
  turn: {
    moveLimit: 1,
  },
  moves: {},
  endIf: () => {},
};
