import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyA-Fcdl_x7Rp1ez384VQkuuaSIUUXtYVqQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
    )
};

ReactDOM.render(<App />, document.querySelector('.container') );