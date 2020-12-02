import Store from './Store';

describe('Testing the store', () => {
  test('should set the supplied initial state', () => {
    expect(Store.getState()).toEqual({ UserInfoReducer: { isLoggedIn: false, userName: null } });
  });
});
