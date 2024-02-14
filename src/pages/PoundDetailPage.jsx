import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PoundDetail from '../components/PoundDetail';
import LayoutPage from '../layouts/LayoutPage';
import { asyncReceivePoundDetail } from '../states/poundDetail/action';
import { asyncAddComment } from '../states/comments/action';
import CommentInput from '../components/CommentInput';
import CommentPound from '../components/CommentPound';

function PoundDetailPage() {
  const { id } = useParams();
  const { poundDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePoundDetail(id));
  }, [id, dispatch]);

  const onPoundComment = ({ content }) => {
    dispatch(asyncAddComment({ content, poundId: id }));
    dispatch(asyncReceivePoundDetail(id));
  };

  if (!poundDetail) {
    return null;
  }

  return (
    <LayoutPage>
      <PoundDetail {...poundDetail} authUser={authUser.id} />
      <h4 className="mt-4 text-lg">Beri Komentar</h4>
      <CommentInput commentPound={onPoundComment} {...poundDetail} />
      <CommentPound comments={poundDetail.comments} />
    </LayoutPage>
  );
}

export default PoundDetailPage;
