export const ADD_NAME = "PLAYER/ADD_NAME";
export const CHANGE_BOARD = "BOARD/CHANGE_SIZE";

export interface AddName {
  type: typeof ADD_NAME;
  payload: string[];
}

export interface ChangeBoard {
  type: typeof CHANGE_BOARD;
  payload: number;
}

export interface SystemState {
  firstPlayerName: string;
  secondPlayerName: string;
  boardSize: number;
}

export type ChangeNamesTypes = AddName | ChangeBoard;
