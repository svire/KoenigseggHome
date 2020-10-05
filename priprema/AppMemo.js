import React, {useState, useRef, memo, useEffect} from "react";
import "./App.css";

//in this case Child component rerendering because its Parent component re-rendering
//when you wrap component with memo, problem is solved
const Child = memo(function (props) {
  alert("i am rendering");
  return <h1>I am rendering</h1>;
});

function App(props) {
  const [localValue, setLocalValue] = useState(0);

  return (
    <div className='App'>
      <Child />
      <h1>Local value:{localValue}</h1>

      <button onClick={() => setLocalValue((n) => n + 1)}>Dodaj</button>
    </div>
  );
}

export default App;
