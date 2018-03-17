import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      term: '',
    };
  }

  onInputChange(event) {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchTermChange: () => {},
};

export default SearchBar;
