import React, { useState, useEffect } from 'react';
import './../App.css';
import axios from 'axios';
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
      const fetchData = async () =>{
        try {
          setLoading(true);
          const response = await axios(`https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people?page=${page}`);
          console.log('response',response)
          if (mounted) {
            setDataTable(`DATA_PAGE_${page}`,response.data.results)
            setDataTable(`DATA_COUNT_${page}`,response.data.count)
            setUsers(response.data.results);
            setCount(response.data.count);
          }
        } catch(error) {
          return error;
        }
        setLoading(false);
      }
      fetchData();
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
