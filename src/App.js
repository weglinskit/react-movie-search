import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from './scenes/Home/index';
import MovieDetails from './scenes/MovieDetails/index';

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
                    <Route exact path="/" component={ Home } />
                    <Route path="/movie/:id" component={ MovieDetails } />
                </div>
            </Router>
        );
    }
}

export default App;