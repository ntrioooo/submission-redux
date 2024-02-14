import CommentItem from "./CommentItem";
import PropTypes from "prop-types";

function CommentPound({ authUser, comments }) {
  return (
    <div className="flex flex-col">
      <h3>Komentar ({comments.length})</h3>
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
  authUser: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentPound;
