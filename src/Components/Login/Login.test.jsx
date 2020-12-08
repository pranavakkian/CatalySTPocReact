import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import Login from './index';

describe('Login', () => {
  const mockStore = configureMockStore();
  test('Component rendered successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    const { container } = render(<Provider store={store}><Login /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Login Failed', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    render(<Provider store={store}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'admin');
    userEvent.type(screen.getByPlaceholderText('Password'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Invalid Credentials.')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'OK' }));
    expect(store.getActions()).toStrictEqual([]);
  });
  test('Login Successful for User-Admin', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    render(<Provider store={store}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'admin');
    userEvent.type(screen.getByPlaceholderText('Password'), 'admin123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const expectedAction = [
      { payload: true, type: 'IS_LOGGED_IN' },
      { payload: 'admin', type: 'SET_USER_NAME' },
    ];
    expect(store.getActions()).toStrictEqual(expectedAction);
  });
  test('Login Successful for User-Abc', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    render(<Provider store={store}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getByPlaceholderText('Password'), 'abc123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const expectedAction = [
      { payload: true, type: 'IS_LOGGED_IN' },
      { payload: 'abc', type: 'SET_USER_NAME' },
    ];
    expect(store.getActions()).toStrictEqual(expectedAction);
  });
});
