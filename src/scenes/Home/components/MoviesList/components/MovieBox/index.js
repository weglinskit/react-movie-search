import React from 'react';

/**
 * Provides stateless functional component for rendering particular movie box
 *
 * @module MovieBox
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with short movie description layout
 */
const MovieBox = (props) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{ props.movie.title }</h4>
                    <p className="card-text">
                        { props.movie.overview }
                    </p>
                    <a href={ `/movie/${ props.movie.id }` } className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default MovieBox;