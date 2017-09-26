import React from 'react';

/**
 * Provides stateless functional component with pagination element
 *
 * @module InputText
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with pagination element
 */
const Pagination = (props) => {
    const items = [];

    for (let i = 0; i < props.pagesNumber; i++) {
        items.push(
            <li className="page-item" key={i.toString()}>
                <a className="page-link">{ i + 1 }</a>
            </li>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link">Previous</a>
                            </li>
                            { items }
                            <li className="page-item">
                                <a className="page-link">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;