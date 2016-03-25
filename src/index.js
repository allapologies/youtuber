import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyA-Fcdl_x7Rp1ez384VQkuuaSIUUXtYVqQ';

class App extends Component {
   constructor(props) {
     super(props);

     this.state = {
       videos: [],
       selectedVideo: null
     };

     YTSearch({key: API_KEY, term: 'tiny house'}, ( videos )=>{
       this.setState({
         videos : videos,
         selectedVideo: videos[0]
       } );
     });
   };

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );