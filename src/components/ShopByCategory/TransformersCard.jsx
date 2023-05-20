import React from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

const TransformersCard = ({ transformersToys }) => {
  const navigate = useNavigate();
  const { _id, name, imageURL, price, rating } = transformersToys;

  const viewDetailHandler = (id) => {
    navigate(`/toy/${id}`);
  };
  return (
    <div
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <a href="#">
        <img
          className="p-6 h-96 mx-auto rounded-t-lg"
          src={imageURL}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <StarRatings
            rating={rating}
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            starRatedColor="#F9B233"
          />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">${price}</span>
          <button
            onClick={() => viewDetailHandler(_id)}
            className="text-white bg-[#EA6067] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformersCard;
