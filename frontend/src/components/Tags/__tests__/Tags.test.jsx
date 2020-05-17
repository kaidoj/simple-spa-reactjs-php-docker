import React from 'react';
import { render } from '@testing-library/react';
import Tags from '../Tags';

test('<Tags> does render without crash', () => {
  render(<Tags tags={['test']} />);
});
