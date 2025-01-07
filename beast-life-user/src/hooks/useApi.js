import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); 
      }

      const allData = await response.json();
      setData(allData);
    } catch (err) {
      setError(err.message); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};
