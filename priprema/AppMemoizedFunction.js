import React, {useState, useRef, memo, useCallback, useEffect} from "react";
import "./App.css";

const Child = memo(function () {
  alert("i am rendering");
  return <h1>Give me something</h1>;
});

function App(props) {
  const [localValue, setLocalValue] = useState(0);

  //this is a props that im passing to child component

  function someFunc() {}
  const memoizedFunct = useCallback(someFunc, []); //sec argument dependency array
  //even if we have memo NEW FUNCTION IS send everysingle time, and the child component say new prop coming in
  //let me go coming in and re-render
  // <Child funct={someFunc} />  pa umjesto someFunc ti posalji
  return (
    <div className='App'>
      <Child funct={memoizedFunct} />
      <h1>Local value:{localValue}</h1>

      <button onClick={() => setLocalValue((n) => n + 1)}>Dodaj</button>
    </div>
  );
}

export default App;
