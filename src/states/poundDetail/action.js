/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_POUND_DETAIL: 'RECEIVE_POUND_DETAIL',
  CLEAR_POUND_DETAIL: 'CLEAR_POUND_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_POUND_DETAIL: 'TOGGLE_UPVOTE_POUND_DETAIL',
  TOGGLE_DOWNVOTE_POUND_DETAIL: 'TOGGLE_DOWNVOTE_POUND_DETAIL',
  TOGGLE_NEUTRALVOTE_POUND_DETAIL: 'TOGGLE_NEUTRALVOTE_POUND_DETAIL',
};

function receivePoundDetailActionCreator(poundDetail) {
  return {
    type: ActionType.RECEIVE_POUND_DETAIL,
    payload: {
      poundDetail,
    },
  };
}

function clearPoundDetailActionCreator() {
  return {
    type: ActionType.CLEAR_POUND_DETAIL,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpvotePoundDetailActionCreator(poundId, userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_POUND_DETAIL,
    payload: {
      poundId,
      userId,
    },
  };
}

function toggleDownvotePoundDetailActionCreator(poundId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_POUND_DETAIL,
    payload: {
      poundId,
    },
  };
}

function toggleNeutralVotePoundDetailActionCreator(poundId) {
  return {
    type: ActionType.TOGGLE_NEUTRALVOTE_POUND_DETAIL,
    payload: {
      poundId,
    },
  };
}

function asyncReceivePoundDetail(id) {
  return async (dispatch) => {
    dispatch(clearPoundDetailActionCreator());
    dispatch(showLoading());
    try {
      const poundDetail = await api.getPoundDetail(id);
      dispatch(receivePoundDetailActionCreator(poundDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVotePoundDetail(poundId) {
  return async (dispatch, getState) => {
    const { authUser, poundDetail } = getState();
    dispatch(toggleUpvotePoundDetailActionCreator(poundId, authUser.id));
    dispatch(showLoading());

    try {
      await api.upVotePound(poundDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVotePoundDetail() {
  return async (dispatch, getState) => {
    const { authUser, poundDetail } = getState();
    dispatch(toggleDownvotePoundDetailActionCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.toggleDownvotePound(poundDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralVotePoundDetail() {
  return async (dispatch, getState) => {
    const { authUser, poundDetail } = getState();
    dispatch(toggleNeutralVotePoundDetailActionCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.toggleNeutralVotePound(poundDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncAddComment({ content, poundId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const newComment = await api.createComment({ content, poundId });
      dispatch(addCommentActionCreator(newComment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receivePoundDetailActionCreator,
  clearPoundDetailActionCreator,
  addCommentActionCreator,
  toggleUpvotePoundDetailActionCreator,
  toggleDownvotePoundDetailActionCreator,
  toggleNeutralVotePoundDetailActionCreator,
  asyncReceivePoundDetail,
  asyncToggleDownVotePoundDetail,
  asyncToggleNeutralVotePoundDetail,
  asyncToggleUpVotePoundDetail,
  asyncAddComment,
};
