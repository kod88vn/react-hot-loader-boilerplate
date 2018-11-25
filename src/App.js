import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Playground from './pages/Playground';
import Github from './pages/Github';


const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/playground"> | Playground</Link>
            <Link to="/github"> | Github Explorer</Link>
        </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/playground" component={Playground} />
            <Route exact path="/github" component={Github} />
        </main>
        
    </div>  
)

export default App