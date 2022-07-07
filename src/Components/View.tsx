import { useEffect, useState } from "react";
import { CardStyle } from "../Styles/Card.styles";
import RowItem from "./RowItem";

type Props = {
  view: Boolean;
};

type dataProps = {
  id: number;
  name: string;
  image: string;
  rewards: string;
  buttonName: string;
  fire?: boolean;
};

const View = ({ view }: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <CardStyle>
      <ul className={view ? "card" : "list"}>
        {data.map((item: dataProps) => (
          <RowItem key={item.id} {...item} view={view} />
        ))}
      </ul>
    </CardStyle>
  );
};

export default View;
