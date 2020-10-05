import React, {useState, useRef} from "react";

import classes from "./SideDrawer.module.css";
import Logowhite from "../../../slibe/koen/whitelogo.png";

const SideDrawer = (props) => {
  let sideClasses = [classes.SideDrawer];
  if (props.show) {
    sideClasses = [classes.SideDrawer, classes.Open];
  }

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const SubClick = () => {
    const link_one = document.getElementById("Link1");
    const submenu_one = document.getElementById("Subbmenu1");

    if (active) {
      link_one.style.backgroundColor = "rgb(51,51,51)";
      submenu_one.style.display = "none";
      setActive(false);
    } else {
      link_one.style.backgroundColor = "rgb(53, 172, 106)";
      submenu_one.style.display = "inline";
      setActive(true);
    }
  };
  const SubClick2 = () => {
    const link_two = document.getElementById("Link2");
    const submenu_two = document.getElementById("Subbmenu2");
    if (active2) {
      link_two.style.backgroundColor = "rgb(51,51,51)";
      submenu_two.style.display = "none";
      setActive2(false);
    } else {
      link_two.style.backgroundColor = "rgb(53, 172, 106)";
      submenu_two.style.display = "inline";
      setActive2(true);
    }
  };
  const SubClick3 = () => {
    const link_three = document.getElementById("Link3");
    const submenu_three = document.getElementById("Subbmenu3");
    if (active3) {
      link_three.style.backgroundColor = "rgb(51,51,51)";
      submenu_three.style.display = "none";
      setActive3(false);
    } else {
      link_three.style.backgroundColor = "rgb(53, 172, 106)";
      submenu_three.style.display = "inline";
      setActive3(true);
    }
  };

  return (
    <nav className={sideClasses.join(" ")}>
      <div className={classes.NavigationItems}>
        <div className={classes.Logo}>
          <img className={classes.LogoWhite} src={Logowhite} alt='Logo' />
        </div>
        <div className={classes.SideLista}>
          <ul>
            <li id='Link1'>
              <a className={classes.Link} href='bama'>
                CARS
              </a>
              <div id='Subb1' onClick={SubClick} className={classes.Subbutton}>
                <i class='fa fa-chevron-down'></i>
              </div>
            </li>
            <div id='Subbmenu1' style={{display: "none"}}>
              <li>
                <a className={classes.Link} href='wea'>
                  The Gemera
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  The Jesko
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  The Regera
                </a>
              </li>
            </div>

            <li>
              <a className={classes.Link} href='wea'>
                NEWS
              </a>
            </li>
            <li id='Link2'>
              <a className={classes.Link} href='wea'>
                OUR STORY
              </a>
              <div id='Subb2' onClick={SubClick2} className={classes.Subbutton}>
                <i class='fa fa-chevron-down'></i>
              </div>
            </li>
            <div id='Subbmenu2' style={{display: "none"}}>
              <li>
                <a className={classes.Link} href='wea'>
                  Christian von Koenigsegg
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Jesko von Koenigsegg
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Koenigsegg-The Company
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Koenigsegg History
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Innovations
                </a>
              </li>
            </div>
            <li id='Link3'>
              <a className={classes.Link} href='wea'>
                CONTACT
              </a>
              <div id='Subb3' onClick={SubClick3} className={classes.Subbutton}>
                <i class='fa fa-chevron-down'></i>
              </div>
            </li>
            <div id='Subbmenu3' style={{display: "none"}}>
              <li>
                <a className={classes.Link} href='wea'>
                  Find us
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Service
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Careers
                </a>
              </li>
              <li>
                <a className={classes.Link} href='wea'>
                  Press
                </a>
              </li>
            </div>
            <li>
              <a className={classes.Link} href='wea'>
                NEWS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideDrawer;

/*

 <ul>
          <div className={classes.Drawer}>
            <a href=""></a>
          </div>
          <div>
            <NavigationItem link='/glitter'>Glitter</NavigationItem>
          </div>
          <div>
            <NavigationItem link='/products'>Products</NavigationItem>
          </div>
        </ul>''
*/
