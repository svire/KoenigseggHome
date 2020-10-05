import React from "react";
import classes from "./ButtonTr.module.css";

const ButtonTr = (props) => {
  return <button className={classes.ButtonTr}>{props.children}</button>;
};

export default ButtonTr;
