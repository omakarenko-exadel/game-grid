import { ADD_NAME, AddName, CHANGE_BOARD, ChangeBoard } from "./types";

export const changeNames = (firstName: string, secondName: string): AddName => {
  return {
    type: ADD_NAME,
    payload: [firstName, secondName],
  };
};

export const changeBoard = (boardSize: number): ChangeBoard => {
  return {
    type: CHANGE_BOARD,
    payload: boardSize,
  };
};
