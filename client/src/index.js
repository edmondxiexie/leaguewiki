import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App';

import 'antd/dist/antd.css';
import './style/index.scss';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app'),
);
