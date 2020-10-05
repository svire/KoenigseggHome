import React, {
    useState,
    useRef,
    memo,
    useMemo,
    useCallback,
    useEffect,
  } from "react";
  import "./App.css";
  
  const Child = memo(function () {
    alert("i am rendering");
    return <h1>Give me something</h1>;
  });
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  
  function App(props) {
    const [localValue, setLocalValue] = useState(0);
  
    function someFunc() {}
  
    //useMemo will give us memoized value , if the last time this function runs gives us number 9
    //every time will return 9, recomputing function again
    const memoizedFunct = useMemo(largestNumber, []); //sec argument dependency array
  
    function largestNumber() {
      //console.log("I am working");
      //alert("im working"); non stop
      return Math.max(...array);
    }
  
    return (
      <div className='App'>
        <Child funct={memoizedFunct} />
        <h1>Local value:{localValue}</h1>
  
        <button onClick={() => setLocalValue((n) => n + 1)}>
          Change local value
        </button>
  
        <h1>Largest number:{memoizedFunct}</h1>
      </div>
    );
    //<h1>Largest number:{largestNumber()}</h1>  i umjesto ovoga koristi useMemo()
  }
  
  export default App;
  