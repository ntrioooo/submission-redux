import React from "react";
import { postedAt } from "../utils";
import { useDispatch } from "react-redux";
import { asyncToggleUpVotePoundDetail } from "../states/poundDetail/action";
function PoundDetail({
  body,
  category,
  title,
  id,
  totalComments,
  createdAt,
  upVotesBy,
  downVotesBy,
  authUser,
  owner,
}) {
  const dispatch = useDispatch();
  const isUpVotePoundDetail = upVotesBy.includes(authUser);
  const onToggleUpVote = () => {
    dispatch(asyncToggleUpVotePoundDetail);
    console.log("clicked");
  };

  return (
    <div>
      <div
        className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 mt-3 rounded-xl border mx-auto"
        // onClick={onPoundClick}
      >
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="text-sm leading-tight">
              <span className="text-black dark:text-white font-bold block ">
                {owner.name}
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-gray-500 dark:text-gray-400 text-lg">{title}</h2>
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
            <span className="ml-3 cursor-pointer" onClick={onToggleUpVote}>
              {isUpVotePoundDetail ? (
                <span className="text-blue-500">{upVotesBy.length} Like </span>
              ) : (
                <span className="text-gray-500">{upVotesBy.length} Like </span>
              )}
            </span>
            <span className="ml-3">{downVotesBy.length} Dislike</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoundDetail;
