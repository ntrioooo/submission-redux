/**
 * @TODO: Define the reducer for the talks state
 */

import { ActionType } from "./action";

function poundsReducer(pounds = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POUNDS:
      return action.payload.pounds;
    case ActionType.ADD_POUND:
      return [action.payload.pound, ...pounds];
    case ActionType.TOGGLE_LIKE_TALK:
      return talks.map((talk) => {
        if (talk.id === action.payload.talkId) {
          return {
            ...talk,
            likes: talk.likes.includes(action.payload.userId)
              ? talk.likes.filter((id) => id !== action.payload.userId)
              : talk.likes.concat([action.payload.userId]),
          };
        }
        return talk;
      });
    default:
      return pounds;
  }
}

export default poundsReducer;
