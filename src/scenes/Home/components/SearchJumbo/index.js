import React from 'react';
import InputText from '../../../../components/InputText/index';

/**
 * Provides stateless functional component for rendering jumbotron with search input.
 * Component only provides view. Passing information about text inside input using inputChangeText function.
 *
 * @module SearchJumbo
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with search layout
 */
const SearchJumbo = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <form onSubmit={ (event) => event.preventDefault() }>
                    <div className="form-group">
                        <InputText id="search-input"
                                   placeholder="Search for movie..."
                                   value={ props.inputValue }
                                   onInputChange={ props.inputChangeText }/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchJumbo;