import { GET_COLLEAGUE_DATA } from '../../Types';

export const handleGetColleagueData = (value) => ({
  type: GET_COLLEAGUE_DATA,
  payload: value,
});
