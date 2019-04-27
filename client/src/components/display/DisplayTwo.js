import React, { Component } from 'react';
import { Button } from 'reactstrap';

class DisplayTwo extends Component {
    render() {
        return (
            <div className="favorite">
                <li>
                    Kendirick Lamar - DNA
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

export default DisplayTwo;
