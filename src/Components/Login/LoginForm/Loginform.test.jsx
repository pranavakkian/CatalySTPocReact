import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '.';

describe('LoginForm', () => {
  test('Component rendered successfully', () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
  test('handles username change correctly', () => {
    render(<LoginForm />);
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[0], 'abc123');
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('abc123');
  });
  test('handles password change correctly', () => {
    render(<LoginForm />);
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('');
    userEvent.type(screen.getAllByRole('textbox')[1], 'abc123');
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('abc123');
  });
});
