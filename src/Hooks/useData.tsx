import { useEffect, useState } from "react";

const useData = <T,>(url: string, initialState: T): [T, boolean] => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);
  return [data, loading];
};

export default useData;
