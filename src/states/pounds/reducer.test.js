// skenario untuk reducer pounds

// poundReducer function
// - harus mengembalikan state awal ketika diberikan uknown action
// - harus mengembalikan pounds keetika diberikan RECEIVE_POUNDS action
// - harus mengembalikan pounds dengan new pounds ketika diberikan ADD_POUND action
// - harus mengembalikan pounds dengan toggle like ketika diberikan TOGGLE_LIKE_POUND

import { describe, it, expect } from 'vitest';
import poundsReducer from './reducer';

describe('poundsReducer function', () => {
  it('harus mengembalikan state awal ketika diberikan uknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = poundsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('harus mengembalikan pounds keetika diberikan RECEIVE_POUNDS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_POUNDS',
      payload: {
        threads: [
          {
            id: 1,
            title: 'Title 1',
            body: 'Body 1',
            category: 'category',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = poundsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.pounds);
  });

  it('harus mengembalikan pounds keetika diberikan TOGGLE_LIKE_POUND', () => {
    // arrange
    const initialState = [
      {
        id: 1,
        title: 'Title 1',
        user: 'user-1',
        replyTo: '',
        likes: [],
        createdAt: '2022-09-22T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'TOGGLE_LIKE_POUND',
      payload: {
        poundId: 1,
        userId: 'user-1',
      },
    };

    // action
    const nextState = poundsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        likes: [action.payload.userId],
      },
    ]);

    // action unlike pound
    const nextState2 = poundsReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
