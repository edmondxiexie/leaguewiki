import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DisplayThree extends Component {
    render() {
        return (
            <div className="favorite">
                <li>
                    Ryth B - Lost boy
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

export default DisplayThree;
