import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Leftbar from '../Leftbar';

test('<Leftbar> does render without crash', () => {
  render(
    <Provider store={store}>
      <Leftbar />
    </Provider>
  );
});
