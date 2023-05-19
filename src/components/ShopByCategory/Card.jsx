import React from "react";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "aos/dist/aos.css";

const Card = () => {
  const navigate = useNavigate();

  const viewDetailHandler = () => {
    navigate(`/toy/11`);
  };

  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src="https://i.pinimg.com/564x/73/f4/17/73f4173669b1121d43df4facd4e9f7b0.jpg"
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <StarRatings
            rating={3}
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            starRatedColor="#F9B233"
          />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            3
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <button
            onClick={viewDetailHandler}
            className="text-white bg-[#EA6067] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
