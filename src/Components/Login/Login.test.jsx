import { render, screen } from '@testing-library/react';
import Login from './index';

describe('Login', () => {
  test('Component rendered successfully', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
