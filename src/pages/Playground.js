import React from 'react';
import Counter from '../components/_shared/Counter';
import { NICE, SUPER_NICE } from '../components/_shared/Colors';

const Playground = () => (
    <React.Fragment>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
    </React.Fragment>
);

export default Playground;