import React, { Component } from 'react'

export default class NameInput extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleNameChange} />
            </div>
        )
    }
}
