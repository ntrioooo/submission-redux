import React from 'react';
import { useDispatch } from 'react-redux';
import PoundInput from '../components/PoundInput';
import LayoutPage from '../layouts/LayoutPage';
import { asyncAddPound } from '../states/pounds/action';

function PoundTweet() {
  const dispatch = useDispatch();
  const onPoundTweet = ({ title, body, category }) => {
    dispatch(asyncAddPound({ title, body, category }));
  };
  return (
    <LayoutPage>
      <PoundInput poundTweet={onPoundTweet} />
    </LayoutPage>
  );
}

export default PoundTweet;
