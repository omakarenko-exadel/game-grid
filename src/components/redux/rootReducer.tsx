import { ADD_NAME, CHANGE_BOARD, SystemState, ChangeNamesTypes } from "./types";

const initialState: SystemState = {
  firstPlayer: "Player 1",
  secondPlayer: "Player 2",
  boardSize: 2,
};

export const rootReducer = (
  state = initialState,
  action: ChangeNamesTypes,
): SystemState => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        firstPlayer: action.payload[0],
        secondPlayer: action.payload[1],
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
