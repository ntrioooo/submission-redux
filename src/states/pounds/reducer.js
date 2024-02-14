/**
 * @TODO: Define the reducer for the talks state
 */

import { ActionType } from './action';

function poundsReducer(pounds = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POUNDS:
      return action.payload.pounds;
    case ActionType.ADD_POUND:
      return [action.payload.pound, ...pounds];
    case ActionType.TOGGLE_LIKE_POUND:
      return pounds.map((pound) => {
        if (pound.id === action.payload.poundId) {
          return {
            ...pound,
            likes: pound.likes.includes(action.payload.userId)
              ? pound.likes.filter((id) => id !== action.payload.userId)
              : pound.likes.concat([action.payload.userId]),
          };
        }
        return pound;
      });
    default:
      return pounds;
  }
}

export default poundsReducer;
