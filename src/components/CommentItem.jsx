import { postedAt } from "../utils";
import PropTypes from "prop-types";

function CommentItem({
  owner,
  content,
  upVotesBy,
  downVotesBy,
  createdAt,
}) {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <img
            src={owner.avatar}
            alt={owner.name}
            className="rounded-full w-7 mr-2"
          />
          <div className="text-sm leading-tight">
            <span className="text-black font-bold block ">{owner.name}</span>
          </div>
        </div>
      </div>
      <p className="text-black block text-sm leading-snug mt-3">{content}</p>
      <p className="text-base py-1 my-0.5 text-right">{postedAt(createdAt)}</p>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <div className="flex items-center">
          <span className="mr-3">{upVotesBy} Like</span>
          <span className="mr-3">{downVotesBy} Dislike</span>
        </div>
      </div>
      <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
    </div>
  );
}

CommentItem.propTypes = {
  owner: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.object,
  createdAt: PropTypes.string.isRequired,
};

export default CommentItem;
