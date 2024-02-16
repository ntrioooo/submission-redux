// skenario untuk action pounds

// asyncRegisterUser thunk
// - harus dispatch action secara benar ketika register
// - harus dispatch action dan memanggil alert ketika add pound gagal

import {
  describe, it, expect, beforeEach, afterEach, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncRegisterUser } from './action';

import api from '../../utils/api';

const fakeRegisterResponse = [
  {
    id: 'user-123',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api.register = api._register;

    delete api._register;
  });

  it('harus dispatch action secara benar ketika register', async () => {
    // arrange
    api.register = () => Promise.resolve(fakeRegisterResponse);
    const dispatch = vi.fn();
    const registerUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };
    // action
    await asyncRegisterUser(registerUserData)(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('harus dispatch action dan memanggil alert ketika register gagal', async () => {
    // arrange
    api.register = () => Promise.reject(fakeErrorResponse);
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const registerUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    // action
    await asyncRegisterUser(registerUserData)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
