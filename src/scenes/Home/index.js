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
            results: [],
            pagesNumber: 0
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

        const api_key = 'e51c38413ab9317db1cd3e69902d68f1';
        const base_url = 'https://api.themoviedb.org/3/search/movie';

        fetch(`${base_url}?api_key=${api_key}&query=${text}`)
            .then((response) => {
                var contentType = response.headers.get("content-type");
                if(contentType && contentType.includes("application/json")) {
                    return response.json();
                }
                throw new TypeError("Oops, we haven't got JSON!");
            })
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
