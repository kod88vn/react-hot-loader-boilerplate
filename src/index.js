import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Importing before our global styles to insure we are always able to override.
import 'react-virtualized/styles.css';
ReactDOM.render(<App />, document.getElementById('root'));
