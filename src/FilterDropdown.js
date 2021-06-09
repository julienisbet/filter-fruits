import React, { Component } from 'react'

/* 
1) create component just for the dropdown
2) pass that setState handler down from the parent
3) call that setState handler as a prop here in the child
*/

export default class FilterDropdown extends Component {
    render() {
        return (
            <label>
                <select onChange={this.props.handleChange}>
                    <option value="">All Fruits</option>
                    <option value="apple">Apple</option>
                    <option value="citrus">Citrus</option>
                    <option value="banana">Banana</option>
                </select>
            </label>
        )
    }
}
