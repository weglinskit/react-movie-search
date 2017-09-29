import React from 'react';
import MovieBox from './components/MovieBox/index'

/**
 * Provides stateless functional component for rendering list of found movies
 *
 * @module MoviesList
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with list of MovieBox component
 */
const MoviesList = (props) => {
    const items = props.results && Array.isArray(props.results) ?
        props.results.map(
            (item) => {
                return <MovieBox key={item.id.toString()}
                                 movie={ item }
                                 imageBaseUrl={ props.imageBaseUrl }
                                 backDropSize={ props.backDropSize } />
            }
        ) :
        <p>Props result value not occurs or is not array</p>;

    return (
        <div className="container">
            <div className="row">
                { items }
            </div>
        </div>
    );
};

export default MoviesList;