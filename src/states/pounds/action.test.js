// skenario untuk action pounds

// asyncAddPound thunk
// - harus dispatch action secara benar ketika add pound
// - harus dispatch action dan memanggil alert ketika add pound gagal

// asyncToggleLikePound thunk (Tidak ada fiturnya di project saya)
// - harus dispatch action secara benar ketika add pound
// - harus dispatch action dan memanggil alert ketika add pound gagal

import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncAddPound, addPoundActionCreator } from './action';

import api from '../../utils/api';

const fakeAddPoundResponse = [
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

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddPound thunk', () => {
  beforeEach(() => {
    api._createPound = api.createPound;
  });

  afterEach(() => {
    api.createPound = api._createPound;

    delete api._createPound;
  });

  it('harus dispatch action secara benar ketika add pound', async () => {
    // arrange
    api.createPound = () => Promise.resolve(fakeAddPoundResponse);
    const dispatch = vi.fn();
    const poundData = {
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
    };
    // action
    await asyncAddPound(poundData)(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      addPoundActionCreator(fakeAddPoundResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('harus dispatch action dan memanggil alert ketika add pound gagal', async () => {
    // arrange
    api.createPound = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    const poundData = {
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
    };
    window.alert = vi.fn();
    // action
    await asyncAddPound(poundData)(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
