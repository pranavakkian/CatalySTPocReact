import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ViewColleague from './index';

describe('ViewColleaguePage', () => {
  const mockStore = configureMockStore();
  test('Rendered ViewColleaguePageSuccessfully', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [
          {
            name: 'Abc',
            jobTitle: 'Engineer',
            contact: '12345',
          },
        ],
      },
    }));
    const { container } = render(<Provider store={store}><ViewColleague /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('Checking for no data in store', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    render(<Provider store={store}><ViewColleague /></Provider>);
    expect(screen.getByText('Data Not Available')).toBeInTheDocument();
  });
});
