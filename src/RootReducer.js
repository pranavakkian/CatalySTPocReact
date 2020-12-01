import combinedReducers from 'react-dom';
import UserInfoReducer from './Redux/UserInfoReducer';

const RootReducer = combinedReducers({ UserInfoReducer });

export default RootReducer;
