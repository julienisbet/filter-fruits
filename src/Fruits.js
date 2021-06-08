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
        filterCategory: ''
    }

    handleFruitChange = (e) => {
        // e.target.value is the VALUE of whatever we clicked on
        this.setState({ filterCategory: e.target.value })
    }

    render() {
        // cool zone -- this is a nice place to do work.
        // this.state.fruit can be one of three things: apple, citrus, banana
        let filteredFruits = fruits;

        if (this.state.filterCategory) {
             filteredFruits = fruits.filter(fruit => fruit.category === this.state.filterCategory)
        }
        
        return (
            <div>
                <label>
                    <select onChange={this.handleFruitChange}>
                       <option value="">All Fruits</option>
                        <option value="apple">Apple</option>
                        <option value="citrus">Citrus</option>
                        <option value="banana">Banana</option>
                    </select>
                </label>
                {
                    filteredFruits.map(fruit => <p>{fruit.name} is a {fruit.category}</p>)
                }
            </div>
        )
    }
}
