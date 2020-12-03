import { GET_COLLEAGUE_NAME, GET_COLLEAGUE_JOB_TITLE, GET_COLLEAGUE_CONTACT } from '../../Types';

export const handleGetColleagueName = (value) => ({
  type: GET_COLLEAGUE_NAME,
  payload: value,
});

export const handleGetColleagueJobTitle = (value) => ({
  type: GET_COLLEAGUE_JOB_TITLE,
  payload: value,
});

export const handleGetColleagueContact = (value) => ({
  type: GET_COLLEAGUE_CONTACT,
  payload: value,
});
