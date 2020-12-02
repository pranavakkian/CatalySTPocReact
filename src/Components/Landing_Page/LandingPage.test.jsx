import { render } from '@testing-library/react';
import LandingPage from './index';

describe('LandingPage', () => {
  test('Component rendered successfully', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
  });
});
