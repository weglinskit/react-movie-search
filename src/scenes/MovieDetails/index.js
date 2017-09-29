import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getMovieById, getConfiguration } from '../../services/movies/index';

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
            movieId: null,
            movieObject: {},
            imageBaseUrl: '',
            posterSize: ''
        };
    }

    componentWillMount() {
        this.setState({
            movieId: this.props.match.params.id
        });

        getConfiguration()
            .then((json) => {
                this.setState({
                    imageBaseUrl: json.images.base_url,
                    posterSize: json.images.poster_sizes[2]
                });
            })
            .catch((error) => {
                console.log(error);
            });

        getMovieById(this.props.match.params.id)
            .then((json) => {
                this.setState({
                    movieObject: json
                });
            })
            .catch((error) => {
                console.log(error);
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
            <div className="container">
                <nav className="breadcrumb mt-3">
                    <Link to={ '/?back=true' } className="breadcrumb-item active">
                        <span className="oi oi-arrow-circle-left mr-2"></span>
                        Back to search
                    </Link>
                </nav>
                <div className="row">
                    <div className="col-sm-12">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h1>{ this.state.movieObject.title }</h1>
                        <h3>
                            Rank
                            <span className="badge badge-pill badge-primary ml-2">
                                { this.state.movieObject.vote_average }
                            </span>
                        </h3>
                        { this.state.movieObject.overview }
                    </div>
                    <div className="col-sm-4">
                        <img className="img-fluid"
                             src={
                                this.state.movieObject.poster_path ?
                                    `${ this.state.imageBaseUrl }/${ this.state.posterSize }/${ this.state.movieObject.poster_path }` :
                                    'http://via.placeholder.com/185x278'
                             }
                             alt="Movie side" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;
