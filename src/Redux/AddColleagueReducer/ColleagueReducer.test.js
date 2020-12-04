import initialState from './InitialState';
import { SET_COLLEAGUE_DATA } from '../Types';
import ColleagueReducer from './index';

describe('Colleague Data Reducer', () => {
  test('Setting 1 Colleague Data', () => {
    expect(ColleagueReducer(undefined, {
      type: SET_COLLEAGUE_DATA,
      payload: {
        name: 'xyz',
        jobTitle: 'Engineer',
        contact: '987654321',
      },
    }))
      .toStrictEqual({
        data: [{
          name: 'xyz',
          jobTitle: 'Engineer',
          contact: '987654321',
        }],
      });
    expect(ColleagueReducer(undefined, {
      type: SET_COLLEAGUE_DATA,
      payload: {
        name: 'ABC',
        jobTitle: 'Cloud Engineer',
        contact: '123456789',
      },
    }))
      .toStrictEqual({
        data: [{
          name: 'ABC',
          jobTitle: 'Cloud Engineer',
          contact: '123456789',
        }],
      });
  });
  test('Default', () => {
    expect(ColleagueReducer(undefined, []))
      .toStrictEqual({ ...initialState });
  });
});
