import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = _.map(videos, video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    etag: PropTypes.string,
  })),
  onVideoSelect: PropTypes.func,
};

VideoList.defaultProps = {
  videos: [],
  onVideoSelect: _.noop,
};

export default VideoList;
