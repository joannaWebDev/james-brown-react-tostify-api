import { useState, useEffect } from 'react';

const useFetch = (url) => {
  //is an empty array because is going to get filled once we make our request
  const [data, setData] = useState([]);

   //once we're done fetching, we can set isLoading to false
  const [isLoading, setIsLoading] = useState(true);

    //an empty array gets random pics.
  // eslint-disable-next-line no-unused-vars
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //set that response hits array to our state [images, setImages]
        setData(data.hits);

        //because we already got the data, set the setIsLoading to false
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

/*  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[term]);// */

  return [data, isLoading];
};

export { useFetch };