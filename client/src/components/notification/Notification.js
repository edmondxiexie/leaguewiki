import React, { Component } from 'react';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import { toast } from 'react-toastify';

/*
* NotificationSystem component gets data from Redux store.
*
*/
class Notification extends Component {
    notify() {
        toast("Wow so easy !");
    }

    render() {
        return (
            <div className="notification-base">
                <button onClick={this.notify}>Notify !</button>
            </div>
        );
    }
}

export default Notification;
