// skenario untuk reducer pounds

// poundReducer function
// - harus mengembalikan state awal ketika diberikan uknown action
// - harus mengembalikan pounds detail ketika diberikan RECEIVE_POUNDS_DETAIL action

import { describe, it, expect } from 'vitest';
import poundDetailReducer from './reducer';

describe('poundDetailReducer function', () => {
  it('harus mengembalikan state awal ketika diberikan uknown action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'UNKNOWN',
    };

    // action
    const nextState = poundDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('harus mengembalikan pounds detail ketika diberikan RECEIVE_POUNDS_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_POUND_DETAIL',
      payload: {
        detailThread: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
            upVotesBy: [],
            downVotesBy: [],
            comments: [
              {
                id: 'comment-1',
                content: 'Ini adalah komentar pertama',
                createdAt: '2021-06-21T07:00:00.000Z',
                owner: {
                  id: 'users-1',
                  name: 'John Doe',
                  avatar: 'https://generated-image-url.jpg',
                },
                upVotesBy: [],
                downVotesBy: [],
              },
            ],
          },
        ],
      },
    };

    // action
    const nextState = poundDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.pounds);
  });
});
