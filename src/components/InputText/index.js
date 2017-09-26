import React, { Component } from 'react';

/**
 * InputText component. This component provides input text markup.
 * Component sending back information about text change inside an input using onInputChange props function.
 *
 * @class Home
 * @constructor
 * @extends Component
 */
class InputText extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }

    /**
     * Method for handling change in text input.
     * Method getting text and updating state.
     *
     * @method onInputChange
     * @param {String} term String destructed from event Object
     */
    onInputChange({target: { value: term }}) {
        this.setState({term});

        if (typeof this.props.onInputChange === "function") {
            this.props.onInputChange(term);
        }
    }

    /**
     * Returns JSX object with page desription
     *
     * @method render
     * @return {Object} page description in JSX syntax
     */
    render() {
        return (
            <input type="text"
                   className="form-control form-control-lg"
                   id={ this.props.id }
                   placeholder={ this.props.placeholder }
                   value={ this.props.value }
                   onChange={ event => this.onInputChange(event) }/>
        );
    }
}

export default InputText;
