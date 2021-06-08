import React, { Component } from 'react'

const fruits = [
    {
        name: 'red apple',
        category: 'apple'
    },
    {
        name: 'lemon',
        category: 'citrus'
    },
    {
        name: 'green apple',
        category: 'apple'
    },
    {
        name: 'orange',
        category: 'citrus'
    },
    {
        name: 'yellow apple',
        category: 'apple'
    },
    {
        name: 'banana',
        category: 'banana'
    },
    {
        name: 'plantain',
        category: 'banana'
    },
]
export default class Counter extends Component {
    state = {
    }

    handleFruitChange = (e) => {
        this.setState({ fruit: e.target.value })
    }


    render() {
        // cool zone -- this is a nice place to do work.
        return (
            <div>
                <label>
                    <select onChange={this.handleFruitChange}>
                        <option value="apple">Apple</option>
                        <option value="citrus">Citrus</option>
                        <option value="banana">Banana</option>
                    </select>
                </label>
                {
                    fruits.map(fruit => <p>{fruit.name} is a {fruit.category}</p>)
                }
            </div>
        )
    }
}
