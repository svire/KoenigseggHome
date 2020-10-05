import React, {useState} from "react";
import "./Cars.css";
import Sliba1 from "../../slibe/koen/1.jpg";
import Sliba2 from "../../slibe/koen/2.jpg";
import Sliba3 from "../../slibe/koen/3.jpg";
import Sliba4 from "../../slibe/koen/4.jpg";
import Sliba5 from "../../slibe/koen/5.jpg";
import Sliba6 from "../../slibe/koen/6.jpg";
function Cars(props) {
  return (
    <div>
      <div className='CarsContainer'>
        <h1 style={{textAlign: "center"}}>I n s t a g r a m</h1>
        <div className='ImageContainer'>
          <div className='Img'>
            <img src={Sliba1} />
          </div>
          <div className='Img'>
            <img src={Sliba2} />
          </div>
          <div className='Img'>
            <img src={Sliba3} />
          </div>
          <div className='Img'>
            <img src={Sliba4} />
          </div>
          <div className='Img'>
            <img src={Sliba5} />
          </div>
          <div className='Img'>
            <img src={Sliba6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
