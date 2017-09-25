import React from 'react';
import MovieBox from './components/MovieBox/index'

const ResultsList = (props) => {
    const items = props.results && Array.isArray(props.results) ?
        props.results.map(
            (item) => {
                return <MovieBox movie={ item } />
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

export default ResultsList;