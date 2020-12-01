import Store from './Store';

test('should set the supplied initial state', () => {
  expect(Store.getState()).toEqual({ UserInfoReducer: { isLoggedIn: true, userName: null } });
});
