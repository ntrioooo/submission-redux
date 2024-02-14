import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
  TOGGLE_NEUTRALVOTE_COMMENT: 'TOGGLE_NEUTRALVOTE_COMMENT',
};

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

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

function asyncAddComment({ content, poundId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const newComment = await api.createComment({ content, poundId });
      dispatch(addCommentActionCreator(newComment));
      console.log(newComment);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncAddComment,
  toggleUpvoteCommentActionCreator,
  toggleDownvoteCommentActionCreator,
  toggleNeutralVoteCommentActionCreator,
};
