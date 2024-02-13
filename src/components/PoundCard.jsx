import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils/index";
import { useDispatch } from "react-redux";
import { asyncToggleUpVotePoundDetail } from "../states/poundDetail/action";

function PoundCard({
  name,
  body,
  category,
  title,
  id,
  totalComments,
  createdAt,
  upVotesBy,
  downVotesBy,
}) {
  const navigate = useNavigate();
  const onPoundClick = () => {
    navigate(`/pound/${id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 mt-3 rounded-xl border mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="ml-1.5 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              {name}
            </span>
          </div>
        </div>
      </div>
      <h2
        className="text-gray-500 dark:text-gray-400 text-lg cursor-pointer"
        onClick={onPoundClick}
      >
        {title}
      </h2>
      <p className="text-black dark:text-white block text-sm leading-snug mt-3">
        {body}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5 text-right">
        {postedAt(createdAt)}{" "}
      </p>
      <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <div className="flex items-center mr-6">
          <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
            {totalComments} Comments
          </p>
          <span className="ml-3 cursor-pointer">{upVotesBy.length} Like</span>
          <span className="ml-3">{downVotesBy.length} Dislike</span>
        </div>
      </div>
    </div>
  );
}

PoundCard.propTypes = {
  //   id: PropTypes.string.isRequired,
  //   poundTweet: PropTypes.string.isRequired,
  //   createdAt: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   username: PropTypes.string.isRequired,
  //   likes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PoundCard;
