import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import fetchVideos from './actions/fetch-videos';

import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';

import { API_ROOT_URL, API_KEY, DEFAULT_SEARCH } from './constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.handleVideoSelect = this.handleVideoSelect.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.videoSearch = debounce(this.videoSearch.bind(this), 300);
    this.videoSearch(DEFAULT_SEARCH);
  }

  videoSearch(term) {
    return fetchVideos(API_ROOT_URL, API_KEY, term)
      .then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
  }

  handleVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  handleSearchTermChange(term) {
    this.videoSearch(term);
  }

  render() {
    return (
      <div className='container'>
        <SearchBar onSearchTermChange={this.handleSearchTermChange} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.handleVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
