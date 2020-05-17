import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

test('<Header> does have h1 text', () => {
  const { getByText } = render(<Header />);
  const title = getByText(/SDKs/i).textContent;
  expect(title).toMatch('SDKs');
});
