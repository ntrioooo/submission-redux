/**
 * @TODO: Create Redux store
 */

import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import poundsReducer from './pounds/reducer';
import poundDetailReducer from './poundDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    pounds: poundsReducer,
    poundDetail: poundDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
