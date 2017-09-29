import React from 'react';

/**
 * Provides stateless functional component with pagination element
 *
 * @module InputText
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with pagination element
 */
const Pagination = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={ () => { props.changePage('prev') } }>Previous</button>
                        <button type="button" className="btn btn-secondary" disabled>
                            { props.currentPage } / { props.pagesNumber }
                        </button>
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={ () => props.changePage('next') }>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;