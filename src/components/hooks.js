import { useState, useEffect } from 'react';

const useFetch = (url) => {
  //is an empty array because is going to get filled once we make our request
  const [data, setData] = useState([]);

   //once we're done fetching, we can set isLoading to false
  const [isLoading, setIsLoading] = useState(true);

async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);//

  return [data, isLoading];
};

export { useFetch };