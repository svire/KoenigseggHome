import React, {useState, useRef, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const [number, setNumber] = useState(0);

  //COMPONENT DID UPDATE
  //svaki put kad se number promjeni im gonna run
  useEffect(() => {
    //alert("ala");
    console.log("you have been updated the number");
  }, [number]); //dependency array

  return (
    <div className='App'>
      <h1>Amigo orale</h1>
      <h2>Start coding and see what happens</h2>
      <button onClick={() => setNumber((n) => n + 1)}>Click me</button>
      <h3>{number}</h3>
    </div>
  );
}

export default App;

function docClick() {
  alert("doc was clicked");
}
//COMPONENTDIDMOUNT
//when component updates the first time and never again (similar to componentDidMount())
useEffect(() => {
  document.addEventListener("click", docClick);
  //define a cleanup funciton (componentWillUnmount())
  return () => {
    document.removeEventListener(docClick);
  };
}, []);
