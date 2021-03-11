import { ADD_NAME, CHANGE_BOARD, SystemState, ChangeNamesTypes } from "./types";

const initialState: SystemState = {
  firstPlayerName: "Player 1",
  secondPlayerName: "Player 2",
  boardSize: 8,
};

export const rootReducer = (
  state = initialState,
  action: ChangeNamesTypes,
): SystemState => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        firstPlayerName: action.payload[0],
        secondPlayerName: action.payload[1],
      };
    case CHANGE_BOARD:
      return {
        ...state,
        boardSize: action.payload,
      };
    default:
      return state;
  }
};
