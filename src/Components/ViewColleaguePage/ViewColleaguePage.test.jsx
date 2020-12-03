import { render } from '@testing-library/react';
import ViewColleague from './index';

describe('ViewColleaguePage', () => {
  test('Rendered View Colleague Page Successfully', () => {
    const { container } = render(<ViewColleague />);
    expect(container).toMatchSnapshot();
  });
});
