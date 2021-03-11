import { ADD_NAME, AddName, CHANGE_BOARD, ChangeBoard } from "./types";

export const changePlayerNames = (
  firstName: string,
  secondName: string,
): AddName => {
  return {
    type: ADD_NAME,
    payload: [firstName, secondName],
  };
};

export const changeBoardSize = (boardSize: number): ChangeBoard => {
  return {
    type: CHANGE_BOARD,
    payload: boardSize,
  };
};
