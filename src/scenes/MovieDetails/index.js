import React, { Component } from 'react';

/**
 * MovieDetails component - movie detail page. This component provides basic view with movie details.
 *
 * @class MovieDetails
 * @constructor
 * @extends Component
 */
class MovieDetails extends Component {

    constructor() {
        super();
        this.state = {
            movieId: null
        };
    }

    componentWillMount() {
        this.setState({
            movieId: this.props.match.params.id
        });
    }

    /**
     * Returns JSX object with page description
     *
     * @method render
     * @return {Object} page description in JSX syntax
     */
    render() {
        return (
            <p>Movie id: { this.state.movieId }</p>
        );
    }
}

export default MovieDetails;
