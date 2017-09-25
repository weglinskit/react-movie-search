import React from 'react';

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