import { CardStyle } from "../Styles/Card.styles";
import RowItem from "./RowItem";

type Props = {};

const View: React.FC = (props: Props) => {
  return (
    <CardStyle>
      <ul className="card">
        <RowItem />
        <RowItem />
        <RowItem />
        <RowItem />
      </ul>
    </CardStyle>
  );
};

export default View;
