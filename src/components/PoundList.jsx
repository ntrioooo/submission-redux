import React from 'react';
import PropTypes from 'prop-types';
import PoundCard from './PoundCard';

function PoundList({ pounds }) {
  return (
    <div className="mt-5 justify-center flex-col">
      {pounds.map((pound) => (
        <PoundCard key={pound.id} {...pound} />
      ))}
    </div>
  );
}

PoundList.propTypes = {
  pounds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      ownerId: PropTypes.string.isRequired,
      totalComments: PropTypes.number,
      upVoteBy: PropTypes.array,
      downVoteBy: PropTypes.array,
    }),
  ).isRequired,
};

export default PoundList;
