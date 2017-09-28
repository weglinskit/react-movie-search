import React, { Component } from 'react';

import Pagination from '../../components/Pagination/index';

import SearchJumbo from './components/SearchJumbo/index';
import MoviesList from './components/MoviesList/index';

import { getConfiguration, findMovies } from '../../services/movies/index';

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
            results: [],
            pagesNumber: 0,
            imageBaseUrl: '',
            backDropSize: ''
        };
    }

    /**
     * Method for handling change in text input from SearchJumbo component.
     * Method getting text, updating state and running fetch ajax query to get movies from MovieDB.
     *
     * @method inputChangeText
     * @param {String} text String from search text input
     */
    inputChangeText = (text) => {
        this.setState({text});

        findMovies(text)
            .then((json) => {
                this.setState({
                    //pagesNumber: json.total_pages,
                    results: json.results
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    componentWillMount() {
        getConfiguration()
            .then((json) => {
                this.setState({
                    imageBaseUrl: json.images.base_url,
                    backDropSize: json.images.backdrop_sizes[0]
                });
            })
            .catch((error) => {
                console.log(error);
            });
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
                <SearchJumbo inputChangeText={ this.inputChangeText } />
                <MoviesList results={ this.state.results }
                            imageBaseUrl={ this.state.imageBaseUrl }
                            backDropSize={ this.state.backDropSize } />
                <Pagination pagesNumber={ this.state.pagesNumber } />
            </div>
        );
    }
}

export default Home;
