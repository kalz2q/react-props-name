import React from "react";
import "./App.css";

type WelcomeProps = {
  name: string;
};

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

function App() {
  return (
    <div className="App">
      <Welcome name="Sara" />
    </div>
  );
}

export default App;
