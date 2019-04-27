import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { notify } from 'reapop';
import theme from 'reapop-theme-wybo';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    ToastContainer,
    toast,
    cssTransition,
} from 'react-toastify';

import NotiTestContainer from 'Containers/noti-test/NotiTestContainer';
import { logoutUtil } from '../utils/authUtil';
import Login from './login/Login';
import Navbar from './Navbar';
import Notification from './notification/Notification';
import Display from './display/Display';


const ToastSlide = cssTransition({
    enter: 'slideIn',
    exit: 'slideOut',
    duration: 300,
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Hello world
                <Notification />
                <ToastContainer
                    className="toast-base"
                    toastClassName="toast"
                    bodyClassName="toast-body"
                    progressClassName="toast-progress"
                    transition={ ToastSlide }
                    closeButton={ false }
                    autoClose={ 50000 }
                />
                <Display />
            </div>
        );
    }
}

// 2. we map dispatch to props `notify` async action creator
//    here we use a shortcut instead of passing a `mapDispathToProps` function
export default App;
