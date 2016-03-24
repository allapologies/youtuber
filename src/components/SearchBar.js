'use strict';
import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  static propTypes = {

  };

  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }

  onInputChange( event ) {
    console.log( event.target.value )
  };
}

export default SearchBar;