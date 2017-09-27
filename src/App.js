import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './scenes/Home/index';

/**
 * App component. Main component with routing description.
 *
 * @class App
 * @extends Component
 */
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">movie-search</a>
                    </nav>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;