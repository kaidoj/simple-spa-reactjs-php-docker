import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Items from '../Items';

test('<Items> does render without crash', () => {
  render(
    <Provider store={store}>
      <Items />
    </Provider>
  );
});
