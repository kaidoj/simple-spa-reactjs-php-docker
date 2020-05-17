import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput';

test('<SearchInput> does render wihout crash', () => {
  render(<SearchInput keyword={'test'} onKeyUp={jest.fn()} />);
});
