import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import DisplayOne from './DisplayOne';
import DisplayTwo from './DisplayTwo';
import DisplayThree from './DisplayThree';


class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [
                {
                    name: 'Jcole - Love Yours',
                    id: 0,
                },
                {
                    name: 'Kendirick Lamar - DNA',
                    id: 1,
                },
                {
                    name: 'Ryth B - Lost boy ',
                    id: 2,
                },
            ],
            index: 0,
        };
    }

    handleNext() {
        const { index, favorites } = this.state;
        const nextIndex = (index + 1) % favorites.length;
        this.setState({
            index: nextIndex,
        });
    }

    render() {
        const { index } = this.state;

        const favorites = [
            <DisplayOne onNext={() => {this.handleNext()}} />,
            <DisplayTwo onNext={() => {this.handleNext()}} />,
            <DisplayThree onNext={() => {this.handleNext()}} />,
        ];

        return (
            <div className="display-base">
                {/* <Button
                    onClick={ () => { this.handleNext(); } }
                >
                    Next
                </Button> */}
                <TransitionGroup className="favorite-list">
                    <CSSTransition
                        timeout={ 500 }
                        classNames="transition-right"
                        key={ index }
                    >
                        {favorites[index]}
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default Display;
