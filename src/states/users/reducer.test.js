// skenario untuk users pounds

// poundReducer function
// - harus mengembalikan state awal ketika diberikan uknown action
// - harus mengembalikan users keetika diberikan RECEIVE_USERS action

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('harus mengembalikan state awal ketika diberikan uknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('harus mengembalikan users keetika diberikan RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
