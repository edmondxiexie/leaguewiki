import React, { Component } from 'react';

import { logoutUtil } from '../utils/authUtil';
import Login from './login/Login';
import Navbar from './Navbar';
import Notification from './notification/Notification';
import ItemsPage from './items-page/ItemsPage';

import itemsApi from '../api/items';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        itemsApi.getItems().then((res) => {
            const data = res.data.data;

            for (const itemId of Object.keys(data)) {
                console.log(data[itemId].name);
            }
        });
    }

    render() {
        return (
            <div className="app-base">
                Hello worldie
                <ItemsPage />
            </div>
        );
    }
}

// 2. we map dispatch to props `notify` async action creator
//    here we use a shortcut instead of passing a `mapDispathToProps` function
export default App;
