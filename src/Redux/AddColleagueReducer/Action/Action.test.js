import { SET_COLLEAGUE_DATA } from '../../Types';
import handleSetColleagueData from './index';

describe('Add Colleague Reducer Action', () => {
  test('handleSetColleagueData', () => {
    expect(handleSetColleagueData('test')).toStrictEqual({ type: SET_COLLEAGUE_DATA, payload: 'test' });
  });
});
