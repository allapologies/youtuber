import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

const VideoDetail = ({ video = {} }) => {
  if (isEmpty(video)) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video-detail-window" className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
};

VideoDetail.defaultProps = {
  video: {},
};

export default VideoDetail;
