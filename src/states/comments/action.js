const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALVOTE_COMMENT: 'TOGGLE_NEUTRALVOTE_COMMENT',
};

function toggleUpvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownvoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

export {
  ActionType,
  toggleUpvoteCommentActionCreator,
  toggleDownvoteCommentActionCreator,
  toggleNeutralVoteCommentActionCreator,
};
