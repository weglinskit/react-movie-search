import React from 'react';
import InputText from '../../../../components/InputText/index'

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