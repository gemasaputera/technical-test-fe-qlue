import { useState, useEffect } from 'react';
import { setDataTable, getDataTable } from 'utils/common';
import axios from 'axios';

function useRequest(initUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    let mount = true;
    let localData = null;
    const fetchProduct = async () => {
      try {
        localData = JSON.parse(getDataTable(`${initUrl}`));
        if(!localData||localData===null) {
          setLoading(true);
          const response = await axios(initUrl);
          if (mount) {
            setData(response.data);
            setDataTable(`${initUrl}`,response.data);
          }
        } else {
          setData(localData);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
    return (() => { mount = false; });
  }, [initUrl]);
  return { data, loading, error };
}

export default useRequest;
