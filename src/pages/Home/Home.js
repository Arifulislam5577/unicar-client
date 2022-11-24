import React from "react";
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
    </section>
  );
};

export default Home;
