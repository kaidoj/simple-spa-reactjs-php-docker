import React from 'react';
import { render } from '@testing-library/react';
import Tag from '../Tag';

test('<Item> does return item title', () => {
  const { getByText } = render(<Tag item={'test'} selected={true} onChange={jest.fn()} />);
  const title = getByText(/test/i).textContent;
  expect(title).toMatch('test');
});
