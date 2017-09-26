import React, { Component } from 'react';

import Pagination from '../../components/Pagination/index';

import SearchJumbo from './components/SearchJumbo/index';
import MoviesList from './components/MoviesList/index';

/**
 * Home component - main page. This component provides basic view for searching movies.
 *
 * @class Home
 * @constructor
 * @extends Component
 */
class Home extends Component {

    constructor() {
        super();
        this.state = {
            results: [
                {
                    id: 1,
                    href: '/movie/1'
                },
                {
                    id: 2,
                    href: '/movie/2'
                }
            ],
            pagesNumber: 3
        };
    }

    /**
     * Returns JSX object with page desription
     *
     * @method render
     * @return {Object} page description in JSX syntax
     */
    render() {
        return (
            <div>
                <SearchJumbo />
                <MoviesList results={ this.state.results } />
                <Pagination pagesNumber={ this.state.pagesNumber }/>
            </div>
        );
    }
}

export default Home;
