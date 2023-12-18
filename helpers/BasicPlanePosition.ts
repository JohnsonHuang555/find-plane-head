import {
  RotateDirection,
  SettingPlane,
} from '@/app/single-play/(components)/phases/DeploymentPhase';
import { BoardCell, Plane, PlaneMap } from '@/games/FindPlaneHead';

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

export const existPlacedPlane = (
  x: number,
  y: number,
  placedPlanes: SettingPlane
) => {
  const allPlanesPosition = Object.values(placedPlanes)
    .map((plane) => plane.position)
    .flat();
  const placed = allPlanesPosition.find(
    (plane) => plane?.x === x && plane?.y === y
  );

  return placed;
};

const generateRandomPositionAndDirection = () => {
  const headX = Math.floor(Math.random() * 10);
  const headY = Math.floor(Math.random() * 10);
  const direction = Math.floor(Math.random() * 4);

  const directionMap: { [key: number]: RotateDirection } = {
    0: RotateDirection.Up,
    1: RotateDirection.Left,
    2: RotateDirection.Down,
    3: RotateDirection.Right,
  };

  return {
    headX,
    headY,
    direction: directionMap[direction],
  };
};

const checkCorrectPosition = (plane: Plane[], otherPlanes?: Plane[]) => {
  const outOfRange = plane.find(
    (p) => p.x < 0 || p.y < 0 || p.x >= 10 || p.y >= 10
  );
  if (outOfRange) {
    return false;
  }
  const overlayOthers = plane.some(
    (p) => !!otherPlanes?.find((o) => p.x === o.x && p.y === o.y)
  );
  if (overlayOthers) {
    return false;
  }
  return true;
};

export const generateComputerPlanes = (): PlaneMap => {
  const {
    headX: AHeadX,
    headY: AHeadY,
    direction: ADirection,
  } = generateRandomPositionAndDirection();
  const planeA = generatePlaneA(AHeadX, AHeadY, ADirection);
  if (!checkCorrectPosition(planeA)) {
    return generateComputerPlanes();
  }

  const {
    headX: BHeadX,
    headY: BHeadY,
    direction: BDirection,
  } = generateRandomPositionAndDirection();
  const planeB = generatePlaneB(BHeadX, BHeadY, BDirection);
  if (!checkCorrectPosition(planeB, planeA)) {
    return generateComputerPlanes();
  }

  const {
    headX: CHeadX,
    headY: CHeadY,
    direction: CDirection,
  } = generateRandomPositionAndDirection();
  const planeC = generatePlaneC(CHeadX, CHeadY, CDirection);
  if (!checkCorrectPosition(planeC, [...planeA, ...planeB])) {
    return generateComputerPlanes();
  }

  return {
    A: planeA,
    B: planeB,
    C: planeC,
  };
};

/** 電腦下棋邏輯 */
export const generateComputerPosition = (
  x: number,
  y: number,
  board?: BoardCell[]
): { headX: number; headY: number } => {
  const obj = board?.find((b) => b.index === y * 10 + x);
  if (obj?.isReveal === false) {
    return {
      headX: x,
      headY: y,
    };
  }

  return generateComputerPosition(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    board
  );
};

export const checkIsGameOver = (board: BoardCell[]): boolean => {
  const isFindAllHeads = board.filter((b) => b.isPlaneHead && b.isReveal);
  if (isFindAllHeads.length === 3) {
    return true;
  }
  return false;
};
