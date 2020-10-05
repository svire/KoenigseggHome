import React from "react";
import classes from "./News.module.css";

const News = (props) => {
  return (
    <div className={classes.Divs}>
      <div className={classes.Over}></div>
      <div className={classes.PostBox}>
        <div className={classes.PostBoxInfo}>
          <span>{props.date}</span>
          <h3>{props.head}</h3>
        </div>
      </div>
      <img src={props.imagesrc} alt='squad-alt' />
    </div>
  );
};

export default News;

/*

const News = (props) => {
  return (
    <div className={classes.Divs}>
      <div className={classes.Over}></div>
      <div className={classes.PostBox}>
        <div className={classes.PostBoxInfo}>
          <span>2020-04-22</span>
          <h3>Gallery:The koenigsegg Squad on the Track</h3>
        </div>
      </div>
      <img src={Squad} alt='squad-alt' />
    </div>
  );
};

export default News;


*/
