import React from 'react';

import { Info, Repos, User } from '../components';

const Dashboard = () => {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      {/* <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
