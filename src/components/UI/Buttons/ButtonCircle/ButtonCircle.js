import React from "react";
import classes from "./ButtonCircle.module.css";

const ButtonCircle = (props) => {
  return (
    <div
      onClick={() => props.navigate(props.direction)}
      className={classes.ButtonCircle}
    >
      {props.children}
    </div>
  );
};

export default ButtonCircle;
