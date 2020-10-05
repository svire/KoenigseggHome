import React, {useState, useRef, useEffect} from "react";
import classes from "./CarsInfo.module.css";
import Gemera from "../../slibe/koen/slide-gemera.jpg";
import Jesko from "../../slibe/koen/slide-jesko-absolut.jpg";
import ButtonBlack from "../UI/Buttons/ButtonBlack/ButtonBlack";

const CarsInfo = (props) => {
  //refs for
  var firstref = useRef();
  var secondref = useRef();
  //elements
  const [elementToShow, setElementsToShow] = useState([]);
  const [inFocus, setInfocus] = useState(true);
  const [current, setCurrent] = useState(1);

  const [classesDivText, setClassesDivText] = useState([
    classes.CarsInfoRowInfo,
    classes.NotVisible,
  ]);
  const [classesDivImage, setClassesDivImage] = useState([
    classes.CarsInfoRowImage,
    classes.ImageNotVisible,
  ]);

  useEffect(() => {
    setElementsToShow([firstref]); //setElementsToShow([firstref, secondref]);
    setInfocus(false);
  }, []);

  useEffect(() => {
    if (!inFocus) {
      const interval = setInterval(() => {
        elementToShow.forEach(function (element) {
          if (isElementInViewport(element.current)) {
            // if (element.current.id === "alo") {  alert("jeste");   } else {         alert("nije");         }
            setClassesDivText([classes.CarsInfoRowInfo, classes.Visible]);
            setClassesDivImage([
              classes.CarsInfoRowImage,
              classes.ImageVisible,
            ]);
            setInfocus(true); //once animation is displayed, there is no need to do it again if thats the cases
          } else {
            setClassesDivText([classes.CarsInfoRowInfo, classes.NotVisible]);
            setClassesDivImage([
              classes.CarsInfoRowImage,
              classes.ImageNotVisible,
            ]);
          }
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [inFocus]);

  const isElementInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  };

  return (
    <div>
      <div ref={firstref} className={classes.CarsInfoContainer}>
        <div id='alo' className={classesDivText.join(" ")}>
          <h1>The Gemera</h1>
          <h2>
            The world's first Mega-GT <br /> and Koenigsegg' first for four
          </h2>
          <ButtonBlack>MORE ON THE GEMERA</ButtonBlack>
        </div>
        <div ref={secondref} className={classesDivImage.join(" ")}>
          <img
            className={classes.CarsInfoImage}
            src={Gemera}
            alt='gemera-info'
          />
        </div>
      </div>
      <div className={classes.CarsInfoContainer}>
        <div className={classesDivImage.join(" ")}>
          <img
            className={classes.CarsInfoImage}
            src={Jesko}
            alt='gemera-info'
          />
        </div>
        <div id='second' className={classesDivText.join(" ")}>
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
