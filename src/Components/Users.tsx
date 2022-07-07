import Card from "./Card";

type Props = {
  name: string;
  number?: number;
};

const Users = (props: Props) => {
  return (
    <div className="container">
      Users {props.name}
      <Card />
    </div>
  );
};
export default Users;
