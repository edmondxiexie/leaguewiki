import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DisplayOne extends Component {
    render() {
        return (
            <div className="favorite">
                <li>
                    Jcole - Love Yours
                </li>
                <Button 
                    onClick={ () => {this.props.onNext()} }
                >
                    Next
                </Button>
            </div>

        );
    }
}

export default DisplayOne;
