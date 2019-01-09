import React, { Component } from 'react';
import SearchBar from './search_bar';
import youtube from '../api/'

class App extends Component {

    onTetmSubmit = (term) => {
        console.log(term)
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTetmSubmit} />
            </div>
        )
    }
}
export default App;