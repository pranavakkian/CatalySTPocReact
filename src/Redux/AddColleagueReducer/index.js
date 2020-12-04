import { SET_COLLEAGUE_DATA } from '../Types';
import initialState from './InitialState';

const ColleagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLLEAGUE_DATA: {
      return { ...state, data: state.data.concat(action.payload) };
    }
    default:
      return state;
  }
};

export default ColleagueReducer;
