import React from "react";
import "./App.css";

type WelcomeProps = {
  name: string;
};

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

const welcomes = () => {
  return (
    <>
      <li>this</li>
      <li>this</li>
      <li>this</li>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Ted" />
      <ol>{welcomes()}</ol>
    </div>
  );
}

export default App;
