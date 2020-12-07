import {
  render,
  cleanup,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddColleagueForm from './index';

afterEach(cleanup);

const { default: userEvent } = require('@testing-library/user-event');

describe('AddColleagueForm', () => {
  test('Component rendered successfully', () => {
    const { container } = render(<AddColleagueForm />);
    expect(container).toMatchSnapshot();
  });
  test('handles username change correctly', () => {
    render(<AddColleagueForm />);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[0], 'test');
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('test');
  });

  test('handles contact change correctly', () => {
    render(<AddColleagueForm />);
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[1], '123');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('123');
  });

  test('handles Dropdown change correctly', () => {
    render(<AddColleagueForm />);
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    expect(screen.getByRole('listbox')).toHaveTextContent('Team Member');
    userEvent.click(screen.getByRole('listbox'));
    userEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.getByRole('listbox')).toHaveTextContent('Developer');
  });
});
