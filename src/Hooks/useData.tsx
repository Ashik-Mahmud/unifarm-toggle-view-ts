import { useEffect, useState } from "react";

type Props = {};

const useData = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data, setData];
};

export default useData;
