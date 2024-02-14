/**
 * @TODO: Define all the actions (creator) for the talks state
 */

import api from '../../utils/api';

const ActionType = {
  RECEIVE_POUNDS: 'RECEIVE_POUNDS',
  ADD_POUND: 'ADD_POUND',
  TOGGLE_LIKE_POUND: 'TOGGLE_LIKE_POUND',
};

function receivePoundsActionCreator(pounds) {
  return {
    type: ActionType.RECEIVE_POUNDS,
    payload: {
      pounds,
    },
  };
}

function addPoundActionCreator(pound) {
  return {
    type: ActionType.ADD_POUND,
    payload: {
      pound,
    },
  };
}

function toggleLikePoundActionCreator({ poundId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_POUND,
    payload: {
      poundId,
      userId,
    },
  };
}

function asyncAddPound({ title, body, category = '' }) {
  return async (dispatch) => {
    try {
      const pound = await api.createPound({ title, body, category });
      dispatch(addPoundActionCreator(pound));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToogleLikePound(poundId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleLikePoundActionCreator({ poundId, userId: authUser.id }));

    try {
      await api.toggleLikePound(poundId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikePoundActionCreator({ poundId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receivePoundsActionCreator,
  addPoundActionCreator,
  toggleLikePoundActionCreator,
  asyncAddPound,
  asyncToogleLikePound,
};
