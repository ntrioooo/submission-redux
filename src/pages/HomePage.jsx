import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PoundList from '../components/PoundList';
import asyncPopulateUsersAndPounds from '../states/shared/action';
import LayoutPage from '../layouts/LayoutPage';

function HomePage() {
  const { pounds = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndPounds());
  }, [dispatch]);

  const poundsList = pounds.map((pound) => ({
    ...pound,
    user: users.find((user) => user.id === pound.ownerId),
    authUser: authUser.id,
  }));

  return (
    <LayoutPage>
      <PoundList pounds={poundsList} />
    </LayoutPage>
  );
}

export default HomePage;
