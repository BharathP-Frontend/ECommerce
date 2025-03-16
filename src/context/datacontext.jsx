import React, { useContext, useEffect, useState } from "react";

const dataContext = React.createContext();

const URL = "https://fakestoreapi.com/products";

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData(apiURL) {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(apiURL);
      const data = await res.json();
      setLoading(false);
      //   console.log(data);
      setData(data);

      if (!data) throw new error("Data not found");
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <dataContext.Provider value={{ data, loading, error }}>
      {children}
    </dataContext.Provider>
  );
}

export const useData = () => {
  return useContext(dataContext);
};
