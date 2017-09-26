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
            text: '',
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
     * Method for handling change in text input from SearchJumbo component.
     * Method getting text and updating state.
     *
     * @method inputChangeText
     * @param {String} text String from search text input
     */
        inputChangeText = (text) => {
        this.setState({text});
        console.log(this.state);
    };

    /**
     * Returns JSX object with page desription
     *
     * @method render
     * @return {Object} page description in JSX syntax
     */
    render() {
        return (
            <div>
                <SearchJumbo inputChangeText={ this.inputChangeText }/>
                <MoviesList results={ this.state.results } />
                <Pagination pagesNumber={ this.state.pagesNumber }/>
            </div>
        );
    }
}

export default Home;
