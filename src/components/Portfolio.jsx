import React from "react";
import dictionaryApp from "../assets/portfolio/dictionaryapp.png";
import huntYoRecipe from "../assets/portfolio/HuntYoRecipe.png";
import splashBanner from "../assets/portfolio/SplashBanner.png";
import figmaDesign from "../assets/portfolio/FigmaDesign.png";
import WireframePSD from "../assets/portfolio/WireframePSD.png";
import rentAPlace from "../assets/portfolio/RentAPlace.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dictionaryApp,
      heading: "Dictionary App",
    },
    {
      id: 2,
      src: huntYoRecipe,
      heading: "Hunt Yo Recipe"
    },
    {
      id: 3,
      src: splashBanner,
      heading: " Illustrator Splash Banner"
    },
    {
      id: 4,
      src: figmaDesign,
      heading: "Design using Figma"
    },
    {
      id: 5,
      src: WireframePSD,
      heading: "Wireframe using PS"
    },
    {
      id: 6,
      src: rentAPlace,
      heading: "Rent A Place"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, heading }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h2 className=" flex items-center justify-center pt-2">{heading}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
