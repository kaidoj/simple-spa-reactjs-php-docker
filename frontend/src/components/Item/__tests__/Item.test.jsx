import React from 'react';
import { render } from '@testing-library/react';
import Item from '../Item';

const item = {
  title: 'test',
  id: 'test',
  tags: ['t1', 't2']
};

test('<Item> does return item title', () => {
  const { getByText } = render(<Item item={item} />);
  const title = getByText(/test/i).textContent;
  expect(title).toMatch('test');
});
