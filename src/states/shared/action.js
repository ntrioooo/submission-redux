/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receivePoundsActionCreator } from '../pounds/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndPounds() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const pounds = await api.getAllPounds();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receivePoundsActionCreator(pounds));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndPounds;
