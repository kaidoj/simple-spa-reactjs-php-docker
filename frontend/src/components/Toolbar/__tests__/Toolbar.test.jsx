import React from 'react';
import { render } from '@testing-library/react';
import Toolbar from '../Toolbar';

test('<Toolbar> does render without crash', () => {
  render(<Toolbar />);
});
