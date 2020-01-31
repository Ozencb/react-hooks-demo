// Packages
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    const returnedData = JSON.parse(JSON.stringify(json));

    // Check if API rate limit exceeded. Keeps at loading state if limit exceeded for your IP
    if (!('message' in returnedData)) {
      setData(returnedData);
      setLoading(false);
    }
  }

  // Some of our components need to re-render themselves with other URLs.
  // So, we pass in "url" as a dependency in the array to run
  // useEffect hook with every render with a new URL.
  useEffect(() => {
    fetchUrl();
  }, [url]);

  return [data, loading];
}

// In order to use this custom hook function in
// another component, we have to export it like this
export default useFetch;

/*
  This custom hook takes a URL as an argument,
  then returns a bool value of loading state and the data as a JSON object.
*/
