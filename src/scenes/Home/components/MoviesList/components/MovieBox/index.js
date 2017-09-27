import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Provides stateless functional component for rendering particular movie box
 *
 * @module MovieBox
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with short movie description layout
 */
const MovieBox = (props) => {

    /**
     * Abstraction for too long text description.
     *
     * @method textAbstract
     * @return {String} Abstracted text string
     */
    function textAbstract(text) {
        text = text.substring(0, 300);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "...";
    }

    const abstractedDescription = props.movie.overview.length > 300 ?
        textAbstract(props.movie.overview) :
        props.movie.overview;

    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top"
                     src={
                        props.movie.backdrop_path ?
                            `${ props.imageBaseUrl }/${ props.backDropSize }/${ props.movie.backdrop_path }` :
                            'http://via.placeholder.com/300x169'
                     }
                     alt="Card cap" />
                <div className="card-body">
                    <h4 className="card-title">{ props.movie.title }</h4>
                    <p className="card-text">
                        { abstractedDescription }
                    </p>
                    <Link to={ `/movie/${ props.movie.id }` } className="btn btn-primary"> Details </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieBox;