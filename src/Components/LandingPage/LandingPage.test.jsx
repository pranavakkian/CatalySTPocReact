import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LandingPage from './index';

describe('LandingPage', () => {
  const mockStore = configureMockStore();

  test('Component rendered successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    const { container } = render(<Provider store={store}><LandingPage /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Submit Button Working Properly', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    render(<Provider store={store}><LandingPage /></Provider>);
    userEvent.click(screen.getByRole('button', { name: 'Sign-out' }));
    const expectedAction = [
      { payload: false, type: 'IS_LOGGED_IN' },
      { payload: null, type: 'SET_USER_NAME' },
    ];
    expect(store.getActions()).toStrictEqual(expectedAction);
  });
});
