import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ onChange, ...props }) => (
    <input
        onChange={(event) => onChange(event.target.value)}
        {...props} />
);

Input.propTypes = {
    onChange: PropTypes.func
};

export default Input;