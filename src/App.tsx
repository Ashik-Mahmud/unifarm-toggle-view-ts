import "./App.css";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <h2 className="text-center">UniFarm Toggle View With TypeScript.</h2>
        <Users
          name="Ashik Mahmud"
          virtues={["Honest", "Punctual", "Perfect", "Deal"]}
        />
      </div>
    </div>
  );
}

export default App;
