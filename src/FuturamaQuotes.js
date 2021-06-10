import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))
export default class FuturamaQuotes extends Component {
    state = { 
        quotes: [],
        loading: false,
        query: '',
     }

    // this is a special function that gets called the moment the component mounts for the first time.
    componentDidMount = async () => {
        await this.fetchData();
    }

    handleClick = async () => {
        await this.fetchData();
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    fetchData = async () => {
        // just before we make our request, we are in a "loading" state
        this.setState({ loading: true });
        // then, whenever i fetch, i use this.state.query (again, comes from the user input) to make a search

        // if the user has entered a query, insert that query into the URL
        const URL = this.state.query
            ? `http://futuramaapi.herokuapp.com/api/quotes?search=${this.state.query}`
            : 'http://futuramaapi.herokuapp.com/api/quotes';

            const data = await request.get(URL)
            await sleep(3000)
            // now that the request is finished, we are no longer in a "loading" state
            this.setState({ loading: false });
            this.setState({ quotes: data.body });

    }

    render() {
        return (
            <div className="center">
                {/* whenever i type, i change the state of this.state.query */}
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Fetch!</button>
                {this.state.loading 
                    ? <Spinner />
                    : this.state.quotes.map(quote => 
                    <p>
                        <img width="30" src={quote.image} alt={quote.character} />
                        {quote.character}  
                        says:   
                        <em> "{quote.quote}"</em>
                    </p>
                )}
            </div>
        )
    }
}
