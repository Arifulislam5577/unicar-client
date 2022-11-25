import React from "react";
import AboutUs from "./AboutUs";
import AdvertisedMent from "./AdvertisedMent";
import Category from "./Category";
import Featured from "./Featured";
import Hero from "./Hero";

const Home = () => {
  return (
    <section>
      <Hero />
      <Featured />
      <AdvertisedMent />
      <Category />
      <AboutUs />
    </section>
  );
};

export default Home;
