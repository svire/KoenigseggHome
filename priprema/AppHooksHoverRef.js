import React, {useState, useRef, useEffect} from "react";
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
  const [hoverRef, hovered] = useHover(); //vidis sta ti vraca dole useHover()    return [ref, value];

  const style = {backgroundColor: hovered ? "red" : ""};

  return (
    <div ref={hoverRef} style={style} className='App'>
      <h1>Amigo orale</h1>
      <h2>Start coding and see what happens</h2>
    </div>
  );
}
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    //grabs a node of ref that is current(any element that you wanna actually hover)
    const node = ref.current;
    //grabs
    //attach it to eventListener
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
      //
      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);
  //use hover ovo vraca
  return [ref, value];
}

export default App;
