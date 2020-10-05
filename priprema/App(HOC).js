import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function detectHover(Component) {
  return function (props) {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Component hovered={hovered} {...props} />
      </div>
    );
  };
}
function App(props) {
  const style = {backgroundColor: props.hovered ? "red" : ""};
  return (
    <div className='App'>
      <h1 style={style}>Amigo orale</h1>
    </div>
  );
}

export default detectHover(App);
