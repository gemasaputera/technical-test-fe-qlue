import React, { useState, useEffect } from 'react';
import './../App.css'
import fetch from 'utils/fetch';
import Table from 'components/Table';
import BarChart from 'components/BarChart';
import ProfileSection from 'components/ProfileSection';
import { columnUser as column } from 'utils/data';
import { setDataTable, getDataTable }  from 'utils/common';

function HomePage() {
  const [page, setPages] = useState(1);
  const [count, setCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const localData = JSON.parse(getDataTable(`DATA_PAGE_${page}`));
    const localCount = getDataTable(`DATA_COUNT_${page}`);
    let mounted = true;
    if (!localData&&!localCount) {
      const options = {
        method: 'GET',
        url: 'https://swapi.dev/api/people',
        params: { page: page}
      }
      setLoading(true)
      fetch(options)
        .then(res => {
          if(mounted) {
            setDataTable(`DATA_PAGE_${page}`,res.results)
            setDataTable(`DATA_COUNT_${page}`,res.count)
            setUsers(res.results);
            setCount(res.count);
            setLoading(false)
          }
        })
    } else {
      setUsers(localData);
      setCount(localCount);
    }
    
    return () => mounted = false;
  }, [page]);

  const handleAction = (index) => {
    setPages(index)
  }
  
  return (
    <div className="container">
      <ProfileSection />
      <div className="home-wrapper">
        <BarChart 
          data={users}
          page={page}
          title='User Stats'
          isLoading={loading}
        />
        <Table
          action={(index)=>handleAction(index)}
          column={column}
          data={users}
          isLoading={loading}
          page={page}
          title='Detail Users'
          totalPages={count}
        />
      </div>
    </div>
  )
}

export default HomePage;
