// asyncReceivePoundDetail thunk
// - harus dispatch action secara benar ketika receive pound detail
// - harus dispatch action dan memanggil alert ketika receive pound detail gagal

import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  asyncReceivePoundDetail,
  clearPoundDetailActionCreator,
  receivePoundDetailActionCreator,
} from './action';

import api from '../../utils/api';

const fakeDetailPoundResponse = {
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
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceivePoundDetail thunk', () => {
  beforeEach(() => {
    api._getPoundDetail = api.getPoundDetail;
  });

  afterEach(() => {
    api.getPoundDetail = api._getPoundDetail;

    delete api._getPoundDetail;
  });

  it('harus dispatch action secara benar ketika receive pound detail', async () => {
    // arrange
    api.getPoundDetail = () => Promise.resolve(fakeDetailPoundResponse);
    const dispatch = vi.fn();
    // action
    await asyncReceivePoundDetail()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receivePoundDetailActionCreator(fakeDetailPoundResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('harus dispatch action dan memanggil alert ketika receive pound detail gagal', async () => {
    // arrange
    api.getPoundDetail = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();
    // action
    await asyncReceivePoundDetail()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(clearPoundDetailActionCreator());
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
