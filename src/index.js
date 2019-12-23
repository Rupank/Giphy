import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/createStore';

// Adding Store and the Browser Router to App Component for page navigation
const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
ReactDOM.render(app, document.getElementById('root'));

