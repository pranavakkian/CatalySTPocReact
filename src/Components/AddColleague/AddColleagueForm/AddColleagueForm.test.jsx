import {
  render,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import AddColleagueForm from './index';

describe('AddColleagueForm', () => {
  const mockStore = configureMockStore();
  test('Component rendered successfully', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    const { container } = render(<Provider store={store}><AddColleagueForm /></Provider>);
    expect(container).toMatchSnapshot();
  });
  test('handles username change correctly', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    render(<Provider store={store}><AddColleagueForm /></Provider>);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[0], 'test');
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('test');
  });

  test('handles contact change correctly', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    render(<Provider store={store}><AddColleagueForm /></Provider>);
    expect(screen.getByPlaceholderText('Contact')).toHaveValue(null);
    userEvent.type(screen.getByPlaceholderText('Contact'), '9976635127');
    expect(screen.getByPlaceholderText('Contact')).toHaveValue(9976635127);
  });

  test('handles Dropdown change correctly', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    render(<Provider store={store}><AddColleagueForm /></Provider>);
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    expect(screen.getByRole('listbox')).toHaveTextContent('Team Member');
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.getByRole('listbox')).toHaveTextContent('Developer');
  });

  test('handles submit button', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    render(<Provider store={store}><AddColleagueForm /></Provider>);
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getByPlaceholderText('Contact'), '1234567899');
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    const expectedAction = [
      {
        payload: {
          contact: '1234567899',
          jobTitle: 'Team Member',
          name: 'abc',
        },
        type: 'SET_COLLEAGUE_DATA',
      },

    ];
    expect(store.getActions()).toStrictEqual(expectedAction);
  });
  test('Data Submitted Successfull', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    const expectedAction = [
      {
        payload: {
          contact: '1234567899',
          jobTitle: 'Team Member',
          name: 'abc',
        },
        type: 'SET_COLLEAGUE_DATA',
      },

    ];
    const history = createMemoryHistory();
    render(
      <Router history={history}><Provider store={store}><AddColleagueForm /></Provider></Router>,
    );
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getByPlaceholderText('Contact'), '1234567899');
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Submitted Successfully')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'OK' }));
    expect(store.getActions()).toStrictEqual(expectedAction);
    expect(history.location.pathname).toBe('/');
  });
  test('Data submmitted unsuccessfull', () => {
    const store = mockStore(() => ({
      ColleagueReducer: {
        data: [],
      },
    }));
    const history = createMemoryHistory();
    render(
      <Router history={history}><Provider store={store}><AddColleagueForm /></Provider></Router>,
    );
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(store.getActions()).toStrictEqual([]);
  });
});
