import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class VideoListItem extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { video, onVideoSelect } = this.props;
    onVideoSelect(video);
  }

  render() {
    const { video } = this.props;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
      <li onClick={this.handleClick} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img alt="" className="media-object" src={imageUrl} />
          </div>

          <div className="media-body">
            <div className="media-hading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      thumbnails: PropTypes.object,
    }),
  }).isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default VideoListItem;
