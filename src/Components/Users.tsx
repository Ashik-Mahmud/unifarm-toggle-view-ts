type Props = {
  name: string;
  number?: number;
};

const Users = (props: Props) => {
  return <div className="container">Users {props.name}</div>;
};
export default Users;
