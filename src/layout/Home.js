import React, {Fragment} from "react";
import banner from "../assets/banner.png";

const Home = () => (
  <Fragment>
    <div className="flex justify-center">
      <img className="p-5" src={banner} alt="Welcome to Get It! The #1 e-commerce site for all your shopping needs! Spot it, add it, get it!"/>
    </div>
  </Fragment>
);

export default Home;