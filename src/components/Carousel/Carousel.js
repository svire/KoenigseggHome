import React, {useState, useEffect} from "react";
import classes from "./Carousel.module.css";
import Jesko1 from "../../slibe/koen/slide-jesko-absolut.jpg";
import Gemera from "../../slibe/koen/slide-gemera.jpg";
import ButtonCircle from "../UI/Buttons/ButtonCircle/ButtonCircle";
import Regera from "../../slibe/koen/slide-regera.jpg";
import Anno from "../../slibe/koen/slide-anno.jpg";
import ButtonTr from "../UI/Buttons/ButtonTransparent/ButtonTr";
const Carousel = () => {
  const carousel_array = [
    {
      car: Gemera,
      alt: "gemera-slide",
      hone: "THE GEMERA",
      htwo: "THE WORLD'S FIRST MEGA GT AND KOENIGSEGG FIRST FOR FOUR",
      style: {
        top: "5%",
        left: "20%",
      },
      button: "Experience",
    },
    {
      car: Jesko1,
      alt: "jesko-slide",
      hone: "THE JESKO ABSOLUT",
      htwo: "THE FASTEST KOENIGSEGG EVER - FOREVER",
      style: {
        top: "20%",
        left: "50%",
      },
      button: "Experience",
    },

    {
      car: Regera,
      alt: "regera-slide",
      hone: "THE REGERA",
      htwo: "THE MOST POTENT 800V ANIMAL WITH A ROUR OUT THERE",
      style: {
        top: "28%",
        left: "17%",
      },
      button: "Experience",
    },
    {
      car: Anno,
      alt: "anno-slide",
      hone: "ONLINE EVENT FROM GENEVA",
      htwo: " ",
      style: {
        top: "65%",
        left: "30%",
      },
      button: "Watch it",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === 3) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const change_item = (direction) => {
    if (direction === "left") {
      if (current === 0) {
        setCurrent(3);
      } else {
        setCurrent(current - 1);
      }
    } else {
      if (current === 3) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <div className={classes.CarouselContainer}>
      <div className={classes.CarouselImageCont}>
        <img
          className={classes.CarouselImage}
          src={carousel_array[current].car}
          alt={carousel_array[current].alt}
        />
      </div>
      <div
        className={classes.CarouselText}
        style={carousel_array[current].style}
      >
        <h1>{carousel_array[current].hone}</h1>
        <h3>{carousel_array[current].htwo}</h3>
      </div>
      <div className={classes.CarouselNav}>
        <ButtonCircle navigate={change_item} direction='left'>
          <i class='fa fa-chevron-left'></i>
        </ButtonCircle>
        <ButtonCircle navigate={change_item} direction='right'>
          <i class='fa fa-chevron-right'></i>
        </ButtonCircle>
      </div>
      <div className={classes.CarouselBottom}>
        <div className={classes.CarouselButton}>
          <ButtonTr>{carousel_array[current].button}</ButtonTr>
        </div>
        <div className={classes.CarouselBullets}>
          <div
            onClick={() => setCurrent(0)}
            className={current === 0 ? classes.BulletActive : classes.Bullet}
          ></div>
          <div
            onClick={() => setCurrent(1)}
            className={current === 1 ? classes.BulletActive : classes.Bullet}
          ></div>
          <div
            onClick={() => setCurrent(2)}
            className={current === 2 ? classes.BulletActive : classes.Bullet}
          ></div>
          <div
            onClick={() => setCurrent(3)}
            className={current === 3 ? classes.BulletActive : classes.Bullet}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
