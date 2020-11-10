import React, { useState } from 'react';
import './../App.css';
import Table from 'components/Table';
import BarChart from 'components/BarChart';
import ProfileSection from 'components/ProfileSection';
import { columnUser as column } from 'utils/data';
import useRequest from 'utils/fetch';

function HomePage() {
  const [page, setPages] = useState(1);
  const { data, loading } = useRequest(`https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people?page=${page}`);
  const handleAction = (index) => {
    setPages(index)
  }
  const userData = data?data.results:[];
  const userCount = data?data.count:1;
  return (
    <div className="container">
      <ProfileSection />
      <div className="home-wrapper">
        <BarChart 
          data={userData}
          page={page}
          title='User Stats'
          isLoading={loading}
        />
        <Table
          action={(index)=>handleAction(index)}
          column={column}
          data={userData}
          isLoading={loading}
          page={page}
          title='Detail Users'
          totalPages={userCount}
        />
      </div>
    </div>
  )
}

export default HomePage;
