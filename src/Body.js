import React, { Component } from 'react'
import Fruits from './Fruits.js';

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.title}</h2>
                    {/* <Counter /> */}
                    <Fruits />
                </section>
            </main>
        )
    }
}
