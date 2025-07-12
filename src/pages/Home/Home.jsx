import React from "react";
import "./Home.css";
import Navbar from "../../componects/Navbar/Navbar";
import herobanner from "../../assets/hero_banner.jpg";
import herotitle from "../../assets/hero_title.png";
import info from "../../assets/info_icon.png";
import play from "../../assets/play_icon.png";
import Titlecard from "../../componects/Titlecards/Titlecard";
import Footer from "../../componects/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={herobanner} alt="" className="banner" />
        <div className="hero-caption">
          <img src={herotitle} alt="" className="title" />
          <p>
           Discovering his ties to a secret ancient order, a young man living in mordern Istanbul embarks on a quest to save the city from an immortal enemy
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play} alt="" />
              Play
            </button>
            <button className="btn dark-btn ">
              <img src={info} alt="" />
              More Info
            </button>
          </div>
          <Titlecard category={"now_playing"}/>
        </div>
        
      </div>
      <div className="more-cards">
          <Titlecard category={'top_rated'} title={'Blockbuster Movies'}/>
          <Titlecard category={'popular'} title={'Only on Netflix'}/>
          <Titlecard category={'upcoming'} title={'Upcoming'} />
          {/* <Titlecard category={'Top picks for you'}/> */}
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
