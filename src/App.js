import logo from "./logo.svg";
import "./App.css";
import { Sutra } from "./sutra";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Buddhism Portal
        </a>
        <Sutra name="dave"></Sutra>
      </header>
    </div>
  );
}

export default App;
