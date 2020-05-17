import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Rightbar from '../Rightbar';

test('<Rightbar> does render without crash', () => {
  render(
    <Provider store={store}>
      <Rightbar />
    </Provider>
  );
});
