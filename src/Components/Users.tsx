type Props = {
  name: string;
  virtues: string[];
};

const Users = ({ virtues, name }: Props) => {
  return (
    <div className="container">
      Users {name}{" "}
      <ul>
        {virtues.map((virtue, index) => (
          <li key={index}>{virtue}</li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
