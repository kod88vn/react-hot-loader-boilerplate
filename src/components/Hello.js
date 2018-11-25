import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputDebounced from './_shared/InputDebounced';


class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'World'};
    }

    static propTypes = {
        name: PropTypes.string
    };

    handleChange(value) {
        this.setState({name: value});
    }

    render() {
        const { name } = this.state;
        return (
            <React.Fragment>
                <h4>
                    <span>What is your name? </span>
                    <InputDebounced onChange={(value) => this.handleChange(value)} placeholder="Fill your name here" />
                </h4>
                <h4>Hello {name}</h4>
            </React.Fragment>
        )
    }
}

export default Hello