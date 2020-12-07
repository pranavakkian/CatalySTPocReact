import { SET_COLLEAGUE_DATA } from '../../Types';

const handleSetColleagueData = (value) => ({
  type: SET_COLLEAGUE_DATA,
  payload: value,
});

export default handleSetColleagueData;
