import React, { Component } from 'react'

/* 
1) create component just for the dropdown
2) pass that setState handler down from the parent
3) call that setState handler as a prop here in the child
*/

export default class TasteDropdown extends Component {
    render() {
        return (
            <label>
                <select onChange={this.props.handleChange}>
                    <option value="">All Tastes</option>
                    <option value="sweet">Sweet</option>
                    <option value="tart">Tart</option>
                    <option value="other">Other</option>
                </select>
            </label>
        )
    }
}
