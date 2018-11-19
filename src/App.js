import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Playground from './pages/Playground';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/playground"> | Playground</Link>
        </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/playground" component={Playground} />
        </main>
        
    </div>  
)

export default App