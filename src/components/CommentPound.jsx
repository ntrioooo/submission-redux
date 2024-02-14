/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

function CommentPound({ authUser, comments }) {
  return (
    <div className="flex flex-col">
      <h3>
        Komentar (
        {comments.length}
        )
      </h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} authUser={authUser} />
        ))
      ) : (
        <p>Tidak ada komentar</p>
      )}
    </div>
  );
}

CommentPound.propTypes = {
  authUser: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentPound;
