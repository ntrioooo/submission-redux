// asyncPopulateUsersAndPounds thunk
// - harus dispatch action secara benar ketika fetching berhasil
// - harus dispatch action dan memanggil alert ketika fetching gagal

import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import asyncPopulateUsersAndPounds from './action';

import api from '../../utils/api';
import { receivePoundsActionCreator } from '../pounds/action';
import { receiveUsersActionCreator } from '../users/action';

const fakePoundsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndPounds thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllPounds = api.getAllPounds;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllPounds = api._getAllPounds;

    // delete backup data
    delete api._getAllUsers;
    delete api._getAllPounds;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllPounds = () => Promise.resolve(fakePoundsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateUsersAndPounds()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receivePoundsActionCreator(fakePoundsResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('harus dispatch action dan memanggil alert ketika fetching gagal', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllPounds = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    window.alert = vi.fn();

    // action
    await asyncPopulateUsersAndPounds()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
