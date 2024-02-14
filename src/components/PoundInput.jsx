import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PoundInput({ poundTweet }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const onTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onBodyHandler = (event) => {
    setBody(event.target.value);
  };
  const onCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const addPoundTweet = () => {
    poundTweet({ title, body, category });
    setTitle('');
    setBody('');
    setCategory('');
    // alert("Tweet berhasil ditambah");
  };

  return (
    <div className="mt-5 flex flex-col">
      <input
        type="text"
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Title"
        value={title}
        onChange={onTitleHandler}
      />
      <input
        type="text"
        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Category"
        value={category}
        onChange={onCategoryHandler}
      />
      <textarea
        rows="6"
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="What's on your mind?"
        value={body}
        onChange={onBodyHandler}
      />
      <button
        type="submit"
        onClick={addPoundTweet}
        className="mt-3 py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Pound Tweet
      </button>
    </div>
  );
}

PoundInput.propTypes = {
  poundTweet: PropTypes.func.isRequired,
};

export default PoundInput;
