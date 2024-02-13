import React from "react";
import CommentItem from "./CommentItem";

function CommentPound({ authUser, comments }) {
  return (
    <div className="flex flex-col">
      <h3>Komentar ({comments.length})</h3>
      {comments.length > 0 ? (
        comments.map((comment) => <CommentItem key={comment.id} {...comment} />)
      ) : (
        <p>Tidak ada komentar</p>
      )}
    </div>
  );
}

export default CommentPound;
