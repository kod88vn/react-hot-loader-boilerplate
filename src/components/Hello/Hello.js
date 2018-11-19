import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (<h4>Hello {name}</h4>)

Hello.propTypes = {
    name: PropTypes.string.isRequired
};


export default Hello;