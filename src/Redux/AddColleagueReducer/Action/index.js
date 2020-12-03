import { SET_COLLEAGUE_DATA } from '../../Types';

export const handleSetColleagueData = (value) => ({
  type: SET_COLLEAGUE_DATA,
  payload: value,
});
