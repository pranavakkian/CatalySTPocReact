import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
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
  test('Sign-out Button Working Properly', () => {
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

  test('AddColleague Button Working Properly', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    const history = createMemoryHistory();
    render(<Router history={history}><Provider store={store}><LandingPage /></Provider></Router>);
    expect(history.location.pathname).toBe('/');
    userEvent.click(screen.getByRole('button', { name: 'Add Colleague' }));
    expect(history.location.pathname).toBe('/addcolleague');
  });

  test('ViewColleague Button Working Properly', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    const history = createMemoryHistory();
    render(<Router history={history}><Provider store={store}><LandingPage /></Provider></Router>);
    expect(history.location.pathname).toBe('/');
    userEvent.click(screen.getByRole('button', { name: 'View Colleague' }));
    expect(history.location.pathname).toBe('/viewcolleague');
  });
});
