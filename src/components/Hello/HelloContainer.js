import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WhatName from './WhatName';
import Hello from './Hello';


class HelloContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'World' };
    }

    static propTypes = {
        name: PropTypes.string
    };

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        const { name } = this.state;
        return (
            <React.Fragment>
                <WhatName onNameChanged={() => this.handleChange(event)}></WhatName>
                <Hello name={name}></Hello>
            </React.Fragment>
        )
    }
}

export default HelloContainer