import React from 'react';
import PropTypes from 'prop-types';

const WhatName = ({ onNameChanged }) => (
    <React.Fragment>
        <h4>What is your name?</h4>
        <input onChange={onNameChanged} />
    </React.Fragment>
);

WhatName.propTypes = {
    onNameChanged: PropTypes.func.isRequired
};

export default WhatName;