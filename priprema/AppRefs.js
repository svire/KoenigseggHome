import React, {
  useState,
  useRef,
  memo,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import "./App.css";

function App(props) {
  var refferingContainer = useRef();

  function display() {
    // alert(refferingContainer.current.value);
    document.getElementById("disp").innerHTML =
      refferingContainer.current.value;
    //document.getElementById("disp").innerHTML = name;
  }
  let input;
  return (
    <div className='App'>
      Name: <input type='text' ref={refferingContainer} />
      <button name='Click' onClick={display}>
        Click
      </button>
      <h2>
        Hello <span id='disp'></span> !!!
      </h2>
    </div>
  );
}

export default App;
