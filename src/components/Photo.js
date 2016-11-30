import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  photoId: PropTypes.any,
  nextPhoto: PropTypes.object,
  prevPhoto: PropTypes.object,
};

const Photo = ({ photoId, nextPhoto, prevPhoto }) => {
  const hasPrev = prevPhoto || false;
  const hasNext = nextPhoto || false;

  const prevButton = hasPrev ? (
    <Link className="prev-button" to={`/photo/${prevPhoto.imageId}`}>{prevPhoto.title}</Link>
  ) : (false);
  const nextButton = hasNext ? (
    <Link className="next-button" to={`/photo/${nextPhoto.imageId}`}>{nextPhoto.title}</Link>
  ) : (false);
  return (
    <div className="photo-single">
      {prevButton}
      <div className="photo-single-inner">
        <img src={`/images/${photoId}.JPG`} alt={photoId} />
      </div>
      {nextButton}
    </div>
  );
};

Photo.propTypes = propTypes;

export default Photo;
