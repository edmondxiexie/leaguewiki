import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App';

// import 'antd/dist/antd.css';
import './style/index.scss';
import 'react-toastify/dist/ReactToastify.css';

console.log('NODE_ENV', process.env.NODE_ENV);


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app'),
);
