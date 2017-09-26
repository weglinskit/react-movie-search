import React from 'react';
import InputText from '../../../../components/InputText/index';

/**
 * Provides stateless functional component for rendering jumbotron with search input
 *
 * @module SearchJumbo
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with search layout
 */
const SearchJumbo = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <form>
                    <div className="form-group">
                        <InputText id="search-input" placeholder="Search for movie..." />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchJumbo;