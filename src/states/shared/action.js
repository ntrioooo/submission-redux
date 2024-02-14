/**
 * @TODO: Define all the actions (creator) that uses a combination of actions from various domain
 */

import api from '../../utils/api';
import { receivePoundsActionCreator } from '../pounds/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndPounds() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const pounds = await api.getAllPounds();

      // console.log(pounds)

      dispatch(receiveUsersActionCreator(users));
      dispatch(receivePoundsActionCreator(pounds));
    } catch (error) {
      alert(error.message);
    }
  };
}

export default asyncPopulateUsersAndPounds;
