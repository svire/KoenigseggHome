import React from "react";
import classes from "./LatestNews.module.css";
import Squad from "../../../slibe/koen/squad.jpg";
import Squad2 from "../../../slibe/koen/squad2.jpg";
import SquadAlien from "../../../slibe/koen/squadalien.png";
import Squad4 from "../../../slibe/koen/squad4.jpg";

import News from "./News/News";
const LatestNews = (props) => {
  return (
    <div className={classes.LatestNews}>
      <h2>LATEST NEWS POSTS</h2>
      <div className={classes.News}>
        <News
          imagesrc={Squad}
          date='2020-04-22'
          head='Gallery:The koenigsegg Squad on the Track'
        />
        <News
          imagesrc={Squad2}
          date='2020-09-22'
          head='Highlights from Ghost Squadron Tour 2020'
        />

        <News
          imagesrc={SquadAlien}
          date='2020-08-10'
          head='Regera Caption Contest:Second Run <br /> [WINNER ANNOUNCEMENT]'
        />
        <News
          imagesrc={Squad4}
          date='2020-06-29'
          head='Koenigsegg Pop-Up Store'
        />
      </div>
    </div>
  );
};

export default LatestNews;
