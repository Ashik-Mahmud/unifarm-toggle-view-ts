import useData from "../Hooks/useData";
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

interface InfoProps {
  id: number;
  name: string;
  image: string;
  rewards: string;
  buttonName: string;
  fire?: boolean;
}

const View = ({ view }: Props) => {
  const [data, loading] = useData<InfoProps[]>(`data.json`, []);
  if (loading) return <div>Loading...</div>;
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
