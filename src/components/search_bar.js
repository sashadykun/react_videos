import React, { Component } from 'react';


class SearchBar extends Component {

    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }


    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }


    render(){
        return(
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label></label>
                        <input placeholder="Search Video" onChange={this.onInputChange} value={this.state.term} type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;