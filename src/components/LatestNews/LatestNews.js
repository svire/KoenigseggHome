import React from "react";
import classes from "./LatestNews.module.css";
import Squad from "../../slibe/koen/squad.jpg";
import Squad2 from "../../slibe/koen/squad2.jpg";
import SquadAlien from "../../slibe/koen/squadalien.png";
import Squad4 from "../../slibe/koen/squad4.jpg";
const LatestNews = (props) => {
  return (
    <div className={classes.LatestNews}>
      <h2>LATEST NEWS POSTS</h2>
      <div className={classes.News}>
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
        <div className={classes.Divs}>
          <div className={classes.Over}></div>
          <div className={classes.PostBox}>
            <div className={classes.PostBoxInfo}>
              <span>2020-09-22</span>
              <h3>Highlights from Ghost Squadron Tour 2020</h3>
            </div>
          </div>
          <img src={Squad2} alt='squad-alt' />
        </div>
        <div className={classes.Divs}>
          <div className={classes.Over}></div>
          <div className={classes.PostBox}>
            <div className={classes.PostBoxInfo}>
              <span>2020-08-10</span>
              <h3>
                Regera Caption Contest:Second Run <br /> [WINNER ANNOUNCEMENT]
              </h3>
            </div>
          </div>
          <img src={SquadAlien} alt='squad-alt' />
        </div>
        <div className={classes.Divs}>
          <div className={classes.Over}></div>
          <div className={classes.PostBox}>
            <div className={classes.PostBoxInfo}>
              <span>2020-06-29</span>
              <h3>Koenigsegg Pop-Up Store</h3>
            </div>
          </div>
          <img src={Squad4} alt='squad-alt' />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
