import { combineReducers } from 'redux';
import UserInfoReducer from './Redux/UserInfoReducer';

const RootReducer = combineReducers({ UserInfoReducer });

export default RootReducer;
