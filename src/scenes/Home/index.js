import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            currentPage: 1,
            imageBaseUrl: '',
            backDropSize: ''
        };
    }

    /**
     * Method for finding movies after change in text input from SearchJumbo component.
     * Method getting text, updating state and running fetch ajax query to get movies from MovieDB.
     * Search text is set for component and app state.
     *
     * @method findByText
     * @param {String} text String from search text input
     * @param {Integer} page Int with page number to get
     */
    findByText = (text, page) => {
        this.setState({text});
        this.context.appState({text});

        findMovies(text, page)
            .then((json) => {
                this.setState({
                    pagesNumber: json.total_pages,
                    results: json.results
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    changePage = (direction) => {
        let currentPage = this.state.currentPage;
        let pagesNumber = this.state.pagesNumber;

        if (direction === 'prev') {
            currentPage = currentPage > 1 ? currentPage - 1 : currentPage;
        } else if (direction === 'next') {
            currentPage = currentPage < pagesNumber ? currentPage + 1 : currentPage;
        } else {
            console.log('wrong direction value');
        }

        this.setState({currentPage});
        this.context.appState({currentPage});

        this.findByText(this.state.text, currentPage);
    }

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

        const search = this.props.location.search;
        const params = new URLSearchParams(search);

        if (params.get('back') && this.context.appState('text')) {
            this.findByText(this.context.appState('text'));
        }
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
                <SearchJumbo inputChangeText={ this.findByText } />
                <MoviesList results={ this.state.results }
                            imageBaseUrl={ this.state.imageBaseUrl }
                            backDropSize={ this.state.backDropSize } />
                <Pagination pagesNumber={ this.state.pagesNumber }
                            currentPage={ this.state.currentPage }
                            changePage={ this.changePage } />
            </div>
        );
    }
}

Home.contextTypes = {
    appState: PropTypes.func
};

export default Home;
