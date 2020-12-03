import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import Login from './index';
import Store from '../../Store';

describe('Login', () => {
  const MockStore = configureMockStore();
  const store = Store;
  test('Component rendered successfully', () => {
    const mockstore = MockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    const { container } = render(<Provider store={mockstore}><Login /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Login Failed', () => {
    // userEvent.type(screen.getAllByRole('textbox')[0], '');
    // userEvent.type(screen.getAllByRole('textbox')[1], '');
    render(<Provider store={store}><Login /></Provider>);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Invalid Credentials.')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'OK' }));
    const { UserInfoReducer } = store.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: false, userName: null });
  });
  test('Login Successful', () => {
    render(<Provider store={store}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'admin');
    userEvent.type(screen.getAllByRole('textbox')[1], 'admin123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const { UserInfoReducer } = store.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: true, userName: 'admin' });
  });
  test('Login Successful', () => {
    render(<Provider store={store}><Login /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getAllByRole('textbox')[1], 'abc123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const { UserInfoReducer } = store.getState();
    expect(UserInfoReducer).toStrictEqual({ isLoggedIn: true, userName: 'abc' });
  });
});
