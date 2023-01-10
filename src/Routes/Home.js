import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import MyDetail from "../Components/AboutSection/MyDetail";
import Work from "../Components/Work/Work";
import Learning from "../Components/Learning/Learning";
import Reach from "../Components/Reach/Reach";
// import Loading from "../Components/Loading Page/Loading";

const Home = () => {
  return (
    <div>
      {/* <Loading /> */}
      <Navbar />
      <Hero />
      <MyDetail />
      <Work />
      <Learning />
      <Reach />
    </div>
  );
};
export default Home;
