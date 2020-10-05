import React, {useState, useRef} from "react";
import classes from "./CarsInfo.module.css";
import Gemera from "../../slibe/koen/slide-gemera.jpg";
import Jesko from "../../slibe/koen/slide-jesko-absolut.jpg";
import ButtonBlack from "../UI/Buttons/ButtonBlack/ButtonBlack";

//https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
//https://youtu.be/-ths7kNIFnw
//https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
const CarsInfo = (props) => {
  //const [classy, setClassy] = useState("classes.CarsInfoRowInfo");
  const [classy, setClassy] = useState("");
  // Ovo dole radi, sad nadji da vise applied styles
  const [classy2, setClassy2] = useState(classes.CarsInfoRowInfo);
  const [show, setShow] = useState(true);
  let sideClasses = [classes.SideDrawer];
  if (show) {
    sideClasses = [classes.CarsInfoRowInfo, classes.Open];
  }
  //<nav className={sideClasses.join(" ")}>
  //https://www.digitalocean.com/community/tutorials/react-components-viewport-react-visibility-sensor

  var scroll =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  var elementToShow = document.querySelectorAll(".show-on-scroll");
  //ovdje refove :D

  const Blick = () => {
    // var els = document.querySelectorAll("h1"); //The gemera
    //var els = document.querySelectorAll("#first"); ovo je cjeli element
    // var els = document.querySelectorAll("#second"); //ovo je drugi vlajda
    //var els = document.querySelectorAll("classes.CarsInfoRowInfo");
    //alert(els[0].innerHTML);
  };
  /*
  function loop() {
    elementToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });
  }
  */
  // scroll(loop);
  // loop();

  return (
    <div>
      <div className={classes.CarsInfoContainer} onClick={Blick}>
        <div id='first' className={sideClasses.join(" ")}>
          <h1>The Gemera</h1>
          <h2>
            The world's first Mega-GT <br /> and Koenigsegg' first for four
          </h2>
          <ButtonBlack>MORE ON THE GEMERA</ButtonBlack>
        </div>
        <div className={classes.CarsInfoRowImage}>
          <img
            className={classes.CarsInfoImage}
            src={Gemera}
            alt='gemera-info'
          />
        </div>
      </div>
      <div className={classes.CarsInfoContainer}>
        <div className={classes.CarsInfoRowImage}>
          <img
            className={classes.CarsInfoImage}
            src={Jesko}
            alt='gemera-info'
          />
        </div>
        <div id='second' className={classes.CarsInfoRowInfo}>
          <h1>The Jesko Absolut</h1>
          <h2>
            The fastest Koenigsegg' ever <br /> - forever
          </h2>
          <ButtonBlack>MORE ON THE JESKO ABSOLUT</ButtonBlack>
        </div>
      </div>
    </div>
  );
};

export default CarsInfo;

/*

/*


  const Blick = () => {
    setTimeout(() => {
      setCurrent(current + 1);
    }, 3000);
  };
//https://css-tricks.com/slide-in-as-you-scroll-down-boxes/
//https://youtu.be/-ths7kNIFnw
//https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
//const [classy, setClassy] = useState("classes.CarsInfoRowInfo");
// Ovo dole radi, sad nadji da vise applied styles
const CarsInfo = (props) => {
  const [classy, setClassy] = useState("");
  const [classy2, setClassy2] = useState(classes.CarsInfoRowInfo);
  const [show, setShow] = useState(true);
  let sideClasses = [classes.SideDrawer];

  var firstref = useRef();
  var secondref = useRef();
  if (show) {
    sideClasses = [classes.CarsInfoRowInfo, classes.Open];
  }
  //<nav className={sideClasses.join(" ")}>
  //https://www.digitalocean.com/community/tutorials/react-components-viewport-react-visibility-sensor

  var scroll =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  //var elementToShow = document.querySelectorAll(".show-on-scroll");
  const [elementToShow, setElementsToShow] = useState([]);
  useEffect(() => {
    setElementsToShow([firstref, secondref]);
  }, []);

  const Blick = () => {
    // var els = document.querySelectorAll("h1"); //The gemera
    //var els = document.querySelectorAll("#first"); ovo je cjeli element
    // var els = document.querySelectorAll("#second"); //ovo je drugi vlajda
    //var els = document.querySelectorAll("classes.CarsInfoRowInfo");
    //alert(els[0].innerHTML);
    // alert(firstref.current.innerHTML);
    // alert(secondref.current.innerHTML);
    alert(elementToShow[1].current.innerHTML); //opa bajoni
  };

  /*
  function loop() {
    elementToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });
  }
 s
  // scroll(loop);
  // loop();


 <div className={classes.CarsInfoOne}>
        <h1>Gemera</h1>
      </div>
      <div className={classes.CarsInfoOne}>
        <img src={Gemera} alt='gemera-info' />
      </div>
      <div className={classes.CarsInfoOne}>
        <img src={Jesko} alt='gemera-info' />
      </div>
      <div className={classes.CarsInfoOne}>
        <h1>Jesko</h1>
      </div>
*/

 <div className={classes.CarsInfoOne}>
        <h1>Gemera</h1>
      </div>
      <div className={classes.CarsInfoOne}>
        <img src={Gemera} alt='gemera-info' />
      </div>
      <div className={classes.CarsInfoOne}>
        <img src={Jesko} alt='gemera-info' />
      </div>
      <div className={classes.CarsInfoOne}>
        <h1>Jesko</h1>
      </div>
*/
