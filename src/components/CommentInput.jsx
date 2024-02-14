import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ commentPound }) {
  const [content, setContent] = useState('');

  const commentPoundHandler = (event) => {
    setContent(event.target.value);
  };

  const addCommentPound = () => {
    if (content.trim()) {
      commentPound({ content });
      setContent('');
    }
  };

  return (
    <div className="mt-5 flex flex-col">
      <textarea
        rows="3"
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="What's on your mind?"
        value={content}
        onChange={commentPoundHandler}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addCommentPound({ content });
        }}
        className="mt-3 py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Pound Comment
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  commentPound: PropTypes.func.isRequired,
};

export default CommentInput;
