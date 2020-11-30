import { handleIsLoggedIn, handleSetUserName } from '.';
import { IS_LOGGED_IN, SET_USER_NAME } from '../../Types';

describe('User info reducer action', () => {
  test('handleIsLoggedIn', () => {
    expect(handleIsLoggedIn(true)).toStrictEqual({ type: IS_LOGGED_IN, payload: true });
  });

  test('handleSetUserName', () => {
    expect(handleSetUserName('test')).toStrictEqual({ type: SET_USER_NAME, payload: 'test' });
  });
});
