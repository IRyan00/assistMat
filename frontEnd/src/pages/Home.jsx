import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import { FaArrowDown } from "react-icons/fa";
import StaticAbout from "../components/StaticAbout";
import Fquestions from "../components/Fquestions";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio - Accueil";
  }, []);

  return (
    <>
      <Carousel />

      <h1 className="text-center my-5 bg-white display-4 py-5">
        {" "}
        <a href="#presentation" className="text-dark">
          <FaArrowDown size={24} />
        </a>
      </h1>

      <StaticAbout />

      <hr className="my-5 col-10 mx-auto" />

      <Fquestions />

      <div className="justify-content-center"></div>
    </>
  );
};

export default Home;
