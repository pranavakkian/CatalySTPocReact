import { combineReducers } from 'redux';
import UserInfoReducer from './Redux/UserInfoReducer';
import ColleagueReducer from './Redux/AddColleagueReducer';

const RootReducer = combineReducers({ UserInfoReducer, ColleagueReducer });

export default RootReducer;
