import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';

const propTypes = {
  photoId: PropTypes.any,
  nextPhoto: PropTypes.object,
  prevPhoto: PropTypes.object,
};

const Photo = ({ photoId, nextPhoto, prevPhoto }) => {
  const hasPrev = prevPhoto || false;
  const hasNext = nextPhoto || false;

  const prevButton = hasPrev ? (
    <Link className="prev-button" to={`/photo/${prevPhoto.imageId}`}><img src="/icons/back-arrow.svg" alt="back" /></Link>
  ) : (false);
  const nextButton = hasNext ? (
    <Link className="next-button" to={`/photo/${nextPhoto.imageId}`}><img src="/icons/forward-arrow.svg" alt="forward" /></Link>
  ) : (false);
  return (
    <div className="photo-single">
      {prevButton}
      <div className="photo-single-inner">
        {
          hasNext ? (
            <Link to={`/photo/${nextPhoto.imageId}`}>
              <LazyLoad height={500}>
                <img src={`/images/${photoId}.JPG`} alt={photoId} />
              </LazyLoad>
            </Link>
          ) : (
            <img src={`/images/${photoId}.JPG`} alt={photoId} />
          )
        }
      </div>
      {nextButton}
    </div>
  );
};

Photo.propTypes = propTypes;

export default Photo;
