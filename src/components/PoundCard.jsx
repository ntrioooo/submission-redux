import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { postedAt } from "../utils/index";

function PoundCard({
  user,
  body,
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
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-full w-7 mr-2"
          />
          <div className="text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block ">
              {user.name}
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
  user: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.string.isRequired,
};

export default PoundCard;
