import React, { Component } from 'react';
import SearchBar from './search_bar';
import youtube from '../api/'
import VideoList from './video_list';

class App extends Component {

    state = { videos: [] };


    onTetmSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTetmSubmit} />
                <VideoList videos={this.state.videos}/>
                
            </div>
        )
    }
}
export default App;