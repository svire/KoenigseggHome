import React from "react";
import classes from "./Toolbar.module.css";
import {Link, NavLink} from "react-router-dom";
import Toggler from "./Toogler/Toogler";
//import NavigationItems from "../NavigationItems/NavigationItems";
//import CartIcon from "../../Cart/CartIcon/CartIcon";

const Toolbar = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Navbar}>
        <div className={classes.DivToggler}>
          <Toggler toggle={props.toggle} />
        </div>
        <div className={classes.Logo}>
          <Link className={classes.Logoa} to='/'>
            <span className={classes.Logoaa}>AUDIO ASSISTANT</span>
          </Link>
        </div>
        <div className={classes.Space}></div>
      </div>
    </header>
  );
};

export default Toolbar;
