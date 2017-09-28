import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './scenes/Home/index';
import MovieDetails from './scenes/MovieDetails/index';

/**
 * App component. Main component with routing description.
 *
 * @class App
 * @extends Component
 */
class App extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /**
     * Global state manager by context
     *
     * @method appState
     * @param {Object | String} key key of state. If string - return value, if object - set new state.
     */
    appState = (key) => {
        if (typeof key === "string") {
            return this.state[key];
        }
        this.setState(key);
    };

    getChildContext() {
        return {
            appState: this.appState
        };
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a className="navbar-brand" href="/">movie-search</a>
                    </nav>
                    <Route exact path="/" component={ Home } />
                    <Route path="/movie/:id" component={ MovieDetails } />
                </div>
            </Router>
        );
    }
}

App.childContextTypes = {
    appState: PropTypes.func
};

export default App;