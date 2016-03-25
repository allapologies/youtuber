import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
const API_KEY = 'AIzaSyA-Fcdl_x7Rp1ez384VQkuuaSIUUXtYVqQ';

class App extends Component {
   constructor(props) {
     super(props);

     this.state = { videos: [] };

     YTSearch({key: API_KEY, term: 'tiny house'}, ( videos )=>{
       this.setState({ videos } );
     });
   };

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container') );