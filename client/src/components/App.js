import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NotificationsSystem, { notify } from 'reapop';
import theme from 'reapop-theme-wybo';
import axios from 'axios';

import { connect } from 'react-redux';

import { logoutUtil } from '../utils/authUtil';
import Login from './login/Login';
import Navbar from './Navbar';


class App extends Component {
    constructor(props) {
        super(props);
        // 4. don't forget to bind method
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        const { notify } = this.props;
        // 3. we use `notify` to create a notification
        notify({
            title: 'Welcome',
            message: 'you clicked on the button',
            status: 'success',
            dismissible: true,
            dismissAfter: 3000,
        });
    }

    render() {
        return (
            <div>
                Hello worldie
                <button onClick={this._onClick}>Add a notification</button>
                <NotificationsSystem theme={ theme } />
            </div>
        );
    }
}

// 2. we map dispatch to props `notify` async action creator
//    here we use a shortcut instead of passing a `mapDispathToProps` function
export default connect(null, { notify })(App);
