import React, { Component } from 'react'
import FilterDropdown from './FilterDropdown'
import TasteDropdown from './TasteDropdown';
import Dropdown from './Dropdown';
// this file is doing a tooon of work
// Single Resonsibility Principle

const fruits = [
    {
        name: 'red apple',
        category: 'apple',
        taste: 'sweet'
    },
    {
        name: 'lemon',
        category: 'citrus',
        taste: 'tart'
    },
    {
        name: 'green apple',
        category: 'apple',
        taste: 'tart'
    },
    {
        name: 'orange',
        category: 'citrus',
        taste: 'sweet'
    },
    {
        name: 'yellow apple',
        category: 'apple',
        taste: 'sweet'
    },
    {
        name: 'banana',
        category: 'banana',
        taste: 'sweet'
    },
    {
        name: 'plantain',
        category: 'banana',
        taste: 'other'
    },
]
export default class Counter extends Component {
    state = {
        filterCategory: '',
        filterTaste: '',
    }

    handleFruitChange = (e) => {
        // e.target.value is the VALUE of whatever we clicked on
        this.setState({ filterCategory: e.target.value })
    }

    handleTasteChange = e => {
        this.setState({ filterTaste: e.target.value })
    }


    render() {
        // cool zone -- this is a nice place to do work.
        // this.state.fruit can be one of three things: apple, citrus, banana
        let filteredFruits = fruits;

        if (this.state.filterCategory) {
             filteredFruits = filteredFruits.filter(fruit => fruit.category === this.state.filterCategory)
        }

        if (this.state.filterTaste) {
            filteredFruits = filteredFruits.filter(fruit => fruit.taste === this.state.filterTaste)
       }
       
       // get a list of all category strings
       const categoriesWithDuplicates = fruits.map(fruit => fruit.category);
       console.log(categoriesWithDuplicates)
       // dedupe them by using the Set in js
       const setOfCategories = new Set(categoriesWithDuplicates);
       console.log(setOfCategories);
       // turn the Set back into an Array so we can map over it
       const categoryOptions = Array.from(setOfCategories)
       console.log(categoryOptions)
    
       const tasteOptions = Array.from(new Set(fruits.map(fruit => fruit.taste)));

        return (
            <div>
                {/* <Dropdown 
                    options={['apple', 'banana', 'citrus']}
                    handleChange={this.handleFruitChange} />
                <Dropdown
                    options={['sweet', 'tart', 'other']}
                    handleChange={this.handleTasteChange} /> */}
                <Dropdown 
                    options={categoryOptions}
                    handleChange={this.handleFruitChange} />
                <Dropdown
                    options={tasteOptions}
                    handleChange={this.handleTasteChange}
                />
                {/* listing our fruit */}
                {
                    filteredFruits.map(fruit => <p>{fruit.name} is a {fruit.taste} {fruit.category} fruit</p>)
                }
            </div>
        )
    }
}
