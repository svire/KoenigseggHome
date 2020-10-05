import React from "react";
import classes from "./ButtonBlack.module.css";
const ButtonBlack = (props) => {
  return <button className={classes.ButtonBlack}>{props.children}</button>;
};

export default ButtonBlack;
