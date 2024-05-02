import { useState, useEffect } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw {
            err: true,
            status: response.status,
            statusText: !response.statusText
              ? "Ocurrió un error inesperado"
              : response.statusText,
          };
        }
        const result = await response.json();
        setData(result);
        setError({ err: false });
      } catch (err) {
        setData(null);
        setError({ err });
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error };
};
