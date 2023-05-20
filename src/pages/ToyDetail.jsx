import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import StarRatings from "react-star-ratings";
import Spinner from "../components/Loading/Spinner";
import { useAuthProvider } from "../context/AuthProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

const ToyDetail = () => {
  const { apiLinkPrefix } = useAuthProvider();
  const [toy, setToy] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiLinkPrefix}toy/${id}`).then((res) => {
      console.log(res.data);
      setToy(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <Helmet>
        <title>Epic Hero Heaven | Toy Detail</title>
      </Helmet>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="e-commerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-5"
            src={toy.imageURL}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h3 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {toy.name}
            </h3>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarRatings
                  rating={toy.rating}
                  starDimension="20px"
                  starSpacing="2px"
                  numberOfStars={5}
                  starRatedColor="#EA6067"
                />
                <span className="text-gray-600 ml-3">{toy.rating} Reviews</span>
              </span>
            </div>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Seller name: {toy.seller.name}
            </p>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Seller email: {toy.seller.email}
            </p>
            <p className="text-gray-900 mb-2 text-lg title-font font-medium">
              <span>&#10070;</span> Quantity: {toy.quantity}
            </p>
            <p className="leading-relaxed">{toy.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${toy.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetail;
