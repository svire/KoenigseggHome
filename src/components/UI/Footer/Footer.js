import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../../slibe/koen/whitelogo.png";
import YtIcon from "../../../slibe/koen/yticon.png";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterLeft}>
        <div className={classes.FooterLogo}>
          <img className={classes.FooterLogoImg} src={Logo} alt='logofooter' />
        </div>
        <div className={classes.FooterInfo}>
          <p>
            <span
              style={{
                letterSpacing: "0.2rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              KOENIGSEGG AUTOMOTIVE AB
            </span>
          </p>
          <p>
            262 74 Ängelholm, Sweden <br />
            +46 431 45 44 60 <br /> info@koenigsegg.com
          </p>
        </div>
      </div>
      <div className={classes.FooterRight}>
        <div className={classes.FooterOne}>
          <p>
            CAREERS
            <br />
            PRESS
            <br />
            CERTIFIED LEGENDS
          </p>
        </div>
        <div className={classes.FooterOne}>
          <p>
            FIND US
            <br />
            FACTORY TOURS
          </p>
        </div>
        <div className={classes.FooterOne}>
          <p>
            COOKIE POLICY
            <br />
            DISCLAIMER
            <br />
            SERVICE
            <br />
            PRIVACY POLICY
          </p>
        </div>
        <div className={classes.FooterSocial}>
          <span className={classes.SocialSpan}>
            <p>Fb</p>
          </span>
          <span className={classes.SocialSpan}>
            <p>Yt</p>
          </span>
          <span className={classes.SocialSpan}>
            <p>Ig</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../../slibe/koen/whitelogo.png";
const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterRow}>
        <div className={classes.CompanyInfo}>
          <div className={classes.FooterLogo}>
            <img src={Logo} alt='logofooter' />
          </div>
          <div className={classes.CompanyRight}>
            <span>KOENIGSEGG AUTOMOTIVE AB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
*/
