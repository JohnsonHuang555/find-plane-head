import { RotateDirection } from '@/app/single-play/(components)/phases/DeploymentPhase';
import { Plane, PlaneMap } from '@/games/FindPlaneHead';

export const basicPlanePosition: PlaneMap = {
  A: [
    { x: 2, y: 0, isHead: true },
    { x: 0, y: 1, isHead: false },
    { x: 1, y: 1, isHead: false },
    { x: 2, y: 1, isHead: false },
    { x: 3, y: 1, isHead: false },
    { x: 4, y: 1, isHead: false },
    { x: 2, y: 2, isHead: false },
    { x: 2, y: 3, isHead: false },
    { x: 1, y: 4, isHead: false },
    { x: 2, y: 4, isHead: false },
    { x: 3, y: 4, isHead: false },
  ],
  B: [
    { x: 6, y: 0, isHead: true },
    { x: 6, y: 1, isHead: false },
    { x: 4, y: 2, isHead: false },
    { x: 5, y: 2, isHead: false },
    { x: 6, y: 2, isHead: false },
    { x: 7, y: 2, isHead: false },
    { x: 8, y: 2, isHead: false },
    { x: 6, y: 3, isHead: false },
    { x: 5, y: 4, isHead: false },
    { x: 7, y: 4, isHead: false },
  ],
  C: [
    { x: 2, y: 5, isHead: true },
    { x: 1, y: 6, isHead: false },
    { x: 2, y: 6, isHead: false },
    { x: 3, y: 6, isHead: false },
    { x: 0, y: 7, isHead: false },
    { x: 2, y: 7, isHead: false },
    { x: 4, y: 7, isHead: false },
    { x: 2, y: 8, isHead: false },
    { x: 1, y: 9, isHead: false },
    { x: 2, y: 9, isHead: false },
    { x: 3, y: 9, isHead: false },
  ],
};

export const generatePlaneA = (
  headX: number,
  headY: number,
  direction: RotateDirection
): Plane[] => {
  switch (direction) {
    case RotateDirection.Up:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 2, y: headY + 1, isHead: false },
        { x: headX - 1, y: headY + 1, isHead: false },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX + 1, y: headY + 1, isHead: false },
        { x: headX + 2, y: headY + 1, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
    case RotateDirection.Left:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX + 1, y: headY - 2, isHead: false },
        { x: headX + 1, y: headY - 1, isHead: false },
        { x: headX + 1, y: headY, isHead: false },
        { x: headX + 1, y: headY + 1, isHead: false },
        { x: headX + 1, y: headY + 2, isHead: false },
        { x: headX + 2, y: headY, isHead: false },
        { x: headX + 3, y: headY, isHead: false },
        { x: headX + 4, y: headY - 1, isHead: false },
        { x: headX + 4, y: headY, isHead: false },
        { x: headX + 4, y: headY + 1, isHead: false },
      ];
    case RotateDirection.Down:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 2, y: headY - 1, isHead: false },
        { x: headX - 1, y: headY - 1, isHead: false },
        { x: headX, y: headY - 1, isHead: false },
        { x: headX + 1, y: headY - 1, isHead: false },
        { x: headX + 2, y: headY - 1, isHead: false },
        { x: headX, y: headY - 2, isHead: false },
        { x: headX, y: headY - 3, isHead: false },
        { x: headX - 1, y: headY - 4, isHead: false },
        { x: headX, y: headY - 4, isHead: false },
        { x: headX + 1, y: headY - 4, isHead: false },
      ];
    case RotateDirection.Right:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 1, y: headY - 2, isHead: false },
        { x: headX - 1, y: headY - 1, isHead: false },
        { x: headX - 1, y: headY, isHead: false },
        { x: headX - 1, y: headY + 1, isHead: false },
        { x: headX - 1, y: headY + 2, isHead: false },
        { x: headX - 2, y: headY, isHead: false },
        { x: headX - 3, y: headY, isHead: false },
        { x: headX - 4, y: headY - 1, isHead: false },
        { x: headX - 4, y: headY, isHead: false },
        { x: headX - 4, y: headY + 1, isHead: false },
      ];
    default:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 2, y: headY + 1, isHead: false },
        { x: headX - 1, y: headY + 1, isHead: false },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX + 1, y: headY + 1, isHead: false },
        { x: headX + 2, y: headY + 1, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
  }
};

export const generatePlaneB = (
  headX: number,
  headY: number,
  direction: RotateDirection
): Plane[] => {
  switch (direction) {
    case RotateDirection.Up:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX - 1, y: headY + 2, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX + 1, y: headY + 2, isHead: false },
        { x: headX + 2, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
    case RotateDirection.Left:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX + 1, y: headY, isHead: false },
        { x: headX + 2, y: headY - 2, isHead: false },
        { x: headX + 2, y: headY - 1, isHead: false },
        { x: headX + 2, y: headY, isHead: false },
        { x: headX + 2, y: headY + 1, isHead: false },
        { x: headX + 2, y: headY + 2, isHead: false },
        { x: headX + 3, y: headY, isHead: false },
        { x: headX + 4, y: headY - 1, isHead: false },
        { x: headX + 4, y: headY + 1, isHead: false },
      ];
    case RotateDirection.Down:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX, y: headY - 1, isHead: false },
        { x: headX - 2, y: headY - 2, isHead: false },
        { x: headX - 1, y: headY - 2, isHead: false },
        { x: headX, y: headY - 2, isHead: false },
        { x: headX + 1, y: headY - 2, isHead: false },
        { x: headX + 2, y: headY - 2, isHead: false },
        { x: headX, y: headY - 3, isHead: false },
        { x: headX - 1, y: headY - 4, isHead: false },
        { x: headX + 1, y: headY - 4, isHead: false },
      ];
    case RotateDirection.Right:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 1, y: headY, isHead: false },
        { x: headX - 2, y: headY - 2, isHead: false },
        { x: headX - 2, y: headY - 1, isHead: false },
        { x: headX - 2, y: headY, isHead: false },
        { x: headX - 2, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX - 3, y: headY, isHead: false },
        { x: headX - 4, y: headY - 1, isHead: false },
        { x: headX - 4, y: headY + 1, isHead: false },
      ];
    default:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX - 1, y: headY + 2, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX + 1, y: headY + 2, isHead: false },
        { x: headX + 2, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
  }
};

export const generatePlaneC = (
  headX: number,
  headY: number,
  direction: RotateDirection
): Plane[] => {
  switch (direction) {
    case RotateDirection.Up:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 1, y: headY + 1, isHead: false },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX + 1, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX + 2, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
    case RotateDirection.Left:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX + 1, y: headY - 1, isHead: false },
        { x: headX + 1, y: headY, isHead: false },
        { x: headX + 1, y: headY + 1, isHead: false },
        { x: headX + 2, y: headY - 2, isHead: false },
        { x: headX + 2, y: headY, isHead: false },
        { x: headX + 2, y: headY + 2, isHead: false },
        { x: headX + 3, y: headY, isHead: false },
        { x: headX + 4, y: headY - 1, isHead: false },
        { x: headX + 4, y: headY, isHead: false },
        { x: headX + 4, y: headY + 1, isHead: false },
      ];
    case RotateDirection.Down:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 1, y: headY - 1, isHead: false },
        { x: headX, y: headY - 1, isHead: false },
        { x: headX + 1, y: headY - 1, isHead: false },
        { x: headX - 2, y: headY - 2, isHead: false },
        { x: headX, y: headY - 2, isHead: false },
        { x: headX + 2, y: headY - 2, isHead: false },
        { x: headX, y: headY - 3, isHead: false },
        { x: headX - 1, y: headY - 4, isHead: false },
        { x: headX, y: headY, isHead: false },
        { x: headX + 1, y: headY - 4, isHead: false },
      ];
    case RotateDirection.Right:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX - 1, y: headY - 1, isHead: false },
        { x: headX - 1, y: headY, isHead: false },
        { x: headX - 1, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY - 2, isHead: false },
        { x: headX - 2, y: headY, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX - 3, y: headY, isHead: false },
        { x: headX - 4, y: headY - 1, isHead: false },
        { x: headX - 4, y: headY, isHead: false },
        { x: headX - 4, y: headY + 1, isHead: false },
      ];
    default:
      return [
        { x: headX, y: headY, isHead: true },
        { x: headX, y: headY + 1, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX - 1, y: headY + 2, isHead: false },
        { x: headX, y: headY + 2, isHead: false },
        { x: headX - 1, y: headY + 2, isHead: false },
        { x: headX - 2, y: headY + 2, isHead: false },
        { x: headX, y: headY + 3, isHead: false },
        { x: headX - 1, y: headY + 4, isHead: false },
        { x: headX + 1, y: headY + 4, isHead: false },
      ];
  }
};
