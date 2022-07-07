import { CardStyle } from "../Styles/Card.styles";
import RowItem from "./RowItem";

type Props = {
  view: Boolean;
};

const View = ({ view }: Props) => {
  return (
    <CardStyle>
      <ul className={view ? "card" : "list"}>
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
      </ul>
    </CardStyle>
  );
};

export default View;
