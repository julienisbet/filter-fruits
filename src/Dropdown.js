import React, { Component } from 'react'

/* 
1) create component just for the dropdown
2) pass that setState handler down from the parent
3) call that setState handler as a prop here in the child
*/

// abstracted dropdown
// presentational or container? no state, just props, therefore: presentational
export default class Dropdown extends Component {
    render() {
        return (
            <label>
                {/* hopefully, the parent passed down a handleChange function. We call it here as a prop */}
                <select onChange={this.props.handleChange}>
                    <option value="">All</option>
                    {/* hopefully, the parent passed down an array of options as string. We map over them here to create a list of option elements */}
                    {this.props.options
                        .map(optionString => 
                            <option value={optionString}>{optionString}</option>
                    )}
                </select>
            </label>
        )
    }
}
