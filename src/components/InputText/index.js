import React from 'react';

/**
 * Provides stateless functional component with input text element
 *
 * @module InputText
 * @param {Object} props Props from parent component
 * @return {Object} JSX object with input text
 */
const InputText = (props) => {
    return (
        <input type="text"
               className="form-control form-control-lg"
               id={ props.id }
               placeholder={ props.placeholder }
               value={ props.value } />
    );
};

export default InputText;