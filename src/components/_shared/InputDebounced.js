import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import Input from './Input';

let _value, _onChange, _debounceTime;

const debounceChange = debounce(() => {
    _onChange(_value);
}, _debounceTime || 500);

const handleChange = (val) => {
    _value = val;
    debounceChange();
};

const InputDebounced = ({ debounceTime, onChange, ...props }) => {
    _onChange = onChange;
    _debounceTime = debounceTime;

    return (
        <Input onChange={(val) => handleChange(val)} {...props} />
    )
};

InputDebounced.propTypes = {
    onChange: PropTypes.func,
    debounceTime: PropTypes.number
};

export default InputDebounced;