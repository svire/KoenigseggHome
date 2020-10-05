import React from "react";
import "./Grid.css";
//import Nav from "../UI/Nav/Nav"; //umjesto Nav da ide layout <Nav />
import Cars from "../Cars/Cars";
import Layout from "../Layout/Layout";
import Carousel from "../Carousel/Carousel";
import CarsInfo from "../CarsInfo/CarsInfo";
//import LatestNews from "../LatestNews/LatestNews"; //. sidebar empty area
import Footer from "../UI/Footer/Footer";
import LatestNews from "../LatestNews/LatestNews2/LatestNews";
function GridTemplate(props) {
  return (
    <div className='Container'>
      <header className='Header'>
        <Layout />
      </header>

      <div className='Second'>
        <Carousel />
        <CarsInfo />
        <LatestNews />
        <Cars />
      </div>
      <footer className='Footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default GridTemplate;
