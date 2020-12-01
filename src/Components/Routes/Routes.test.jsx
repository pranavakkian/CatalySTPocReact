import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from '.';

describe('Routes', () => {
  const history = createMemoryHistory();
  test('Component rendered successfully', () => {
    const { container } = render(
      <Router history={history}>
        <Routes />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
