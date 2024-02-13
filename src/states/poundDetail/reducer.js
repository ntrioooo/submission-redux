/**
 * @TODO: Define reducer for the talkDetail state
 */

import { ActionType } from "./action";

function poundDetailReducer(poundDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_POUND_DETAIL:
      return action.payload.poundDetail;
    case ActionType.CLEAR_POUND_DETAIL:
      return null;
    case ActionType.TOGGLE_UPVOTE_POUND_DETAIL:
      return threads.map((thread) => {
        if(thread.id === action.payload.threadId) {
            return {
                ...thread,
                upVotesBy: thread.upVotesBy.includes(action.payload.userId)
                ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
                : thread.upVotesBy.concat([action.payload.userId])
            }
        }
        return thread
    })
      // return {
      //   ...poundDetail,
      //   likes: poundDetail.likes.includes(action.payload.userId)
      //     ? poundDetail.likes.filter((id) => id !== action.payload.userId)
      //     : poundDetail.likes.concat(action.payload.userId),
      // };
    default:
      return poundDetail;
  }
}

export default poundDetailReducer;
