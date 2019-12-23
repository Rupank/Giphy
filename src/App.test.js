import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/createStore';

test('renders App Component', () => {

  const { asFragment } = render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>);
  expect(asFragment()).toMatchSnapshot();
});
