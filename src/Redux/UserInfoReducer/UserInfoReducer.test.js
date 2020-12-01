import { IS_LOGGED_IN, SET_USER_NAME } from '../Types';
import initialState from './InitialState';
import UserInfoReducer from './index';

describe('User info reducer action', () => {
  test('handles Log in', () => {
    expect(UserInfoReducer(undefined, { type: IS_LOGGED_IN, payload: true }))
      .toStrictEqual({ ...initialState, isLoggedIn: true });
  });

  test('handles SetUserName', () => {
    expect(UserInfoReducer(undefined, { type: SET_USER_NAME, payload: 'admin' }))
      .toStrictEqual({ ...initialState, userName: 'admin' });
  });

  test('Default', () => {
    expect(UserInfoReducer(undefined, { type: null }))
      .toStrictEqual({ ...initialState });
  });
});
