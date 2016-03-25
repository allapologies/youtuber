'use strict';
import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term:''
    };
  };


  static propTypes = {

  };

  render() {
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={this.onInputChange.bind(this)} />
      </div>
    );
  }

  onInputChange( event ) {
    this.setState({term : event.target.value})
  };
}

export default SearchBar;