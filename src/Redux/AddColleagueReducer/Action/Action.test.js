import { GET_COLLEAGUE_DATA } from '../../Types';
import { handleGetColleagueData } from '.';

describe('Add Colleague Reducer Action', () => {
  test('handleGetColleagueData', () => {
    expect(handleGetColleagueData('test')).toStrictEqual({ type: GET_COLLEAGUE_DATA, payload: 'test' });
  });
});
