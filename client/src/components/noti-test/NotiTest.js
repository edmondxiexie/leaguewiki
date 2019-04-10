import React, { Component } from 'react';
import { Button } from 'antd';


class NotiTest extends Component {
    sendNotification() {
        const { notify } = this.props;
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
                <Button
                    className="button-test"
                    type="danger"
                    onClick={ () => this.sendNotification() }
                >
                    Submit
                </Button>
            </div>
        );
    }
}

export default NotiTest;
