import "./App.css";
import Props from "./components/Props";
import States from "./components/States";

const App = () => {
  return (
    <header className="App">
      <fieldset>
        <Props />
      </fieldset>
      <br />
      <fieldset>
        <States />
      </fieldset>
    </header>
  );
};

export default App;
