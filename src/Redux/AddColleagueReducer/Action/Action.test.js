import { GET_COLLEAGUE_NAME, GET_COLLEAGUE_JOB_TITLE, GET_COLLEAGUE_CONTACT } from '../../Types';
import { handleGetColleagueName, handleGetColleagueJobTitle, handleGetColleagueContact } from '.';

describe('Add Colleague Reducer Action', () => {
  test('handleGetColleagueName', () => {
    expect(handleGetColleagueName('test')).toStrictEqual({ type: GET_COLLEAGUE_NAME, payload: 'test' });
  });
  test('handleGetColleagueTitle', () => {
    expect(handleGetColleagueJobTitle('test')).toStrictEqual({ type: GET_COLLEAGUE_JOB_TITLE, payload: 'test' });
  });
  test('handleGetColleagueContact', () => {
    expect(handleGetColleagueContact('test')).toStrictEqual({ type: GET_COLLEAGUE_CONTACT, payload: 'test' });
  });
});
