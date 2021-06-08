import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h3>You clicked {this.state.count} times</h3>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
