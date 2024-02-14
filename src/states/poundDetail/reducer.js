/**
 * @TODO: Define reducer for the talkDetail state
 */

import { ActionType } from "./action";

function poundDetailReducer(poundDetail = null, action = {}) {
  let userId;
  switch (action.type) {
    case ActionType.RECEIVE_POUND_DETAIL:
      return action.payload.poundDetail;
    case ActionType.CLEAR_POUND_DETAIL:
      return null;
    case ActionType.TOGGLE_UPVOTE_POUND_DETAIL:
      userId = action.payload.userId;
      return {
        ...poundDetail,
        upVotesBy: poundDetail.upVotesBy
          .map((id) => (id === userId ? null : id))
          .filter(Boolean),
      };
    default:
      return poundDetail;
  }
}

export default poundDetailReducer;
