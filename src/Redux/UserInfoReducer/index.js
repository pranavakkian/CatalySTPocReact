import { IS_LOGGED_IN, SET_USER_NAME } from '../Types';
import initialState from './InitialState';

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case SET_USER_NAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

export default UserInfoReducer;
