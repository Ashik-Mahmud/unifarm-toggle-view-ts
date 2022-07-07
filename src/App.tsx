import "./App.css";
import Users from "./Components/Users";
import ViewContainer from "./Components/ViewContainer";

function App() {
  return (
    <div className="App ">
      <div className="container">
        <h1 className="text-center">UniFarm Toggle View With TypeScript.</h1>
        <Users name="Ashik Mahmud" />
        <ViewContainer />
      </div>
    </div>
  );
}

export default App;
