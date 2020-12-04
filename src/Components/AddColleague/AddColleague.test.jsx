import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AddColleaguePage from './index';

describe('AddColleaguePage', () => {
  const mockStore = configureMockStore();

  test('Component rendered successfully', () => {
    const store = mockStore(() => ({
      UserInfoReducer: {
        isLoggedIn: true,
        userName: 'test',
      },
    }));
    const { container } = render(<Provider store={store}><AddColleaguePage /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
