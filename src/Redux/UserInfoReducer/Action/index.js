import { IS_LOGGED_IN, SET_USER_NAME } from '../../Types';

export const handleIsLoggedIn = (value) => ({
  type: IS_LOGGED_IN,
  payload: value,
});

export const handleSetUserName = (value) => ({
  type: SET_USER_NAME,
  payload: value,
});
