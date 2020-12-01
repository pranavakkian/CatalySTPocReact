import { applyMiddleware, createStore } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';

const composeEnhancers = composeWithDevTools({ trace: true });

const Store = createStore(RootReducer, composeEnhancers(applyMiddleware()));

export default Store;
