import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Routes from '.';

describe('Routes', () => {
  const history = createMemoryHistory();
  const mockStore = configureMockStore();
  test('Component rendered successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Login Page working successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: false,
        userName: null,
      },
    }));
    render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Login Page')).not.toBeNull();
  });

  test('Landing Page working successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'admin',
      },
    }));
    render(
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Welcome admin')).not.toBeNull();
  });
});
