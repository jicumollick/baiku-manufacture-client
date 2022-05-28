import React from "react";
import Banner from "./Banner";
import BikeParts from "./BikeParts";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BikeParts></BikeParts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default Home;
