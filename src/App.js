import React from 'react'
import { NICE, SUPER_NICE } from './colors'
import Counter from './Counter' 

const App = () => (
    <React.Fragment>
        <Counter increment={1} color={NICE} />
        <Counter increment={3} color={SUPER_NICE} />
    </React.Fragment> 
)

export default App