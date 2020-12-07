import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '.';

describe('LoginForm', () => {
  const mock = jest.fn();
  test('Component rendered successfully', () => {
    const { container } = render(<LoginForm handleLoginForm={mock} />);
    expect(container).toMatchSnapshot();
  });
  test('handles username change correctly', () => {
    render(<LoginForm handleLoginForm={mock} />);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc123');
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('abc123');
  });
  test('handles password change correctly', () => {
    render(<LoginForm handleLoginForm={mock} />);
    expect(screen.getByPlaceholderText('Password')).toHaveValue('');
    userEvent.type(screen.getByPlaceholderText('Password'), 'abc123');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('abc123');
  });
  test('Submit Button Working Properly', () => {
    render(<LoginForm handleLoginForm={mock} />);
    userEvent.type(screen.getAllByRole('textbox')[0], 'admin');
    userEvent.type(screen.getByPlaceholderText('Password'), 'admin');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(mock).toHaveBeenNthCalledWith(1, 'admin', 'admin');
  });
  test('Submit Button Working Properly', () => {
    render(<LoginForm handleLoginForm={mock} />);
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc');
    userEvent.type(screen.getByPlaceholderText('Password'), 'abc123');
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(mock).toHaveBeenNthCalledWith(1, 'abc', 'abc123');
  });
});
