import React from "react";
import classes from "./Nav.module.css";
import Logo from "../../../slibe/koen/koen_logo.svg";
import Toogler from "../Toolbar/Toogler/Toogler";

function Nav(props) {
  return (
    <div className={classes.Nav}>
      <div className={classes.Logo}>
        <img className={classes.Sliba} src={Logo} />
      </div>
      <div className={classes.Toogle}>
        <Toogler toggler={props.toggler} />
      </div>
      <div className={classes.Listica}>
        <ul className={classes.Navigation}>
          <li className={classes.Dot}>
            <a href=''>CARS</a>
            <ul className={classes.SubMenu}>
              <li>
                <a href='#'>THE GEMERA</a>
              </li>
              <li>
                <a href='#'>THE JESKO</a>
              </li>
              <li>
                <a href='#'>THE REGERA</a>
              </li>
              <li>
                <a href='#'>HISTORICAL CARS</a>
              </li>
              <li>
                <a href='#'>CERTIFIED LEGENDS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>NEWS</a>
          </li>
          <li>
            <a href='#'>OUR STORY</a>
            <ul className={classes.SubMenu}>
              <li>
                <a href='#'>CHRISTIAN VON KOENIGSEGG</a>
              </li>
              <li>
                <a href='#'>JESKO VON KOENIGSEGG</a>
              </li>
              <li>
                <a href='#'>KOENIGSEGG THE COMPANY</a>
              </li>
              <li>
                <a href='#'>KOENIGSEGG THE HISTORY</a>
              </li>
              <li>
                <a href='#'>INNOVATIONS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>CONTACT</a>
            <ul className={classes.SubMenu}>
              <li>
                <a href='#'>FIND US</a>
              </li>
              <li>
                <a href='#'>SERVICE</a>
              </li>
              <li>
                <a href='#'>CAREER</a>
              </li>
              <li>
                <a href='#'>PRESS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>SHOP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
//https://github.com/svire/ReactAudioAssistant/blob/master/src/components/UI/SideDrawer/SideDrawer.js
//https://github.com/svire/ReactAudioAssistant/blob/master/src/components/UI/Toolbar/Toolbar.js
//https://github.com/svire/ReactAudioAssistant/blob/master/src/components/Layout/Layout.js

export default Nav;
