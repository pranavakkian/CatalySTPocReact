import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import Login from './index';
import Store from '../../Store';

describe('Login', () => {
  const MockStore = configureMockStore();
  const mockstore = MockStore(() => ({
    UserInfoReducer: {
      isLoggedIn: true,
      userName: 'test',
    },
  }));
  const mockstore2 = MockStore(() => ({
    UserInfoReducer: {
      isLoggedIn: false,
      userName: null,
    },
  }));
  test('Component rendered successfully', () => {
    const { container } = render(<Provider store={mockstore}><Login /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Login Failed', () => {
    // userEvent.type(screen.getAllByRole('textbox')[0], '');
    // userEvent.type(screen.getAllByRole('textbox')[1], '');
    render(<Provider store={mockstore2}><Login /></Provider>);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Invalid Credentials.')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'OK' }));
    const { UserInfoReducer } = mockstore2.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: false, userName: null });
  });
  test('Login Successful', () => {
    render(<Provider store={mockstore}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'test');
    userEvent.type(screen.getAllByRole('textbox')[1], 'admin123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const { UserInfoReducer } = mockstore.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: true, userName: 'test' });
  });
  test('Login Successful', () => {
    render(<Provider store={mockstore}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getAllByRole('textbox')[1], 'abc123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const { UserInfoReducer } = mockstore.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: true, userName: 'test' });
  });
});
