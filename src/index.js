import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux/store'
import 'typeface-roboto';
import App from 'App'
import './assets/style/style.css'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);